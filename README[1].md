# SafeSense — Design Thinking Portfolio Website

Academic Design Thinking portfolio website for **SafeSense** (Course **21DCS201P — Design Thinking and Methodology**, SRM Institute of Science and Technology, Kattankulathur).

## Project Structure

- `index.html` — Complete semantic markup covering project identity, overview, all 13 Design Thinking activities organised into 6 chapters, original SVG/CSS diagrams, Business Model Canvas, team section, and reflection.
- `styles.css` — Responsive warm-ivory, sage/mint, deep forest, muted peach, and lavender design system with editorial typography (`Cormorant Garamond`, `Plus Jakarta Sans`, `JetBrains Mono`).
- `script.js` — Sticky mobile navigation toggle, reading progress bar, active chapter indicator, and IntersectionObserver scroll reveals.
- `vercel.json` — Clean static deployment configuration for Vercel.

## Local Preview

Open `index.html` directly in any modern browser, or run a local static server:

```bash
npx serve .
```

## Deploy to Vercel

1. Extract the ZIP archive (`safesense-design-thinking-portfolio.zip`).
2. Push the extracted folder (`index.html`, `styles.css`, `script.js`, `vercel.json`, `README.md`) to a GitHub repository, **or** deploy directly via Vercel CLI (`vercel --prod`) or drag-and-drop in the Vercel Dashboard.
3. Framework Preset: **Other** (Static Site) — no build command or output directory override needed.

## Live Prototype Link

The existing SafeSense software prototype remains hosted unmodified at:
https://safesense-app-refinement.netlify.app
