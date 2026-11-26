# Pending items

Open work from the review of the app against `portfolio-ui-ux-design.md`, as of 2026-11-26.

## Done so far

- Router added (`react-router-dom` v6): `/`, `/journey`, and a 404 page.
- Broken `#skills` / `#contact` nav links removed.
- Header rebuilt to the approved design: sticky translucent band, name and links on the left with one pipe after the name, mobile dropdown panel with overlay, mobile-first CSS, 0.2 s menu animation with reduced motion respected.
- The Journey link highlights while the Journey section is in view on the home page.
- Header design lives in `design/header-nav/`.

## Quick fixes

- [ ] **Skip-to-content link.** None exists. Needs an `id` on `<main>`.
- [ ] **Dead code.** `components/Education/` (with its CSS) and `hooks/useTypewriter.ts` are unused. CLAUDE.md still mentions the typewriter.
- [ ] **Fonts.** The site uses Fraunces, JetBrains Mono, the system sans-serif and Arial (CV overlay). The spec allows at most 2 families.
- [ ] **Animation durations.** `Journey.css` (0.25 to 0.3 s) and the CV overlay rise (0.25 s) exceed the 200 ms cap.

## Needs a decision or new content

- [ ] **Projects section.** The biggest gap: project data, cards, filter chips and the case study layout. "Featured projects" on Home is currently three service cards (Development, Cloud, AI).
- [ ] **Skills section** as grouped tags.
- [ ] **Contact form.** GitHub Pages cannot process forms; needs a form service (Formspree, Web3Forms, etc.) or drop the form. WhatsApp and email links exist already.
- [ ] **Footer** with social links, copyright and last-updated date (decide where the date comes from).
- [ ] **Credibility strip** (years of experience, domain, certifications): define the content.
- [ ] **Design tokens and theme.** Colours and fonts are hard-coded per component; the site is dark only. The spec asks for shared tokens and a light/dark toggle.
- [ ] **Custom 404 on the deployed site.** The CI copies `index.html` to `404.html`, so deep links load with a 404 status (bad for SEO). Consider pre-rendering or a static export.
- [ ] **Update the spec** (`portfolio-ui-ux-design.md`). It still describes six pages, a contact form and `/projects/...` URLs, and does not mention the View CV overlay, WhatsApp contact or the Education and Certifications tabs.

## Needs a browser check

- [ ] **Header** at 320 px, 768 px and up: name and menu button fit, panel and overlay behave, scroll highlight switches correctly.
- [ ] **Images.** JPEGs, not WebP/AVIF; no lazy loading; no width/height attributes. The fixed full-screen background may slow mobile load.
- [ ] **Accessibility.** Text contrast over the dimmed background, social icon tap targets (at least 24 x 24 px), focus not hidden behind the sticky header.
- [ ] **Performance.** Lighthouse on a mobile profile: LCP under 2.0 s, layout shift under 0.1.
- [ ] **SEO and sharing.** Open Graph image, sitemap, page titles per route.

## Spec doc inconsistencies

- [ ] "Six top-level pages" versus "no more than 5 nav items": say that Home is not in the nav.
- [ ] Writing is optional at launch but Home lists latest posts: say Home and nav hide it until Writing exists.
- [ ] Skill tags must link to a project: allow tags with no link.
- [ ] Site map shows CV under Experience only; the hero links it too.
- [ ] Filter chip behaviour is unspecified (one or several, URL state, empty state).
- [ ] Add WCAG 2.2 items: target size, non-text contrast, focus not obscured.
- [ ] State the default theme and whether the toggle choice is saved.
- [ ] Analytics and privacy: decide whether analytics are used (cookie notice).
- [ ] Add a version or status next to the document date; give the `core` mermaid class a fill.
