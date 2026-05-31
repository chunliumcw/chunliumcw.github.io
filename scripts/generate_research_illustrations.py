from __future__ import annotations

import math
import random
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets"

SCALE = 2
W, H = 1200, 675
BLACK = "#111111"
SOFT = "#555555"
BLUE = "#2c6f9f"
LIGHT_BLUE = "#dbeef8"
ORANGE = "#c77820"
RED = "#c94545"
TEAL = "#176d64"
LIME = "#d4ff4f"
PINK = "#f2b7c3"
GRAY = "#d8dde1"

FONT_HAND = "/System/Library/Fonts/Supplemental/Bradley Hand Bold.ttf"
FONT_SANS = "/System/Library/Fonts/Supplemental/Arial.ttf"


def font(size: int, hand: bool = True) -> ImageFont.FreeTypeFont:
    path = FONT_HAND if hand and Path(FONT_HAND).exists() else FONT_SANS
    return ImageFont.truetype(path, size * SCALE)


def canvas() -> tuple[Image.Image, ImageDraw.ImageDraw]:
    im = Image.new("RGB", (W * SCALE, H * SCALE), "white")
    return im, ImageDraw.Draw(im)


def xy(p: tuple[float, float]) -> tuple[int, int]:
    return int(round(p[0] * SCALE)), int(round(p[1] * SCALE))


def box(b: tuple[float, float, float, float]) -> tuple[int, int, int, int]:
    return tuple(int(round(v * SCALE)) for v in b)


def line(draw: ImageDraw.ImageDraw, pts, fill=BLACK, width=3, jitter=1.2, reps=2, rng=None):
    rng = rng or random
    for _ in range(reps):
        jittered = [(x + rng.uniform(-jitter, jitter), y + rng.uniform(-jitter, jitter)) for x, y in pts]
        draw.line([xy(p) for p in jittered], fill=fill, width=width * SCALE, joint="curve")


def curve(draw: ImageDraw.ImageDraw, pts, fill=BLACK, width=3, jitter=1.0, rng=None):
    line(draw, pts, fill=fill, width=width, jitter=jitter, reps=2, rng=rng)


def arrow(draw: ImageDraw.ImageDraw, start, end, fill=ORANGE, width=4, rng=None):
    rng = rng or random
    line(draw, [start, end], fill=fill, width=width, jitter=1.0, reps=2, rng=rng)
    sx, sy = start
    ex, ey = end
    ang = math.atan2(ey - sy, ex - sx)
    size = 16
    p1 = (ex, ey)
    p2 = (ex - size * math.cos(ang - 0.45), ey - size * math.sin(ang - 0.45))
    p3 = (ex - size * math.cos(ang + 0.45), ey - size * math.sin(ang + 0.45))
    draw.polygon([xy(p1), xy(p2), xy(p3)], fill=fill)


def text(draw: ImageDraw.ImageDraw, label: str, pos, fill=BLACK, size=30, hand=True, anchor=None):
    draw.text(xy(pos), label, fill=fill, font=font(size, hand), anchor=anchor)


def ellipse(draw: ImageDraw.ImageDraw, b, outline=BLACK, fill=None, width=3):
    draw.ellipse(box(b), outline=outline, fill=fill, width=width * SCALE)


def rect(draw: ImageDraw.ImageDraw, b, outline=BLACK, fill=None, width=3, radius=0):
    if radius:
        draw.rounded_rectangle(box(b), radius=radius * SCALE, outline=outline, fill=fill, width=width * SCALE)
    else:
        draw.rectangle(box(b), outline=outline, fill=fill, width=width * SCALE)


def blob(draw: ImageDraw.ImageDraw, cx, cy, rx, ry, fill=BLACK, outline=None, rng=None, n=28):
    rng = rng or random
    pts = []
    for i in range(n):
        a = (math.pi * 2 * i) / n
        rjx = rx * (1 + rng.uniform(-0.13, 0.11))
        rjy = ry * (1 + rng.uniform(-0.12, 0.14))
        pts.append((cx + math.cos(a) * rjx, cy + math.sin(a) * rjy))
    draw.polygon([xy(p) for p in pts], fill=fill, outline=outline or fill)


