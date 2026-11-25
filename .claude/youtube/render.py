"""Render a Strand myth-check Short: 1080x1920, 30fps, frames piped to ffmpeg."""
import json, math, subprocess, sys
from PIL import Image, ImageDraw, ImageFont

W, H, FPS = 1080, 1920, 30
F = '/home/user/strandhair/fonts/'
CREAM, PAPER, SAND = (250, 247, 242), (245, 240, 232), (232, 221, 208)
ESP, CAR, CART, MOCHA, MUTED = (61, 43, 31), (196, 148, 90), (139, 94, 26), (122, 88, 72), (107, 91, 83)
RED, GREEN, BLUE = (168, 58, 42), (74, 124, 95), (70, 120, 170)

_fc = {}
def font(kind, size, w='Bold'):
    k = (kind, size, w)
    if k not in _fc:
        if kind == 'serif':
            f = ImageFont.truetype(F + 'cormorant-normal.ttf', size); f.set_variation_by_name(w)
        elif kind == 'serif-i':
            f = ImageFont.truetype(F + 'cormorant-italic.ttf', size)
            try: f.set_variation_by_name(w)
            except Exception: pass
        elif kind == 'mono':
            f = ImageFont.truetype('/usr/share/fonts/truetype/jetbrains-mono/JetBrainsMono-%s.ttf' % ('Bold' if w == 'Bold' else 'Regular'), size)
        else:
            f = ImageFont.truetype(F + 'dm-sans.ttf', size); f.set_variation_by_name(w)
        _fc[k] = f
    return _fc[k]

def ease(x):
    x = max(0.0, min(1.0, x)); return 1 - (1 - x) ** 3

def wrap(d, text, f, maxw):
    out, cur = [], ''
    for word in text.split():
        t = (cur + ' ' + word).strip()
        if d.textlength(t, font=f) <= maxw: cur = t
        else: out.append(cur); cur = word
    if cur: out.append(cur)
    return out

def ctext(d, y, text, f, fill, maxw=900, gap=1.08, alpha=1.0, dx=0):
    lines = wrap(d, text, f, maxw)
    lh = f.size * gap
    for i, l in enumerate(lines):
        w = d.textlength(l, font=f)
        d.text(((W - w) / 2 + dx, y + i * lh), l, font=f, fill=fill)
    return y + len(lines) * lh

# ---------- scene drawing ----------
def stamp(img, text, cx, cy, p, color=RED, size=64, angle=-8):
    if p <= 0: return
    s = 1.6 - 0.6 * ease(p * 2.5)
    f = font('mono', size, 'Bold')
    tmp = Image.new('RGBA', (900, 260), (0, 0, 0, 0)); d = ImageDraw.Draw(tmp)
    tw = d.textlength(text, font=f); bw = tw + 70; bh = size + 60
    x0 = (900 - bw) / 2; y0 = (260 - bh) / 2
    a = int(255 * min(1, p * 4))
    d.rounded_rectangle([x0, y0, x0 + bw, y0 + bh], 14, outline=color + (a,), width=8)
    d.text((x0 + 35, y0 + 22), text, font=f, fill=color + (a,))
    tmp = tmp.rotate(angle, resample=Image.BICUBIC, expand=True)
    tmp = tmp.resize((int(tmp.width * s), int(tmp.height * s)), Image.BICUBIC)
    img.alpha_composite(tmp, (int(cx - tmp.width / 2), int(cy - tmp.height / 2)))

