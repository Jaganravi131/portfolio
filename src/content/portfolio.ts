export const site = {
  name: "Jagan Babu R.",
  shortName: "Jagan",
  initials: "JB",
  role: "Backend and full-stack software engineer",
  location: "Chennai, India",
  email: "jaganravi131@gmail.com",
  phone: "+91 81248 19503",
  phoneHref: "+918124819503",
  linkedin: "https://www.linkedin.com/in/jagan-babu-r/",
  github: "https://github.com/Jaganravi131",
  skillrack: "https://skillrack.com/profile/442395",
  headline: ["Backend & full-stack", "software engineer."],
  lede: "I design and build reliable, production-ready applications. My foundation is in data structures, algorithms and system design, with hands-on work in backend architecture, API development, applied AI/ML and cloud deployment.",
  roleLine: "Open to internships now, and to backend or applied-ML roles from 2027.",
  workIntro:
    "Eight projects, from a live UPI fraud platform to an agent runtime with an approval gate. Two run in public; the rest run from source.",
  contactTitle: "Let's talk about the work.",
  contactNote:
    "I finish my B.E. in 2027. If you are hiring for backend, applied ML or platform work, I would like to hear about it. Chennai, Bengaluru or remote.",
  close: "Let's talk about the work.",
};

export interface ProjectLink {
  label: string;
  href: string;
}

export type PlateFigure = "agents" | "audit" | "command" | "graph";

export type ProjectCategory = "ai" | "fullstack" | "web3" | "hardware";

export interface Project {
  id: string;
  title: string;
  type: string;
  year: string;
  summary: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  categories: ProjectCategory[];
  flagship?: boolean;
  plate: {
    kind: "image" | "figure";
    src?: string;
    alt?: string;
    figure?: PlateFigure;
    label: string;
    caption: string;
    fit?: "cover" | "contain";
  };
}

