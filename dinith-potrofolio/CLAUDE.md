# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Current state: greenfield rewrite

`src/` is an **unmodified Create React App TypeScript scaffold**. The previous portfolio implementation was deliberately deleted (commit `5e6aac7` "removed the existing code"), and the app is being rebuilt from scratch on `feature/new-layout` against the Figma designs in `../README.md`.

Do not assume components, styling conventions, or routing exist — check first. Most work here is creating structure, not editing it.

## Repository layout gotcha

The git root is the **parent** directory (`dinith95.github.io/`), not the app directory:

```
dinith95.github.io/          <- git root, GitHub Pages repo
├── .github/workflows/       <- CI/deploy
├── README.md                <- Figma design + icon library links
└── dinith-potrofolio/       <- the React app (package.json, src/, public/)
```

The app used to live at the git root and was moved into `dinith-potrofolio/` during the rewrite. Run all npm commands from `dinith-potrofolio/`; run git commands from either.

**The CI workflow is stale because of this move.** `.github/workflows/react-build.yml` runs `npm ci` and `npm run build -prod` at the git root (where there is no longer a `package.json`) and publishes `./build` to `gh-pages`. It needs a `working-directory: dinith-potrofolio` (and a corrected `publish_dir`) before deploys work again. Also note `-prod` is not a real flag — it is silently ignored.

## Commands

Run from `dinith-potrofolio/`:

```bash
npm start                      # dev server on :3000
npm run build                  # production bundle -> build/
npm test                       # jest watch mode (RTL)
npm test -- --watchAll=false   # single CI-style run
npm test -- App.test.tsx                 # single test file
npm test -- -t "renders learn react"     # single test by name
npx tsc --noEmit               # typecheck only
```

There is no `lint` script — ESLint runs through `react-scripts` (`eslintConfig: react-app`, `react-app/jest`) during `start` and `build`, so lint errors surface there.

## Stack constraints

- **CRA 5 (`react-scripts`), not Vite or Next.js.** Config is unejected; there is no webpack config to edit. Use `craco`/`react-app-rewired` or eject if the build must change. A `agents/nextjs-static-export-setup` branch explores a Next.js static-export migration but is not merged.
- **React 19 with React 18-era CRA.** `react-scripts@5` predates React 19; expect peer-dependency warnings on install and prefer `npm i --legacy-peer-deps` if npm refuses.
- **TypeScript 4.9, `strict: true`, `target: es5`.**
- **SCSS is not installed.** The old implementation used `.scss` throughout; if you reintroduce it, `npm i -D sass` first (CRA supports it once the package is present).
- CI pins **Node 16** — avoid APIs newer than that unless you also update the workflow.

## Reference material for the rebuild

- **Last full implementation:** commit `54cd470`. Read it for the prior component breakdown (`HomePage`, `PageNavBar`, `about/{About,Bio,ghCard,lccard,socard}`, `timeline/`) and the assets under `src/assets/` (CV, certification badges, GitHub/StackOverflow/LeetCode logos). `git show 54cd470:src/components/...` to inspect without checking out.
- **Pre-React static site:** `origin/legacy_code` (plain HTML + bower).
- **Currently deployed output:** `origin/gh-pages`.
- **Designs and icons:** Figma links and [iconoir](https://iconoir.com/) in the git-root `README.md`.

## Deploy model

Pushing to `master` builds and force-publishes to the `gh-pages` branch via `peaceiris/actions-gh-pages`. `develop` and PRs build only. Since the site is served from `gh-pages` at the domain root, keep `homepage` out of `package.json` (or set it to `/`) — a nested value would break asset paths.
