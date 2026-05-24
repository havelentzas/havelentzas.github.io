// ── Custom cursor ──────────────────────────────────────────────────────────────
const cursor     = document.querySelector('.cursor');
const cursorRing = document.querySelector('.cursor-ring');

let mx = 0, my = 0;
let rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

(function trackRing() {
  rx += (mx - rx) * 0.10;
  ry += (my - ry) * 0.10;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top  = ry + 'px';
  requestAnimationFrame(trackRing);
})();

document.querySelectorAll('a, button, .disc-cell, .exp-entry, .loc-item, .edu-item').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('is-hovering'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('is-hovering'));
});


// ── Canvas dot field ────────────────────────────────────────────────────────────
const canvas = document.getElementById('bg-canvas');
const ctx    = canvas.getContext('2d');

const SPACING = 38;
const RADIUS  = 130;

let dots = [];
let dmx  = -9999;
let dmy  = -9999;

function buildDots() {
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  dots = [];
  const cols = Math.ceil(canvas.width  / SPACING) + 1;
  const rows = Math.ceil(canvas.height / SPACING) + 1;
  for (let c = 0; c <= cols; c++) {
    for (let r = 0; r <= rows; r++) {
      dots.push({
        x:     c * SPACING,
        y:     r * SPACING,
        phase: Math.random() * Math.PI * 2,
        spd:   0.2 + Math.random() * 0.35,
      });
    }
  }
}

document.addEventListener('mousemove', e => {
  const rect = canvas.getBoundingClientRect();
  dmx = e.clientX - rect.left;
  dmy = e.clientY - rect.top;
});

(function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const t = Date.now() / 1000;

  for (const d of dots) {
    const dx   = d.x - dmx;
    const dy   = d.y - dmy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const prox = Math.max(0, 1 - dist / RADIUS);

    const pulse   = (Math.sin(t * d.spd + d.phase) + 1) * 0.5;
    const opacity = 0.07 + pulse * 0.05 + prox * 0.45;
    const size    = 1.1 + prox * 2.0;

    ctx.beginPath();
    ctx.arc(d.x, d.y, size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(22, 58, 110, ${opacity})`;
    ctx.fill();
  }

  requestAnimationFrame(draw);
})();

window.addEventListener('resize', buildDots);
buildDots();


// ── Scroll reveal ───────────────────────────────────────────────────────────────
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const delay = parseInt(entry.target.dataset.delay || '0', 10);
    setTimeout(() => entry.target.classList.add('visible'), delay);
    io.unobserve(entry.target);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));


// ── Nav on scroll ───────────────────────────────────────────────────────────────
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(247, 245, 241, 0.9)';
    nav.style.backdropFilter = 'blur(10px)';
  } else {
    nav.style.background = '';
    nav.style.backdropFilter = '';
  }
}, { passive: true });