export const projects: Project[] = [
  {
    id: "upi-safeguard",
    title: "UPI SafeGuard",
    type: "Fraud detection · Full stack",
    year: "2026",
    summary:
      "A payments safety net that scores every transfer, explains the score, and stops the risky ones at a guardian.",
    description:
      "Every transfer is scored in real time by an XGBoost and behavioural LightGBM risk engine, explained in plain language, and held for guardian approval above a set limit. A FastAPI and Spring Boot core runs a sandbox double-entry ledger, and a Groq LLaMA 3.3 advisor answers fraud questions in 12 Indian languages.",
    stack: ["React 18", "FastAPI", "Spring Boot", "XGBoost", "LightGBM", "Groq", "PostgreSQL"],
    links: [
      { label: "Live app", href: "https://upi-safe-gaurd.vercel.app/" },
      { label: "Source", href: "https://github.com/Jaganravi131/UPI-SafeGaurd" },
    ],
    flagship: true,
    categories: ["fullstack", "ai"],
    plate: {
      kind: "image",
      src: "/cases/upi-home.png",
      alt: "The UPI SafeGuard sign-in screen: a white card on a deep purple field, asking for an email address to send an OTP.",
      label: "live · vercel",
      caption: "UPI SafeGuard, live. Sandbox money, real ledger semantics.",
    },
  },
  {
    id: "friday",
    title: "FRIDAY",
    type: "Agent runtime · Local first",
    year: "2026",
    summary:
      "An agent that runs on your machine, remembers in SQLite, and asks before it touches anything dangerous.",
    description:
      "A full agent runtime, not a chat wrapper: a synchronous ReAct loop, bi-temporal memory compiled from Markdown into SQLite and FTS indices, a phase-gated toolset that grows from 4 to 18 tools behind a deterministic policy engine, and an approval gate for shell, writes and edits. Serves a FastAPI and SSE interface, a CLI, and a test suite that runs with no API key.",
    stack: ["Python", "FastAPI", "SQLite FTS", "SSE", "ReAct", "pytest"],
    links: [{ label: "Source", href: "https://github.com/Jaganravi131/FRIDAY" }],
    flagship: true,
    categories: ["ai"],
    plate: {
      kind: "image",
      src: "/cases/friday-hud.png",
      alt: "The FRIDAY desktop interface: dark telemetry rails, a prompt field, session history, and live CPU, memory and disk gauges.",
      label: "hud · local",
      caption: "The FRIDAY field interface. Every tool is policy-gated and visible.",
    },
  },
  {
    id: "verichain",
    title: "VeriChain",
    type: "Credentialing · Web3",
    year: "2025",
    summary:
      "Degrees and certificates as soulbound tokens, verifiable by a stranger with a QR code.",
    description:
      "Academic and professional credentials issued as soulbound ERC-721 tokens on Polygon, with metadata on IPFS through Pinata. Institutions issue from a dashboard, holders share a QR code or a PDF, and anyone can verify a credential without contacting the issuer. A demo mode runs the whole flow without a wallet.",
    stack: ["React 18", "Solidity 0.8.20", "Polygon Amoy", "ethers.js", "IPFS / Pinata"],
    links: [
      { label: "Live app", href: "https://veri-chain-snowy.vercel.app/" },
      { label: "Source", href: "https://github.com/Jaganravi131/VeriChain" },
    ],
    categories: ["web3"],
    plate: {
      kind: "image",
      src: "/cases/verichain-home.png",
      alt: "The VeriChain landing page: a dark navy hero with a floating credential card marked verified on-chain.",
      label: "live · polygon amoy",
      caption: "The VeriChain site, with a credential verified on-chain.",
    },
  },
  {
    id: "career-copilot",
    title: "Career Copilot",
    type: "Agentic AI · Search",
    year: "2026",
    summary:
      "Nine agents that read live job boards, score the fit, tailor the résumé, and stop before submitting.",
    description:
      "A nine-agent job search pipeline built on Google ADK. It scouts live roles from Remotive, Jobicy, RemoteOK and DuckDuckGo, scores them with TF-IDF and Gemini, tailors a résumé behind an anti-hallucination quality gate, pre-fills application forms with Playwright, and sends a daily digest to Telegram, WhatsApp or email. A person still submits the application.",
    stack: ["Python", "Google ADK", "Gemini", "TF-IDF", "Playwright", "Streamlit", "Docker"],
    links: [{ label: "Source", href: "https://github.com/Jaganravi131/Resume-agent" }],
    categories: ["ai"],
    plate: {
      kind: "figure",
      figure: "agents",
      label: "pipeline · nine agents",
      caption: "Nine agents, five stages, one human signature at the end.",
    },
  },
  {
    id: "equivis",
    title: "EquiVis-AI",
    type: "Fairness · Machine learning",
    year: "2026",
    summary:
      "Upload a model and a dataset, get the bias readings, the confidence intervals, and a playbook.",
    description:
      "A no-code fairness audit platform. Upload a dataset or a scikit-learn model and it computes disparate impact, demographic parity, equalized odds and proxy-feature correlation, attaches confidence intervals and significance tests, then writes a role-specific remediation playbook for compliance and data teams.",
    stack: ["Python", "FastAPI", "React", "scikit-learn", "joblib", "Gemini"],
    links: [{ label: "Source", href: "https://github.com/Jaganravi131/EquiVis-AI" }],
    categories: ["ai"],
    plate: {
      kind: "figure",
      figure: "audit",
      label: "report · four readings",
      caption: "From a dataset and a model to a written playbook.",
    },
  },
  {
    id: "bin-genie",
    title: "BIN-GENIE",
    type: "Vision · Hardware",
    year: "2026",
    summary:
      "A four-bay sorting bin where sensors can overrule the vision model before the carousel moves.",
    description:
      "An AI-assisted smart waste bin: vision proposes a class, then an HC-SR04, a moisture sensor and an inductive metal sensor can veto it before a NEMA17 stepper indexes the carousel. The repo ships the ESP32 firmware, a sensor-fusion dashboard that runs without the physical bin, a CAD exterior, and a demo of four live sorts. An earlier 13-minute classifier run logged 13,352 frames at a 95.94% detection rate and became an IEOM 2025 paper.",
    stack: ["Python", "ESP32", "OpenCV", "YOLO", "React", "Stepper control"],
    links: [
      {
        label: "Source",
        href: "https://github.com/Jaganravi131/Waste-Segregation-smart-bin-BINGINIE-",
      },
    ],
    categories: ["hardware", "ai"],
    plate: {
      kind: "image",
      src: "/cases/bingenie-exterior.png",
      alt: "A CAD render of the BIN-GENIE unit: a black tapered cabinet with a green light strip and a side intake.",
      label: "cad · exterior",
      caption: "The BIN-GENIE cabinet. Vision proposes, sensors dispose.",
      fit: "contain",
    },
  },
  {
    id: "groqflow",
    title: "GroqFlow",
    type: "Voice · Desktop",
    year: "2026",
    summary:
      "A voice-first desktop assistant that reads the screen for context and works across your apps.",
    description:
      "A voice-first desktop assistant that reads the screen for context and works across apps: drafting and sending mail, posting to social accounts, editing spreadsheets, driving Office. It runs on Groq for language and Screenpipe's Terminator for desktop actions, and takes commands in English or Hindi. Sensitive regions are redacted before the screen is read.",
    stack: ["React", "TypeScript", "Groq", "Screenpipe", "Web Speech API"],
    links: [{ label: "Source", href: "https://github.com/Jaganravi131/cecilia_Assistant_01" }],
    categories: ["ai"],
    plate: {
      kind: "figure",
      figure: "command",
      label: "voice · desktop",
      caption: "One spoken command, routed across desktop apps.",
    },
  },
  {
    id: "bharatgraph",
    title: "BharatGraph",
    type: "Knowledge graph · Intelligence",
    year: "2026",
    summary:
      "Geopolitics, economics and supply risk fused into one interactive 3D graph you can walk through.",
    description:
      "A multi-domain intelligence engine that ingests planetary-scale reporting, resolves entities into a Neo4j ontology with an India-centred lens, and uses Groq-hosted language models to write the edges between them. A FastAPI service serves the graph; a React front end renders it in 3D so a strategy question becomes a path you can follow.",
    stack: ["Python", "FastAPI", "Neo4j Aura", "React", "Groq", "3D graph"],
    links: [{ label: "Source", href: "https://github.com/Jaganravi131/BHARATGRAPH" }],
    categories: ["ai"],
    plate: {
      kind: "figure",
      figure: "graph",
      label: "ontology · neo4j",
      caption: "A strategic question becomes a path through the graph.",
    },
  },
];

