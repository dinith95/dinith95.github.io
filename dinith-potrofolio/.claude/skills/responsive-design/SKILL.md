---
name: responsive-design
description: This skill should be used when the user asks to "make this responsive", "fix mobile layout", "add breakpoints", "check responsive design", or whenever styling changes, new components with CSS, or layout modifications are made in this repo. Apply before writing any styling code.
version: 0.1.0
---

# Responsive Design Skill

Provide the mobile-first responsive CSS approach and checklist used throughout this project's CRA (Create React App) codebase.

## Approach: Mobile-First

1. **Start with mobile.** Build CSS rules for the smallest viewport first (`320px` minimum).
2. **Progressive enhancement.** Add `@media` queries for `tablet` (768px) and `desktop` (1024px+).
3. **Test all three viewports** before declaring the feature complete.

## Breakpoint Strategy

```css
/* Mobile (default) — 320px to 767px */
.element { /* mobile styles */ }

/* Tablet — 768px to 1023px */
@media (min-width: 768px) {
  .element { /* tablet adjustments */ }
}

/* Desktop — 1024px and up */
@media (min-width: 1024px) {
  .element { /* desktop refinements */ }
}
```

## CSS Patterns (No SCSS)

Use plain CSS to keep responsive code clean — SCSS is not installed in this project:

- **Flexible layouts:** Prefer `flexbox` over fixed widths. Use `flex-wrap: wrap` for mobile, adjust in media queries.
- **Responsive typography:** Scale font sizes with viewport; use `clamp()` for fluid scaling:
  ```css
  font-size: clamp(0.875rem, 2.5vw, 1.5rem);
  ```
- **Padding/margin:** Use `%` or viewport-relative units (`vw`/`vh`) for spacing that scales.
- **Max-width containers:** Wrap content in a container with `max-width: 1200px` and `margin: 0 auto` to prevent oversized layouts on desktop.
- **Images:** Always set `max-width: 100%; height: auto;` to prevent overflow on smaller screens.

## Checklist Before Completing a Feature

- [ ] Mobile view tested at `320px` (smallest common phone)
- [ ] Tablet view tested at `768px` (iPad-size)
- [ ] Desktop view tested at `1024px+` (desktop/laptop)
- [ ] No horizontal scrolling on any viewport
- [ ] Text remains readable (font sizes, contrast, line-height)
- [ ] Touch targets are at least `44px` tall (mobile accessibility)
- [ ] Images scale proportionally; no distortion
- [ ] Flexbox `gap` or margin spacing remains balanced across viewports
- [ ] No hardcoded pixel widths that break layout (use `%`, `flex`, or `clamp()`)
- [ ] Tested in Chrome DevTools device emulation (not just window resizing)

## Testing Protocol

1. Open Chrome DevTools (`F12`) and toggle Device Toolbar (`Ctrl+Shift+M`).
2. Test preset devices: iPhone 12 (390px), iPad (768px), and Desktop (1440px).
3. Resize the viewport slowly to catch edge cases between breakpoints.
4. Run the app with `npm start` and interact with the actual component, not just a static screenshot.

## Common Pitfalls to Avoid

- Setting `width: 100vw` — causes a horizontal scrollbar because it includes scrollbar width.
- Using only `max-width` without `width` on container divs — confuses layout.
- Forgetting `box-sizing: border-box` — padding/border expand the box.
- Hard-coding pixel values for gaps/margins that don't scale.
- Assuming `flex-wrap: wrap` works without testing the actual breakpoint.

## Accessibility + Responsive

- **Line length:** Keep text lines between 45–75 characters for readability; use `max-width` on text containers.
- **Contrast:** Ensure a 4.5:1 ratio for body text, 3:1 for large text (WCAG AA).
- **Touch targets:** Size buttons and links at least `44px × 44px` on mobile.
- **Focus indicators:** Never remove `:focus` styles; keep them visible on all breakpoints.

## CRA Tooling Notes

- No SCSS installed — use plain CSS with `@media` queries.
- If SCSS becomes needed, run `npm install -D sass` first; CRA auto-detects and compiles `.scss` files.

## Template: Responsive Component CSS

```css
/* Mobile-first */
.component {
  padding: 1rem;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.component__title {
  font-size: clamp(1.25rem, 4vw, 2rem);
  margin-bottom: 0.5rem;
}

/* Tablet */
@media (min-width: 768px) {
  .component {
    padding: 1.5rem;
    flex-direction: row;
    gap: 1.5rem;
  }

  .component__title {
    margin-bottom: 1rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .component {
    padding: 2rem;
    gap: 2rem;
  }

  .component__title {
    font-size: 2.5rem;
  }
}
```