def scene(img, d, sc, p, T):
    k = sc['kind']; top = 330
    if k == 'statement':
        if sc.get('label'):
            f = font('mono', 34, 'Bold'); w = d.textlength(sc['label'], font=f)
            d.rounded_rectangle([(W - w) / 2 - 24, top - 10, (W + w) / 2 + 24, top + 50], 30, fill=ESP)
            d.text(((W - w) / 2, top), sc['label'], font=f, fill=CREAM)
        y = top + 110 + 40 * (1 - ease(p * 3))
        y = ctext(d, y, sc['text'], font('serif', sc.get('size', 112), 'Bold'), ESP, 920, 1.0)
        if sc.get('sub'):
            ctext(d, y + 30, sc['sub'], font('serif-i', 58, 'Medium'), CART, 900)
        if sc.get('stamp'):
            stamp(img, sc['stamp'], W / 2, sc.get('sy', 1080), (T - sc.get('st', 0.5)) / 1.0, sc.get('sc', RED) if isinstance(sc.get('sc', RED), tuple) else tuple(sc['sc']))
    elif k == 'ledger':
        f = font('mono', 34, 'Bold')
        d.text((90, top), sc['title'], font=f, fill=CART)
        d.line([90, top + 60, W - 90, top + 60], fill=ESP, width=4)
        y = top + 100
        for i, row in enumerate(sc['rows']):
            a = ease((T - sc.get('lag', 0.35) * i) * 3)
            if a <= 0: break
            off = 60 * (1 - a)
            key, val = row[0], row[1]
            col = {'ok': GREEN, 'no': RED, 'q': CART}.get(row[2] if len(row) > 2 else '', ESP)
            fk = font('sans', 46, 'Medium'); fv = font('sans', 52, 'Bold')
            kl = wrap(d, key, fk, 560)
            for j, l in enumerate(kl):
                d.text((90 + off, y + j * 56), l, font=fk, fill=MUTED)
            vw = d.textlength(val, font=fv)
            d.text((W - 90 - vw + off, y), val, font=fv, fill=col)
            y += max(len(kl), 1) * 56 + 40
            d.line([90, y - 22, W - 90, y - 22], fill=SAND, width=3)
    elif k == 'bars':
        d.text((90, top), sc['title'], font=font('mono', 34, 'Bold'), fill=CART)
        maxv = max(b[1] for b in sc['bars']); y = top + 130
        for i, (lab, v, txt) in enumerate(sc['bars']):
            g = ease((T - 0.5 * i) * 1.2)
            d.text((90, y), lab, font=font('sans', 46, 'Medium'), fill=MUTED)
            bw = (W - 180) * v / maxv * g
            col = RED if i else MOCHA
            d.rounded_rectangle([90, y + 70, 90 + max(bw, 4), y + 200], 18, fill=col)
            if g > 0.6:
                d.text((110, y + 95), txt, font=font('sans', 64, 'Bold'), fill=CREAM)
            y += 290
    elif k == 'cal':
        d.text((90, top), sc['title'], font=font('mono', 34, 'Bold'), fill=CART)
        for col, (lab, n) in enumerate([(sc['a'], 1), (sc['b'], 7)]):
            x0 = 120 + col * 450; y0 = top + 120
            d.text((x0, y0), lab, font=font('serif', 84, 'Bold'), fill=ESP)
            for i in range(7):
                g = ease((T - 0.12 * i - 0.4 * col) * 4)
                r = 26; cx = x0 + 30 + (i % 4) * 90; cy = y0 + 200 + (i // 4) * 90
                filled = i < n
                if g > 0:
                    rr = r * g
                    d.ellipse([cx - rr, cy - rr, cx + rr, cy + rr], fill=(BLUE if filled else None), outline=SAND if not filled else BLUE, width=5)
            d.text((x0, y0 + 400), 'washes / week', font=font('sans', 38, 'Medium'), fill=MUTED)
    elif k == 'glass':
        cx, cy = W / 2, 760
        d.text(((W - d.textlength(sc['title'], font=font('mono', 34, 'Bold'))) / 2, top), sc['title'], font=font('mono', 34, 'Bold'), fill=CART)
        gx0, gx1, gy0, gy1 = cx - 200, cx + 200, cy - 300, cy + 280
        d.rectangle([gx0 + 8, cy - 140, gx1 - 8, gy1 - 8], fill=(214, 230, 240))
        d.line([gx0, gy0, gx0 + 20, gy1], fill=ESP, width=8); d.line([gx1, gy0, gx1 - 20, gy1], fill=ESP, width=8)
        d.line([gx0 + 20, gy1, gx1 - 20, gy1], fill=ESP, width=8)
        bob = 10 * math.sin(T * 3)
        pts = [(cx - 150 + i * 6, cy - 150 + bob + 14 * math.sin(i / 3 + T * 2)) for i in range(51)]
        d.line(pts, fill=ESP, width=7, joint='curve')
        if sc.get('x'):
            g = ease((T - sc.get('xt', 0)) * 3)
            if g > 0:
                L = 210 * g
                d.line([cx - L, cy - L, cx + L, cy + L], fill=RED, width=26)
                d.line([cx + L, cy - L, cx - L, cy + L], fill=RED, width=26)
        if sc.get('stamp'):
            stamp(img, sc['stamp'], W / 2, 1100, (T - sc.get('st', 0.3)) / 1.0)
    elif k == 'chips':
        y = ctext(d, top + 20, sc['text'], font('serif', 96, 'Bold'), ESP, 920)
        f = font('sans', 60, 'Bold'); x = 90; y += 80
        for i, (lab, col) in enumerate(sc['chips']):
            g = ease((T - 0.35 * i) * 3)
            if g <= 0: continue
            w = d.textlength(lab, font=f) + 80
            d.rounded_rectangle([x, y + 40 * (1 - g), x + w, y + 120 + 40 * (1 - g)], 60, fill=tuple(col))
            d.text((x + 40, y + 22 + 40 * (1 - g)), lab, font=f, fill=CREAM)
            x += w + 30
            if x > W - 300: x = 90; y += 160
    elif k == 'film':  # hair cross-section with water dots, optional oil ring
        cx, cy, R = W / 2, 690, 240
        d.text(((W - d.textlength(sc['title'], font=font('mono', 34, 'Bold'))) / 2, top), sc['title'], font=font('mono', 34, 'Bold'), fill=CART)
        d.ellipse([cx - R, cy - R, cx + R, cy + R], fill=SAND, outline=MOCHA, width=6)
        ring = (1 if sc.get('out') else ease((T - 0.3) * 2)) if sc.get('oil') else 0
        if ring > 0:
            w = int(34 * ring)
            d.ellipse([cx - R - w, cy - R - w, cx + R + w, cy + R + w], outline=CAR, width=w)
        n = 14
        for i in range(n):
            ang = i * 2 * math.pi / n + 0.4
            phase = (T * (0.25 if sc.get('oil') else 0.6) + i * 0.37) % 1
            if sc.get('out'):
                r = R * 0.55 + (R + 120) * phase * 0.5
            else:
                r = R + 110 - (R + 10) * phase * (0.45 if sc.get('oil') else 1)
            x = cx + r * math.cos(ang); yy = cy + r * math.sin(ang)
            d.ellipse([x - 14, yy - 14, x + 14, yy + 14], fill=BLUE)
        lab = sc.get('lab')
        if lab:
            ctext(d, cy + R + 125, lab, font('sans', 50, 'Bold'), ESP, 900)
    elif k == 'drop':
        cx, cy = W / 2, 660; g = ease(T * 3); s = 0.6 + 0.4 * g
        pts = []
        for i in range(60):
            t = i / 59 * 2 * math.pi
            r = 170 * s
            x = cx + r * math.sin(t); y = cy + r * 0.2 - r * math.cos(t) * (1.0 if math.cos(t) < 0 else 1.0)
            pts.append((x, y))
        d.ellipse([cx - 170 * s, cy - 120 * s, cx + 170 * s, cy + 220 * s], fill=BLUE)
        d.polygon([(cx, cy - 330 * s), (cx - 150 * s, cy + 20 * s), (cx + 150 * s, cy + 20 * s)], fill=BLUE)
        ctext(d, cy + 270, sc['text'], font('serif', 130, 'Bold'), ESP, 900)

# ---------- captions ----------
def captions(d, line, t0, t1, T):
    f = font('sans', 62, 'ExtraBold')
    words = line.split(); total = sum(len(w) + 1 for w in words)
    prog = (T - t0) / max(t1 - t0 - 0.15, 0.1)
    acc, cur = 0, len(words) - 1
    for i, w in enumerate(words):
        acc += (len(w) + 1) / total
        if prog < acc: cur = i; break
    lines = wrap(d, line, f, 880)
    if len(lines) > 3:
        f = font('sans', 52, 'ExtraBold'); lines = wrap(d, line, f, 900)
    y = 1150 if len(lines) > 3 else (1140 if len(lines) > 2 else 1200); idx = 0
    lh = 70 if len(lines) > 3 else 88
    for l in lines:
        ws = l.split(); x = (W - d.textlength(l, font=f)) / 2
        for w in ws:
            ww = d.textlength(w, font=f)
            if idx == cur:
                d.rounded_rectangle([x - 12, y - 4, x + ww + 12, y + f.size * 1.26], 14, fill=CAR)
                d.text((x, y), w, font=f, fill=ESP)
            else:
                d.text((x, y), w, font=f, fill=ESP if idx < cur else MUTED)
            x += ww + d.textlength(' ', font=f); idx += 1
        y += lh

def frame(v, T, dur):
    img = Image.new('RGBA', (W, H), CREAM + (255,)); d = ImageDraw.Draw(img)
    # paper texture lines
    for yy in range(250, 1300, 64): d.line([60, yy, W - 60, yy], fill=PAPER, width=2)
    # header + progress bar
    d.rectangle([0, 0, W, 14], fill=SAND); d.rectangle([0, 0, W * T / dur, 14], fill=CAR)
    d.text((90, 140), 'STRAND', font=font('serif', 60, 'Bold'), fill=ESP)
    hdr = v['tag']; fm = font('mono', 30, 'Bold')
    d.text((W - 90 - d.textlength(hdr, font=fm), 160), hdr, font=fm, fill=CART)
    d.line([90, 225, W - 90, 225], fill=ESP, width=3)
    t = v['t']; li = max(i for i in range(len(v['lines'])) if t[i] <= T + 1e-6) if T < t[-1] else len(v['lines']) - 1
    sc = None
    for s in v['scenes']:
        if s['from'] <= li: sc = s
    st = t[sc['from']]
    scene(img, d, sc, (T - st) / 0.9, T - st)
    captions(d, v['lines'][li], t[li], t[li + 1], T)
    # source footer, above the Shorts UI safe zone
    fs = font('mono', 28, 'Regular')
    src = v['source']
    d.line([90, 1440, W - 90, 1440], fill=SAND, width=3)
    for i, l in enumerate(wrap(d, src, fs, 880)):
        d.text((90, 1460 + i * 40), l, font=fs, fill=MUTED)
    return img.convert('RGB')

def render(key, out):
    v = json.load(open('scripts.json'))[key]
    spec = json.load(open('scenes.json'))[key]; v.update(spec)
    dur = v['t'][-1] + 0.6
    n = int(dur * FPS)
    p = subprocess.Popen(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{W}x{H}', '-r', str(FPS), '-i', '-',
                          '-i', f'{key}.mp3', '-i', 'music.mp3',
                          '-filter_complex', f'[2:a]volume=0.10,afade=t=out:st={dur-1.2}:d=1.2[m];[1:a]apad[v];[v][m]amix=inputs=2:duration=first:normalize=0[a]',
                          '-map', '0:v', '-map', '[a]', '-t', str(dur), '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '19', '-preset', 'medium',
                          '-c:a', 'aac', '-b:a', '192k', '-movflags', '+faststart', out], stdin=subprocess.PIPE)
    for i in range(n):
        p.stdin.write(frame(v, i / FPS, dur).tobytes())
    p.stdin.close(); p.wait()
    frame(v, 0.0, dur).save(f'{key}-first.png')

if __name__ == '__main__':
    import os
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    if sys.argv[1] == 'still':
        key, T = sys.argv[2], float(sys.argv[3])
        v = json.load(open('scripts.json'))[key]; v.update(json.load(open('scenes.json'))[key])
        frame(v, T, v['t'][-1] + 0.6).save(f'still-{key}-{T}.png')
    else:
        render(sys.argv[1], sys.argv[1] + '.mp4')