export interface ArchiveRepo {
  name: string;
  description: string;
  language: string;
  href: string;
}

export const archive: ArchiveRepo[] = [
  {
    name: "CreditFlow",
    description:
      "Conversion attribution on the Criteo dataset: 16.5M impressions, 45K conversions, seven models and a simulator.",
    language: "Jupyter",
    href: "https://github.com/Jaganravi131/CreditFlow",
  },
  {
    name: "Blockchain logistics tracker",
    description:
      "Shipment tracking with on-chain event verification, multi-modal routing and a carbon view, on Supabase and React.",
    language: "TypeScript",
    href: "https://github.com/Jaganravi131/Blockchain_logistics_trackers",
  },
  {
    name: "DesignSync",
    description:
      "Real-time collaborative design with live cursors, version history, comments and PNG, JPG or PDF export.",
    language: "TypeScript",
    href: "https://github.com/Jaganravi131/DesignSync",
  },
  {
    name: "Deepfake analysis",
    description:
      "Detection and provenance work for manipulated video, with the source-recovery analysis written up.",
    language: "Python",
    href: "https://github.com/Jaganravi131/deepfake-detection",
  },
  {
    name: "AlgoBlocks",
    description:
      "A drag-and-drop strategy builder with backtesting and paper trading on live market data.",
    language: "TypeScript",
    href: "https://github.com/Jaganravi131/Algoblocks",
  },
  {
    name: "ExpenseEase",
    description:
      "Shared expense tracking with custom splits, OCR receipt capture and PayPal settlement.",
    language: "TypeScript",
    href: "https://github.com/Jaganravi131/expense-ease-balance-buddy",
  },
];

