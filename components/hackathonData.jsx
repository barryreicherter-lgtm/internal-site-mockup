// SHRM Innovation Series — Inaugural Hackathon (April 16–17, 2026).
// 55 apps built in 24 hours by 39 builders across 7 divisions and 2 countries.
// 88% Mission-Complete rate. 12 HR domains covered.
// Elite Recognition (Top 2, 5-of-6 panel votes): Pathnex + SHRM Metric Matchup.
// Strategic-signal clusters + additional curated apps shown below.

const HACK_CURATED = [
  // === ELITE RECOGNITION — Top 2 (5-of-6 panel votes) ==========================
  {
    id: "pathnex", elite: true, elevated: true, order: 1,
    title: "Pathnex",
    author: "Karan Singh",
    division: "SHRM East (India)",
    theme: "Member Journey",
    status: "elite",
    statusLine: "Elite Recognition · Top 2",
    tldr: "Operationalizes BASK — SHRM's Behavior, Attitudes, Skills, and Knowledge framework — into a personalized Individual Development Plan (IDP) generator that turns BASK from a static competency model into a live career-development engine.",
    problem: "BASK is SHRM's flagship competency framework, but it has lived primarily as a static reference. HR professionals need it to produce something — a concrete, personalized growth plan grounded in SHRM research.",
    audience: "HR professionals at every career stage · SHRM certification candidates · learning & development teams",
  },
  {
    id: "metricmatchup", elite: true, elevated: true, order: 2,
    title: "SHRM Metric Matchup",
    author: "Nathan Ebikwo",
    division: "SHRM U.S.",
    theme: "Analytics & Benchmarking",
    status: "elite",
    statusLine: "Elite Recognition · Top 2",
    tldr: "Interactive HR benchmarking scorecard: input key metrics, get percentile rankings against SHRM research, anomaly flags, an executive summary, and a 'cost of inaction' in dollars — a CFO-legible translation of HR data.",
    problem: "HR has data but can't answer 'are we good?' in business terms. Benchmarks are buried in PDFs; leaders struggle to translate metrics into financial impact a CFO will accept.",
    audience: "CHROs · HR Business Partners · People analytics teams · mid-market HR leaders making the business case",
  },

  // === STRATEGIC SIGNAL — CHRO Decision Cluster ===============================
  { id: "signalforge",   order: 10, title: "SignalForge",
    author: "Team build", division: "SHRM U.S.", theme: "Enterprise Intelligence", status: "signal",
    statusLine: "Strategic signal · CHRO decision cluster",
    tldr: "Executive-grade signal aggregator: compresses fragmented workforce signals into the narrative a CHRO needs to walk into a board meeting with.",
    problem: "CHRO decision-making runs on synthesis, not dashboards. The cluster of tools here points to a shared unmet need." },

  { id: "evolve",        order: 11, title: "Evolve",
    author: "Alaina Leadbeter", division: "SHRM U.S.", theme: "Enterprise Intelligence", status: "signal",
    statusLine: "Strategic signal · CHRO decision cluster",
    tldr: "AI-driven workforce intelligence for redeploy / upskill / hire decisions — scenario modeling grounded in SHRM research, with executive briefs generated from enterprise data.",
    problem: "Limited visibility into internal talent; misaligned roles; decisions disconnected from market and workforce realities." },

  { id: "peoplescope",   order: 12, title: "PeopleScope",
    author: "Team build", division: "SHRM U.S.", theme: "Enterprise Intelligence", status: "signal",
    statusLine: "Strategic signal · CHRO decision cluster",
    tldr: "Workforce telemetry lens for senior HR leaders — translating people data into the few metrics that actually drive executive decisions.",
    problem: "CHROs are drowning in dashboards and starved of narrative. PeopleScope reads as a sign of the same unmet need." },

  { id: "careos",        order: 13, title: "CareOS",
    author: "Shayla Alexander-Milligan", division: "SHRM U.S.", theme: "Enterprise Intelligence", status: "signal",
    statusLine: "Strategic signal · CHRO decision cluster",
    tldr: "Employer caregiver intelligence platform — five modules covering Caregiver OS, Manager Playbook, Experience Assessment, Strategy Playbook, and Metrics Dashboard.",
    problem: "Three in four workers manage a caregiving responsibility; 32% never disclose. Less than 12% of employers conduct an annual caregiving assessment." },

  // === STRATEGIC SIGNAL — Simulation Cluster ==================================
  { id: "investigation-sim", order: 20, title: "HR Investigation Simulator",
    author: "Alice Clark", division: "SHRM U.S.", theme: "Learning & Simulation", status: "signal",
    statusLine: "Strategic signal · simulation cluster",
    tldr: "Scenario-based ER training. Learners take the seat of an HR investigator, work a 7-step framework, interview witnesses, and review evidence — with framework-aligned feedback.",
    problem: "HR investigations are high-stakes and legally sensitive — but traditional training is passive. New HR pros rarely get to practice before their first real case." },

  { id: "tlu-sim",       order: 21, title: "TLU Simulation",
    author: "Team build", division: "SHRM U.S.", theme: "Learning & Simulation", status: "signal",
    statusLine: "Strategic signal · simulation cluster",
    tldr: "Terminated-Letter-of-Understanding scenario practice — a high-stakes HR conversation rehearsed in a safe sandbox before the live meeting.",
    problem: "The hardest HR conversations are the ones you can't practice — until now. Training for judgment, not compliance." },

  { id: "adjacensee",    order: 22, title: "AdjacenSee",
    author: "Calven Engstrom & Sydney Ross", division: "SHRM U.S.", theme: "Talent Intelligence", status: "signal",
    statusLine: "Strategic signal · simulation cluster",
    tldr: "A skills-to-abilities matrix built on O*NET data that surfaces the transferable strengths candidates bring — strengths recruiters and hiring managers often miss.",
    problem: "Recruiters restricted to the job description overlook transferable talent. Existing data sources are too complex for day-to-day use." },

  { id: "casecoach",     order: 23, title: "CaseCoach",
    author: "Team build", division: "SHRM U.S.", theme: "Learning & Simulation", status: "signal",
    statusLine: "Strategic signal · simulation cluster",
    tldr: "Case-walkthrough coach for new HR practitioners — a guided companion through real workplace scenarios with SHRM-aligned framing.",
    problem: "Early-career HR professionals need structured reps. Judgment comes from guided cases, not policy PDFs." },

  // === STRATEGIC SIGNAL — Direct-to-Employee Cluster ==========================
  { id: "bloom",         order: 30, title: "Bloom",
    author: "Abby Harrington", division: "SHRM U.S.", theme: "Manager & Onboarding", status: "signal",
    statusLine: "Strategic signal · direct-to-employee cluster",
    tldr: "A guided first-90-days for every new hire, with built-in visibility for managers and HR — timelines, check-ins, searchable docs, and an Ask-Bloom assistant grounded in company policy.",
    problem: "Onboarding is fragmented; managers lack visibility; HR lacks engagement data until problems surface." },

  { id: "hr-therapy",    order: 31, title: "HR Therapy",
    author: "Team build", division: "SHRM U.S.", theme: "Member Journey", status: "signal",
    statusLine: "Strategic signal · direct-to-employee cluster",
    tldr: "A confidential, SHRM-grounded space for employees to pressure-test a workplace situation before escalating — framing, options, likely next steps.",
    problem: "Most employees have nowhere to think out loud about a workplace issue before it becomes a formal complaint." },

  { id: "upskillx",      order: 32, title: "UpskillX",
    author: "Team build", division: "SHRM U.S.", theme: "Learning & Simulation", status: "signal",
    statusLine: "Strategic signal · direct-to-employee cluster",
    tldr: "Employee-facing skill-building pathways tied to SHRM's research on role evolution — bite-sized, job-relevant, accountable.",
    problem: "Learning at work is fragmented and generic. Employees need paths that map to their next role, not their last review." },

  // === OTHER NOTABLE BUILDS ===================================================
  { id: "pathfinder",    order: 40, title: "SHRM PathFinder",
    author: "Alice Clark", division: "SHRM U.S.", theme: "Member Journey", status: "notable",
    statusLine: "Notable build",
    tldr: "Interactive recommendation engine that turns SHRM's full education portfolio into a personalized learning path in under 60 seconds — a Hero credential, a Build-Your-Path sequence, and Quick Wins.",
    problem: "SHRM offers one of the richest HR education portfolios in the industry — and that breadth is also the challenge. Prospects bounce; high-intent learners default to what they've heard of." },

  { id: "compass",       order: 41, title: "Civility Compass",
    author: "Kristi Meacham", division: "SHRM U.S.", theme: "Research-Backed Diagnostic", status: "notable",
    statusLine: "Notable build",
    tldr: "SHRM-aligned civility diagnostic. HR enters a workplace issue in plain language; the tool returns a structured diagnosis, signals, root-cause hypotheses, and practical next steps — grounded in SHRM's Civility Index.",
    problem: "Incivility is persistent and expensive. SHRM's Civility Index sits in the 'Take Action' zone." },

  { id: "careercoach",   order: 42, title: "AI Career Health Check",
    author: "Saghana Suresh Kumar", division: "SHRM U.S.", theme: "Member Journey", status: "notable",
    statusLine: "Notable build",
    tldr: "Like a gym's health assessment, this introduces an AI Career Health Check paired with a customized roadmap — bringing clarity to how HR roles are evolving with AI.",
    problem: "HR professionals need a developmental (not evaluative) way to see how their role is changing and what practical next steps keep them ahead." },

  { id: "workradar",     order: 43, title: "SHRM Work Radar",
    author: "Brett Roth", division: "SHRM U.S.", theme: "Compliance & Policy", status: "notable",
    statusLine: "Notable build",
    tldr: "Personalized alerting with three modes: Work Alerts (what changed), Horizon Index (what's coming), and Advocate — role-relevant guidance tailored by responsibility, location, and industry.",
    problem: "HR leaders need to stay ahead of policy change — not react to it. Today's alerts are generic and delayed." },

  { id: "guardian",      order: 44, title: "SHRM Guardian",
    author: "Nathan Ebikwo", division: "SHRM U.S.", theme: "Compliance & Policy", status: "notable",
    statusLine: "Notable build",
    tldr: "Compliance copilot: upload policies or job posts, flag risks across U.S. and global laws, prioritize issues P0–P3, draft fixes with citations, and track remediation.",
    problem: "HR teams face fast-changing regulations but rely on slow, point-in-time audits. Existing tools are built for lawyers, not operators." },

  { id: "pulse",         order: 45, title: "Pulse Survey Insight Generator",
    author: "Olivia Pagan", division: "SHRM U.S.", theme: "Analytics & Benchmarking", status: "notable",
    statusLine: "Notable build",
    tldr: "Turn pulse survey results into decision-ready top-line insights: executive summary, key themes, risk signals, recommendations — exportable to Word or slides.",
    problem: "HR teams collect valuable feedback but sharing and acting on it takes significant manual work." },

  { id: "insightbridge", order: 46, title: "SHRM InsightBridge",
    author: "Niloufar Gomez", division: "SHRM U.S.", theme: "Analytics & Benchmarking", status: "notable",
    statusLine: "Notable build",
    tldr: "Helps HR leaders translate people data into executive-ready narratives leaders can act on — merging HR metrics and SHRM expertise into an instant executive brief.",
    problem: "HR professionals have abundant data but lack clear storytelling that connects metrics to strategic outcomes." },

  { id: "ave",           order: 47, title: "A.V.E. Framework",
    author: "Nisha Kurup", division: "SHRM U.S.", theme: "Talent Intelligence", status: "notable",
    statusLine: "Notable build",
    tldr: "Alumni Value Ecosystem — captures alumni value at exit, tracks growth via public data, and activates alumni across three outcomes: talent, brand, and business.",
    problem: "Organizations lose visibility into proven talent and trusted relationships the moment employees leave." },

  { id: "hireprep",      order: 48, title: "HirePrep",
    author: "Kevin Abbed", division: "SHRM U.S.", theme: "Learning & Simulation", status: "notable",
    statusLine: "Notable build",
    tldr: "A two-sided mock interview platform connecting early-career candidates with SHRM-verified practitioners for 30-minute practice interviews and structured feedback.",
    problem: "Students rarely get realistic reps before high-stakes interviews. Career centers can't scale 1:1 coaching." },

  { id: "mgrcost",       order: 49, title: "Cost of Bad Management Calculator",
    author: "Anika Dhir", division: "SHRM U.S.", theme: "Analytics & Benchmarking", status: "notable",
    statusLine: "Notable build",
    tldr: "A research-backed calculator that turns six workforce inputs into a hard-dollar estimate of what ineffective management costs — projected across five years, mapped to SHRM interventions.",
    problem: "HR leaders need to make the business case for investing in managers. The numbers exist — they're just not in a form a CFO will accept." },

  { id: "people-sim",    order: 50, title: "People Analytics in Action",
    author: "Alice Clark", division: "SHRM U.S.", theme: "Learning & Simulation", status: "notable",
    statusLine: "Notable build",
    tldr: "A self-paced simulation across six phases — Brief, Data Room, Analysis, Recommendation, Executive Defense, Debrief — grading decisions against expert takes on four fully built scenarios.",
    problem: "Most HR analytics training teaches statistics, not judgment." },

  { id: "hrxdoc",        order: 51, title: "HR Doc Genius",
    author: "Jessica Langlois", division: "SHRM U.S.", theme: "Knowledge & Advisory", status: "notable",
    statusLine: "Notable build",
    tldr: "An interactive builder for policies, forms, and communications — with state and federal law applied — delivering a self-service function Knowledge Advisors cannot provide directly.",
    problem: "Members regularly request document creation from SHRM Knowledge Advisors, who are unable to directly deliver it." },

  { id: "flsa",          order: 52, title: "FLSA Classification Advisor",
    author: "Jessica Langlois", division: "SHRM U.S.", theme: "Knowledge & Advisory", status: "notable",
    statusLine: "Notable build",
    tldr: "A 360-degree decision engine built on SHRM's FLSA Exemption Flow Chart: upload a job description for analysis, or walk a guided questionnaire. Built-in learning module for misclassification.",
    problem: "'Is this role exempt or nonexempt?' is one of the most frequent member asks Knowledge Advisors cannot directly resolve." },
];

