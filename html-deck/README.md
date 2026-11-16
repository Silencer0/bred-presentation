# Cash vs UPI — Intern Purchase Recall

22 slides, timed to 10 minutes. Based on **Cash vs UPI Recall: Intern Field Experiment Design**, 16 November 2026, with the user's single-college scope superseding the PDF's two-college design.

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

One college; voluntary newcomers; matching on the sample-standardized verbal-learning/visual-recall memory composite, continuous Spendthrift–Tightwad score, and last-10-payments cash count. Mahalanobis distance and optimal nonbipartite matching form pairs; computer allocation within pairs is concealed until Sunday. The tracking-status and history-checking questions, and the tracking exact-match rule, are removed.

Saturday baseline is budgeted at about 55 minutes to preserve a 30-minute ROCF delay. Spending runs Monday–Sunday. Four campus outlets log item lines and give the same uncapped 25% participant-ID discount in both conditions. The final digital recall test is the following Monday at 6 pm, lasts 20 minutes, and locks totals before day-by-day entries. Strict one-to-one item matching is primary. An item-level mixed model handles clustered records; Holm correction covers H1–H3.

The deck has 22 slides, including baseline/scoring/analysis protocol slides, an ethics slide and references after the closing animation, and presenter timings total 600 seconds. Press N for the full operational definitions, scoring rules, secondary/exploratory metrics, and unresolved analysis edge cases. The team's latest supplied operationalisation supersedes the earlier PDF.
