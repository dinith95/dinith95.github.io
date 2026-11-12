# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout gotcha

The git root is the **parent** directory (`dinith95.github.io/`), not the app directory:

```
dinith95.github.io/          <- git root, GitHub Pages repo
├── .github/workflows/       <- CI/deploy (react-build.yml)
├── README.md                <- Figma design + iconoir links
└── dinith-potrofolio/       <- the React app (package.json, src/, public/)
```

Run all npm commands from `dinith-potrofolio/`; git commands work from either.

## Commands

Run from `dinith-potrofolio/`:

```bash
npm start                      # dev server on :3000
npm run build                  # production bundle -> build/
npm test                       # jest watch mode (RTL)
npm test -- --watchAll=false   # single CI-style run
npm test -- App.test.tsx                 # single test file
npm test -- -t "renders without crashing"  # single test by name
npx tsc --noEmit               # typecheck only
```

There is no `lint` script — ESLint runs through `react-scripts` (`eslintConfig: react-app`, `react-app/jest`) during `start` and `build`. The only test is a smoke render of `<App />`.

## Stack constraints

- **CRA 5 (`react-scripts`), not Vite or Next.js.** Config is unejected. A `agents/nextjs-static-export-setup` branch explores a Next.js migration but is not merged.
- **React 19 with React 18-era CRA.** Expect peer-dependency warnings; use `npm i --legacy-peer-deps` if npm refuses.
- **TypeScript 4.9, `strict: true`.**
- **Plain CSS only** (no SCSS/`sass` installed). Icons come from `iconoir-react`.
- Fonts/colours are not tokenised globally — each component's CSS is self-contained.

## Architecture

Single-page, single-scroll site. `src/App.tsx` stacks `Header`, `Profile` (hero, uses `useTypewriter` in `src/hooks/`), `Journey`, and `ScrollDownArrow`.

`Journey` is an ARIA tabs widget (roving arrow/Home/End keys) that switches between `ExperiencePane`, `CertificationsPane` and `EducationPane`. Add a new tab by extending the `PaneId` type and the `PANES` array in `Journey.tsx`. The three panes have no CSS of their own: they render the shared `Journey-timeline` / `Journey-entry` markup, styled entirely in `Journey.css`. (`Education/` is an unused leftover separate from `EducationPane/`.)

Each component lives in its own folder under `src/components/<Name>/` with a co-located `<Name>.tsx` and `<Name>.css`; import via the folder path. Class names are prefixed with the component name (e.g. `Journey-section`, `App-main`).

Styling is mobile-first (min 320px; breakpoints 768px / 1024px) — see `.claude/skills/responsive-design/SKILL.md` and apply it for any styling change.

## CV

Two CV artifacts, both in `src/`:

- `src/cv/Dinith_Jayabodhi_CV.html` — the source, a standalone print-styled HTML page (has an `@media print` block). It is **not** part of the React bundle.
- `src/images/Dinith_Jayabodhi_CV.pdf` — the generated PDF, imported in `Profile.tsx` as the download link. After editing the HTML, regenerate the PDF and replace this file.

The "View CV" overlay renders the same content on-site from `src/components/CvOverlay/CvDocument.tsx` (data arrays + scoped `CvDocument.css`; phone and referees intentionally omitted). When you edit the HTML, mirror the change there and regenerate the PDF.

To regenerate: open the HTML directly in Edge → Ctrl+P → Destination "Save as PDF" (the in-dialog one, not "Microsoft Print to PDF") → uncheck Headers and footers. Verify text is selectable (vector, not rasterised). Details in `readme.md`.

## Deploy

`.github/workflows/react-build.yml` builds with `npm --prefix ./dinith-potrofolio` (Node 24), copies `index.html` to `404.html` as an SPA fallback, and uploads to GitHub Pages via `actions/deploy-pages`. It builds on push/PR to `master`/`develop` but only **deploys from `master`**. (The `-prod` arg on the build step is not a real flag and is ignored.) Since the site is served at the domain root, keep `homepage` out of `package.json`.

## History / reference

- Prior full implementation: commit `54cd470` (`git show 54cd470:src/...`).
- Pre-React static site: `origin/legacy_code`; deployed output history: `origin/gh-pages`.
- Designs: Figma links in the git-root `README.md`.