export const figures = [
  { value: 8, decimals: 0, suffix: "", label: "systems built", detail: "two live demos" },
  { value: 8.53, decimals: 2, suffix: "", label: "CGPA", detail: "B.E., Sri Sairam" },
  { value: 400, decimals: 0, suffix: "+", label: "problems solved", detail: "Skillrack" },
  { value: 1, decimals: 0, suffix: "", label: "conference paper", detail: "IEOM 2025, VIT" },
];

export const about = {
  title: "Profile",
  paragraphs: [
    "I am in the final year of a B.E. in Mechanical and Automation Engineering at Sri Sairam Engineering College, Chennai, with a CGPA of 8.53. I moved from industrial automation into software and machine learning.",
    "I interned with Chennai Metro Rail's electrical maintenance and rolling stock team. I worked with SCADA and TCMS data across 15 train sets, and with the PLC logic behind fault logging. That work set how I approach software: define the failure case first, then build the feature.",
    "My projects since then cover fraud scoring, credential verification, fairness auditing and agent runtimes. Most of the work is backend and applied machine learning; I build the interface when a project needs one.",
    "I am available for an internship now, and for backend or applied-ML roles from 2027.",
  ],
  signature: "Jagan Babu R.",
  signatureRole: "Backend and full-stack software engineer, Chennai",
};

export interface RecordRow {
  name: string;
  meta?: string;
  detail?: string;
  facts?: { value: string; label: string }[];
}

export const experience: RecordRow[] = [
  {
    name: "Chennai Metro Rail Limited",
    meta: "Jun – Jul 2025",
    detail:
      "Intern, Electrical Maintenance and Rolling Stock. Read SCADA and TCMS streams across 15 train sets and reverse-engineered PLC logic to automate error logging, cutting diagnostic turnaround by 20%.",
  },
];

export const education: RecordRow[] = [
  {
    name: "Sri Sairam Engineering College",
    meta: "2023 – 2027",
    detail: "B.E. Mechanical and Automation Engineering. CGPA 8.53 / 10. Chennai.",
  },
];

export const research: RecordRow[] = [
  {
    name: "IoT-enabled smart waste segregation",
    meta: "IEOM 2025 · VIT Vellore",
    detail:
      "Lead author. The classifier run behind the paper logged 13,352 frames at a 95.94% detection rate and fed the BIN-GENIE hardware build.",
    facts: [
      { value: "13,352", label: "frames logged" },
      { value: "95.94%", label: "detection rate" },
      { value: "BIN-GENIE", label: "hardware build" },
    ],
  },
];

export const awards = [
  { name: "VIT-AP LaunchPad", meta: "Top 5", detail: "from 900+ teams nationwide" },
  { name: "Mastek DeepBlue", meta: "Top 6", detail: "from 130+ teams nationwide" },
  { name: "Google Solution Challenge 2024", meta: "Top 100", detail: "regional finalist" },
  { name: "IIT Kharagpur E-Cell Empresario", meta: "Semi-finalist", detail: "entrepreneurial concept" },
];

export const toolkit = [
  {
    group: "Languages and data",
    items: ["Python", "TypeScript", "Java", "C++", "SQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    group: "Machine learning",
    items: ["XGBoost", "LightGBM", "TensorFlow", "scikit-learn", "CNNs", "RAG", "LLM agents"],
  },
  {
    group: "Backend and interface",
    items: ["FastAPI", "Spring Boot", "React", "Node.js", "REST", "SSE"],
  },
  {
    group: "Systems",
    items: ["Docker", "Linux", "Git", "PLC / SCADA", "ROS", "ESP32"],
  },
  {
    group: "Web3",
    items: ["Solidity", "Polygon", "ethers.js", "IPFS"],
  },
  {
    group: "Platforms",
    items: ["Vercel", "Supabase", "Groq", "Playwright"],
  },
];

export const photoCredits = [];