def xiaohei(draw: ImageDraw.ImageDraw, cx, cy, scale=1.0, rng=None, arm_to=None):
    rng = rng or random
    rx, ry = 17 * scale, 24 * scale
    blob(draw, cx, cy, rx, ry, fill=BLACK, rng=rng)
    # Eyes.
    ellipse(draw, (cx - 8 * scale, cy - 8 * scale, cx - 3 * scale, cy - 3 * scale), outline="white", fill="white", width=1)
    ellipse(draw, (cx + 4 * scale, cy - 8 * scale, cx + 9 * scale, cy - 3 * scale), outline="white", fill="white", width=1)
    # Legs.
    line(draw, [(cx - 7 * scale, cy + ry - 1), (cx - 12 * scale, cy + ry + 16 * scale)], fill=BLACK, width=max(2, int(2 * scale)), jitter=0.4, reps=1, rng=rng)
    line(draw, [(cx + 6 * scale, cy + ry - 1), (cx + 10 * scale, cy + ry + 16 * scale)], fill=BLACK, width=max(2, int(2 * scale)), jitter=0.4, reps=1, rng=rng)
    if arm_to:
        line(draw, [(cx + rx * 0.6, cy - 2 * scale), arm_to], fill=BLACK, width=max(2, int(2 * scale)), jitter=0.6, reps=1, rng=rng)


def dna(draw: ImageDraw.ImageDraw, x, y, w, h, mutation=False, rng=None):
    rng = rng or random
    line(draw, [(x, y), (x + w, y)], width=4, rng=rng)
    line(draw, [(x, y + h), (x + w, y + h)], width=4, rng=rng)
    for i in range(16):
        xx = x + w * i / 15
        line(draw, [(xx, y), (xx, y + h)], fill=SOFT, width=3, jitter=0.5, reps=1, rng=rng)
    if mutation:
        ellipse(draw, (x + w * 0.46, y - 23, x + w * 0.56, y + 25), outline=RED, fill=RED, width=2)


def scissors(draw: ImageDraw.ImageDraw, x, y):
    ellipse(draw, (x, y, x + 34, y + 34), outline=TEAL, width=3)
    ellipse(draw, (x + 30, y + 18, x + 64, y + 52), outline=TEAL, width=3)
    line(draw, [(x + 32, y + 28), (x + 92, y - 16)], fill=TEAL, width=4)
    line(draw, [(x + 35, y + 31), (x + 98, y + 72)], fill=TEAL, width=4)


def ipsc(draw: ImageDraw.ImageDraw, cx, cy, r=70):
    ellipse(draw, (cx - r, cy - r, cx + r, cy + r), outline=BLUE, fill=LIGHT_BLUE, width=3)
    ellipse(draw, (cx - 35, cy - 33, cx + 38, cy + 38), outline="#a83773", fill="#c56d9e", width=4)
    ellipse(draw, (cx - 19, cy - 16, cx + 26, cy + 32), outline="#d94d8f", fill="#d84b8c", width=2)
    ellipse(draw, (cx + 27, cy - 43, cx + 39, cy - 31), outline="white", fill="white", width=1)
    ellipse(draw, (cx + 43, cy - 35, cx + 53, cy - 25), outline="white", fill="white", width=1)


def petri(draw: ImageDraw.ImageDraw, cx, cy, w, h, fill="#f8bdc8"):
    ellipse(draw, (cx - w / 2, cy - h / 2, cx + w / 2, cy + h / 2), outline="#777777", fill=fill, width=3)
    ellipse(draw, (cx - w / 2 + 18, cy - h / 2 + 10, cx + w / 2 - 18, cy + h / 2 - 10), outline="#e07b92", fill=None, width=2)
    line(draw, [(cx - w / 2, cy), (cx - w / 2 + 32, cy + h / 2 + 22), (cx + w / 2 - 32, cy + h / 2 + 22), (cx + w / 2, cy)], fill="#b2455e", width=3, jitter=0.8)


