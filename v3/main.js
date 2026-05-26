/* ── Sticky Nav ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 16);
}, { passive: true });

/* ── Mobile Menu ── */
const toggle = document.getElementById('navToggle');
toggle.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.nav-links a, .nav-cta').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

/* ── Smooth Anchor Scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 68;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── Scroll Reveal ── */
const revealOpts = { threshold: 0.12, rootMargin: '0px 0px -48px 0px' };

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, revealOpts);

document.querySelectorAll('.reveal, .stagger').forEach(el => observer.observe(el));

/* ── Add reveal classes to sections at runtime ── */
const sections = [
  '.services .section-top',
  '.services-grid',
  '.work .section-top',
  '.cases .case-card',
  '.map-head',
  '.about-inner',
  '.contact-inner',
];
sections.forEach(sel => {
  document.querySelectorAll(sel).forEach(el => el.classList.add('reveal'));
});
document.querySelector('.services-grid')?.classList.add('stagger');

/* ── Re-observe after adding classes ── */
document.querySelectorAll('.reveal, .stagger').forEach(el => {
  if (!el.classList.contains('visible')) observer.observe(el);
});

/* ── World Map — Natural Earth projection ── */
(async function initMap() {
  const canvas = document.getElementById('worldMap');
  if (!canvas) return;

  const ctx  = canvas.getContext('2d');
  const dpr  = Math.min(window.devicePixelRatio || 1, 2);

  // ISO 3166-1 numeric: US, UK, Germany, Netherlands, Spain
  const WORKED = new Set([840, 826, 276, 528, 724]);

  const C_OCEAN  = '#f8f7f4';
  const C_LAND   = '#0d0d0d';
  const C_WORKED = '#3a7d52';

  let features = null;
  let tx = 0, ty = 0, sc = 1;

  // Natural Earth projection (Tom Patterson / D3 coefficients).
  // Unlike Mercator it covers the full globe (±90°) without polar stretch.
  function naturalEarth(lambda, phi) {
    const phi2 = phi * phi, phi4 = phi2 * phi2;
    return [
      lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4))),
      phi    * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)))
    ];
  }

  // Bounding box of Natural Earth at ±180°/±90°
  const X_MAX = Math.PI * 0.8707;  // ≈ 2.736
  const Y_MAX = 1.4222;             // at ±90° latitude
  const Y_BOT = -1.20;              // ≈ -70°S — crops Antarctic whitespace

  function resize() {
    const cssW = canvas.parentElement.clientWidth;
    // Height covers from +Y_MAX (north pole) down to Y_BOT (southern crop)
    const projH = Y_MAX - Y_BOT;
    const cssH  = Math.round(cssW * projH / (2 * X_MAX));
    canvas.width        = cssW * dpr;
    canvas.height       = cssH * dpr;
    canvas.style.width  = cssW + 'px';
    canvas.style.height = cssH + 'px';

    sc = (cssW / (2 * X_MAX)) * dpr;  // scale to fill width exactly
    tx = (cssW / 2) * dpr;
    ty = Y_MAX * sc;                   // top of canvas = north pole

    if (features) draw();
  }

  function project(lon, lat) {
    const [nx, ny] = naturalEarth(lon * Math.PI / 180, lat * Math.PI / 180);
    return [tx + nx * sc, ty - ny * sc];
  }

  // Minimal TopoJSON decoder
  function decode(topo) {
    const { scale: s, translate: tr } = topo.transform;
    const arcs = topo.arcs.map(arc => {
      let x = 0, y = 0;
      return arc.map(([dx, dy]) => {
        x += dx; y += dy;
        return [x * s[0] + tr[0], y * s[1] + tr[1]];
      });
    });
    function ring(refs) {
      const pts = [];
      refs.forEach(i => {
        const rev = i < 0;
        const a   = rev ? [...arcs[~i]].reverse() : arcs[i];
        a.forEach((p, j) => { if (j || !pts.length) pts.push(p); });
      });
      return pts;
    }
    function toGeo(g) {
      if (g.type === 'Polygon')
        return { type: 'Polygon', coordinates: g.arcs.map(ring) };
      if (g.type === 'MultiPolygon')
        return { type: 'MultiPolygon', coordinates: g.arcs.map(p => p.map(ring)) };
      return null;
    }
    return topo.objects.countries.geometries.map(g => ({
      id: +g.id, geometry: toGeo(g)
    }));
  }

  // Append geometry rings to the current open path.
  // Longitude is "unwrapped" so the ring stays in a continuous range — no pen
  // lifts, no subpath splits, no wrong closePath destination. Coordinates that
  // project beyond the canvas edge (e.g. Chukotka > 180°) are clipped naturally.
  function appendGeom(geom) {
    const drawRing = coords => {
      if (!coords.length) return;
      let lonOff = 0, prevLon = coords[0][0];
      coords.forEach(([lon, lat], i) => {
        if (i > 0) {
          const d = lon - prevLon;
          if (d > 180) lonOff -= 360;
          else if (d < -180) lonOff += 360;
          prevLon = lon;
        }
        const [x, y] = project(lon + lonOff, lat);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.closePath();
    };
    if (geom.type === 'Polygon') geom.coordinates.forEach(drawRing);
    else geom.coordinates.forEach(p => p.forEach(drawRing));
  }

  function draw() {
    ctx.fillStyle = C_OCEAN;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // All land in one path — shared edges never anti-alias into visible borders
    ctx.beginPath();
    features.forEach(f => { if (f.geometry) appendGeom(f.geometry); });
    ctx.fillStyle = C_LAND;
    ctx.fill();

    // Worked countries overlaid in green
    ctx.beginPath();
    features.forEach(f => { if (f.geometry && WORKED.has(f.id)) appendGeom(f.geometry); });
    ctx.fillStyle = C_WORKED;
    ctx.fill();
  }

  try {
    const res = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
    features  = decode(await res.json());
    resize();
  } catch (e) {
    console.warn('Map load failed:', e);
  }

  window.addEventListener('resize', resize, { passive: true });
})();