// Filter chips
const HACK_THEMES = [
  "All",
  "Enterprise Intelligence",
  "Learning & Simulation",
  "Analytics & Benchmarking",
  "Member Journey",
  "Compliance & Policy",
  "Manager & Onboarding",
  "Talent Intelligence",
  "Knowledge & Advisory",
  "Research-Backed Diagnostic",
];

// Panel of 6 judges — 5-of-6 votes threshold for Elite Recognition.
const HACK_PANEL = [
  { name: "Alex Alonso",          role: "Chief Knowledge Officer, SHRM" },
  { name: "Syed Wasey",           role: "Chief Technology Officer, SHRM" },
  { name: "Tina Beaty",           role: "Chief Marketing Officer, SHRM" },
  { name: "Barry Reicherter",     role: "Chief Communications Officer, SHRM" },
  { name: "Joey Buss",            role: "Chief Data Officer, SHRM" },
  { name: "Sandeep Reddy Nimma",  role: "SVP, SHRM East" },
];

// Elite Recognition projects — full subpage content for the Top 2.
const ELEVATED_PROJECTS = {
  pathnex: {
    id: "pathnex",
    code: "Pathnex",
    name: "Pathnex",
    origin: { source: "SHRM Innovation Series — Inaugural Hackathon (April 2026)", author: "Karan Singh · SHRM East (India)" },
    tagline: "BASK, operationalized into a live development engine.",
    oneLiner: "Pathnex operationalizes BASK — SHRM's Behavior, Attitudes, Skills, and Knowledge framework — into a personalized Individual Development Plan generator. It turns BASK from a static competency model into a live career-development engine, with growth plans grounded in SHRM research and mapped to the member's stage, role, and goals.",
    classification: "Member Journey · Elite Recognition (Top 2)",
    status: "elite",
    statusLine: "Elite Recognition · 5-of-6 panel votes",
    accent: "#0076BE",
    accentDark: "#1B3C69",
    gradient: "linear-gradient(135deg, #00093E 0%, #1B3C69 45%, #0076BE 100%)",
    kpis: [
      { n: "Top 2", l: "Elite Recognition · 5-of-6 panel votes" },
      { n: "BASK",  l: "Operationalized: Behavior, Attitudes, Skills, Knowledge" },
      { n: "IDP",   l: "Personalized Individual Development Plan generator" },
      { n: "1 of 55", l: "Apps built in 24 hours at the Inaugural Hackathon" },
    ],
    phases: [
      { k: "BASK input",   v: "Member's role, stage, goals mapped to the BASK framework" },
      { k: "Diagnosis",    v: "BASK competency scan — strengths, gaps, adjacencies" },
      { k: "IDP draft",    v: "Personalized Individual Development Plan generated" },
      { k: "SHRM grounding", v: "Recommendations anchored in SHRM research and certifications" },
      { k: "Iterate",      v: "Refine against stated outcomes — time, budget, career direction" },
      { k: "Export",       v: "Shareable plan for manager conversations and learning budgets" },
    ],
    audiences: [
      "HR professionals at every career stage who need BASK to produce something concrete, not just describe them",
      "SHRM certification candidates planning the credential sequence that actually maps to their goals",
      "Learning & Development teams operationalizing BASK for team-wide development planning",
      "SHRM Member Experience — as a high-signal surface for education portfolio engagement",
    ],
  },
  metricmatchup: {
    id: "metricmatchup",
    code: "Metric Matchup",
    name: "SHRM Metric Matchup",
    origin: { source: "SHRM Innovation Series — Inaugural Hackathon (April 2026)", author: "Nathan Ebikwo · SHRM U.S." },
    tagline: "Benchmark your HR metrics. Price the cost of inaction.",
    oneLiner: "An interactive HR benchmarking scorecard. Input or upload key metrics; receive percentile rankings against SHRM research, anomaly flags, an executive summary, and a 'cost of inaction' in dollars — the CFO-legible translation HR has needed.",
    classification: "Analytics & Benchmarking · Elite Recognition (Top 2)",
    status: "elite",
    statusLine: "Elite Recognition · 5-of-6 panel votes",
    accent: "#F26A42",
    accentDark: "#1B3C69",
    gradient: "linear-gradient(135deg, #00093E 0%, #1B3C69 45%, #F26A42 100%)",
    kpis: [
      { n: "Top 2", l: "Elite Recognition · 5-of-6 panel votes" },
      { n: "$",     l: "Cost of inaction — HR metrics translated to dollars" },
      { n: "p-tile", l: "Percentile rankings against SHRM benchmark research" },
      { n: "1 of 55", l: "Apps built in 24 hours at the Inaugural Hackathon" },
    ],
    phases: [
      { k: "Input",          v: "Key HR metrics — turnover, engagement, time-to-fill, comp ratios" },
      { k: "Benchmark",      v: "Percentile placement against SHRM's benchmark research" },
      { k: "Anomaly flags",  v: "Which numbers sit outside normal — and by how much" },
      { k: "Exec summary",   v: "Auto-drafted narrative HR can take into a leadership meeting" },
      { k: "Cost of inaction", v: "Dollar estimate of what the gap is costing per quarter / year" },
      { k: "Action map",     v: "SHRM research and tools matched to each flagged gap" },
    ],
    audiences: [
      "CHROs and HR Business Partners making the business case to a CFO who already has a theory",
      "People analytics teams who have the data but not the translation layer",
      "Mid-market HR leaders without a dedicated benchmarking budget",
      "SHRM Research — as a high-traffic surface for benchmark data put back into circulation",
    ],
  },
};

window.HACK_CURATED = HACK_CURATED;
window.HACK_THEMES = HACK_THEMES;
window.HACK_PANEL = HACK_PANEL;
window.ELEVATED_PROJECTS = ELEVATED_PROJECTS;
window.getElevatedProject = (id) => ELEVATED_PROJECTS[id];