def draw_cell(draw: ImageDraw.ImageDraw, cx, cy, kind, fill, outline=BLACK):
    if kind == "cardio":
        pts = [(cx - 95, cy + 8), (cx - 62, cy - 18), (cx + 38, cy - 18), (cx + 102, cy - 3), (cx + 68, cy + 18), (cx - 50, cy + 21)]
        draw.polygon([xy(p) for p in pts], fill=fill, outline=outline)
        for yy in range(-14, 18, 9):
            line(draw, [(cx - 75, cy + yy), (cx + 80, cy + yy + 2)], fill="#a64f65", width=2, jitter=1.2)
        ellipse(draw, (cx - 8, cy - 10, cx + 20, cy + 12), outline=RED, fill="#c95d80", width=2)
    elif kind == "endo":
        rect(draw, (cx - 78, cy - 28, cx + 78, cy + 28), outline=outline, fill=fill, width=3, radius=12)
        ellipse(draw, (cx - 12, cy - 10, cx + 18, cy + 11), outline="white", fill="#d4506a", width=2)
    elif kind == "smooth":
        pts = [(cx - 94, cy + 2), (cx - 32, cy - 25), (cx + 89, cy - 5), (cx + 42, cy + 23), (cx - 46, cy + 16)]
        draw.polygon([xy(p) for p in pts], fill=fill, outline=outline)
        ellipse(draw, (cx - 7, cy - 8, cx + 28, cy + 10), outline="white", fill="#db6549", width=2)
    elif kind == "fibro":
        pts = [(cx - 96, cy + 5), (cx - 33, cy - 24), (cx + 88, cy - 20), (cx + 47, cy + 4), (cx + 105, cy + 27), (cx + 12, cy + 18), (cx - 74, cy + 36)]
        draw.polygon([xy(p) for p in pts], fill=fill, outline=outline)
        ellipse(draw, (cx - 8, cy - 7, cx + 28, cy + 9), outline="white", fill="#0f8ca6", width=2)
    else:
        blob(draw, cx, cy, 38, 34, fill=fill, outline=outline)
        ellipse(draw, (cx - 14, cy - 12, cx + 19, cy + 17), outline="#cfe9f6", fill="#0f6d8f", width=2)


def finish(im: Image.Image, name: str):
    out = OUT / name
    im = im.resize((W, H), Image.Resampling.LANCZOS)
    im.save(out, optimize=True)
    return out


def reprogramming():
    rng = random.Random(101)
    im, d = canvas()
    text(d, "patient sample", (72, 96), fill=SOFT, size=26)
    # Patient silhouette and sample tube.
    blob(d, 105, 255, 32, 82, fill="#dbe8f4", outline=BLUE, rng=rng, n=34)
    for s in ["A", "C", "T", "G", "G", "A", "C"]:
        text(d, s, (92 + rng.randint(-8, 10), 190 + rng.randint(0, 132)), fill="#8aa6bb", size=18, hand=False)
    rect(d, (195, 181, 215, 270), outline=SOFT, fill=None, width=2, radius=8)
    rect(d, (193, 175, 218, 188), outline=ORANGE, fill=ORANGE, width=1, radius=3)
    line(d, [(197, 220), (214, 220)], fill=RED, width=5, rng=rng)
    arrow(d, (250, 250), (382, 250), fill=ORANGE, rng=rng)
    ipsc(d, 500, 250, 80)
    text(d, "iPSC", (471, 375), size=34)
    xiaohei(d, 505, 105, scale=1.0, rng=rng, arm_to=(510, 165))
    line(d, [(510, 160), (520, 177), (500, 184)], fill=BLACK, width=2, rng=rng)
    text(d, "quiet reset", (432, 90), fill=BLUE, size=22)
    # Branching valve.
    line(d, [(622, 250), (690, 250), (690, 120)], fill=TEAL, width=4, rng=rng)
    line(d, [(690, 250), (690, 377)], fill=TEAL, width=4, rng=rng)
    for y in [120, 185, 250, 315, 380]:
        arrow(d, (690, y), (790, y), fill=TEAL, width=4, rng=rng)
    xiaohei(d, 667, 250, scale=0.85, rng=rng, arm_to=(690, 250))
    text(d, "lineage valve", (605, 450), fill=SOFT, size=23)
    draw_cell(d, 910, 118, "cardio", PINK)
    draw_cell(d, 910, 185, "endo", "#ec7485")
    draw_cell(d, 910, 250, "smooth", "#f0885e")
    draw_cell(d, 910, 315, "fibro", "#21a5c7")
    draw_cell(d, 910, 382, "macro", "#177d9d")
    for label, y in [("cardiomyocyte", 114), ("endothelial", 182), ("smooth muscle", 247), ("fibroblast", 314), ("macrophage", 382)]:
        text(d, label, (1002, y - 17), size=25, hand=False)
    return finish(im, "research-reprogramming.png")


