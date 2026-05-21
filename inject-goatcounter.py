#!/usr/bin/env python3
import os
import subprocess

SCRIPT = '<script data-goatcounter="https://havelentzas.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>'
SKIP = {'file-tree-content.html'}

root = os.path.dirname(os.path.abspath(__file__))
changed = []

for dirpath, _, filenames in os.walk(root):
    for fn in filenames:
        if not fn.endswith('.html') or fn in SKIP:
            continue
        path = os.path.join(dirpath, fn)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        if 'goatcounter' in content or '</body>' not in content:
            continue
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content.replace('</body>', SCRIPT + '</body>', 1))
        changed.append(path)

if changed:
    subprocess.run(['git', 'add'] + changed, check=True)
    print(f'GoatCounter injected into {len(changed)} file(s):')
    for p in changed:
        print(f'  {os.path.relpath(p, root)}')
