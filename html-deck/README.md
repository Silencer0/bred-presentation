# Cash vs UPI — Intern Purchase Recall

12 slides, timed to 10 minutes. Based on **Cash vs UPI Recall: Intern Field Experiment Design**, 16 November 2026, with the user's single-college scope superseding the PDF's two-college design.

## Open directly

Double-click **presentation.html**. It includes the JavaScript libraries, React application, CSS, SVG artwork and fonts. No internet connection or server is required for the presentation itself. Source links open external websites only if followed.

Use a current Chrome, Edge, Firefox or Safari. This is an HTML file containing CSS and JavaScript, not an HTML-only/no-JavaScript page. Compatibility with arbitrary old browsers, Internet Explorer, or browsers with JavaScript disabled is not guaranteed.

## Keybinds

- Arrow keys, Page Up / Page Down, or Space: change slide.
- Home / End: first / last slide.
- F: toggle browser fullscreen.
- G: slide overview.
- N: presenter notes.
- R: references.
- P: pause / resume animation.
- Escape: close the open overlay.

No visible navigation bars or controls surround the slides. Reduced-motion preferences are respected. Touch swipe and mouse wheel navigation also work.

## Local preview and source

`npm run dev` builds the modular site and serves it at http://localhost:5173.

The editable React source is in `src/main.jsx`; styling is in `src/style.css`. Animation is implemented with GSAP, Lenis, Motion, and React Bits CountUp. Anatomy supplies the receipt-printer geometry via `scripts/build-art.mjs`.

`npm run build` builds the modular `dist/` site. `npm run standalone` also bundles the single-file version. Run `npm install` once before rebuilding the standalone file. Running the delivered presentation.html requires no build tools.

For browser checks, run `npx playwright install firefox`, then `npm run check`. An existing Firefox executable can be selected with `PLAYWRIGHT_FIREFOX_EXECUTABLE`.

## Study scope

One college; summer interns in teams of at least three; paired team-level randomization; own-money purchases with a 25% discount during Monday–Sunday Food Week; surprise recall on Tuesday at 6 pm. The target of about 350 interns / 58 teams is approximate and conditional on cohort capacity and pilot-validated power. Sample-size scenarios are calculated planning examples, not observed results.