def disease():
    rng = random.Random(202)
    im, d = canvas()
    dna(d, 70, 96, 360, 64, mutation=True, rng=rng)
    text(d, "variant", (172, 54), fill=RED, size=28)
    scissors(d, 150, 210)
    xiaohei(d, 265, 238, scale=1.0, rng=rng, arm_to=(238, 228))
    arrow(d, (250, 290), (250, 388), fill=TEAL, rng=rng)
    dna(d, 70, 412, 360, 64, mutation=False, rng=rng)
    ellipse(d, (222, 392, 280, 450), outline=RED, fill=None, width=4)
    text(d, "repair window", (96, 520), fill=SOFT, size=28)
    line(d, [(436, 128), (552, 202)], fill=SOFT, width=2, jitter=0.8, rng=rng)
    line(d, [(436, 445), (552, 302)], fill=SOFT, width=2, jitter=0.8, rng=rng)
    ipsc(d, 628, 252, 82)
    text(d, "iPSC", (596, 374), size=32)
    arrow(d, (722, 252), (840, 252), fill=ORANGE, rng=rng)
    draw_cell(d, 966, 250, "cardio", PINK)
    text(d, "disease cell type", (872, 334), size=30, hand=False)
    arrow(d, (978, 365), (978, 448), fill=TEAL, rng=rng)
    rect(d, (808, 458, 1125, 587), outline=None, fill="#eef1f3", radius=10)
    for y, item in [(482, "mechanism"), (520, "drug screen"), (558, "cardiotoxicity")]:
        ellipse(d, (834, y - 7, 848, y + 7), outline=BLACK, fill=BLACK, width=1)
        text(d, item, (866, y - 22), size=28, hand=False)
    xiaohei(d, 766, 500, scale=0.9, rng=rng, arm_to=(810, 500))
    text(d, "readout", (706, 565), fill=BLUE, size=23)
    return finish(im, "research-disease.png")


