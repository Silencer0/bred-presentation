import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion } from 'motion/react';
import CountUp from './components/CountUp.js';
import { Wallet, Phone, Pencil, Card } from './components/Drawings.js';
import { printerSvg } from './printer-art.js';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const titles = ['Cash, UPI & purchase recall', 'Why spending recall matters', 'What the literature leaves open', 'Two competing predictions', 'Randomize intern teams', 'One college. Two payment modes.', 'Seven days of spending. Tuesday recall.', 'Remembering a purchase', 'The supporting measures', 'Sample size & analysis', 'The limits of the design', 'What either outcome would mean'];
const chapters = ['Introduction', 'Motivation', 'Literature & gap', 'Question & hypotheses', 'Experimental design', 'Conditions', 'Procedure', 'Primary outcome', 'Secondary outcomes', 'Analysis plan', 'Limitations & ethics', 'Implications'];
const timings = [20, 40, 60, 60, 60, 55, 65, 60, 40, 50, 45, 45];
const notes = ["We ask whether cash versus UPI changes delayed recall of everyday purchases among summer interns at one host college. This is a proposed pair-matched, cluster-randomized field experiment. The team, not the individual, is assigned to a payment mode. The experiment is scoped to one host college.", "Interns are newcomers to the campus and its outlets, so long-established price knowledge is less likely to drive total reconstruction. Cash handling may make payment salient; UPI histories and notifications may rehearse purchases. These are competing predictions. By internship week 3, orientation novelty should be lower while participants are still relatively new to outlet prices.", "Soman links payment rehearsal and immediacy to recall and later spending. Gafeeva and colleagues find lower accuracy for recent card payments than cash; this does not establish an effect for UPI. Srivastava and Raghubir examine decomposition of expense estimates. Our narrow gap is delayed UPI purchase recall checked against independent outlet records. Do not claim that no related experiment exists anywhere.", "H1 is two-sided: purchase recall rates differ between cash and UPI. H0 is no difference. Cash salience predicts a cash advantage; UPI records and notifications predict a UPI advantage. H2 concerns absolute total-estimation error. H3 separately predicts more negative signed estimation error among UPI users. Cue gain and possible mechanisms are exploratory, not additional confirmatory hypotheses.", "Invite all summer interns at the host college using an independent recruiter, not their supervisor. Eligible participants are 18 or older, new to the campus, use cash and UPI, and belong to a lab or project team of at least three interns. There is no minimum habitual cash-share threshold. Match teams on mean purchase-memory score, Spendthrift–Tightwad score, habitual cash share, size, work type and outlet distance. Conceal allocation until both teams in each pair are enrolled, then randomize one to each mode. Whole-team assignment reduces within-team mixing, not all cross-team contact. One college means no college block or mode-by-college interaction.", "Participants use their own money. There is no ₹500 task payment and no separate pot. Both arms receive 25% off their personal orders at partner outlets when using their assigned mode and discount card. Cash teams can send UPI to the daily conversion desk and receive the same amount in small notes and coins. Record conversion amounts, IDs and timestamps. UPI teams use the Food Week QR. Other purchases are unrestricted; anyone can use another mode without the discount. Histories and notifications remain part of real UPI.", "Internship weeks 1–2: consent, online lifestyle survey and a 20-minute purchase-memory task. End of week 2: pair teams and randomize. Sunday kickoff: discount cards, outlet list, assigned-mode instructions, and the cash-conversion desk. Week 3 Monday–Sunday: personal purchases are logged by outlets, with daily reconciliation and audit purchases; group orders are flagged. Week 4 Tuesday at 6 pm: surprise recall in parallel rooms at the host college. Phones are collected. Fixed order: initial total, purchase count, free purchase list, day-by-day reconstruction, revised total. Print exact study dates and outlet names. Post-recall checking, group-payment and suspicion questions plus Food Week screen-time data follow. Debrief after all sessions finish. Individual purchase delays vary; Tuesday is two days after the final spending day, not two days after every purchase.", "Recall rate is correctly listed logged purchases divided by total logged purchases. Match outlet and item category, allowing ±1 day. Two blind coders report agreement with Cohen’s kappa. Amount within ₹5 is secondary. The five-purchase demonstration is illustrative, not data. A zero-purchase participant has no defined primary recall rate; report non-purchase rates by assigned mode, retain defined estimation and false-recall outcomes, and prespecify selection sensitivity analyses.", "H2 absolute total-estimation error is |log((recalled + 10)/(actual + 10))|. H3 signed estimation error is log((recalled + 10)/(actual + 10)); negative means underestimation. H3 predicts UPI underestimates more. Apply Holm correction across H2 and H3. False recall, count error and amount accuracy are secondary. Cue gain, tightwad score, habitual cash share, UPI app opens, checking and cash-conversion visits are exploratory. Fixed order mixes cueing with anchoring and retesting. App-use metrics depend on what each device reports. Mechanism associations are not causal identification.", "Planning target: about 350 interns in about 58 teams, 29 matched pairs, at the single host college, subject to actual cohort capacity. Approximate planning assumes about six participants per team, ICC .05, alpha .05, 80% power, d=.30 and 20% variance reduction from matching/covariates. The plotted ICC scenarios are calculated from those assumptions: 322 at .03, 350 at .05, and 420 at .10. They are not observed data or validated power for the final logistic model. Pilot the ICC and simulate power; add team pairs if feasible. If the cohort is too small, report the minimum detectable effect or recruit another intake at the same college. Primary intention-to-treat purchase-level logistic mixed model includes mode, team-pair fixed effects, purchase delay and baseline memory, tightwad and cash-share covariates, with participant and team random intercepts. There is no college term or interaction. Report odds ratio and recall-rate contrast with 95% CIs. Do not adjust away post-assignment purchase counts or checking.", "UPI records and the cash-conversion desk can both support reconstruction. The desk is an extra event only cash users experience; record it, do not claim the treatments differ in payment act alone. The 25% discount may change where and how much interns spend. The mode rule is artificial. Scope is one college, newcomers, small in-person purchases and a one-week spending window. Staff and participants see payment mode; coders and analysts can be blinded. Zero purchases, attrition, group orders and fixed cue order remain caveats. Use independent recruitment, explicit assurance the internship is unaffected, ethics approval, consent disclosing purchase logging and temporary withholding of the aim, coded IDs, minimal data, debriefing and data-withdrawal rights. Lee bounds require assumptions such as monotone selection.", "If cash recall is better, replicate and then manipulate UPI notifications, PIN requirements or spending summaries to investigate salience and rehearsal. If UPI recall is better, compare record access versus unaided recall to locate the advantage. Extend beyond this college, to longer delays and other populations. If there is no clear difference, inspect the CI: precise near-zero differs from wide and inconclusive, but nonsignificance does not establish equivalence. Opposing mechanisms are a possible explanation to test, not proof of cancellation."];
const refs = [['Soman, D. (2001)', 'Effects of payment mechanism on spending behavior: The role of rehearsal and immediacy of payments. Journal of Consumer Research, 27(4), 460–474.', 'https://doi.org/10.1086/319621'], ['Gafeeva, R., Hoelzl, E., & Roschk, H. (2018)', 'What else can your payment card do? Multifunctionality of payment modes can reduce payment transparency. Marketing Letters, 29, 61–72.', 'https://doi.org/10.1007/s11002-017-9445-2'], ['Srivastava, J., & Raghubir, P. (2002)', 'Debiasing using decomposition: The case of memory-based credit card expense estimates. Journal of Consumer Psychology, 12(3), 253–264.', 'https://doi.org/10.1207/S15327663JCP1203_07']];
function Arrow({
  back = false
}) {
  return /*#__PURE__*/_jsx("svg", {
    viewBox: "0 0 28 28",
    fill: "none",
    "aria-hidden": "true",
    style: back ? {
      transform: 'rotate(180deg)'
    } : {},
    children: /*#__PURE__*/_jsx("path", {
      d: "M5 14h18M15 6l8 8-8 8",
      stroke: "currentColor",
      strokeWidth: "1.4"
    })
  });
}
function Tag({
  children,
  tone = 'lime'
}) {
  return /*#__PURE__*/_jsx("span", {
    className: `tag ${tone}`,
    children: children
  });
}
function Heading({
  children,
  sub
}) {
  return /*#__PURE__*/_jsxs("div", {
    className: "heading",
    "data-reveal": true,
    children: [/*#__PURE__*/_jsx("h2", {
      children: children
    }), sub && /*#__PURE__*/_jsx("p", {
      children: sub
    })]
  });
}
function Printer() {
  return /*#__PURE__*/_jsx("div", {
    className: "printer iso",
    "data-theme": "light",
    dangerouslySetInnerHTML: {
      __html: printerSvg
    }
  });
}
function Recall() {
  const [selected, setSelected] = useState([true, true, true, false, false]);
  const count = selected.filter(Boolean).length;
  return /*#__PURE__*/_jsxs("div", {
    className: "recall-lab",
    children: [/*#__PURE__*/_jsx("div", {
      className: "receipt-row",
      children: ['Coffee', 'Notebook', 'Juice', 'Snack', 'Lunch'].map((label, i) => /*#__PURE__*/_jsxs("button", {
        "aria-pressed": selected[i],
        className: `purchase-slip ${selected[i] ? 'remembered' : ''}`,
        onClick: () => setSelected(v => v.map((s, j) => i === j ? !s : s)),
        children: [/*#__PURE__*/_jsxs("span", {
          className: "slip-index",
          children: ["0", i + 1]
        }), /*#__PURE__*/_jsx("span", {
          className: "slip-tick",
          children: selected[i] ? '↗' : '—'
        }), /*#__PURE__*/_jsx("span", {
          children: label
        })]
      }, label))
    }), /*#__PURE__*/_jsxs("div", {
      className: "recall-result",
      children: [/*#__PURE__*/_jsxs("span", {
        children: [/*#__PURE__*/_jsx("strong", {
          children: count
        }), " recalled ", /*#__PURE__*/_jsx("span", {
          className: "slash",
          children: "/"
        }), " ", /*#__PURE__*/_jsx("strong", {
          children: "5"
        }), " logged"]
      }), /*#__PURE__*/_jsxs("span", {
        className: "result-value",
        children: [/*#__PURE__*/_jsx(CountUp, {
          to: count * 20,
          duration: .5,
          trigger: "load"
        }), "%"]
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "figure-note",
      children: "Worked example, not study results. Select a purchase to change the score."
    })]
  });
}
function PowerPlot() {
  const [hover, setHover] = useState(1);
  const values = [{
    n: 322,
    icc: '.03',
    x: 80
  }, {
    n: 350,
    icc: '.05',
    x: 270
  }, {
    n: 420,
    icc: '.10',
    x: 520
  }];
  const points = values.map(p => ({
    ...p,
    y: 290 - p.n / 600 * 240
  }));
  return /*#__PURE__*/_jsxs("div", {
    className: "power-plot",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "plot-head",
      children: [/*#__PURE__*/_jsx("span", {
        children: "Sample needed"
      }), /*#__PURE__*/_jsx(Tag, {
        children: "Planning only"
      })]
    }), /*#__PURE__*/_jsxs("svg", {
      viewBox: "0 0 600 320",
      role: "img",
      "aria-label": "Calculated planning scenarios: ICC .03 requires about 322, .05 about 350, .10 about 420 interns. Target about 350.",
      children: [[0, 200, 400, 600].map((n, i) => /*#__PURE__*/_jsxs("g", {
        children: [/*#__PURE__*/_jsx("path", {
          d: `M65 ${290 - i * 80}H550`,
          className: "grid-line"
        }), /*#__PURE__*/_jsx("text", {
          x: "42",
          y: 295 - i * 80,
          textAnchor: "end",
          children: n
        })]
      }, n)), /*#__PURE__*/_jsx("path", {
        d: "M65 50v240h485",
        className: "axis"
      }), /*#__PURE__*/_jsx("path", {
        d: "M65 150H550",
        className: "plan-line"
      }), /*#__PURE__*/_jsx("text", {
        x: "395",
        y: "141",
        children: "Target \u2248 350"
      }), /*#__PURE__*/_jsx("path", {
        d: points.map((p, i) => `${i ? 'L' : 'M'}${p.x} ${p.y}`).join(' '),
        className: "data-line"
      }), points.map((p, i) => /*#__PURE__*/_jsxs("g", {
        className: "plot-point",
        onPointerEnter: () => setHover(i),
        children: [/*#__PURE__*/_jsx("circle", {
          cx: p.x,
          cy: p.y,
          r: hover === i ? 10 : 6,
          className: "plot-dot"
        }), /*#__PURE__*/_jsx("text", {
          x: p.x,
          y: p.y - 20,
          textAnchor: "middle",
          className: "plot-label",
          children: p.n
        }), /*#__PURE__*/_jsx("text", {
          x: p.x,
          y: "315",
          textAnchor: "middle",
          children: p.icc
        })]
      }, p.icc))]
    }), /*#__PURE__*/_jsx("div", {
      className: "plot-caption",
      children: "Within-team correlation (ICC)"
    }), /*#__PURE__*/_jsx("p", {
      className: "figure-note",
      children: "Calculated scenarios \xB7 d = .30 \xB7 80% power \xB7 about 6 interns per team"
    })]
  });
}
function App() {
  const [active, setActive] = useState(0),
    [panel, setPanel] = useState(null);
  const lenis = useRef(),
    activeRef = useRef(0),
    lock = useRef(false),
    sections = useRef([]),
    panelRef = useRef(null);
  panelRef.current = panel;
  const reduced = useRef(matchMedia('(prefers-reduced-motion: reduce)').matches);
  const go = useCallback((i, immediate = false) => {
    i = Math.max(0, Math.min(11, i));
    lenis.current?.scrollTo(sections.current[i], {
      duration: reduced.current || immediate ? 0 : 1.15,
      immediate: reduced.current || immediate,
      force: true
    });
    setPanel(null);
  }, []);
  useEffect(() => {
    const smooth = new Lenis({
      autoRaf: true,
      duration: 1.15,
      smoothWheel: false
    });
    lenis.current = smooth;
    smooth.on('scroll', ({
      scroll
    }) => {
      const next = Math.max(0, Math.min(11, Math.round(scroll / innerHeight)));
      activeRef.current = next;
      setActive(next);
    });
    const initial = parseInt(location.hash.replace('#slide-', '')) - 1;
    if (initial >= 0 && initial < 12) setTimeout(() => go(initial, true), 80);
    const wheel = e => {
      if (panelRef.current || e.target.closest('[data-lenis-prevent]')) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      if (Math.abs(e.deltaY) < 16 || lock.current) return;
      lock.current = true;
      go(activeRef.current + (e.deltaY > 0 ? 1 : -1));
      setTimeout(() => lock.current = false, 1250);
    };
    window.addEventListener('wheel', wheel, {
      passive: false,
      capture: true
    });
    const onResize = () => go(activeRef.current, true);
    window.addEventListener('resize', onResize);
    return () => {
      smooth.destroy();
      window.removeEventListener('wheel', wheel, {
        capture: true
      });
      window.removeEventListener('resize', onResize);
    };
  }, [go]);
  useEffect(() => {
    document.title = `${String(active + 1).padStart(2, '0')} · ${titles[active]} — BRED`;
    history.replaceState(null, '', `#slide-${active + 1}`);
    const ctx = gsap.context(() => {
      gsap.fromTo('[data-reveal]', {
        y: reduced.current ? 0 : 32,
        opacity: reduced.current ? 1 : 0
      }, {
        y: 0,
        opacity: 1,
        duration: reduced.current ? .01 : .85,
        stagger: .075,
        ease: 'power3.out',
        clearProps: 'transform,opacity'
      });
      if (reduced.current) return;
      const slide = sections.current[active];
      const animate = (selector, vars) => {
        if (slide.querySelector(selector)) gsap.to(selector, vars);
      };
      animate('.printer-paper', {
        y: -12,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      animate('.cue-panel .line-drawing', {
        y: -9,
        rotation: 2,
        duration: 2.4,
        stagger: .5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        transformOrigin: 'center'
      });
      animate('.cue-panel.blue circle', {
        scale: 1.12,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        transformOrigin: 'center',
        svgOrigin: '201 130',
        ease: 'sine.inOut'
      });
      animate('.pencil', {
        rotation: 11,
        y: -7,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      animate('.hypothesis .line-drawing', {
        y: -9,
        rotation: 3,
        duration: 2.3,
        stagger: .5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      if (slide.querySelector('.wing-building')) {
        gsap.fromTo('.wing-building i', {
          backgroundColor: '#eeece2'
        }, {
          backgroundColor: '#bfd21b',
          duration: .35,
          stagger: .07,
          repeat: 1,
          yoyo: true,
          delay: .7
        });
        gsap.from('.mini-building', {
          y: 14,
          opacity: 0,
          duration: .7,
          stagger: .2,
          delay: .5,
          clearProps: 'all'
        });
        gsap.from('.assigned-wings>div', {
          x: 25,
          opacity: 0,
          duration: .7,
          stagger: .25,
          delay: 1,
          clearProps: 'all'
        });
      }
      if (slide.querySelector('.time-step')) {
        gsap.from('.time-step', {
          y: 22,
          opacity: 0,
          duration: .8,
          stagger: .2,
          delay: .4,
          clearProps: 'all'
        });
        animate('.time-step .step-number', {
          y: -4,
          duration: 2,
          stagger: .35,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        });
      }
      if (slide.querySelector('.purchase-slip')) gsap.from('.purchase-slip', {
        y: 25,
        rotation: -4,
        opacity: 0,
        duration: .85,
        stagger: .12,
        delay: .4,
        clearProps: 'all'
      });
      if (slide.querySelector('.data-line')) {
        const path = slide.querySelector('.data-line'),
          length = path.getTotalLength();
        gsap.fromTo(path, {
          strokeDasharray: length,
          strokeDashoffset: length
        }, {
          strokeDashoffset: 0,
          duration: 1.6,
          delay: .6,
          ease: 'power2.inOut',
          clearProps: 'strokeDasharray,strokeDashoffset'
        });
        gsap.from('.plot-point', {
          opacity: 0,
          y: 10,
          duration: .5,
          stagger: .25,
          delay: 1,
          clearProps: 'all'
        });
      }
      animate('.measure-code', {
        y: -4,
        duration: 2.6,
        stagger: .3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      animate('.seal', {
        rotation: 9,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      animate('.path-arrow', {
        x: 5,
        y: -5,
        duration: 1.8,
        stagger: .5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, sections.current[active]);
    return () => ctx.revert();
  }, [active]);
  useEffect(() => {
    const key = e => {
      if (e.target.matches('input,textarea')) return;
      if (e.key === 'Escape') {
        setPanel(null);
        return;
      }
      if (e.key.toLowerCase() === 'g') {
        setPanel(p => p === 'overview' ? null : 'overview');
        return;
      }
      if (e.key.toLowerCase() === 'n') {
        setPanel(p => p === 'notes' ? null : 'notes');
        return;
      }
      if (e.key.toLowerCase() === 'f') {
        toggleFullscreen();
        return;
      }
      if (e.key.toLowerCase() === 'r') {
        setPanel(p => p === 'sources' ? null : 'sources');
        return;
      }
      if (e.key.toLowerCase() === 'p') {
        setMotionPaused(p => !p);
        return;
      }
      if (panel) return;
      if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        go(activeRef.current + 1);
      }
      if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        go(activeRef.current - 1);
      }
      if (e.key === 'Home') {
        e.preventDefault();
        go(0);
      }
      if (e.key === 'End') {
        e.preventDefault();
        go(11);
      }
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [go, panel]);
  function toggleFullscreen() {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(() => {});else document.exitFullscreen?.();
  }
  const [motionPaused, setMotionPaused] = useState(false);
  useEffect(() => {
    gsap.globalTimeline.paused(motionPaused);
    return () => gsap.globalTimeline.paused(false);
  }, [motionPaused]);
  const touch = useRef(0);
  const frame = (i, children, cls = '') => /*#__PURE__*/_jsx("section", {
    id: `slide-${i + 1}`,
    ref: el => sections.current[i] = el,
    className: `slide ${active === i ? 'is-active' : ''}`,
    "aria-label": `Slide ${i + 1}: ${titles[i]}`,
    onTouchStart: e => touch.current = e.changedTouches[0].clientY,
    onTouchEnd: e => {
      if (e.target.closest('button')) return;
      const d = touch.current - e.changedTouches[0].clientY;
      if (Math.abs(d) > 60) go(i + (d > 0 ? 1 : -1));
    },
    children: /*#__PURE__*/_jsxs("article", {
      className: `paper ${cls}`,
      children: [/*#__PURE__*/_jsxs("header", {
        className: "paper-header",
        children: [/*#__PURE__*/_jsx("span", {
          children: "Behavioral research & experimental design"
        }), /*#__PURE__*/_jsxs("span", {
          children: ["IIIT Hyderabad ", /*#__PURE__*/_jsx("span", {
            className: "header-dot",
            children: "\u25CF"
          }), " 2026"]
        })]
      }), children, /*#__PURE__*/_jsxs("footer", {
        className: "paper-footer",
        children: [/*#__PURE__*/_jsx("span", {
          children: chapters[i]
        }), /*#__PURE__*/_jsxs("span", {
          children: ["Research proposal ", /*#__PURE__*/_jsxs("span", {
            className: "page-number",
            children: [String(i + 1).padStart(2, '0'), " / 12"]
          })]
        })]
      })]
    })
  }, i);
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsxs("main", {
      children: [frame(0, /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsxs("div", {
          className: "cover-main",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "cover-title",
            "data-reveal": true,
            children: [/*#__PURE__*/_jsx("div", {
              className: "eyebrow",
              children: "Cash vs UPI"
            }), /*#__PURE__*/_jsxs("h1", {
              children: ["THE PURCHASES", /*#__PURE__*/_jsx("br", {}), "WE REMEMBER."]
            }), /*#__PURE__*/_jsxs("p", {
              children: ["Does how we pay change ", /*#__PURE__*/_jsx("br", {}), "what we recall?"]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "cover-art",
            "data-reveal": true,
            children: [/*#__PURE__*/_jsx("span", {
              className: "corner-label",
              children: "Fig. 01 / The paper trail"
            }), /*#__PURE__*/_jsx(Printer, {}), /*#__PURE__*/_jsx("div", {
              className: "art-cross",
              children: "+"
            })]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "orange-strip",
          "data-reveal": true,
          children: [/*#__PURE__*/_jsx("span", {
            children: "A team-randomized field experiment with summer interns"
          }), /*#__PURE__*/_jsx("span", {
            children: "Own money \xB7 One college \xB7 Intern Food Week"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "cover-bottom",
          "data-reveal": true,
          children: [/*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("strong", {
              children: "01"
            }), /*#__PURE__*/_jsx("span", {
              children: "host college"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("strong", {
              children: "07"
            }), /*#__PURE__*/_jsx("span", {
              children: "spending days"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("strong", {
              children: "01"
            }), /*#__PURE__*/_jsx("span", {
              children: "surprise recall test"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "cover-detail",
            children: [/*#__PURE__*/_jsx("strong", {
              children: "25%"
            }), /*#__PURE__*/_jsx("span", {
              children: "Food Week discount"
            })]
          })]
        })]
      }), 'cover'), frame(1, /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsxs(Heading, {
          sub: "Payment leaves more than a transaction.",
          children: ["TWO WAYS TO PAY.", /*#__PURE__*/_jsx("br", {}), "TWO MEMORY CUES."]
        }), /*#__PURE__*/_jsxs("div", {
          className: "comparison-row",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "cue-panel orange",
            "data-reveal": true,
            children: [/*#__PURE__*/_jsxs("div", {
              className: "cue-copy",
              children: [/*#__PURE__*/_jsx("span", {
                className: "eyebrow",
                children: "01 / Physical salience"
              }), /*#__PURE__*/_jsx("h3", {
                children: "Cash is handled."
              }), /*#__PURE__*/_jsxs("p", {
                children: ["Counting, handing over,", /*#__PURE__*/_jsx("br", {}), "receiving change."]
              })]
            }), /*#__PURE__*/_jsx(Wallet, {})]
          }), /*#__PURE__*/_jsxs("div", {
            className: "cue-panel blue",
            "data-reveal": true,
            children: [/*#__PURE__*/_jsxs("div", {
              className: "cue-copy",
              children: [/*#__PURE__*/_jsx("span", {
                className: "eyebrow",
                children: "02 / Digital rehearsal"
              }), /*#__PURE__*/_jsx("h3", {
                children: "UPI leaves a trail."
              }), /*#__PURE__*/_jsxs("p", {
                children: ["Notifications, histories,", /*#__PURE__*/_jsx("br", {}), "and chances to check."]
              })]
            }), /*#__PURE__*/_jsx(Phone, {})]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "bottom-question",
          "data-reveal": true,
          children: ["Which helps us remember several days later? ", /*#__PURE__*/_jsx("span", {
            children: "?"
          })]
        })]
      })), frame(2, /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsxs("div", {
          className: "lit-layout",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "lit-title",
            "data-reveal": true,
            children: [/*#__PURE__*/_jsx(Tag, {
              children: "Review of literature"
            }), /*#__PURE__*/_jsxs("h2", {
              children: ["WHAT WE KNOW.", /*#__PURE__*/_jsx("br", {}), "WHAT WE STILL", /*#__PURE__*/_jsx("br", {}), "NEED TO TEST."]
            }), /*#__PURE__*/_jsx(Pencil, {})]
          }), /*#__PURE__*/_jsx("div", {
            className: "lit-rows",
            children: [['2001', 'Soman', 'Payment rehearsal affects memory and later spending.'], ['2018', 'Gafeeva et al.', 'Recent card purchases were recalled less accurately than cash.'], ['2002', 'Srivastava & Raghubir', 'Breaking expense estimates into parts can improve accuracy.']].map(([year, name, finding], i) => /*#__PURE__*/_jsxs("div", {
              className: "lit-row",
              "data-reveal": true,
              children: [/*#__PURE__*/_jsx("span", {
                className: "lit-year",
                children: year
              }), /*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsx("h3", {
                  children: name
                }), /*#__PURE__*/_jsx("p", {
                  children: finding
                })]
              }), /*#__PURE__*/_jsx("a", {
                href: refs[i === 0 ? 0 : i === 1 ? 1 : 2][2],
                target: "_blank",
                rel: "noreferrer",
                "aria-label": `Read ${name}`,
                children: "\u2197"
              })]
            }, year))
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "gap-band lime",
          "data-reveal": true,
          children: [/*#__PURE__*/_jsx("span", {
            className: "eyebrow",
            children: "The gap"
          }), /*#__PURE__*/_jsxs("p", {
            children: ["Delayed UPI purchase recall,", /*#__PURE__*/_jsx("br", {}), "checked against independent outlet records."]
          }), /*#__PURE__*/_jsx("span", {
            className: "large-arrow",
            children: "\u2197"
          })]
        })]
      })), frame(3, /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsxs(Heading, {
          sub: "Does assigned payment mode change delayed purchase recall?",
          children: ["ONE QUESTION.", /*#__PURE__*/_jsx("br", {}), "TWO PLAUSIBLE ANSWERS."]
        }), /*#__PURE__*/_jsxs("div", {
          className: "hypothesis-grid",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "hypothesis lime",
            "data-reveal": true,
            children: [/*#__PURE__*/_jsx("span", {
              className: "eyebrow",
              children: "Salience prediction"
            }), /*#__PURE__*/_jsxs("h3", {
              children: ["CASH", /*#__PURE__*/_jsx("br", {}), "RECALLS BETTER."]
            }), /*#__PURE__*/_jsxs("p", {
              children: ["The physical payment", /*#__PURE__*/_jsx("br", {}), "may leave a stronger memory."]
            }), /*#__PURE__*/_jsx(Card, {})]
          }), /*#__PURE__*/_jsxs("div", {
            className: "hypothesis blue",
            "data-reveal": true,
            children: [/*#__PURE__*/_jsx("span", {
              className: "eyebrow",
              children: "Record prediction"
            }), /*#__PURE__*/_jsxs("h3", {
              children: ["UPI", /*#__PURE__*/_jsx("br", {}), "RECALLS BETTER."]
            }), /*#__PURE__*/_jsxs("p", {
              children: ["Records and notifications", /*#__PURE__*/_jsx("br", {}), "may rehearse the purchase."]
            }), /*#__PURE__*/_jsx(Card, {
              mode: "upi"
            })]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "hypothesis-footer",
          "data-reveal": true,
          children: [/*#__PURE__*/_jsx("b", {
            children: "H1"
          }), " Recall rates differ by mode. ", /*#__PURE__*/_jsxs("span", {
            children: [/*#__PURE__*/_jsx("b", {
              children: "H0"
            }), " No difference. ", /*#__PURE__*/_jsx(Tag, {
              tone: "orange",
              children: "Two-sided test"
            })]
          })]
        })]
      })), frame(4, /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsxs("div", {
          className: "design-top",
          children: [/*#__PURE__*/_jsxs(Heading, {
            children: ["RANDOMIZE TEAMS,", /*#__PURE__*/_jsx("br", {}), "NOT TEAMMATES."]
          }), /*#__PURE__*/_jsxs("div", {
            className: "sample-stamp",
            "data-reveal": true,
            children: [/*#__PURE__*/_jsx("strong", {
              children: /*#__PURE__*/_jsx(CountUp, {
                to: 58,
                duration: 1.2
              })
            }), /*#__PURE__*/_jsxs("span", {
              children: ["teams targeted", /*#__PURE__*/_jsx("br", {}), "29 matched pairs"]
            })]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "allocation",
          "data-reveal": true,
          children: [/*#__PURE__*/_jsxs("div", {
            className: "wing-unit",
            children: [/*#__PURE__*/_jsx("span", {
              children: "01 / Recruit"
            }), /*#__PURE__*/_jsx("div", {
              className: "wing-building",
              children: Array.from({
                length: 12
              }, (_, i) => /*#__PURE__*/_jsx("i", {}, i))
            }), /*#__PURE__*/_jsx("h3", {
              children: "Intern lab / project teams"
            })]
          }), /*#__PURE__*/_jsx("div", {
            className: "allocation-arrow",
            children: "\u2192"
          }), /*#__PURE__*/_jsxs("div", {
            className: "wing-unit",
            children: [/*#__PURE__*/_jsx("span", {
              children: "02 / Match"
            }), /*#__PURE__*/_jsxs("div", {
              className: "paired-wings",
              children: [/*#__PURE__*/_jsx("div", {
                className: "mini-building",
                children: "A"
              }), /*#__PURE__*/_jsx("div", {
                className: "mini-building",
                children: "B"
              })]
            }), /*#__PURE__*/_jsx("h3", {
              children: "Similar baseline profiles"
            })]
          }), /*#__PURE__*/_jsx("div", {
            className: "allocation-arrow",
            children: "\u2192"
          }), /*#__PURE__*/_jsxs("div", {
            className: "assigned-wings",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "lime",
              children: ["Team A ", /*#__PURE__*/_jsx("b", {
                children: "CASH"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "blue",
              children: ["Team B ", /*#__PURE__*/_jsx("b", {
                children: "UPI"
              })]
            }), /*#__PURE__*/_jsx("span", {
              children: "03 / Concealed random assignment within each pair"
            })]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "eligibility-strip orange",
          "data-reveal": true,
          children: [/*#__PURE__*/_jsx("span", {
            children: "Adults 18+"
          }), /*#__PURE__*/_jsx("span", {
            children: "Uses both modes"
          }), /*#__PURE__*/_jsx("span", {
            children: "Teams of at least 3"
          }), /*#__PURE__*/_jsx("span", {
            children: "New to this campus"
          })]
        })]
      })), frame(5, /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsxs(Heading, {
          sub: "One host college. The same discount. Identical outlet logging.",
          children: ["THEIR OWN MONEY.", /*#__PURE__*/_jsx("br", {}), "TWO PAYMENT MODES."]
        }), /*#__PURE__*/_jsxs("div", {
          className: "conditions-table",
          "data-reveal": true,
          children: [/*#__PURE__*/_jsxs("div", {
            className: "condition-labels",
            children: [/*#__PURE__*/_jsx("span", {
              children: "Money used"
            }), /*#__PURE__*/_jsx("span", {
              children: "At partner outlets"
            }), /*#__PURE__*/_jsx("span", {
              children: "Practical support"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "condition-column",
            children: [/*#__PURE__*/_jsx("h3", {
              className: "lime",
              children: "CASH"
            }), /*#__PURE__*/_jsx("span", {
              children: "Own money, in cash"
            }), /*#__PURE__*/_jsx("span", {
              children: "Cash + 25% discount"
            }), /*#__PURE__*/_jsx("span", {
              children: "Daily cash-conversion desk"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "condition-column",
            children: [/*#__PURE__*/_jsx("h3", {
              className: "blue",
              children: "UPI"
            }), /*#__PURE__*/_jsx("span", {
              children: "Own money, via UPI"
            }), /*#__PURE__*/_jsx("span", {
              children: "Food Week QR + 25% discount"
            }), /*#__PURE__*/_jsx("span", {
              children: "History & notifications remain"
            })]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "conditions-bottom",
          "data-reveal": true,
          children: [/*#__PURE__*/_jsx(Tag, {
            tone: "orange",
            children: "25% off personal orders"
          }), /*#__PURE__*/_jsxs("p", {
            children: ["Other spending is unrestricted.", /*#__PURE__*/_jsx("br", {}), "Cash exchange is 1:1, not a grant."]
          }), /*#__PURE__*/_jsx("span", {
            className: "large-arrow",
            children: "\u2197"
          })]
        })]
      })), frame(6, /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsxs(Heading, {
          children: ["SEVEN SPENDING DAYS.", /*#__PURE__*/_jsx("br", {}), "TUESDAY RECALL."]
        }), /*#__PURE__*/_jsx("div", {
          className: "timeline",
          "data-reveal": true,
          children: [['01', 'Weeks 1–2', 'Baseline', 'Consent, lifestyle survey +\npurchase-memory task.', 'paper'], ['02', 'End of week 2', 'Assign & brief', 'Match teams, randomize,\nissue discount cards.', 'orange'], ['03', 'Week 3 · Mon–Sun', 'Intern Food Week', 'Own-money purchases.\nLog, reconcile and audit.', 'lime'], ['04', 'Week 4 · Tue, 6 pm', 'Surprise recall', 'Parallel rooms; phones aside.\nDebrief after all sessions.', 'blue']].map(([n, when, title, text, tone]) => /*#__PURE__*/_jsxs("div", {
            className: `time-step ${tone}`,
            children: [/*#__PURE__*/_jsx("span", {
              className: "step-number",
              children: n
            }), /*#__PURE__*/_jsx("span", {
              className: "eyebrow",
              children: when
            }), /*#__PURE__*/_jsx("h3", {
              children: title
            }), /*#__PURE__*/_jsx("p", {
              children: text
            })]
          }, n))
        }), /*#__PURE__*/_jsxs("div", {
          className: "recall-order",
          "data-reveal": true,
          children: [/*#__PURE__*/_jsx("span", {
            className: "eyebrow",
            children: "Recall order"
          }), /*#__PURE__*/_jsxs("p", {
            children: ["Total \u2192 Count \u2192 ", /*#__PURE__*/_jsx("b", {
              children: "Free purchase list"
            }), " \u2192 Day-by-day prompts \u2192 Revised total"]
          }), /*#__PURE__*/_jsx("span", {
            className: "figure-note",
            children: "Debrief after all sessions finish."
          })]
        })]
      })), frame(7, /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsxs("div", {
          className: "outcome-top",
          children: [/*#__PURE__*/_jsxs(Heading, {
            sub: "Primary outcome / Free purchase recall",
            children: ["DID THE PURCHASE", /*#__PURE__*/_jsx("br", {}), "COME BACK TO MIND?"]
          }), /*#__PURE__*/_jsx(Tag, {
            tone: "blue",
            children: "Memory \u2260 total estimation"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "outcome-content",
          children: [/*#__PURE__*/_jsx("div", {
            className: "recall-figure",
            "data-reveal": true,
            children: /*#__PURE__*/_jsx(Recall, {})
          }), /*#__PURE__*/_jsxs("div", {
            className: "scoring",
            "data-reveal": true,
            children: [/*#__PURE__*/_jsx("h3", {
              children: "A correct match needs"
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("span", {
                children: "01"
              }), " Correct outlet"]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("span", {
                children: "02"
              }), " Correct item category"]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("span", {
                children: "03"
              }), " Day within \xB11 day"]
            }), /*#__PURE__*/_jsxs("p", {
              children: ["Two blinded coders.", /*#__PURE__*/_jsx("br", {}), "Zero purchases: recall rate undefined."]
            })]
          })]
        })]
      })), frame(8, /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsxs(Heading, {
          children: ["THE SUPPORTING", /*#__PURE__*/_jsx("br", {}), "MEASURES."]
        }), /*#__PURE__*/_jsx("div", {
          className: "measures-grid",
          children: [['H2', 'Total-estimate error', 'Absolute log-ratio error differs between payment modes.', 'orange'], ['H3', 'Signed estimation error', 'UPI payers underestimate total spending more.', 'paper'], ['E1', 'Cue-associated gain', 'Change after day-by-day prompts. Fixed order limits inference.', 'blue'], ['E2', 'Possible mechanisms', 'App use, cash conversions and spending personality.', 'lime']].map(([n, title, text, tone]) => /*#__PURE__*/_jsxs("div", {
            className: `measure ${tone}`,
            "data-reveal": true,
            children: [/*#__PURE__*/_jsx("span", {
              className: "measure-code",
              children: n
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("h3", {
                children: title
              }), /*#__PURE__*/_jsx("p", {
                children: text
              })]
            }), n === 'E1' || n === 'E2' ? /*#__PURE__*/_jsx("span", {
              className: "measure-note",
              children: "EXPLORATORY"
            }) : null]
          }, title))
        }), /*#__PURE__*/_jsx("div", {
          className: "small-footer",
          "data-reveal": true,
          children: "H1 is primary. Holm correction across H2 and H3. Cue gain and mechanisms are exploratory."
        })]
      })), frame(9, /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsxs("div", {
          className: "analysis-layout",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "analysis-copy",
            "data-reveal": true,
            children: [/*#__PURE__*/_jsx(Tag, {
              children: "Planned, not observed"
            }), /*#__PURE__*/_jsxs("h2", {
              children: ["ENOUGH TEAMS.", /*#__PURE__*/_jsx("br", {}), "THE RIGHT MODEL."]
            }), /*#__PURE__*/_jsxs("div", {
              className: "analysis-n",
              children: [/*#__PURE__*/_jsx(CountUp, {
                to: 350,
                duration: 1.1
              }), /*#__PURE__*/_jsxs("span", {
                children: ["interns targeted", /*#__PURE__*/_jsx("br", {}), "at one host college"]
              })]
            }), /*#__PURE__*/_jsxs("p", {
              children: ["Analyze by assigned mode.", /*#__PURE__*/_jsx("br", {}), "Account for team and participant clustering."]
            }), /*#__PURE__*/_jsxs("p", {
              className: "small-copy",
              children: ["Purchase-level logistic mixed model.", /*#__PURE__*/_jsx("br", {}), "Report effect size + 95% confidence interval."]
            })]
          }), /*#__PURE__*/_jsx("div", {
            className: "chart-panel",
            "data-reveal": true,
            children: /*#__PURE__*/_jsx(PowerPlot, {})
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "analysis-band orange",
          "data-reveal": true,
          children: "Confirm cohort capacity and power in the pilot. Add team pairs, or state the minimum detectable effect."
        })]
      })), frame(10, /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsxs(Heading, {
          children: ["WHAT THIS DESIGN", /*#__PURE__*/_jsx("br", {}), "CAN \u2014 AND CAN\u2019T \u2014 SAY."]
        }), /*#__PURE__*/_jsxs("div", {
          className: "limits-layout",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "limits-list",
            "data-reveal": true,
            children: [/*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("span", {
                children: "01"
              }), /*#__PURE__*/_jsx("h3", {
                children: "Records & cash conversions"
              }), /*#__PURE__*/_jsx("p", {
                children: "Both may help reconstruct a spending total."
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("span", {
                children: "02"
              }), /*#__PURE__*/_jsx("h3", {
                children: "A specific population"
              }), /*#__PURE__*/_jsx("p", {
                children: "One college. Summer interns. Seven spending days."
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("span", {
                children: "03"
              }), /*#__PURE__*/_jsx("h3", {
                children: "Selection & fixed order"
              }), /*#__PURE__*/_jsx("p", {
                children: "A 25% discount, dropout and fixed cue order need care."
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "ethics-panel lime",
            "data-reveal": true,
            children: [/*#__PURE__*/_jsx("span", {
              className: "eyebrow",
              children: "Before data collection"
            }), /*#__PURE__*/_jsxs("h3", {
              children: ["CONSENT.", /*#__PURE__*/_jsx("br", {}), "AUDIT.", /*#__PURE__*/_jsx("br", {}), "DEBRIEF."]
            }), /*#__PURE__*/_jsxs("p", {
              children: ["Independent recruitment. Disclosed logging.", /*#__PURE__*/_jsx("br", {}), "No internship consequences. Withdrawal rights."]
            }), /*#__PURE__*/_jsxs("div", {
              className: "seal",
              children: ["PROPOSAL", /*#__PURE__*/_jsx("br", {}), "ONLY \u2197"]
            })]
          })]
        })]
      })), frame(11, /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsxs(Heading, {
          children: ["WHAT EITHER OUTCOME", /*#__PURE__*/_jsx("br", {}), "WOULD MEAN."]
        }), /*#__PURE__*/_jsxs("div", {
          className: "outcomes-grid",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "outcome-path orange",
            "data-reveal": true,
            children: [/*#__PURE__*/_jsx("span", {
              className: "eyebrow",
              children: "If a mode difference appears"
            }), /*#__PURE__*/_jsxs("h3", {
              children: ["REPLICATE.", /*#__PURE__*/_jsx("br", {}), "THEN TEST WHY."]
            }), /*#__PURE__*/_jsxs("p", {
              children: ["Randomize record access or notifications.", /*#__PURE__*/_jsx("br", {}), "Test other populations and longer delays."]
            }), /*#__PURE__*/_jsx("span", {
              className: "path-arrow",
              children: "\u2197"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "outcome-path blue",
            "data-reveal": true,
            children: [/*#__PURE__*/_jsx("span", {
              className: "eyebrow",
              children: "If no clear difference appears"
            }), /*#__PURE__*/_jsxs("h3", {
              children: ["LOOK AT", /*#__PURE__*/_jsx("br", {}), "THE PRECISION."]
            }), /*#__PURE__*/_jsxs("p", {
              children: ["A narrow interval near zero differs", /*#__PURE__*/_jsx("br", {}), "from a wide, inconclusive interval."]
            }), /*#__PURE__*/_jsx("span", {
              className: "path-arrow",
              children: "\u2197"
            })]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "closing-bar lime",
          "data-reveal": true,
          children: [/*#__PURE__*/_jsx("p", {
            children: "Nonsignificance alone does not establish equivalence."
          }), /*#__PURE__*/_jsx("span", {
            className: "reference-key",
            children: "References available with R"
          })]
        })]
      }))]
    }), /*#__PURE__*/_jsx(AnimatePresence, {
      children: panel && /*#__PURE__*/_jsx(motion.div, {
        className: "modal-backdrop",
        "data-lenis-prevent": true,
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        },
        onClick: () => setPanel(null),
        children: /*#__PURE__*/_jsxs(motion.aside, {
          role: "dialog",
          "aria-modal": "true",
          "aria-label": panel === 'overview' ? 'Slide overview' : panel === 'notes' ? 'Presenter notes' : 'References',
          className: `modal ${panel}`,
          initial: {
            y: 30,
            opacity: 0
          },
          animate: {
            y: 0,
            opacity: 1
          },
          exit: {
            y: 20,
            opacity: 0
          },
          transition: {
            duration: .25
          },
          onClick: e => e.stopPropagation(),
          children: [/*#__PURE__*/_jsxs("div", {
            className: "modal-heading",
            children: [/*#__PURE__*/_jsx("span", {
              children: panel === 'overview' ? 'THE PRESENTATION' : panel === 'notes' ? `PRESENTER NOTES · ${String(active + 1).padStart(2, '0')}` : 'REFERENCES & STUDY SOURCE'
            }), /*#__PURE__*/_jsx("button", {
              "aria-label": "Close dialog",
              onClick: () => setPanel(null),
              children: "\xD7"
            })]
          }), panel === 'overview' ? /*#__PURE__*/_jsx("div", {
            className: "overview-grid",
            children: titles.map((t, i) => /*#__PURE__*/_jsxs("button", {
              onClick: () => go(i),
              className: i === active ? 'current' : '',
              children: [/*#__PURE__*/_jsx("span", {
                children: String(i + 1).padStart(2, '0')
              }), /*#__PURE__*/_jsx("h3", {
                children: t
              }), /*#__PURE__*/_jsxs("small", {
                children: [timings[i], " seconds"]
              })]
            }, t))
          }) : panel === 'notes' ? /*#__PURE__*/_jsxs(_Fragment, {
            children: [/*#__PURE__*/_jsx("h2", {
              children: titles[active]
            }), /*#__PURE__*/_jsxs(Tag, {
              children: [timings[active], " seconds \xB7 10-minute talk"]
            }), /*#__PURE__*/_jsx("p", {
              className: "note-text",
              children: notes[active]
            }), /*#__PURE__*/_jsx("button", {
              className: "text-link",
              onClick: () => setPanel('sources'),
              children: "View references \u2197"
            })]
          }) : /*#__PURE__*/_jsxs(_Fragment, {
            children: [/*#__PURE__*/_jsx("h2", {
              children: "Sources behind the proposal"
            }), refs.map(([name, title, url]) => /*#__PURE__*/_jsxs("a", {
              className: "reference",
              href: url,
              target: "_blank",
              rel: "noreferrer",
              children: [/*#__PURE__*/_jsxs("strong", {
                children: [name, " \u2197"]
              }), /*#__PURE__*/_jsx("span", {
                children: title
              })]
            }, name)), /*#__PURE__*/_jsxs("div", {
              className: "reference",
              children: [/*#__PURE__*/_jsx("strong", {
                children: "Study protocol \xB7 16 November 2026"
              }), /*#__PURE__*/_jsx("span", {
                children: "Cash vs UPI Recall: Intern Field Experiment Design. 18 pages. Adapted to one college as requested. Planning scenarios are calculated from the protocol assumptions; cohort capacity and power remain to be confirmed."
              })]
            }), /*#__PURE__*/_jsx("p", {
              className: "source-credit",
              children: "Receipt-printer geometry built with Anatomy. Number animation: React Bits CountUp. Motion: GSAP, Lenis and Motion."
            })]
          })]
        })
      })
    }), /*#__PURE__*/_jsxs("span", {
      className: "sr-only",
      role: "status",
      "aria-live": "polite",
      children: ["Slide ", active + 1, " of 12: ", titles[active]]
    })]
  });
}
createRoot(document.getElementById('root')).render(/*#__PURE__*/_jsx(App, {}));