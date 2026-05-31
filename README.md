# Liu Lab — Static Site Export

This folder is a self-contained static website. Drop it into your GitHub repo
(replacing the existing files) and serve via GitHub Pages.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Home page |
| `research.html` | Research projects |
| `team.html` | Team & alumni |
| `publications.html` | Publications list |
| `contact.html` | Contact / get involved |
| `styles.css` | All styling, including the three themes |
| `data.js` | **All site content lives here — edit this to update copy, news, people, papers, etc.** |
| `components.js` | Pre-compiled shared components (workflow diagram, news ticker, publication list) |
| `pages.js` | Pre-compiled page sections (nav, hero, footer, all five pages) |
| `particles.js` | Interactive particle headline used by the home-page hero |
| `image-slot.js` | Drag-and-drop image slots used by the lab-fun section |
| `lab_storage_map_9.html` | Password-gated freezer and storage inventory tab embedded under Lab resources |
| `lab_storage_map_2026-05-31.json` | Seeded storage inventory assignments loaded by the storage map |
| `assets/` | Images: logo, research figures, headshots, science photos |
| `favicon.png` | Site favicon |

## How to update content

Open `data.js` in any text editor. Everything is in one structured object:

```js
window.LAB_DATA = {
  lab:        { /* mission, thesis, name, location ... */ },
  news:       [ /* news items, newest first */ ],
  research:   [ /* 5 research project cards */ ],
  people:     [ /* current lab members */ ],
  alumni:     [ /* past members */ ],
  publications: [ /* paper list, newest first */ ],
  contact:    { /* email, address, joining info */ }
};
```

Edit values, save, refresh — no build step required.

## How to update images

Drop new files into `assets/` (or `assets/people/` for headshots) and update the
matching `img:` path in `data.js`.

## Themes

The site currently ships with the **Specimen** theme (set on `<html data-theme="specimen">`
and `<body data-theme="specimen">` in each HTML file). To switch site-wide, change
both attributes on every HTML file to:

- `data-theme="editorial"` — serif, monochrome, magazine layout
- `data-theme="clinical"` — sans, blue accent, hospital-grade
- `data-theme="specimen"` — mono labels, lab-notebook aesthetic (current)

## Deploying to GitHub Pages

1. Push the contents of this folder to your `gh-pages` branch (or repo root, depending
   on your Pages settings).
2. GitHub Pages will serve `index.html` automatically.
3. No `_config.yml` or Jekyll required — it's plain static HTML.

If your existing repo is set up for Jekyll, add a file named `.nojekyll`
(empty) at the repo root so Jekyll doesn't try to process these files.

## Local preview

```bash
cd liulab
python3 -m http.server 8000
# open http://localhost:8000
```

Or just double-click `index.html` — though some browsers block `file://`
fetches; the local server is more reliable.

## What's NOT included

- Build tooling (npm, webpack, Vite) — none needed; everything's pre-compiled
- Jekyll templates — this is plain HTML
- A CMS — content edits happen in `data.js`

## Tech

- React 18 (production build, loaded from unpkg CDN)
- No bundler — `pages.js` and `components.js` are pre-compiled JSX (Babel)
- Fonts: Instrument Serif, Inter, JetBrains Mono, Newsreader (Google Fonts, loaded in `styles.css`)
