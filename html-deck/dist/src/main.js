import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion } from 'motion/react';
import { researchArt } from './research-art.js';
import { paymentSuccessVideo, paymentSuccessPoster } from './payment-success.js';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const titles = ["The purchases we remember", "Introduction: background and motivation", "Literature review", "Research gap and question", "Independent and dependent variables", "Baseline testing and matching", "Saturday baseline session", "Why recruit newcomers?", "Matched-pair allocation", "Payment conditions and rewards", "Independent transaction records", "One-week procedure", "Confounders and safeguards", "Validity and reliability", "Monday recall test", "Item matching and recall metrics", "Analysis and unequal purchase counts", "What this experiment tells us", "Limitations and caveats", "Ethical limitations and safeguards", "Thank you", "References"];
const timings = [10, 25, 45, 25, 25, 45, 35, 15, 35, 20, 30, 25, 25, 30, 40, 35, 40, 30, 25, 35, 5, 0];
const notes = ["A field study of payment mode and delayed memory. Both groups receive the same completion reward.", "Motivation: people need an accurate picture of past purchases to monitor expenditure. Cash and UPI differ in the cues surrounding payment. Cash involves counting notes and receiving change; UPI provides on-screen confirmations and transaction histories. These are possible influences on memory, not established effects in this study. We test delayed recall of real purchases using independent vendor records, rather than assuming one payment mode helps memory more.", "Three strands of evidence. First, cash payers recall spending better: in Gafeeva, Hoelzl and Roschk's cafeteria field study of 496 students, people who had just paid in cash recalled the amount more accurately than card payers. Soman showed that writing out a payment and feeling money leave immediately change how past payments shape later spending. Second, why cash feels different: Raghubir and Srivastava found less transparent payment forms are spent like monopoly money, and Ceravolo and colleagues' small fMRI pilot found stronger insula and parietal activation when people watched cash payments than card or smartphone payments. Third, method and the UPI gap: Srivastava and Raghubir showed that breaking estimates into categories changes memory-based expense estimates, so we keep unaided recall separate from reconstruction. The only UPI study here, Dev and colleagues, is a survey in which about 75% said UPI raised their spending; it is self-reported and does not measure recall.", "The research gap: Cash-recall evidence compares cash with cards immediately after paying, and UPI evidence is self-reported. None tests recall of independently logged purchases a week later. Research question: Does assigned payment mode affect the probability of recalling a purchased item? Hypotheses: H1: item recall differs by mode. H2: absolute total-spend error differs. H3: UPI produces more negative signed spend error. Correct across H1–H3 using Holm.", "Independent variable: assigned payment mode, with two levels, cash only and UPI only, for eligible personal purchases at four campus outlets during one week. Each participant experiences one condition; assigned mode, observed mode and deviations are recorded separately. Dependent variable 1, item recall: each vendor-logged item line scores 1 if a Monday recall entry strictly matches it on outlet, item or accepted synonym, and day within one; otherwise 0. This is the primary outcome for H1. Dependent variable 2, total-spend error: the natural log of (initially recalled total + 10) divided by (actual total + 10). Its absolute value tests H2 and its signed value tests H3. Controls: baseline memory, spending tendency and habitual cash use, all measured on Saturday before assignment, enter every model. One factor with two levels is not a factorial design.", "Memory composite · baseline memory: baseline memory = [z(RAVLT trials 1–5 total) + z(ROCF delayed)] ÷ 2. Standardize within our sample; score ranges are 0–75 and 0–36. Spendthrift–Tightwad · spending tendency: Use the published 4-item spendthrift–tightwad scale scale (Rick et al., 2008). Reverse-score the “trouble spending” item. Use the 4–26 total continuously, without categories. Habitual cash use · habitual cash use: Number of cash payments among the last 10 payments: 0–10. weekly cash-spending share (weekly cash spending share) checks habitual cash use. main payment app (main UPI app) is descriptive only.", "Group paper session, planned session about 55 minutes. RAVLT five learning trials, recorded audio and fixed written-response times: 10 min. ROCF copy: 5 min. Questionnaire: 20 min. ROCF delayed: 5 min. RAVLT delayed: 2 min. Both delayed tests are announced to avoid teaching participants to anticipate surprise tests. Three deviations: group/written RAVLT, announced ROCF delayed recall, announced RAVLT delayed recall. The team chose the 30-minute ROCF delay. Add a 10-minute neutral non-rehearsal buffer after the questionnaire: the blocks now total 52 minutes, budgeted as about 55. ROCF copy ends at minute15 and delayed recall begins at minute45. Record actual intervals; the adapted RAVLT delay also needs reporting. TIPI 10 items, sleep3, phone habits3, food4, commute2, internship expectations3; spendthrift–tightwad scale sits between TIPI and sleep. habitual cash use last10 cash count, weekly cash-spending share weekly cash share, main payment app app; omit tracking-status item and history-checking item. Pilot ceiling shares RAVLTtotal≥70 and ROCFdelayed≥34, reliability of each, and their correlation. ROCF copy flags drawing/perception difficulties; count/report, do not exclude. RAVLT delayed recall is a covariate only; primary matching composite uses the learning total to reduce ceiling concerns. Drop ROCF only under a prespecified pilot decision if it does not predict pilot recall; then use RAVLT alone.", "Familiar prices make totals easier to infer: A long-term resident may reconstruct expenditure from familiar menu prices without remembering the payment amount. New to this college: Recruit adult newcomers who can use both cash and UPI. Screen prior campus residence, outlet familiarity and prior visits before allocation. Newcomers also learn prices: Keep the spending window identical and record baseline familiarity. Newcomer status reduces this threat; it does not eliminate it.", "Convenience recruitment of eligible newcomers. Mahalanobis distance on sample-z-scored baseline memory, spending tendency, habitual cash use, using sample covariance. Optimal nonbipartite pairing with nbpMatching. No tracking-status exact matching: tracking-status item and history-checking item are dropped. Odd participant: leave the least-matchable participant unpaired, retaining them only for sensitivity analysis; they still participate. Report pairs above the 95th percentile of distance. Computer coin flip within each pair, conceal until Sunday. Check balance on baseline memory, spending tendency, habitual cash use; if any SMD exceeds .2, rerandomize up to three times using a prespecified rule. Keep baseline memory,spending tendency,habitual cash use in every analysis. Clarify whether the odd unpaired participant receives an independent assignment before inclusion in any mode-based sensitivity analysis.", "Use only cash: Use personal money and cash for eligible personal orders during the seven-day Food Week. No participant spending diary. Use only UPI: Use personal money and UPI for the same eligible purchases and period. Vendor records capture both payment modes. Participant-ID discounts: Both groups receive 25% off personal orders with their participant ID. The discount is uncapped; budget from pilot spending. Both groups retain the same completion-reward rule.", "One item line = one record: “2 samosas + 1 chai” creates two item lines, each with quantity. Staff tap menu items on outlet tablets. An independent ground truth: Log participant ID, outlet, item code, quantity, menu price, amount paid after discount, timestamp and payment mode. Participants do not write spending diaries. A codebook before collection: Use all four outlet menus to fix item names, six categories and accepted synonyms. Reconcile records daily; report spend and item count by mode descriptively. Item categories fixed before study: hot drinks; cold drinks/juices; savoury snacks; sweets/bakery; meals; other. The logged unit is an item line, retaining quantity, not one observation per physical unit.", "Saturday → Sunday: Saturday baseline and questionnaire; form pairs afterward. Computer allocation stays concealed until Sunday. Monday–Sunday · Seven spending days: Record personal cash and UPI purchases at four outlets for one week. Apply the same 25% participant-ID discount in both conditions; no cap. Next Monday · 6 pm recall: A 20-minute digital test, without menus or transaction histories. Lock initial totals before day-by-day recall. No make-up session.", "Selection and baseline differences: Optimal matching on baseline memory, spending tendency and habitual cash use, followed by a computer coin flip within pairs. Prespecify balance checks; keep baseline memory, spending tendency and habitual cash use in every analysis model. Noncompliance and contamination: Keep rewards, discounts, instructions and logging equal. Record mode switching, group payments and cross-group discussion rather than silently excluding them. Demand characteristics and rehearsal: Announce baseline delayed tests; hide spendthrift–tightwad scale/cash items among decoys. Keep purchase recall unannounced. Test everyone together; record suspicion afterward and debrief.", "Construct validity: Use announced baseline tests, but unaided purchase recall against vendor records as the outcome. Check ceiling rates, ROCF copy performance and whether the two memory measures relate to pilot recall. Reliability: Two trained scorers, blinded to participant information, score ROCF using the 36-point Osterrieth/Taylor system. Report ICC and average their scores. For final item/day coding, report Cohen’s κ between blinded coders. Internal and external validity: Matching and concealed randomization support comparability. One college and convenience recruitment limit generalizability. The modified group/written and announced baseline tests must be reported as procedural deviations.", "1 · Submit and lock totals: First report total Food Week spending (₹) and the number of separate items purchased. Once submitted, these answers cannot be changed. 2 · Reconstruct seven days: For each entry: outlet, specific item, whole-rupee amount paid after discount, and confidence (Sure / Guessing). Seven dated tabs cover Monday–Sunday. One standardized form: Reject generic item labels; no menus, no “anything else?” prompt and no return to totals. Use an example dish absent from all menus. Every field is required. Reject generic item-only labels: meal, food, snack, breakfast, lunch, dinner, drink, juice, coffee, tea, something. Confidence is separate from objective correctness: a Guessing entry is scored against the same record criteria as a Sure entry; this allows nonzero guessing accuracy and makes the calibration ratio meaningful. Actual dates and the four outlet names must be inserted before running the test.", "Unit: a logged item line with quantity. Strict primary match is same outlet, exact item or accepted synonym, day±1. Lenient is same outlet/category/day±1. Hungarian one-to-one assignment maximizes number of matches. Two coders code all entries blind to mode after removal of revealing words; report Cohen kappa for item coding and day reading. Primary item recall: modeled probability a logged line is strictly recalled. Precision=matched entries/all entries; F1=2PR/(P+R). Recall above chance: strict recall minus a prespecified score against other participants’ logs drawn from both groups. Specify donor selection, normalization and number of permutations before claiming complete protection from over-listing; cancellation is not guaranteed for every list. Secondary metrics: count error=Stage1count−actual item-line count; strict-match median absolute price error=median |recalled−paid|/paid, and signed version; day accuracy=exact-day share among strict matches. Exploratory: sumStage2 amounts−Stage1total; confidence calibration=match rate Sure / match rate Guessing, with zero-denominator rule prespecified. Report repeated items bought on≥2days vs one-off and lenient recall. Define denominators and zero-purchase/zero-entry/zero-price handling before analysis; do not silently exclude them.", "H1: item-level logistic mixed model recalled ~ mode + baseline memory + spending tendency + habitual cash use + (1|pair) + (1|participant). Report mode odds ratio and average probability difference. Pair random effects do not make individuals with few purchases equivalent to those with many; participant dependence is modeled and precision depends on clustering and outcomes. Person plots use model-based shrunken estimates, not arbitrary raw-percentage rankings. Purchase count is post-treatment; omit it from the primary model. Secondary log-count/repeat adjustment is descriptive only. Sensitivities: each person weighted1/itemcount, lenient matching, recall above chance, descriptive post-treatment adjustment. Spend and count by mode descriptive, not confirmatory hypotheses. H2/H3 participant model error~mode+baseline memory+spending tendency+habitual cash use+(1|pair); error ln((Stage1total+10)/(actual+10)); H2absolute, H3signed with directional UPI-underestimation prediction. Holm across H1–H3. Exploratory mode×habitual cash use. No X/Y factors and no spending cap. Monday nonattendance: no makeup; Lee bounds only with monotone-selection and design assumptions justified, otherwise report missingness and additional sensitivities. Do not equate nonsignificance with equivalence.", "Cash may make purchases more memorable: Better recall in the cash group would support the idea that physically handling money helps people remember purchases. However, the result alone would not explain why cash users remember more. Digital payment may support memory: Better recall in the UPI group would show that digital payment need not weaken purchase memory. Transaction histories and notifications are possible explanations to test separately. No clear advantage under these conditions: A precise result near zero would suggest little difference in this setting. A wide confidence interval would leave the question unresolved. The study could guide later tests of spending summaries or notifications in payment apps.", "Limited external validity and generalizability: Recruiting volunteers from one college risks sampling bias and limits population validity. Findings cannot be assumed to generalize to other colleges, age groups or experienced campus residents. Baseline matching improves group comparability, not sample representativeness. Threats to ecological validity: Assigned payment modes and participant-ID discounts differ from unrestricted everyday spending. Knowing purchases are recorded may also change behavior: the Hawthorne effect. These features limit how closely the study reflects normal purchasing. Threats to internal validity: Noncompliance, differential attrition and incomplete vendor records can distort the comparison. Shared payments and cross-group discussion may contaminate conditions. Random assignment reduces baseline confounding but does not remove these post-assignment threats.", "Lecture basis: the Experiments lecture identifies lack of informed consent as a concern in field research. Each participant signs a detailed consent form covering procedures, payment-mode assignment, discount and reward conditions, data collected, burden, risks, contacts and withdrawal. The exact hypothesis and surprise-test timing involve partial disclosure, not complete disclosure of the study aim. Obtain institutional ethics review/approval for that withholding before recruitment; disclose purchase logging upfront, debrief after testing and allow withdrawal of identifiable data until the stated anonymization cutoff. Separate recruitment from internship supervision; refusal, withdrawal and low recall scores do not affect academic/internship standing. Do not make withdrawal financially punitive. Use coded participant IDs, a separate encrypted linkage file, restricted researcher access, a stated retention/deletion schedule and aggregate reporting; vendors should see only the ID and transaction details needed for logging. Do not collect PINs or unrelated banking history. Explain the expected time commitment and equal incentives; do not require purchases or induce participants to spend more. Testing is research, not clinical diagnosis. A signed consent form does not eliminate risk or by itself authorize undisclosed aims. These safeguards are proposed study procedures, not claims of ethics approval already granted.", "Thank the audience and invite questions. Closing uses the complete published Google Pay success recreation by Rohith R Krishnan from LottieFiles, followed by Thank you. It is not a real transaction.", "References supporting the literature, baseline instruments, personality decoy and analysis are listed here in author–date style with publication details and DOI or publisher links. Course handouts are identified as locally supplied lecture slides because no individual author or publication date was supplied. Modified baseline procedures differ from the cited standardized instruments. The closing animation source is credited in THIRD_PARTY_NOTICES.md, outside the academic bibliography."];
const refs = [["Ceravolo, M. G., Fabri, M., Fattobene, L., Polonara, G., & Raggetti, G. (2019)", "Cash, card or smartphone: The neural correlates of payment methods. Frontiers in Neuroscience, 13, 1188.", "https://doi.org/10.3389/fnins.2019.01188"], ["Dev, H., Gupta, R., Dharmavaram, S., & Kumar, D. (2024)", "From cash to cashless: UPI’s impact on spending behavior among Indian users and prototyping financially responsible interfaces [Preprint; shorter version in CHI 2024 Late-Breaking Work]. arXiv:2401.09937.", "https://doi.org/10.48550/arXiv.2401.09937"], ["Gafeeva, R., Hoelzl, E., & Roschk, H. (2017)", "What else can your payment card do? Multifunctionality of payment modes can reduce payment transparency. Marketing Letters, 29, 61–72.", "https://doi.org/10.1007/s11002-017-9445-2"], ["Gosling, S. D., Rentfrow, P. J., & Swann, W. B., Jr. (2003)", "A very brief measure of the Big-Five personality domains. Journal of Research in Personality, 37(6), 504–528.", "https://doi.org/10.1016/S0092-6566(03)00046-1"], ["Holm, S. (1979)", "A simple sequentially rejective multiple test procedure. Scandinavian Journal of Statistics, 6(2), 65–70.", "https://www.jstor.org/stable/4615733"], ["Lee, D. S. (2009)", "Training, wages, and sample selection: Estimating sharp bounds on treatment effects. The Review of Economic Studies, 76(3), 1071–1102.", "https://doi.org/10.1111/j.1467-937X.2009.00536.x"], ["Meyers, J. E., & Meyers, K. R. (1995)", "Rey Complex Figure Test and Recognition Trial: Professional manual. Psychological Assessment Resources.", "https://www.parinc.com/products/RCFT"], ["Raghubir, P., & Srivastava, J. (2008)", "Monopoly money: The effect of payment coupling and form on spending behavior. Journal of Experimental Psychology: Applied, 14(3), 213–225.", "https://doi.org/10.1037/1076-898X.14.3.213"], ["Rick, S. I., Cryder, C. E., & Loewenstein, G. (2008)", "Tightwads and spendthrifts. Journal of Consumer Research, 34(6), 767–782.", "https://doi.org/10.1086/523285"], ["Schmidt, M. (1996)", "Rey Auditory Verbal Learning Test: A handbook. Western Psychological Services.", "https://marketplace.unl.edu/buros/rey-auditory-verbal-learning-test-a-handbook.html"], ["Soman, D. (2001)", "Effects of payment mechanism on spending behavior: The role of rehearsal and immediacy of payments. Journal of Consumer Research, 27(4), 460–474.", "https://doi.org/10.1086/319621"], ["Srivastava, J., & Raghubir, P. (2002)", "Debiasing using decomposition: The case of memory-based credit card expense estimates. Journal of Consumer Psychology, 12(3), 253–264.", "https://doi.org/10.1207/S15327663JCP1203_07"], ["Behavioral Research and Experiment Design course materials. (n.d.)", "Experiments; Sampling; Validity & Reliability [Lecture slides supplied for the course]. IIIT Hyderabad.", ""]];
const refUrl = key => (refs.find(r => r[0].startsWith(key)) || [])[2];
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
    "rows": [],
    "themes": [{
      "title": "Cash payers recall spending better",
      "studies": [["Gafeeva, Hoelzl & Roschk · 2017", "Gafeeva", "Cafeteria field study (n = 496): right after paying, cash payers recalled the amount more accurately than card payers."], ["Soman · 2001", "Soman", "Writing out a payment and feeling money leave immediately change how past payments shape later spending."]]
    }, {
      "title": "Why cash feels different",
      "studies": [["Raghubir & Srivastava · 2008", "Raghubir", "Less transparent payment forms are spent more readily, like “monopoly money”; cash is the most transparent form."], ["Ceravolo et al. · 2019", "Ceravolo", "fMRI pilot (n = 16): watching cash payments activated insula and parietal cortex more than card or smartphone payments."]]
    }, {
      "title": "Recall methods and the UPI gap",
      "studies": [["Srivastava & Raghubir · 2002", "Srivastava", "Splitting estimates into categories changed memory-based card-expense estimates, so unaided recall must stay separate from reconstruction."], ["Dev et al. · 2024", "Dev", "Indian survey (n = 276): about 75% said UPI raised their spending. This is self-report; recall was not measured."]]
    }]
  },
  "2": {
    "title": "RESEARCH GAP AND QUESTION",
    "rows": [["The research gap", "The research gap", "Cash-recall evidence compares cash with cards immediately after paying, and UPI evidence is self-reported. None tests recall of independently logged purchases a week later."], ["Research question", "Research question", "Does assigned payment mode affect the probability of recalling a purchased item?"], ["Hypotheses", "Hypotheses", "H1: item recall differs by mode. H2: absolute total-spend error differs. H3: UPI produces more negative signed spend error. Correct across H1–H3 using Holm."]]
  },
  "3": {
    "title": "INDEPENDENT AND DEPENDENT VARIABLES",
    "rows": [["Independent variable", "Assigned payment mode", "Cash only versus UPI only for eligible campus purchases during the experiment week. Each participant experiences one condition."], ["Dependent variable", "Delayed purchase-memory performance", "Delayed recall is operationalized as the modeled probability that a logged item line is strictly matched in the Monday test."], ["Operationalization", "Assignment is distinct from actual use", "Record assigned mode, observed transaction mode and deviations separately. One factor with two levels is not a factorial design."]]
  },
  "4": {
    "title": "BASELINE TESTING AND MATCHING",
    "rows": [["Memory composite", "Baseline memory composite", "Average the within-sample standardized verbal-learning total and delayed visual-recall score. Raw ranges: 0–75 and 0–36."], ["Spending tendency", "Spendthrift–Tightwad scale", "Use the published four-item scale (Rick et al., 2008). Reverse-score the “trouble spending” item; use the 4–26 total continuously."], ["Habitual cash use", "Habitual cash use", "Count cash payments among the last ten payments: 0–10. Weekly cash-spending share checks this measure. The main payment app is descriptive only."]]
  },
  "5": {
    "title": "WHY RECRUIT NEWCOMERS?",
    "rows": [["The threat", "Familiar prices make totals easier to infer", "A long-term resident may reconstruct expenditure from familiar menu prices without remembering the payment amount."], ["Eligibility restriction", "New to this college", "Recruit adult newcomers who can use both cash and UPI. Screen prior campus residence, outlet familiarity and prior visits before allocation."], ["Remaining caveat", "Newcomers also learn prices", "Keep the spending window identical and record baseline familiarity. Newcomer status reduces this threat; it does not eliminate it."]]
  },
  "7": {
    "title": "PAYMENT CONDITIONS AND REWARDS",
    "rows": [["Use only cash", "Use only cash", "Use personal money and cash for eligible personal orders during the seven-day Food Week. No participant spending diary."], ["Use only UPI", "Use only UPI", "Use personal money and UPI for the same eligible purchases and period. Vendor records capture both payment modes."], ["Participant-ID discounts", "Participant-ID discounts", "Both groups receive 25% off personal orders with their participant ID. The discount is uncapped; budget from pilot spending. Both groups retain the same completion-reward rule."]]
  },
  "8": {
    "title": "INDEPENDENT TRANSACTION RECORDS",
    "rows": [["One item line = one record", "One item line = one record", "“2 samosas + 1 chai” creates two item lines, each with quantity. Staff tap menu items on outlet tablets."], ["An independent ground truth", "An independent ground truth", "Log participant ID, outlet, item code, quantity, menu price, amount paid after discount, timestamp and payment mode. Participants do not write spending diaries."], ["A codebook before collection", "A codebook before collection", "Use all four outlet menus to fix item names, six categories and accepted synonyms. Reconcile records daily; report spend and item count by mode descriptively."]]
  },
  "9": {
    "title": "ONE-WEEK PROCEDURE",
    "rows": [["Saturday → Sunday", "Saturday → Sunday", "Saturday baseline and questionnaire; form pairs afterward. Computer allocation stays concealed until Sunday."], ["Monday–Sunday · Seven spending days", "Monday–Sunday · Seven spending days", "Record personal cash and UPI purchases at four outlets for one week. Apply the same 25% participant-ID discount in both conditions; no cap."], ["Next Monday · 6 pm recall", "Next Monday · 6 pm recall", "A 20-minute digital test, without menus or transaction histories. Lock initial totals before day-by-day recall. No make-up session."]]
  },
  "10": {
    "title": "CONFOUNDERS AND SAFEGUARDS",
    "rows": [["Selection and baseline differences", "Selection and baseline differences", "Optimal matching on baseline memory, spending tendency and habitual cash use, followed by a computer coin flip within pairs. Prespecify balance checks; keep baseline memory, spending tendency and habitual cash use in every analysis model."], ["Noncompliance and contamination", "Noncompliance and contamination", "Keep rewards, discounts, instructions and logging equal. Record mode switching, group payments and cross-group discussion rather than silently excluding them."], ["Demand characteristics and rehearsal", "Demand characteristics and rehearsal", "Announce baseline delayed tests; hide spendthrift–tightwad scale/cash items among decoys. Keep purchase recall unannounced. Test everyone together; record suspicion afterward and debrief."]]
  },
  "11": {
    "title": "VALIDITY AND RELIABILITY",
    "rows": [["Construct validity", "Construct validity", "Use announced baseline tests, but unaided purchase recall against vendor records as the outcome. Check ceiling rates, ROCF copy performance and whether the two memory measures relate to pilot recall."], ["Reliability", "Reliability", "Two trained scorers, blinded to participant information, score ROCF using the 36-point Osterrieth/Taylor system. Report ICC and average their scores. For final item/day coding, report Cohen’s κ between blinded coders."], ["Internal and external validity", "Internal and external validity", "Matching and concealed randomization support comparability. One college and convenience recruitment limit generalizability. The modified group/written and announced baseline tests must be reported as procedural deviations."]]
  },
  "12": {
    "title": "MONDAY RECALL TEST · 20 MINUTES",
    "rows": [["1 · Submit and lock totals", "1 · Submit and lock totals", "First report total Food Week spending (₹) and the number of separate items purchased. Once submitted, these answers cannot be changed."], ["2 · Reconstruct seven days", "2 · Reconstruct seven days", "For each entry: outlet, specific item, whole-rupee amount paid after discount, and confidence (Sure / Guessing). Seven dated tabs cover Monday–Sunday."], ["One standardized form", "One standardized form", "Reject generic item labels; no menus, no “anything else?” prompt and no return to totals. Use an example dish absent from all menus. Every field is required."]]
  },
  "13": {
    "title": "WHAT THIS EXPERIMENT TELLS US",
    "rows": [["If cash recall is better", "Cash may make purchases more memorable", "Better recall in the cash group would support the idea that physically handling money helps people remember purchases. However, the result alone would not explain why cash users remember more."], ["If UPI recall is better", "Digital payment may support memory", "Better recall in the UPI group would show that digital payment need not weaken purchase memory. Transaction histories and notifications are possible explanations to test separately."], ["If neither group recalls better", "No clear advantage under these conditions", "A precise result near zero would suggest little difference in this setting. A wide confidence interval would leave the question unresolved. The study could guide later tests of spending summaries or notifications in payment apps."]]
  },
  "14": {
    "title": "LIMITATIONS AND CAVEATS",
    "rows": [["External validity", "Limited external validity and generalizability", "Recruiting volunteers from one college risks sampling bias and limits population validity. Findings cannot be assumed to generalize to other colleges, age groups or experienced campus residents. Baseline matching improves group comparability, not sample representativeness."], ["Ecological validity", "Threats to ecological validity", "Assigned payment modes and participant-ID discounts differ from unrestricted everyday spending. Knowing purchases are recorded may also change behavior: the Hawthorne effect. These features limit how closely the study reflects normal purchasing."], ["Internal validity", "Threats to internal validity", "Noncompliance, differential attrition and incomplete vendor records can distort the comparison. Shared payments and cross-group discussion may contaminate conditions. Random assignment reduces baseline confounding but does not remove these post-assignment threats."]]
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
    className: "literature-themes",
    children: d.themes.map(t => /*#__PURE__*/_jsxs("div", {
      className: "theme-row",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsx("h3", {
        className: "theme-title",
        children: t.title
      }), /*#__PURE__*/_jsx("div", {
        className: "theme-studies",
        children: t.studies.map(([cite, key, text]) => /*#__PURE__*/_jsxs("div", {
          className: "lit-study",
          children: [/*#__PURE__*/_jsxs("p", {
            children: [/*#__PURE__*/_jsxs("strong", {
              children: [cite, "."]
            }), " ", text]
          }), /*#__PURE__*/_jsx("a", {
            href: refUrl(key),
            target: "_blank",
            rel: "noreferrer",
            children: "Read study \u2197"
          })]
        }, cite))
      })]
    }, t.title))
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
        row: row
      }, i))
    })]
  });
  if (index === 3) body = /*#__PURE__*/_jsxs("div", {
    className: "variable-map simplified-variables operational-variables",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "variable-input",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsxs("h3", {
        children: [/*#__PURE__*/_jsx("strong", {
          children: "IV"
        }), " \xB7 Assigned payment mode"]
      }), /*#__PURE__*/_jsxs("div", {
        className: "mini-payments",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "cash",
          children: [/*#__PURE__*/_jsx(Anatomy, {
            kind: "cash"
          }), /*#__PURE__*/_jsx("b", {
            children: "CASH ONLY"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "upi",
          children: [/*#__PURE__*/_jsx(Anatomy, {
            kind: "upi"
          }), /*#__PURE__*/_jsx("b", {
            children: "UPI ONLY"
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
      }), /*#__PURE__*/_jsxs("div", {
        className: "memory-panel dv-definitions",
        children: [/*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsxs("h4", {
            children: [/*#__PURE__*/_jsx("strong", {
              children: "DV1"
            }), " \xB7 Item recall"]
          }), /*#__PURE__*/_jsx("p", {
            children: "Each vendor-logged item line scores 1 if a Monday entry strictly matches it: same outlet, same item, day \xB11."
          })]
        }), /*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsxs("h4", {
            children: [/*#__PURE__*/_jsx("strong", {
              children: "DV2"
            }), " \xB7 Total-spend error"]
          }), /*#__PURE__*/_jsx("p", {
            children: "ln[(recalled total + 10) \xF7 (actual total + 10)]: absolute for H2, signed for H3."
          })]
        })]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "variable-note controls-note",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsx("b", {
        children: "Controls in every model"
      }), /*#__PURE__*/_jsx("p", {
        children: "Baseline memory, spending tendency and habitual cash use, measured on Saturday before assignment."
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
          children: "Spending tendency"
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
          children: "Monday \xB7 6 pm recall"
        }), /*#__PURE__*/_jsx("p", {
          children: r[2][2]
        })]
      }), /*#__PURE__*/_jsx("span", {
        className: "tuesday-seal",
        children: "MON"
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
          children: "Blinded scorer A"
        }), /*#__PURE__*/_jsx("i", {
          children: "\u2194"
        }), /*#__PURE__*/_jsx("span", {
          children: "Blinded scorer B"
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
  if (index === 12) body = /*#__PURE__*/_jsx(RecallForm, {});
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
function BaselineSession() {
  const steps = [['10 min', 'RAVLT learning', 'Five audio trials; fixed-time written recall after each.'], ['5 min', 'ROCF copy', 'Copy the figure and announce the later recall task.'], ['20 min', 'Questionnaire', 'Personality → spending tendency → sleep, with cash-use and other decoys mixed in.'], ['10 min', 'Neutral buffer', 'No memory rehearsal; preserve the 30-minute ROCF delay.'], ['5 min', 'ROCF delayed recall', 'Start 30 minutes after the copy ends; record the actual interval.'], ['2 min', 'RAVLT delayed recall', 'Record as a covariate, not part of the matching composite.']];
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Heading, {
      children: "SATURDAY BASELINE \xB7 ABOUT 55 MINUTES"
    }), /*#__PURE__*/_jsxs("div", {
      className: "study-body baseline-session-layout",
      children: [/*#__PURE__*/_jsx("div", {
        className: "baseline-schedule",
        children: steps.map(([time, title, text], i) => /*#__PURE__*/_jsxs("div", {
          className: "baseline-session-step",
          "data-reveal": true,
          children: [/*#__PURE__*/_jsx("span", {
            className: "session-time",
            children: time
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("h3", {
              children: title
            }), /*#__PURE__*/_jsx("p", {
              children: text
            })]
          })]
        }, title))
      }), /*#__PURE__*/_jsxs("div", {
        className: "baseline-session-notes",
        children: [/*#__PURE__*/_jsxs("div", {
          "data-reveal": true,
          children: [/*#__PURE__*/_jsx("h3", {
            children: "Three procedural deviations"
          }), /*#__PURE__*/_jsx("p", {
            children: "Group, written RAVLT; announced RAVLT delayed recall; announced ROCF delayed recall. Announcing baseline recall avoids teaching participants to expect a surprise purchase test."
          })]
        }), /*#__PURE__*/_jsxs("div", {
          "data-reveal": true,
          children: [/*#__PURE__*/_jsx("h3", {
            children: "Decoys hide the objective"
          }), /*#__PURE__*/_jsx("p", {
            children: "TIPI (10), sleep (3), phone habits (3), food (4), commute (2), internship expectations (3). Give decoys and the spending scale equal visual weight."
          })]
        }), /*#__PURE__*/_jsxs("div", {
          "data-reveal": true,
          children: [/*#__PURE__*/_jsx("h3", {
            children: "Pilot before allocation"
          }), /*#__PURE__*/_jsx("p", {
            children: "Check ceiling rates (RAVLT \u226570/75; ROCF \u226534/36), reliability and cross-test correlation. Flag low copy scores without exclusion. If ROCF does not predict pilot purchase recall, use RAVLT alone."
          })]
        })]
      })]
    })]
  });
}
function RecallForm() {
  return /*#__PURE__*/_jsxs("div", {
    className: "recall-form-layout",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "locked-totals",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsx("h3", {
        children: "1 \xB7 Lock initial totals"
      }), /*#__PURE__*/_jsxs("div", {
        className: "form-example-line",
        children: [/*#__PURE__*/_jsx("span", {
          children: "Total spent"
        }), /*#__PURE__*/_jsx("strong", {
          children: "\u20B9 ______"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "form-example-line",
        children: [/*#__PURE__*/_jsx("span", {
          children: "Separate items bought"
        }), /*#__PURE__*/_jsx("strong", {
          children: "______"
        })]
      }), /*#__PURE__*/_jsxs("p", {
        children: ["Submit once.", /*#__PURE__*/_jsx("br", {}), "No return to these answers."]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "day-form",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsx("h3", {
        children: "2 \xB7 Reconstruct each day"
      }), /*#__PURE__*/_jsx("div", {
        className: "recall-day-tabs",
        children: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((v, i) => /*#__PURE__*/_jsx("span", {
          className: i === 0 ? 'current-day' : '',
          children: v
        }, v))
      }), /*#__PURE__*/_jsxs("div", {
        className: "recall-entry-fields",
        children: [/*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("h4", {
            children: "Outlet"
          }), /*#__PURE__*/_jsx("p", {
            children: "Choose 1 of 4 outlets"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("h4", {
            children: "Specific item"
          }), /*#__PURE__*/_jsx("p", {
            children: "Free text; generic labels rejected"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("h4", {
            children: "Amount paid"
          }), /*#__PURE__*/_jsx("p", {
            children: "Whole \u20B9 after the 25% discount"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("h4", {
            children: "Confidence"
          }), /*#__PURE__*/_jsx("p", {
            children: "Sure / Guessing"
          })]
        })]
      }), /*#__PURE__*/_jsx("p", {
        className: "form-required-rule",
        children: "All four fields required. Use seven dated day tabs."
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "recall-form-rules",
      "data-reveal": true,
      children: [/*#__PURE__*/_jsx("h3", {
        children: "Monday \xB7 6 pm \xB7 20-minute limit"
      }), /*#__PURE__*/_jsx("p", {
        children: "No menus or transaction histories. No extra recall prompt. Example dish is absent from all menus. Guesses are scored by the same matching rules."
      })]
    })]
  });
}
function ScoringProtocol() {
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Heading, {
      children: "ITEM MATCHING AND RECALL METRICS"
    }), /*#__PURE__*/_jsxs("div", {
      className: "study-body scoring-protocol-layout",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "matching-rules-panel",
        "data-reveal": true,
        children: [/*#__PURE__*/_jsx("h3", {
          children: "Match each entry to one logged line"
        }), /*#__PURE__*/_jsxs("div", {
          className: "match-rule",
          children: [/*#__PURE__*/_jsx("b", {
            children: "Strict \xB7 primary"
          }), /*#__PURE__*/_jsx("p", {
            children: "Same outlet + exact item / accepted synonym + day within \xB11."
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "match-rule",
          children: [/*#__PURE__*/_jsx("b", {
            children: "Lenient \xB7 check"
          }), /*#__PURE__*/_jsx("p", {
            children: "Same outlet + same category + day within \xB11."
          })]
        }), /*#__PURE__*/_jsx("p", {
          children: "Hungarian assignment maximizes one-to-one matches. An entry cannot recover multiple logged lines."
        }), /*#__PURE__*/_jsxs("div", {
          className: "blinded-coding",
          children: [/*#__PURE__*/_jsx("b", {
            children: "Two blinded coders"
          }), /*#__PURE__*/_jsx("p", {
            children: "Remove mode-revealing words first. Report Cohen\u2019s \u03BA for item coding and day reading."
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "recall-metrics-panel",
        "data-reveal": true,
        children: [/*#__PURE__*/_jsx("h3", {
          children: "Recall and over-listing"
        }), /*#__PURE__*/_jsxs("div", {
          className: "score-definition",
          children: [/*#__PURE__*/_jsx("b", {
            children: "Item recall \xB7 H1"
          }), /*#__PURE__*/_jsx("p", {
            children: "Each logged item line: strictly recalled (1) or not (0). Estimate recall probability with the item-level model."
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "score-definition",
          children: [/*#__PURE__*/_jsx("b", {
            children: "Precision"
          }), /*#__PURE__*/_jsx("p", {
            children: "Matched entries \xF7 all entries."
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "score-definition",
          children: [/*#__PURE__*/_jsx("b", {
            children: "F1"
          }), /*#__PURE__*/_jsx("p", {
            children: "2 \xD7 precision \xD7 recall \xF7 (precision + recall)."
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "score-definition",
          children: [/*#__PURE__*/_jsx("b", {
            children: "Recall above chance"
          }), /*#__PURE__*/_jsx("p", {
            children: "Own-log recall minus a chance score from other participants\u2019 logs, drawn from both groups."
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "additional-metrics",
        "data-reveal": true,
        children: [/*#__PURE__*/_jsx("h3", {
          children: "Supporting measures"
        }), /*#__PURE__*/_jsx("p", {
          children: "Count error, price error / bias, exact-day accuracy; itemised-versus-initial total, confidence calibration, repeat-item and lenient recall. Detailed definitions are in presenter notes."
        })]
      })]
    })]
  });
}
function AnalysisProtocol() {
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Heading, {
      children: "ANALYSIS AND UNEQUAL PURCHASE COUNTS"
    }), /*#__PURE__*/_jsxs("div", {
      className: "study-body analysis-protocol-layout",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "analysis-method",
        "data-reveal": true,
        children: [/*#__PURE__*/_jsx("h3", {
          children: "H1 \xB7 One item line, one trial"
        }), /*#__PURE__*/_jsxs("div", {
          className: "model-formula",
          children: ["Payment mode + baseline memory", /*#__PURE__*/_jsx("br", {}), "+ spending tendency + habitual cash use", /*#__PURE__*/_jsx("br", {}), "+ pair and participant random intercepts"]
        }), /*#__PURE__*/_jsx("p", {
          children: "Logistic mixed model. Report the mode odds ratio and average difference in recall probability."
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "analysis-method",
        "data-reveal": true,
        children: [/*#__PURE__*/_jsx("h3", {
          children: "Different amounts of evidence"
        }), /*#__PURE__*/_jsx("p", {
          children: "Use model-based shrunken person estimates for plots, rather than ranking raw percentages. Report purchase count and spending by mode descriptively."
        }), /*#__PURE__*/_jsx("p", {
          children: "Do not control for purchase count in H1: it occurs after randomization."
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "analysis-method",
        "data-reveal": true,
        children: [/*#__PURE__*/_jsx("h3", {
          children: "H2 / H3 \xB7 Total-spend error"
        }), /*#__PURE__*/_jsxs("div", {
          className: "model-formula",
          children: ["Spend error = ln[(initial total + 10)", /*#__PURE__*/_jsx("br", {}), "\xF7 (actual total + 10)]"]
        }), /*#__PURE__*/_jsx("p", {
          children: "H2 compares absolute spend error. H3 tests whether UPI has more negative signed error. Adjust for baseline memory, spending tendency, habitual cash use and pair."
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "analysis-method",
        "data-reveal": true,
        children: [/*#__PURE__*/_jsx("h3", {
          children: "Inference and robustness"
        }), /*#__PURE__*/_jsx("p", {
          children: "Holm correction across H1\u2013H3. Check equal-person weighting, lenient recall and recall above chance. Count/repeat adjustment is descriptive only."
        }), /*#__PURE__*/_jsx("p", {
          children: "No make-up test. Use Lee bounds for absence only if their assumptions are justified."
        })]
      })]
    })]
  });
}
function EthicsSlide() {
  const safeguards = [['Incomplete disclosure', 'Signed detailed consent', 'Explain tasks, purchase logging, assignment, incentives and withdrawal rights. Obtain ethics approval for withholding the exact aim and surprise-test timing; debrief afterward and allow data withdrawal.'], ['Financial privacy', 'Coded participant IDs', 'Separate identities from purchase records. Restrict access, collect only necessary data and state the retention/deletion schedule. Vendors log purchases without accessing unrelated financial information.'], ['Pressure to participate', 'Voluntary participation', 'Recruit independently of internship supervisors. Refusal, low scores or withdrawal must not affect academic standing or internship evaluation; explain reward and withdrawal terms upfront.'], ['Burden and spending pressure', 'Minimize harm', 'Explain the time commitment in the consent form. Give both groups the same incentives, require no minimum spending and make clear that these research tests are not clinical diagnoses.']];
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Heading, {
      children: "ETHICAL LIMITATIONS AND SAFEGUARDS"
    }), /*#__PURE__*/_jsx("div", {
      className: "study-body ethics-grid",
      children: safeguards.map(([risk, title, text]) => /*#__PURE__*/_jsxs("div", {
        className: "ethics-row",
        "data-reveal": true,
        children: [/*#__PURE__*/_jsx("h3", {
          children: risk
        }), /*#__PURE__*/_jsx("div", {
          children: /*#__PURE__*/_jsxs("p", {
            children: [/*#__PURE__*/_jsxs("strong", {
              children: [title, "."]
            }), " ", text]
          })
        })]
      }, risk))
    })]
  });
}
function ReferencesSlide() {
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Heading, {
      children: "REFERENCES"
    }), /*#__PURE__*/_jsx("div", {
      className: "study-body bibliography",
      "data-lenis-prevent": true,
      children: refs.map(([authors, title, url]) => /*#__PURE__*/_jsxs("div", {
        className: "bibliography-entry",
        children: [/*#__PURE__*/_jsxs("span", {
          children: [/*#__PURE__*/_jsxs("strong", {
            children: [authors, "."]
          }), " ", title]
        }), url && /*#__PURE__*/_jsx("a", {
          href: url,
          target: "_blank",
          rel: "noreferrer",
          children: url.replace('https://', '')
        })]
      }, authors))
    })]
  });
}
function PaymentClosing({
  active
}) {
  const video = useRef(null);
  const [complete, setComplete] = useState(false);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  useEffect(() => {
    const el = video.current;
    if (!el) return;
    if (!active) {
      el.pause();
      el.currentTime = 0;
      setComplete(false);
      return;
    }
    if (reduced) {
      setComplete(true);
      return;
    }
    setComplete(false);
    el.currentTime = 0;
    el.play().catch(() => setComplete(true));
    return () => el.pause();
  }, [active, reduced]);
  return /*#__PURE__*/_jsxs("div", {
    className: `thankyou-stage published-success ${complete ? 'is-complete' : ''}`,
    children: [/*#__PURE__*/_jsx("video", {
      ref: video,
      className: "success-video",
      src: paymentSuccessVideo,
      poster: paymentSuccessPoster,
      muted: true,
      playsInline: true,
      preload: "auto",
      onEnded: () => setComplete(true),
      onError: () => setComplete(true),
      "aria-label": "Google Pay success animation recreation"
    }), /*#__PURE__*/_jsx("h1", {
      className: "thankyou-message",
      children: "THANK YOU."
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
      gsap.fromTo('.heading,.study-copy,.intro-purpose', {
        y: reduced.current ? 0 : 16
      }, {
        y: 0,
        duration: reduced.current ? .01 : .65,
        stagger: .06,
        ease: 'power3.out',
        clearProps: 'transform'
      });
      if (reduced.current) return;
      const slide = sections.current[active];
      if (slide.querySelector('.anatomy-figure')) gsap.from('.anatomy-figure', {
        y: 16,
        duration: 1.1,
        stagger: .14,
        delay: .2,
        clearProps: 'transform'
      });
      if (slide.querySelector('.week-days>div')) gsap.from('.week-days>div', {
        y: 18,
        duration: .5,
        stagger: .09,
        delay: .4,
        clearProps: 'transform'
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
        gsap.from('.mini-building', {
          y: 14,
          duration: .7,
          stagger: .2,
          delay: .5,
          clearProps: 'transform'
        });
        gsap.from('.assigned-wings>div', {
          x: 25,
          duration: .7,
          stagger: .25,
          delay: 1,
          clearProps: 'transform'
        });
      }
      if (slide.querySelector('.time-step')) {
        gsap.from('.time-step', {
          y: 22,
          duration: .8,
          stagger: .2,
          delay: .4,
          clearProps: 'transform'
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
        duration: .85,
        stagger: .12,
        delay: .4,
        clearProps: 'transform'
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
          y: 10,
          duration: .5,
          stagger: .25,
          delay: 1,
          clearProps: 'transform'
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
      children: [i === 0 && /*#__PURE__*/_jsxs("header", {
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
        children: [/*#__PURE__*/_jsxs("div", {
          className: "cover-title",
          "data-reveal": true,
          children: [/*#__PURE__*/_jsxs("h1", {
            children: ["THE PURCHASES", /*#__PURE__*/_jsx("br", {}), "WE REMEMBER."]
          }), /*#__PURE__*/_jsx("p", {
            children: "UPI or Cash: Does mode of payment affect recall of spending?"
          }), /*#__PURE__*/_jsxs("div", {
            className: "presenter-names",
            children: ["Anivarth Varma P ", /*#__PURE__*/_jsx("span", {
              "aria-hidden": "true",
              children: "\xB7"
            }), " Shreyash Chandak"]
          })]
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
            children: "7 spending days \u2192 Monday recall"
          }), /*#__PURE__*/_jsx("div", {
            className: "memory-question",
            children: "What did you purchase?"
          })]
        })]
      }), 'cover revised-cover'), frame(1, /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx(Heading, {
          children: "BACKGROUND AND MOTIVATION"
        }), /*#__PURE__*/_jsxs("div", {
          className: "study-body introduction-layout",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "introduction-copy",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "study-copy",
              "data-reveal": true,
              children: [/*#__PURE__*/_jsx("h3", {
                children: "Remembering purchases matters"
              }), /*#__PURE__*/_jsx("p", {
                children: "Monitoring expenditure depends partly on remembering what we bought and how much we spent. Forgotten purchases can leave us with an inaccurate picture of our spending."
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "study-copy",
              "data-reveal": true,
              children: [/*#__PURE__*/_jsx("h3", {
                children: "Payment creates different memory cues"
              }), /*#__PURE__*/_jsx("p", {
                children: "Cash involves counting notes and receiving change. UPI provides payment confirmations and a digital transaction history. Either set of cues could help people remember purchases."
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "intro-purpose",
              "data-reveal": true,
              children: [/*#__PURE__*/_jsx("h3", {
                children: "Why run this study?"
              }), /*#__PURE__*/_jsx("p", {
                children: "Compare delayed recall of real cash and UPI purchases against vendor records, rather than assume that one mode helps memory more."
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "intro-payment-figures",
            "data-reveal": true,
            children: [/*#__PURE__*/_jsxs("div", {
              className: "cash",
              children: [/*#__PURE__*/_jsx(Anatomy, {
                kind: "cash"
              }), /*#__PURE__*/_jsx("h3", {
                children: "Cash"
              }), /*#__PURE__*/_jsx("p", {
                children: "Physical payment cues"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "upi",
              children: [/*#__PURE__*/_jsx(Anatomy, {
                kind: "upi"
              }), /*#__PURE__*/_jsx("h3", {
                children: "UPI"
              }), /*#__PURE__*/_jsx("p", {
                children: "Digital payment cues"
              })]
            })]
          })]
        })]
      }), 'research-slide introduction-slide'), frame(2, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 1
      }), 'research-slide layout-1'), frame(3, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 2
      }), 'research-slide layout-2'), frame(4, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 3
      }), 'research-slide layout-3'), frame(5, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 4
      }), 'research-slide layout-4'), frame(6, /*#__PURE__*/_jsx(BaselineSession, {}), 'research-slide protocol-baseline'), frame(7, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 5
      }), 'research-slide layout-5'), frame(8, /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx("div", {
          className: "design-top",
          children: /*#__PURE__*/_jsxs(Heading, {
            children: ["MATCHED-PAIR", /*#__PURE__*/_jsx("br", {}), "ALLOCATION."]
          })
        }), /*#__PURE__*/_jsxs("div", {
          className: "sampling-method",
          "data-reveal": true,
          children: [/*#__PURE__*/_jsx("h3", {
            children: "Convenience recruitment + matched-pair randomization"
          }), /*#__PURE__*/_jsx("p", {
            children: "Recruit eligible newcomers at one college. Match on standardized baseline memory, spending tendency and habitual cash use using Mahalanobis distance. Use optimal pairing, then a concealed computer coin flip within each pair. Reallocate up to three times if any standardized mean difference exceeds 0.20."
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
            children: "Check baseline balance"
          }), /*#__PURE__*/_jsx("span", {
            children: "Computer coin flip"
          })]
        })]
      })), frame(9, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 7
      }), 'research-slide layout-7'), frame(10, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 8
      }), 'research-slide layout-8'), frame(11, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 9
      }), 'research-slide layout-9'), frame(12, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 10
      }), 'research-slide layout-10'), frame(13, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 11
      }), 'research-slide layout-11'), frame(14, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 12
      }), 'research-slide layout-12'), frame(15, /*#__PURE__*/_jsx(ScoringProtocol, {}), 'research-slide protocol-scoring'), frame(16, /*#__PURE__*/_jsx(AnalysisProtocol, {}), 'research-slide protocol-analysis'), frame(17, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 13
      }), 'research-slide layout-13'), frame(18, /*#__PURE__*/_jsx(ResearchSlide, {
        index: 14
      }), 'research-slide layout-14'), frame(19, /*#__PURE__*/_jsx(EthicsSlide, {}), 'research-slide ethics-slide'), frame(20, /*#__PURE__*/_jsx(PaymentClosing, {
        active: active === 20
      }), 'thankyou-slide'), frame(21, /*#__PURE__*/_jsx(ReferencesSlide, {}), 'research-slide references-slide')]
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
                children: "Study protocol \xB7 17 November 2026"
              }), /*#__PURE__*/_jsx("span", {
                children: "The latest operationalisation supplied by the team supersedes the earlier PDF: matching on baseline memory, spending tendency and habitual cash use; uncapped 25% discounts; Monday digital recall; and item-line mixed-model analysis."
              })]
            }), /*#__PURE__*/_jsx("p", {
              className: "source-credit",
              children: "Payment objects, matching boards, vendor counter and recall worksheet generated with the Anatomy toolkit. Motion: GSAP, Lenis and Motion."
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