def crispr():
    rng = random.Random(303)
    im, d = canvas()
    text(d, "guide pool", (70, 70), fill=SOFT, size=28)
    rect(d, (95, 135, 145, 250), outline=SOFT, fill=None, width=3, radius=12)
    line(d, [(102, 205), (138, 205)], fill="#5f6b73", width=18, rng=rng)
    ellipse(d, (232, 88, 410, 266), outline=BLACK, fill=None, width=3)
    for i, col in enumerate([TEAL, "#6d54a8", RED, ORANGE, BLUE, "#94b76a"]):
        x = 270 + i * 20
        curve(d, [(x, 196), (x + 12, 160), (x + 4, 126)], fill=col, width=4, rng=rng)
    text(d, "sgRNA cards", (248, 284), fill=BLUE, size=22)
    arrow(d, (420, 176), (510, 176), fill=TEAL, rng=rng)
    # Virus particles around 小黑-operated feeder.
    xiaohei(d, 570, 176, scale=0.95, rng=rng, arm_to=(620, 176))
    rect(d, (615, 138, 670, 214), outline=BLACK, fill="#f8f8f8", width=3, radius=8)
    text(d, "pack", (545, 245), fill=SOFT, size=22)
    for cx, cy, col in [(728, 120, LIGHT_BLUE), (800, 190, "#eef4ff"), (710, 245, "#f3f3f3")]:
        ellipse(d, (cx - 39, cy - 39, cx + 39, cy + 39), outline=BLACK, fill=col, width=3)
        for a in range(0, 360, 45):
            sx = cx + math.cos(math.radians(a)) * 40
            sy = cy + math.sin(math.radians(a)) * 40
            ex = cx + math.cos(math.radians(a)) * 54
            ey = cy + math.sin(math.radians(a)) * 54
            line(d, [(sx, sy), (ex, ey)], fill=BLACK, width=3, rng=rng)
        curve(d, [(cx - 18, cy), (cx, cy + 10), (cx + 25, cy - 4)], fill=col if col != "#f3f3f3" else RED, width=3, rng=rng)
    text(d, "lenti library", (690, 60), size=28)
    arrow(d, (850, 205), (946, 282), fill=TEAL, rng=rng)
    # Cells being screened.
    for i in range(11):
        cx = 945 + (i % 4) * 54 + rng.randint(-8, 8)
        cy = 310 + (i // 4) * 56 + rng.randint(-8, 8)
        rect(d, (cx - 36, cy - 15, cx + 36, cy + 15), outline=BLACK, fill=[RED, "#f1c24b", "#5b6fae", "#8b5aa6"][i % 4], width=2, radius=6)
        ellipse(d, (cx - 8, cy - 5, cx + 12, cy + 5), outline="white", fill=None, width=2)
    text(d, "CRISPRi/a screen", (880, 530), size=32, hand=False)
    # CRISPR tool from lower path.
    rect(d, (110, 435, 300, 486), outline=BLACK, fill="#6d767e", width=3, radius=10)
    ellipse(d, (185, 450, 228, 472), outline="white", fill=None, width=2)
    text(d, "cell of interest", (72, 525), size=28)
    arrow(d, (315, 460), (415, 460), fill=TEAL, rng=rng)
    dna(d, 468, 425, 270, 48, mutation=False, rng=rng)
    curve(d, [(640, 360), (682, 300), (708, 414)], fill=RED, width=4, rng=rng)
    text(d, "CRISPR tool", (518, 525), size=28)
    arrow(d, (748, 455), (890, 390), fill=TEAL, rng=rng)
    return finish(im, "research-crispr.png")


def perturbseq():
    rng = random.Random(404)
    im, d = canvas()
    # Organoid.
    blob(d, 170, 270, 115, 90, fill="#d8edf6", outline="#8db9c8", rng=rng, n=36)
    for i in range(5):
        ellipse(d, (92 + i * 28, 245 + rng.randint(-35, 30), 125 + i * 28, 278 + rng.randint(-25, 36)), outline="#8db9c8", fill="#cae4ef", width=2)
    ellipse(d, (82, 70, 220, 208), outline=BLACK, fill="#f6d7df", width=2)
    for i, col in enumerate([RED, ORANGE, "#8b5aa6", BLUE, "#7daeca", "#e8cf62"]):
        ellipse(d, (105 + (i % 3) * 38, 92 + (i // 3) * 48, 132 + (i % 3) * 38, 119 + (i // 3) * 48), outline=col, fill=col, width=1)
    line(d, [(140, 205), (170, 270)], fill=BLACK, width=2, rng=rng)
    line(d, [(168, 205), (170, 270)], fill=BLACK, width=2, rng=rng)
    text(d, "organoid", (58, 445), size=31, hand=False)
    xiaohei(d, 300, 270, scale=1.0, rng=rng, arm_to=(330, 235))
    text(d, "open + sort", (245, 356), fill=BLUE, size=22)
    # Single-cell capture column.
    line(d, [(355, 120), (355, 510)], fill=TEAL, width=5, rng=rng)
    for y, kind, col in [(130, "cardio", PINK), (210, "endo", "#ec7485"), (290, "smooth", "#f0885e"), (370, "fibro", "#21a5c7"), (450, "macro", "#177d9d")]:
        arrow(d, (355, y), (432, y), fill=TEAL, rng=rng)
        ellipse(d, (470, y - 34, 538, y + 34), outline=SOFT, fill="#eeeeee", width=2)
        draw_cell(d, 504, y, kind, col)
        curve(d, [(555, y - 12), (570, y + 4), (558, y + 24)], fill=[RED, "#8b5aa6", ORANGE, "#7daeca", BLUE][(y // 80) % 5], width=4, rng=rng)
    text(d, "barcodes", (446, 532), size=27, hand=False)
    # Phenotype map.
    line(d, [(635, 505), (635, 190)], fill=BLACK, width=3, rng=rng)
    line(d, [(635, 505), (880, 505)], fill=BLACK, width=3, rng=rng)
    colors = [TEAL, "#7daeca", "#3f5d9f", RED, "#8b5aa6", ORANGE, "#9a6b42", "#e0ca36"]
    centers = [(710, 298), (705, 430), (775, 360), (842, 304), (790, 240), (850, 385), (812, 468), (686, 500)]
    for ci, (cx, cy) in enumerate(centers):
        for _ in range(32):
            px = cx + rng.gauss(0, 18)
            py = cy + rng.gauss(0, 18)
            ellipse(d, (px, py, px + 5, py + 5), outline=colors[ci], fill=colors[ci], width=1)
    text(d, "phenotype map", (650, 550), size=27, hand=False)
    arrow(d, (900, 340), (970, 340), fill=TEAL, rng=rng)
    # Network.
    nodes = [(995, 250), (995, 345), (995, 440), (1080, 285), (1080, 400), (1160, 340)]
    for i, p in enumerate(nodes):
        for j, q in enumerate(nodes):
            if i < j and rng.random() < 0.28:
                line(d, [p, q], fill="#9db5c1", width=2, rng=rng)
    for p in nodes:
        ellipse(d, (p[0] - 18, p[1] - 18, p[0] + 18, p[1] + 18), outline=BLACK, fill="#dceff8", width=2)
    text(d, "gene links", (990, 480), size=29, hand=False)
    return finish(im, "research-perturbseq.png")


def population():
    rng = random.Random(505)
    im, d = canvas()
    petri(d, 290, 260, 470, 220, fill="#f4a5b8")
    for bx, by in [(180, 240), (255, 185), (248, 320)]:
        for i in range(7):
            px = bx + rng.randint(-24, 26)
            py = by + rng.randint(-18, 18)
            ellipse(d, (px, py, px + 22, py + 18), outline=BLUE, fill="#2f9bb3", width=2)
    ellipse(d, (312, 130, 470, 288), outline="#666666", fill="#d2b8cc", width=3)
    # Heart in magnifier.
    line(d, [(464, 282), (570, 392)], fill=BLACK, width=12, jitter=0.8, rng=rng)
    blob(d, 392, 205, 36, 34, fill="#f8f4f2", outline=RED, rng=rng, n=20)
    line(d, [(390, 190), (388, 167), (400, 154), (415, 167), (415, 190)], fill=RED, width=4, rng=rng)
    line(d, [(376, 205), (410, 214), (424, 198)], fill="#8a3b3b", width=2, rng=rng)
    xiaohei(d, 145, 390, scale=0.9, rng=rng, arm_to=(190, 360))
    text(d, "heart-in-a-dish", (160, 535), size=38, hand=False)
    arrow(d, (545, 260), (645, 260), fill=TEAL, rng=rng)
    petri(d, 890, 260, 470, 220, fill="#f7c3cf")
    # People/genotype rows.
    def person(px, py, color):
        ellipse(d, (px - 5, py - 16, px + 5, py - 6), outline=color, fill=color, width=1)
        line(d, [(px, py - 4), (px, py + 26)], fill=color, width=5, jitter=0.1, reps=1)
        line(d, [(px - 12, py + 4), (px + 12, py + 4)], fill=color, width=3, jitter=0.1, reps=1)
        line(d, [(px, py + 24), (px - 10, py + 44)], fill=color, width=3, jitter=0.1, reps=1)
        line(d, [(px, py + 24), (px + 10, py + 44)], fill=color, width=3, jitter=0.1, reps=1)
    colors = [RED] * 5 + ["#888888"] * 8 + [BLUE] * 35
    idx = 0
    for row in range(6):
        for col in range(8):
            color = colors[idx % len(colors)]
            person(775 + col * 28, 155 + row * 44, color)
            idx += 1
    rect(d, (1065, 145, 1160, 300), outline=None, fill="#eef1f3", radius=10)
    for y, col, lab in [(175, RED, "mu/mu"), (225, "#888888", "mu/wt"), (275, BLUE, "wt/wt")]:
        person(1085, y - 12, col)
        text(d, lab, (1110, y - 18), size=20, hand=False)
    xiaohei(d, 720, 398, scale=0.95, rng=rng, arm_to=(785, 420))
    text(d, "genotype counter", (652, 472), fill=BLUE, size=22)
    text(d, "population-in-a-dish", (700, 535), size=38, hand=False)
    return finish(im, "research-population.png")


def main():
    OUT.mkdir(exist_ok=True)
    paths = [reprogramming(), disease(), crispr(), perturbseq(), population()]
    for path in paths:
        print(path.relative_to(ROOT))


if __name__ == "__main__":
    main()
