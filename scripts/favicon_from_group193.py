"""Regenerate all favicon variants from Group 193.png."""
import sys
from pathlib import Path
from PIL import Image, ImageFilter

sys.stdout.reconfigure(encoding='utf-8')

ROOT = Path(__file__).resolve().parent.parent
SRC = Path(r'C:\Users\Kenessary\Downloads\Group 193.png')
PUBLIC = ROOT / 'public'
APP = ROOT / 'app'


def trim_to_content(img: Image.Image, padding_pct: float = 0.04) -> Image.Image:
    """Crop transparent / pure-white border, then re-pad as a square."""
    rgba = img.convert('RGBA')
    # Treat near-white pixels as background.
    r, g, b, a = rgba.split()
    rgb = Image.merge('RGB', (r, g, b))
    bg = Image.new('RGB', rgba.size, (255, 255, 255))
    diff = Image.eval(
        Image.new('L', rgba.size, 0), lambda _: 0
    )
    # Build a mask: pixels darker than ~245 OR transparent.
    gray = rgb.convert('L')
    mask_dark = gray.point(lambda p: 255 if p < 245 else 0)
    mask_alpha = a.point(lambda p: 255 if p < 250 else 0)
    mask = Image.eval(mask_dark, lambda p: p)
    mask.paste(mask_alpha, (0, 0), mask_alpha)
    bbox = mask.getbbox()
    if bbox:
        rgba = rgba.crop(bbox)
    # Square the canvas with white background + small padding.
    w, h = rgba.size
    side = max(w, h)
    pad = int(side * padding_pct)
    side += pad * 2
    canvas = Image.new('RGBA', (side, side), (255, 255, 255, 255))
    canvas.paste(rgba, ((side - w) // 2, (side - h) // 2), rgba)
    return canvas


def resize_clean(img: Image.Image, size: int) -> Image.Image:
    return img.resize((size, size), Image.LANCZOS)


def resize_stroke_preserved(img: Image.Image, size: int) -> Image.Image:
    """For tiny sizes, threshold + dilate so the underline survives."""
    big = img.resize((size * 4, size * 4), Image.LANCZOS).convert('L')
    # Slight dilation so thin strokes don't get killed by downsampling.
    dilated = big.filter(ImageFilter.MinFilter(3))
    small = dilated.resize((size, size), Image.LANCZOS)
    # Threshold to keep strokes crisp.
    bw = small.point(lambda p: 0 if p < 180 else 255).convert('L')
    out = Image.new('RGBA', (size, size), (255, 255, 255, 255))
    black = Image.new('RGBA', (size, size), (10, 10, 10, 255))
    mask = bw.point(lambda p: 255 if p < 128 else 0)
    out.paste(black, (0, 0), mask)
    return out


def main() -> None:
    src = Image.open(SRC)
    print(f'Source: {SRC} ({src.size[0]}x{src.size[1]})')
    base = trim_to_content(src)
    print(f'Trimmed: {base.size[0]}x{base.size[1]}')

    # All sizes — plain high-quality LANCZOS resize.
    for size, path in [
        (16, PUBLIC / 'favicon-16x16.png'),
        (32, PUBLIC / 'favicon-32x32.png'),
        (180, APP / 'apple-icon.png'),
        (192, PUBLIC / 'android-chrome-192x192.png'),
        (512, PUBLIC / 'android-chrome-512x512.png'),
    ]:
        out = resize_clean(base, size)
        out.save(path, 'PNG', optimize=True)
        print(f'  wrote {path.name}  {size}x{size}  {path.stat().st_size}b')

    # Multi-size .ico (browsers pick best). Build by hand so each size is
    # a real PNG-encoded layer, not a BMP-collapsed pile.
    import io, struct
    ico_path = PUBLIC / 'favicon.ico'
    sizes = [16, 32, 48]
    layers = []
    for s in sizes:
        img = resize_clean(base, s)
        buf = io.BytesIO()
        img.save(buf, 'PNG', optimize=True)
        layers.append((s, buf.getvalue()))

    header = struct.pack('<HHH', 0, 1, len(layers))
    body = b''
    offset = 6 + 16 * len(layers)
    entries = b''
    for s, data in layers:
        w = h = 0 if s >= 256 else s
        entries += struct.pack(
            '<BBBBHHII', w, h, 0, 0, 1, 32, len(data), offset
        )
        offset += len(data)
        body += data
    ico_path.write_bytes(header + entries + body)
    print(f'  wrote {ico_path.name}  {sizes}  {ico_path.stat().st_size}b')


if __name__ == '__main__':
    main()
