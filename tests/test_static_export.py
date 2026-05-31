from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PAGES = [
    "index.html",
    "research.html",
    "team.html",
    "publications.html",
    "contact.html",
]
SHARED_FILES = [
    ".nojekyll",
    "styles.css",
    "data.js",
    "image-slot.js",
    "particles.js",
    ".image-slots.state.json",
    "components.js",
    "pages.js",
    "lab_storage_map_9.html",
    "lab_storage_map_2026-05-31.json",
    "favicon.png",
]
REQUIRED_ASSETS = [
    "assets/logo-black.png",
    "assets/research-reprogramming.png",
    "assets/research-disease.png",
    "assets/research-crispr.png",
    "assets/research-perturbseq.png",
    "assets/research-population.png",
    "assets/people/chun-liu.png",
    "assets/people/brad-miller.png",
    "assets/people/wenjing-dong.jpg",
    "assets/people/payton-klosa.jpg",
    "assets/people/coneria-nansubuga.jpg",
    "assets/people/shelby-hader.jpg",
    "assets/people/yifan-sun.png",
]


def assert_contains(text, needle, path):
    assert needle in text, f"{path} should contain {needle!r}"


def main():
    for relative in SHARED_FILES + REQUIRED_ASSETS:
        path = ROOT / relative
        assert path.exists(), f"Missing required rebuilt site file: {relative}"

    for page in PAGES:
        html = (ROOT / page).read_text(encoding="utf-8")
        assert_contains(html, 'data-theme="specimen"', page)
        assert_contains(html, '<div id="root"></div>', page)
        assert_contains(html, 'href="styles.css?v=research-final-20260531"', page)
        assert_contains(html, 'src="data.js?v=research-final-20260531"', page)
        assert_contains(html, 'src="image-slot.js"', page)
        assert_contains(html, 'src="particles.js"', page)
        assert_contains(html, 'src="components.js"', page)
        assert_contains(html, 'src="pages.js"', page)
        assert "index.css" not in html, f"{page} should not load the retired stylesheet"

    data = (ROOT / "data.js").read_text(encoding="utf-8")
    for expected in [
        "window.LAB_DATA",
        "Fellowship Congratulations",
        "Yifan Sun",
        "Nuclear Lamins in Cardiac Development and Disease",
        "A comprehensive multi-organ proteomic atlas of human aging across 50 years",
        "labFun",
        "resources",
        "Lab protocols",
        "Freezer & storage inventory",
        "lab_storage_map_9.html",
        "Hood booking",
        "https://teamup.com/ksuag93tnskptp3oc2",
        "https://labspend.com/offers/overview",
        "https://benchling.com/liuclab/f_/jMXbE5wr-protocol/",
        "Lab onboarding",
        "https://benchling.com/s/etr-edSyWkhltTazfsOzEYYe?m=slm-HVMfQtnWogqz0Pv5z7XI",
        "Chun Liu Lab Computation Service Portal (LCSP) -- PASTA",
    ]:
        assert_contains(data, expected, "data.js")

    pages = (ROOT / "pages.js").read_text(encoding="utf-8")
    for expected in [
        "ParticleHeadline",
        "in a dish♥",
        "Lab fun",
        "Cell culturer's life",
        "Lab resources",
        "Pipette4food",
        "const rest = people",
        'target: "_blank"',
        "resource-tabs",
        "storage-map-frame",
        "lab_storage_map_9.html",
        "page-hero--with-aside",
        "aside-wordmark",
    ]:
        assert_contains(pages, expected, "pages.js")
    assert "people.slice(1)" not in pages, "pages.js should include Chun Liu with the lab members"

    particles = (ROOT / "particles.js").read_text(encoding="utf-8")
    assert_contains(particles, "window.ParticleHeadline", "particles.js")
    assert_contains(particles, "pointermove", "particles.js")

    styles = (ROOT / "styles.css").read_text(encoding="utf-8")
    for expected in [
        ".hero-particle",
        ".particle-wrap",
        ".fun-grid",
        ".person-meta h4 a",
        ".lock-card",
        ".resource-tabs",
        ".storage-map-frame",
        ".page-hero--with-aside",
    ]:
        assert_contains(styles, expected, "styles.css")

    storage_map = (ROOT / "lab_storage_map_9.html").read_text(encoding="utf-8")
    assert_contains(storage_map, "Lab Storage Map", "lab_storage_map_9.html")
    assert_contains(storage_map, "lab_storage_map_2026-05-31.json", "lab_storage_map_9.html")
    assert_contains(storage_map, "seedData", "lab_storage_map_9.html")

    storage_seed = (ROOT / "lab_storage_map_2026-05-31.json").read_text(encoding="utf-8")
    assert_contains(storage_seed, "matrigel", "lab_storage_map_2026-05-31.json")
    assert_contains(storage_seed, "Stanford Box1", "lab_storage_map_2026-05-31.json")


if __name__ == "__main__":
    main()
