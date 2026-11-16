import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion } from 'motion/react';
import { researchArt } from './research-art.js';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const titles = ["The purchases we remember", "Literature review", "Research gap and question", "Independent and dependent variables", "Baseline testing and matching", "Why recruit newcomers?", "Random allocation", "Payment conditions and rewards", "Independent transaction records", "One-week procedure", "Confounders and safeguards", "Validity and reliability", "Tuesday memory test", "What this experiment tells us", "Limitations and caveats"];
const timings = [15, 65, 45, 35, 65, 25, 40, 40, 45, 40, 40, 45, 20, 45, 35];
const notes = ["A field study of payment mode and delayed memory. Both groups receive the same completion reward.", "Payment methods can change how expenses are encoded and reconstructed. Soman · 2001 Rehearsal and immediacy Writing or actively processing a payment amount and immediate wealth depletion affect how past payments influence later spending. This motivates testing payment-related memory, rather than assuming every digital mode behaves alike. Gafeeva et al. · 2018 Payment transparency The study examines how multifunctional payment cards can reduce payment transparency. Its card context motivates our question but does not establish a cash-versus-UPI effect. Srivastava & Raghubir · 2002 Reconstruction of expenses Breaking expense estimates into categories can change memory-based credit-card estimates. Unaided recall and prompted reconstruction should therefore be distinguished. Background: spending decisions depend partly on what previous payments bring to mind. Citations open the original sources.", "Can payment mode change delayed purchase memory in everyday campus spending? The gap Cash versus UPI in the field The cited studies do not settle delayed cash-versus-UPI purchase recall against independently recorded transactions in this setting. Research question Does assigned payment mode affect recall? Compare newcomers randomly assigned to cash or UPI during the same one-week spending period. Hypotheses H0: no difference · H1: a difference Use a two-sided hypothesis: physical handling may favor cash, while digital records and notifications may favor UPI. The exact outcome definition will be finalized before data collection. Contribution: a randomized field comparison with vendor records as an independent transaction benchmark.", "One manipulated factor, with two levels. A between-subjects field experiment. Independent variable Assigned payment mode Cash only versus UPI only for eligible campus purchases during the experiment week. Each participant experiences one condition. Dependent variable Delayed purchase-memory performance Tuesday recall compared with the recorded purchases. Exact test, scoring rules and primary metric are pending your specification. Operationalization Assignment is distinct from actual use Record assigned mode, observed transaction mode and deviations separately. One factor with two levels is not a factorial design. Construct: memory for actual purchase episodes, distinguished from estimating an amount using known prices.", "Measure likely sources of imbalance before revealing payment assignments. Memory A neutral delayed-memory task Use standardized instructions, exposure time and delay. Score recall of non-shopping material to avoid rehearsing the later purchase task. Spending habits Prior spending and cash use With consent, use prior UPI history for digital spending and a brief retrospective survey for cash expenditure and cash share. UPI records alone cannot establish cash spending. Masking the objective Additional tests Include additional attention, numeracy and lifestyle tasks so participants are less likely to guess that purchase recall is the dependent variable. This reduces demand characteristics; check for hypothesis guessing after recall and debrief participants. Match on baseline memory, mean expenditure and habitual cash share; randomize within pairs. Matching improves balance but does not guarantee equal means.", "Prior price knowledge can blur the distinction between memory and reconstruction. The threat Familiar prices make totals easier to infer A long-term resident may reconstruct expenditure from familiar menu prices without remembering the payment amount. Eligibility restriction New to this college Recruit adult newcomers who can use both cash and UPI. Screen prior campus residence, outlet familiarity and prior visits before allocation. Remaining caveat Newcomers also learn prices Keep the spending window identical and record baseline familiarity. Newcomer status reduces this threat; it does not eliminate it. Internal validity improves through restriction, at the cost of narrower population generalizability.", "Match individual participants, then randomly assign one person in each pair to each mode. Recruitment is voluntary convenience sampling, not random sampling. Conceal allocation until baseline measurement and enrollment are complete.", "Use personal money. No discount. The same reward rule in both conditions. Cash condition Use only cash Use cash for eligible purchases during the seven-day experiment. Vendors record expenditure without asking participants to keep a diary. UPI condition Use only UPI Use UPI for the same eligible purchases and period. Consent-based transaction records are reconciled with vendor logs. Equal incentive Reward completion in both groups Participants receive discounts at campus vendors by providing their student ID. This allows vendors to link each purchase to the participant and record their expenditure. Define eligible transactions, emergencies and mixed-mode purchases before recruitment. Record deviations without deleting assigned participants from the primary comparison.", "Partner with all campus vendors to record both payment conditions. Vendor logging A common transaction record Record coded participant ID, date/time, vendor, item, amount and payment mode for each purchase. Keep the capture process the same for cash and UPI. Avoid memory rehearsal No participant spending diary Asking cash users to write down purchases would add encoding and rehearsal to that condition. Vendor recording keeps this task out of participants’ routines. Record quality Reconcile and audit daily Check missing IDs, duplicate entries, refunds, split payments and group orders. Reconcile UPI records and vendor totals; audit cash logs against sales records where feasible. All-vendor coverage is a study requirement to arrange, not a partnership already secured. Off-campus cash expenditure remains harder to verify.", "A common exposure period and a common Tuesday recall session. Before the week Consent → baseline → match → randomize Train vendors, pilot record capture and issue coded participant identifiers. Explain logging and assigned-mode requirements without revealing the recall hypothesis. Monday–Sunday Seven days of recorded spending Record cash and UPI purchases for one week only. Apply identical participant contact and compliance procedures to both conditions. Tuesday Recall before records are opened Run the same test at the same time, without phones or transaction histories available during testing. Collect suspicion and compliance checks, then debrief. Tuesday is two days after the final spending day. Earlier purchases have longer recall delays, so retain transaction timestamps.", "Protect the comparison while keeping ordinary purchases as natural as possible. Before assignment Selection and baseline differences Recruit both conditions from the same eligible cohort. Match on prespecified baseline measures and conceal allocation until enrollment and baseline scoring are complete. During spending Unequal treatment and contamination Keep rewards, instructions, logging and contact equal. Record mode switching, shared orders, price changes and cross-group discussion. Digital histories remain a real-world feature of UPI. During recall Experimenter and demand effects Standardize the test environment; mask assessors and coders to assignment where possible. Keep phones aside, avoid leading prompts and debrief after testing. Randomization addresses confounding in expectation. Differential attrition, noncompliance and record gaps can still threaten internal validity.", "Construct validity: We want to measure memory of actual purchases, rather than the ability to reconstruct totals from familiar prices. Recruiting newcomers reduces prior price knowledge; comparing unaided recall with vendor records checks memory against what was actually purchased. Reliability: Split-half reliability: divide comparable baseline-memory items into two balanced halves and correlate participants’ scores across them. This checks internal consistency within a single assessment, provided both halves measure the same memory ability. Internal and external validity: Baseline matching, random assignment and equal procedures help isolate the effect of payment mode. However, volunteers from one college do not represent all consumers. Findings apply most directly to similar newcomers making everyday campus purchases.", "Test details and metrics will be finalized next. Fixed already Delayed recall after the spending week All participants take the same Tuesday test under standardized conditions and without consulting transaction histories during the task. Pending your details Task and scoring specification Finalize prompts, response format, time limit, purchase-matching rules, primary outcome and any secondary measures. Do not treat the previous deck’s formulas as decided. Before collection Freeze the scoring and analysis rules Pilot clarity and difficulty; prespecify missing-record handling, zero purchases, exclusions and how noncompliance will be reported. No results are shown. The outcome metric and memory-test procedure are intentionally pending.", "If cash recall is better: Cash may make purchases more memorable. Better recall in the cash group would support the idea that physically handling money helps people remember purchases. However, the result alone would not explain why cash users remember more. If UPI recall is better: Digital payment may support memory. Better recall in the UPI group would show that digital payment need not weaken purchase memory. Transaction histories and notifications are possible explanations to test separately. If neither group recalls better: No clear advantage under these conditions. A precise result near zero would suggest little difference in this setting. A wide confidence interval would leave the question unresolved. The study could guide later tests of spending summaries or notifications in payment apps.", "Limited external validity and generalizability: Recruiting volunteers from one college risks sampling bias and limits population validity. Findings cannot be assumed to generalize to other colleges, age groups or experienced campus residents. Baseline matching improves group comparability, not sample representativeness. Threats to ecological validity: Assigned payment modes and student-ID discounts differ from unrestricted everyday spending. Knowing purchases are recorded may also change behavior: the Hawthorne effect. These features limit how closely the study reflects normal purchasing. Threats to internal validity: Noncompliance, differential attrition and incomplete vendor records can distort the comparison. Shared payments and cross-group discussion may contaminate conditions. Random assignment reduces baseline confounding but does not remove these post-assignment threats. Ethical safeguards remain necessary: consent for logging, minimal financial data, debriefing and withdrawal rights. One week also limits conclusions about longer-term behavior; replicate across cohorts, campuses and time periods."];
const refs = [['Soman, D. (2001)', 'Effects of payment mechanism on spending behavior: The role of rehearsal and immediacy of payments. Journal of Consumer Research, 27(4), 460–474.', 'https://doi.org/10.1086/319621'], ['Gafeeva, R., Hoelzl, E., & Roschk, H. (2018)', 'What else can your payment card do? Multifunctionality of payment modes can reduce payment transparency. Marketing Letters, 29, 61–72.', 'https://doi.org/10.1007/s11002-017-9445-2'], ['Srivastava, J., & Raghubir, P. (2002)', 'Debiasing using decomposition: The case of memory-based credit card expense estimates. Journal of Consumer Psychology, 12(3), 253–264.', 'https://doi.org/10.1207/S15327663JCP1203_07']];
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
  children
}) {
  return /*#__PURE__*/_jsx("div", {
    className: "heading",
    "data-reveal": true,
    children: /*#__PURE__*/_jsx("h2", {
      children: children
    })
  });
}
function Anatomy({
  kind
}) {
  return /*#__PURE__*/_jsx("div", {
    className: 'anatomy-figure iso anatomy-' + kind,
    "data-theme": "light",
    dangerouslySetInnerHTML: {
      __html: researchArt[kind]
    }
  });
}
const researchContent = {
  "1": {
    "title": "LITERATURE REVIEW",
    "sub": "Payment methods can change how expenses are encoded and reconstructed.",
    "rows": [["Soman · 2001", "Rehearsal and immediacy", "Writing or actively processing a payment amount and immediate wealth depletion affect how past payments influence later spending. This motivates testing payment-related memory, rather than assuming every digital mode behaves alike."], ["Gafeeva et al. · 2018", "Payment transparency", "The study examines how multifunctional payment cards can reduce payment transparency. Its card context motivates our question but does not establish a cash-versus-UPI effect."], ["Srivastava & Raghubir · 2002", "Reconstruction of expenses", "Breaking expense estimates into categories can change memory-based credit-card estimates. Unaided recall and prompted reconstruction should therefore be distinguished."]],
    "foot": "Background: spending decisions depend partly on what previous payments bring to mind. Citations open the original sources."
  },
  "2": {
    "title": "RESEARCH GAP AND QUESTION",
    "sub": "Can payment mode change delayed purchase memory in everyday campus spending?",
    "rows": [["The gap", "Cash versus UPI in the field", "The cited studies do not settle delayed cash-versus-UPI purchase recall against independently recorded transactions in this setting."], ["Research question", "Does assigned payment mode affect recall?", "Compare newcomers randomly assigned to cash or UPI during the same one-week spending period."], ["Hypotheses", "H0: no difference · H1: a difference", "Use a two-sided hypothesis: physical handling may favor cash, while digital records and notifications may favor UPI. The exact outcome definition will be finalized before data collection."]],
    "foot": "Contribution: a randomized field comparison with vendor records as an independent transaction benchmark."
  },
  "3": {
    "title": "INDEPENDENT AND DEPENDENT VARIABLES",
    "sub": "One manipulated factor, with two levels. A between-subjects field experiment.",
    "rows": [["Independent variable", "Assigned payment mode", "Cash only versus UPI only for eligible campus purchases during the experiment week. Each participant experiences one condition."], ["Dependent variable", "Delayed purchase-memory performance", "Tuesday recall compared with the recorded purchases. Exact test, scoring rules and primary metric are pending your specification."], ["Operationalization", "Assignment is distinct from actual use", "Record assigned mode, observed transaction mode and deviations separately. One factor with two levels is not a factorial design."]],
    "foot": "Construct: memory for actual purchase episodes, distinguished from estimating an amount using known prices."
  },
  "4": {
    "title": "BASELINE TESTING AND MATCHING",
    "sub": "Measure likely sources of imbalance before revealing payment assignments.",
    "rows": [["Memory", "A neutral delayed-memory task", "Use standardized instructions, exposure time and delay. Score recall of non-shopping material to avoid rehearsing the later purchase task."], ["Spending habits", "Prior spending and cash use", "With consent, use prior UPI history for digital spending and a brief retrospective survey for cash expenditure and cash share. UPI records alone cannot establish cash spending."], ["Masking the objective", "Additional tests", "Include additional attention, numeracy and lifestyle tasks so participants are less likely to guess that purchase recall is the dependent variable. This reduces demand characteristics; check for hypothesis guessing after recall and debrief participants."]],
    "foot": "Match on baseline memory, mean expenditure and habitual cash share; randomize within pairs. Matching improves balance but does not guarantee equal means."
  },
  "5": {
    "title": "WHY RECRUIT NEWCOMERS?",
    "sub": "Prior price knowledge can blur the distinction between memory and reconstruction.",
    "rows": [["The threat", "Familiar prices make totals easier to infer", "A long-term resident may reconstruct expenditure from familiar menu prices without remembering the payment amount."], ["Eligibility restriction", "New to this college", "Recruit adult newcomers who can use both cash and UPI. Screen prior campus residence, outlet familiarity and prior visits before allocation."], ["Remaining caveat", "Newcomers also learn prices", "Keep the spending window identical and record baseline familiarity. Newcomer status reduces this threat; it does not eliminate it."]],
    "foot": "Internal validity improves through restriction, at the cost of narrower population generalizability."
  },
  "7": {
    "title": "PAYMENT CONDITIONS AND REWARDS",
    "sub": "Use personal money. No discount. The same reward rule in both conditions.",
    "rows": [["Cash condition", "Use only cash", "Use cash for eligible purchases during the seven-day experiment. Vendors record expenditure without asking participants to keep a diary."], ["UPI condition", "Use only UPI", "Use UPI for the same eligible purchases and period. Consent-based transaction records are reconciled with vendor logs."], ["Equal incentive", "Reward completion in both groups", "Participants receive discounts at campus vendors by providing their student ID. This allows vendors to link each purchase to the participant and record their expenditure."]],
    "foot": "Define eligible transactions, emergencies and mixed-mode purchases before recruitment. Record deviations without deleting assigned participants from the primary comparison."
  },
  "8": {
    "title": "INDEPENDENT TRANSACTION RECORDS",
    "sub": "Partner with all campus vendors to record both payment conditions.",
    "rows": [["Vendor logging", "A common transaction record", "Record coded participant ID, date/time, vendor, item, amount and payment mode for each purchase. Keep the capture process the same for cash and UPI."], ["Avoid memory rehearsal", "No participant spending diary", "Asking cash users to write down purchases would add encoding and rehearsal to that condition. Vendor recording keeps this task out of participants’ routines."], ["Record quality", "Reconcile and audit daily", "Check missing IDs, duplicate entries, refunds, split payments and group orders. Reconcile UPI records and vendor totals; audit cash logs against sales records where feasible."]],
    "foot": "All-vendor coverage is a study requirement to arrange, not a partnership already secured. Off-campus cash expenditure remains harder to verify."
  },
  "9": {
    "title": "ONE-WEEK PROCEDURE",
    "sub": "A common exposure period and a common Tuesday recall session.",
    "rows": [["Before the week", "Consent → baseline → match → randomize", "Train vendors, pilot record capture and issue coded participant identifiers. Explain logging and assigned-mode requirements without revealing the recall hypothesis."], ["Monday–Sunday", "Seven days of recorded spending", "Record cash and UPI purchases for one week only. Apply identical participant contact and compliance procedures to both conditions."], ["Tuesday", "Recall before records are opened", "Run the same test at the same time, without phones or transaction histories available during testing. Collect suspicion and compliance checks, then debrief."]],
    "foot": "Tuesday is two days after the final spending day. Earlier purchases have longer recall delays, so retain transaction timestamps."
  },
  "10": {
    "title": "CONFOUNDERS AND SAFEGUARDS",
    "sub": "Protect the comparison while keeping ordinary purchases as natural as possible.",
    "rows": [["Before assignment", "Selection and baseline differences", "Recruit both conditions from the same eligible cohort. Match on prespecified baseline measures and conceal allocation until enrollment and baseline scoring are complete."], ["During spending", "Unequal treatment and contamination", "Keep rewards, instructions, logging and contact equal. Record mode switching, shared orders, price changes and cross-group discussion. Digital histories remain a real-world feature of UPI."], ["During recall", "Experimenter and demand effects", "Standardize the test environment; mask assessors and coders to assignment where possible. Keep phones aside, avoid leading prompts and debrief after testing."]],
    "foot": "Randomization addresses confounding in expectation. Differential attrition, noncompliance and record gaps can still threaten internal validity."
  },
  "11": {
    "title": "VALIDITY AND RELIABILITY",
    "sub": "Each quality claim needs a concrete check.",
    "rows": [["Construct validity", "Construct validity", "We want to measure memory of actual purchases, rather than the ability to reconstruct totals from familiar prices. Recruiting newcomers reduces prior price knowledge; comparing unaided recall with vendor records checks memory against what was actually purchased."], ["Reliability", "Reliability", "Split-half reliability: divide comparable baseline-memory items into two balanced halves and correlate participants’ scores across them. This checks internal consistency within a single assessment, provided both halves measure the same memory ability."], ["Internal and external validity", "Internal and external validity", "Baseline matching, random assignment and equal procedures help isolate the effect of payment mode. However, volunteers from one college do not represent all consumers. Findings apply most directly to similar newcomers making everyday campus purchases."]],
    "foot": "Course links: operationalization, measurement error, demand characteristics, internal validity, construct validity, reliability and external validity."
  },
  "12": {
    "title": "TUESDAY MEMORY TEST",
    "sub": "Test details and metrics will be finalized next.",
    "rows": [["Fixed already", "Delayed recall after the spending week", "All participants take the same Tuesday test under standardized conditions and without consulting transaction histories during the task."], ["Pending your details", "Task and scoring specification", "Finalize prompts, response format, time limit, purchase-matching rules, primary outcome and any secondary measures. Do not treat the previous deck’s formulas as decided."], ["Before collection", "Freeze the scoring and analysis rules", "Pilot clarity and difficulty; prespecify missing-record handling, zero purchases, exclusions and how noncompliance will be reported."]],
    "foot": "No results are shown. The outcome metric and memory-test procedure are intentionally pending."
  },
  "13": {
    "title": "WHAT THIS EXPERIMENT TELLS US",
    "sub": "Estimate the effect of assignment to cash or UPI under this study’s conditions.",
    "rows": [["If cash recall is better", "Cash may make purchases more memorable", "Better recall in the cash group would support the idea that physically handling money helps people remember purchases. However, the result alone would not explain why cash users remember more."], ["If UPI recall is better", "Digital payment may support memory", "Better recall in the UPI group would show that digital payment need not weaken purchase memory. Transaction histories and notifications are possible explanations to test separately."], ["If neither group recalls better", "No clear advantage under these conditions", "A precise result near zero would suggest little difference in this setting. A wide confidence interval would leave the question unresolved. The study could guide later tests of spending summaries or notifications in payment apps."]],
    "foot": "A later mode × record-access experiment could use a factorial design. The present study has one manipulated factor."
  },
  "14": {
    "title": "LIMITATIONS AND CAVEATS",
    "sub": "The design narrows uncertainty; it cannot remove every alternative explanation.",
    "rows": [["External validity", "Limited external validity and generalizability", "Recruiting volunteers from one college risks sampling bias and limits population validity. Findings cannot be assumed to generalize to other colleges, age groups or experienced campus residents. Baseline matching improves group comparability, not sample representativeness."], ["Ecological validity", "Threats to ecological validity", "Assigned payment modes and student-ID discounts differ from unrestricted everyday spending. Knowing purchases are recorded may also change behavior: the Hawthorne effect. These features limit how closely the study reflects normal purchasing."], ["Internal validity", "Threats to internal validity", "Noncompliance, differential attrition and incomplete vendor records can distort the comparison. Shared payments and cross-group discussion may contaminate conditions. Random assignment reduces baseline confounding but does not remove these post-assignment threats."]],
    "foot": "Extend to other cohorts and campuses, longer spending windows and different purchase contexts. Report missingness and deviations transparently."
  }
};
function Copy({
  row,
  number,
  heading,
  source
}) {
  return /*#__PURE__*/_jsxs("div", {
    className: "study-copy",
    "data-reveal": true,
    children: [number && /*#__PURE__*/_jsx("span", {
      className: "study-number",
      children: number
    }), /*#__PURE__*/_jsx("h3", {
      children: heading || row[1]
    }), /*#__PURE__*/_jsxs("p", {
      children: [source && /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsxs("strong", {
          children: [row[0], "."]
        }), " "]
      }), heading && heading !== row[1] ? row[1] + '. ' : '', row[2]]
    })]
  });
}
function ResearchSlide({
  index
}) {
  const d = researchContent[index],
    r = d.rows;
  let body;
  if (index === 1) body = /*#__PURE__*/_jsx("div", {
    className: "literature-track",
    children: r.map((row, i) => /*#__PURE__*/_jsxs("div", {
      className: "study-entry",
      children: [/*#__PURE__*/_jsx("span", {
        className: "timeline-dot"
      }), /*#__PURE__*/_jsx(Copy, {
        row: row,
        number: ['2001', '2018', '2002'][i],
        source: true
      }), /*#__PURE__*/_jsx("a", {
        href: refs[i][2],
        target: "_blank",
        rel: "noreferrer",
        children: "Read study \u2197"
      })]
    }, i))
  });
  if (index === 2) body = /*#__PURE__*/_jsxs("div", {
    className: "gap-composition",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "question-poster",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsxs("h3", {
        children: ["Does how we pay", /*#__PURE__*/_jsx("br", {}), "change what", /*#__PURE__*/_jsx("br", {}), "we remember?"]
      }), /*#__PURE__*/_jsxs("div", {
        className: "question-modes",
        children: [/*#__PURE__*/_jsx("span", {
          children: "CASH"
        }), /*#__PURE__*/_jsx("span", {
          children: "vs"
        }), /*#__PURE__*/_jsx("span", {
          children: "UPI"
        })]
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "stacked-copy",
      children: r.map((row, i) => /*#__PURE__*/_jsx(Copy, {
        row: row,
        heading: ['The research gap', 'Research question', 'Hypotheses'][i]
      }, i))
    })]
  });
  if (index === 3) body = /*#__PURE__*/_jsxs("div", {
    className: "variable-map simplified-variables",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "variable-input",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsxs("h3", {
        children: [/*#__PURE__*/_jsx("strong", {
          children: "IV"
        }), " \xB7 Payment mode"]
      }), /*#__PURE__*/_jsxs("div", {
        className: "mini-payments",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "cash",
          children: [/*#__PURE__*/_jsx(Anatomy, {
            kind: "cash"
          }), /*#__PURE__*/_jsx("b", {
            children: "CASH"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "upi",
          children: [/*#__PURE__*/_jsx(Anatomy, {
            kind: "upi"
          }), /*#__PURE__*/_jsx("b", {
            children: "UPI"
          })]
        })]
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "causal-link",
      "data-reveal": true,
      children: "\u2192"
    }), /*#__PURE__*/_jsxs("div", {
      className: "variable-output",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsxs("h3", {
        children: [/*#__PURE__*/_jsx("strong", {
          children: "DV"
        }), " \xB7 Purchase memory"]
      }), /*#__PURE__*/_jsx("div", {
        className: "memory-panel",
        children: /*#__PURE__*/_jsx(Anatomy, {
          kind: "recall"
        })
      })]
    })]
  });
  if (index === 4) body = /*#__PURE__*/_jsxs("div", {
    className: "figure-with-steps",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "figure-ground blue-ground",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsx(Anatomy, {
        kind: "matching"
      }), /*#__PURE__*/_jsxs("div", {
        className: "profile-keys",
        children: [/*#__PURE__*/_jsx("span", {
          children: "Memory"
        }), /*#__PURE__*/_jsx("span", {
          children: "Expenditure"
        }), /*#__PURE__*/_jsx("span", {
          children: "Cash habits"
        })]
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "step-stack",
      children: r.map((row, i) => /*#__PURE__*/_jsx(Copy, {
        row: row,
        number: '0' + (i + 1)
      }, i))
    })]
  });
  if (index === 5) body = /*#__PURE__*/_jsxs("div", {
    className: "newcomer-composition",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "menu-illustration",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsxs("div", {
        className: "menu-sheet",
        children: [/*#__PURE__*/_jsx("span", {
          children: "CAMPUS CAF\xC9"
        }), /*#__PURE__*/_jsxs("div", {
          children: ["Tea ", /*#__PURE__*/_jsx("b", {
            children: "\u20B9 ?"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          children: ["Lunch ", /*#__PURE__*/_jsx("b", {
            children: "\u20B9 ?"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          children: ["Snack ", /*#__PURE__*/_jsx("b", {
            children: "\u20B9 ?"
          })]
        }), /*#__PURE__*/_jsx("small", {
          children: "Familiar prices can support reconstruction"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "newcomer-stamp",
        children: ["NEW", /*#__PURE__*/_jsx("br", {}), "TO CAMPUS"]
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "editorial-list",
      children: r.map((row, i) => /*#__PURE__*/_jsx(Copy, {
        row: row
      }, i))
    })]
  });
  if (index === 7) body = /*#__PURE__*/_jsxs("div", {
    className: "conditions-composition",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "payment-condition cash",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsx(Anatomy, {
        kind: "cash"
      }), /*#__PURE__*/_jsx(Copy, {
        row: r[0]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "payment-condition upi",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsx(Anatomy, {
        kind: "upi"
      }), /*#__PURE__*/_jsx(Copy, {
        row: r[1]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "equal-reward",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsx("span", {
        className: "equality-sign",
        children: "="
      }), /*#__PURE__*/_jsx(Copy, {
        row: r[2]
      })]
    })]
  });
  if (index === 8) body = /*#__PURE__*/_jsxs("div", {
    className: "vendor-composition",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "vendor-scene",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsx(Anatomy, {
        kind: "vendor"
      }), /*#__PURE__*/_jsxs("div", {
        className: "record-route",
        children: [/*#__PURE__*/_jsx("span", {
          children: "Purchase"
        }), /*#__PURE__*/_jsx("i", {
          children: "\u2192"
        }), /*#__PURE__*/_jsx("span", {
          children: "Vendor log"
        }), /*#__PURE__*/_jsx("i", {
          children: "\u2192"
        }), /*#__PURE__*/_jsx("span", {
          children: "Recall check"
        })]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "vendor-copy",
      children: [/*#__PURE__*/_jsx(Copy, {
        row: r[0]
      }), /*#__PURE__*/_jsxs("div", {
        className: "ledger-fields",
        children: [/*#__PURE__*/_jsx("span", {
          children: "ID"
        }), /*#__PURE__*/_jsx("span", {
          children: "Time"
        }), /*#__PURE__*/_jsx("span", {
          children: "Item"
        }), /*#__PURE__*/_jsx("span", {
          children: "Amount"
        }), /*#__PURE__*/_jsx("span", {
          children: "Mode"
        })]
      }), /*#__PURE__*/_jsx(Copy, {
        row: r[1]
      }), /*#__PURE__*/_jsx(Copy, {
        row: r[2]
      })]
    })]
  });
  if (index === 9) body = /*#__PURE__*/_jsxs("div", {
    className: "procedure-composition",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "prep-row",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsx("span", {
        className: "phase-number",
        children: "01"
      }), /*#__PURE__*/_jsx(Copy, {
        row: r[0]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "week-row",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsx("span", {
        className: "phase-number",
        children: "02"
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("h3", {
          className: "phase-title",
          children: "Monday\u2013Sunday \xB7 Recorded spending"
        }), /*#__PURE__*/_jsx("div", {
          className: "week-days",
          children: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, i) => /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("span", {
              children: day
            }), /*#__PURE__*/_jsx("b", {
              children: i + 1
            })]
          }, day))
        }), /*#__PURE__*/_jsx("p", {
          children: r[1][2]
        })]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "test-row",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsx("span", {
        className: "phase-number",
        children: "03"
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("h3", {
          children: "Tuesday \xB7 Surprise recall"
        }), /*#__PURE__*/_jsx("p", {
          children: r[2][2]
        })]
      }), /*#__PURE__*/_jsx("span", {
        className: "tuesday-seal",
        children: "TUE"
      })]
    })]
  });
  if (index === 10) body = /*#__PURE__*/_jsxs("div", {
    className: "safeguard-table",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "table-head",
      children: [/*#__PURE__*/_jsx("span", {
        children: "Stage"
      }), /*#__PURE__*/_jsx("span", {
        children: "Threat to validity"
      }), /*#__PURE__*/_jsx("span", {
        children: "Safeguard"
      })]
    }), r.map((row, i) => /*#__PURE__*/_jsxs("div", {
      className: "safeguard-row",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsxs("span", {
        className: "phase-cell",
        children: ["0", i + 1, /*#__PURE__*/_jsx("small", {
          children: row[0]
        })]
      }), /*#__PURE__*/_jsx("h3", {
        children: row[1]
      }), /*#__PURE__*/_jsx("p", {
        children: row[2]
      })]
    }, i))]
  });
  if (index === 11) body = /*#__PURE__*/_jsxs("div", {
    className: "validity-composition",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "validity-principle",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsx("span", {
        className: "big-check",
        children: "\u2713"
      }), /*#__PURE__*/_jsx(Copy, {
        row: r[0],
        heading: r[0][0]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "reliability-principle",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsx(Copy, {
        row: r[1],
        heading: r[1][0]
      }), /*#__PURE__*/_jsxs("div", {
        className: "coder-pair",
        children: [/*#__PURE__*/_jsx("span", {
          children: "Half 1"
        }), /*#__PURE__*/_jsx("i", {
          children: "\u2194"
        }), /*#__PURE__*/_jsx("span", {
          children: "Half 2"
        })]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "scope-principle",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsx("span", {
        className: "scope-symbol",
        children: "\u25CE"
      }), /*#__PURE__*/_jsx(Copy, {
        row: r[2],
        heading: r[2][0]
      })]
    })]
  });
  if (index === 12) body = /*#__PURE__*/_jsxs("div", {
    className: "recall-composition",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "recall-scene",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsx(Anatomy, {
        kind: "recall"
      }), /*#__PURE__*/_jsxs("span", {
        className: "pending-stamp",
        children: ["TASK & METRICS", /*#__PURE__*/_jsx("br", {}), "TO BE FINALIZED"]
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "checklist-copy",
      children: r.map((row, i) => /*#__PURE__*/_jsx(Copy, {
        row: row,
        number: ['✓', '…', '→'][i]
      }, i))
    })]
  });
  if (index === 13) body = /*#__PURE__*/_jsxs("div", {
    className: "inference-composition",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "inference-branch cash",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsx("span", {
        className: "branch-symbol",
        children: "\u2197"
      }), /*#__PURE__*/_jsx(Copy, {
        row: r[0]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "inference-branch blue-ground",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsx("span", {
        className: "branch-symbol",
        children: "\u2194"
      }), /*#__PURE__*/_jsx(Copy, {
        row: r[1]
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "future-strip",
      "data-reveal": true,
      children: /*#__PURE__*/_jsx(Copy, {
        row: r[2]
      })
    })]
  });
  if (index === 14) body = /*#__PURE__*/_jsxs("div", {
    className: "limits-composition",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "scope-poster",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsx("strong", {
        children: "01"
      }), /*#__PURE__*/_jsx("h3", {
        children: "college."
      }), /*#__PURE__*/_jsxs("div", {
        children: ["Newcomers", /*#__PURE__*/_jsx("br", {}), "One spending week", /*#__PURE__*/_jsx("br", {}), "Voluntary participation"]
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "limits-editorial",
      children: r.map((row, i) => /*#__PURE__*/_jsx(Copy, {
        row: row,
        number: '0' + (i + 1)
      }, i))
    })]
  });
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Heading, {
      children: d.title
    }), /*#__PURE__*/_jsx("div", {
      className: "study-body",
      children: body
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
    i = Math.max(0, Math.min(titles.length - 1, i));
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
      const next = Math.max(0, Math.min(titles.length - 1, Math.round(scroll / innerHeight)));
      activeRef.current = next;
      setActive(next);
    });
    const initial = parseInt(location.hash.replace('#slide-', '')) - 1;
    if (initial >= 0 && initial < titles.length) setTimeout(() => go(initial, true), 80);
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
      if (slide.querySelector('.anatomy-figure')) gsap.from('.anatomy-figure', {
        y: 16,
        opacity: 0,
        duration: 1.1,
        stagger: .14,
        delay: .2,
        clearProps: 'all'
      });
      if (slide.querySelector('.week-days>div')) gsap.from('.week-days>div', {
        y: 18,
        opacity: 0,
        duration: .5,
        stagger: .09,
        delay: .4,
        clearProps: 'all'
      });
      const animate = (selector, vars) => {
        if (slide.querySelector(selector)) gsap.to(selector, vars);
      };
      animate('.unused-printer-paper', {
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
        go(titles.length - 1);
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
      }), children]
    })
  }, i);
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsxs("main", {
      children: [frame(0, /*#__PURE__*/_jsxs("div", {
        className: "cover-main",
        children: [/*#__PURE__*/_jsx("div", {
          className: "cover-title",
          "data-reveal": true,
          children: /*#__PURE__*/_jsxs("h1", {
            children: ["THE PURCHASES", /*#__PURE__*/_jsx("br", {}), "WE REMEMBER."]
          })
        }), /*#__PURE__*/_jsxs("div", {
          className: "cover-art memory-art",
          "data-reveal": true,
          children: [/*#__PURE__*/_jsxs("div", {
            className: "memory-modes",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "payment-object cash",
              children: [/*#__PURE__*/_jsx(Anatomy, {
                kind: "cash"
              }), /*#__PURE__*/_jsx("b", {
                children: "CASH"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "payment-object upi",
              children: [/*#__PURE__*/_jsx(Anatomy, {
                kind: "upi"
              }), /*#__PURE__*/_jsx("b", {
                children: "UPI"
              })]
            })]
          }), /*#__PURE__*/_jsx("div", {
            className: "memory-delay",
            children: "7 spending days \u2192 Tuesday recall"
          }), /*#__PURE__*/_jsx("div", {
            className: "memory-question",
            children: "What did you purchase?"
          })]
        })]
      }), 'cover revised-cover'), frame(1, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 1
      }), 'research-slide layout-1'), frame(2, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 2
      }), 'research-slide layout-2'), frame(3, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 3
      }), 'research-slide layout-3'), frame(4, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 4
      }), 'research-slide layout-4'), frame(5, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 5
      }), 'research-slide layout-5'), frame(6, /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx("div", {
          className: "design-top",
          children: /*#__PURE__*/_jsxs(Heading, {
            children: ["RANDOM ALLOCATION", /*#__PURE__*/_jsx("br", {}), "WITHIN MATCHED PAIRS."]
          })
        }), /*#__PURE__*/_jsxs("div", {
          className: "sampling-method",
          "data-reveal": true,
          children: [/*#__PURE__*/_jsx("h3", {
            children: "Convenience recruitment + matched-pair randomization"
          }), /*#__PURE__*/_jsx("p", {
            children: "Recruit eligible newcomers at one college. Pair participants with similar baseline memory, expenditure and cash habits; randomly assign one person in each pair to cash and the other to UPI."
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "allocation",
          "data-reveal": true,
          children: [/*#__PURE__*/_jsxs("div", {
            className: "wing-unit",
            children: [/*#__PURE__*/_jsx("div", {
              className: "wing-building",
              children: Array.from({
                length: 12
              }, (_, i) => /*#__PURE__*/_jsx("i", {}, i))
            }), /*#__PURE__*/_jsx("h3", {
              children: "Recruit eligible newcomers"
            })]
          }), /*#__PURE__*/_jsx("div", {
            className: "allocation-arrow",
            children: "\u2192"
          }), /*#__PURE__*/_jsxs("div", {
            className: "wing-unit",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "paired-wings",
              children: [/*#__PURE__*/_jsx("div", {
                className: "mini-building",
                children: "A"
              }), /*#__PURE__*/_jsx("div", {
                className: "mini-building",
                children: "B"
              })]
            }), /*#__PURE__*/_jsx("h3", {
              children: "Match baseline profiles"
            })]
          }), /*#__PURE__*/_jsx("div", {
            className: "allocation-arrow",
            children: "\u2192"
          }), /*#__PURE__*/_jsxs("div", {
            className: "assigned-wings",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "lime",
              children: ["Person A ", /*#__PURE__*/_jsx("b", {
                children: "CASH"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "orange",
              children: ["Person B ", /*#__PURE__*/_jsx("b", {
                children: "UPI"
              })]
            }), /*#__PURE__*/_jsx("span", {
              children: "Concealed random assignment within each pair"
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
            children: "Matched participant pairs"
          }), /*#__PURE__*/_jsx("span", {
            children: "New to this campus"
          })]
        })]
      })), frame(7, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 7
      }), 'research-slide layout-7'), frame(8, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 8
      }), 'research-slide layout-8'), frame(9, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 9
      }), 'research-slide layout-9'), frame(10, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 10
      }), 'research-slide layout-10'), frame(11, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 11
      }), 'research-slide layout-11'), frame(12, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 12
      }), 'research-slide layout-12'), frame(13, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 13
      }), 'research-slide layout-13'), frame(14, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 14
      }), 'research-slide layout-14')]
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
                children: "Cash vs UPI Recall: Intern Field Experiment Design. 18 pages. Adapted to one college as requested. The revised presentation supersedes the PDF on individual matching, equal completion rewards, removal of discounts and pending recall metrics."
              })]
            }), /*#__PURE__*/_jsx("p", {
              className: "source-credit",
              children: "Payment objects, matching boards, vendor counter and recall worksheet generated with the Anatomy toolkit. Number animation: React Bits CountUp. Motion: GSAP, Lenis and Motion."
            })]
          })]
        })
      })
    }), /*#__PURE__*/_jsxs("span", {
      className: "sr-only",
      role: "status",
      "aria-live": "polite",
      children: ["Slide ", active + 1, " of ", titles.length, ": ", titles[active]]
    })]
  });
}
createRoot(document.getElementById('root')).render(/*#__PURE__*/_jsx(App, {}));