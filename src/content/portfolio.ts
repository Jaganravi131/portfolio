export const site = {
  name: "Jagan Babu R.",
  role: "Aspiring Software / ML Engineer",
  summary:
    "Aspiring Software/ML Engineer with hands-on experience building production-style AI systems and real-time ML inference. Interested in backend and applied AI roles.",
  location: "Chennai, India",
  phone: "+91 8124819503",
  email: "jaganravi131@gmail.com",
  linkedin: "https://linkedin.com/in/jagan-babu-r",
  github: "https://github.com/Jaganravi131",
  skillrack: "https://skillrack.com/profile/442395",
};

export const highlights = [
  { value: "CGPA 8.53", label: "Sri Sairam Engineering (2023-2027)" },
  { value: "400+", label: "Coding problems solved on Skillrack" },
  { value: "Top 100", label: "Google Solution Challenge 2024" },
];

export interface Project {
  type: string;
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    type: "ML & Data Systems",
    title: "UPI Fraud Detection System",
    description:
      "Designed a scalable network-graph data processing pipeline handling 3.2M transaction nodes, leveraging advanced data structures and ensemble modeling to achieve a 0.9996 ROC-AUC with strict low-latency processing constraints.",
    tech: ["Python", "XGBoost", "GNN", "LSTM", "Isolation Forest", "scikit-learn"],
    highlights: [
      "Designed a network-graph pipeline handling 3.2M transaction nodes for 0.9996 ROC-AUC.",
      "Developed graph-based fraud detection with GNN and LSTM behavioral analysis to identify 16,382 fraud nodes with a low false positive rate of 0.005.",
    ],
    demoUrl: "https://upi-safe-gaurd.vercel.app/",
    githubUrl: "https://github.com/Jaganravi131",
  },
  {
    type: "Agentic AI",
    title: "Cecilia AI (Agentic Workflow Assistant)",
    description:
      "Architected a high-performance backend workflow automation engine utilizing Python and FastAPI, implementing optimal data retrieval strategies to achieve sub-500ms response times and reduce manual intervention by 30-40%.",
    tech: ["Python", "FastAPI", "RAG", "LLMs", "Generative AI"],
    highlights: [
      "Achieved sub-500ms response times for agentic workflow tasks.",
      "Reduced manual intervention by 30-40% using optimized RAG and context retrieval.",
    ],
    githubUrl: "https://github.com/Jaganravi131",
  },
  {
    type: "Blockchain & Web3",
    title: "VeriChain",
    description:
      "Developed a secure, decentralized digital credentialing infrastructure using Node.js and Solidity; implemented Soulbound Tokens (SBTs) to ensure data integrity, security, and instantaneous on-chain verification.",
    tech: ["Solidity", "Node.js", "Blockchain", "Web3", "Soulbound Tokens (SBTs)"],
    highlights: [
      "Developed decentralized digital credentialing infrastructure using Solidity smart contracts.",
      "Implemented Soulbound Tokens (SBTs) to ensure tamper-proof on-chain verification.",
    ],
    demoUrl: "https://veri-chain-snowy.vercel.app/",
    githubUrl: "https://github.com/Jaganravi131",
  },
  {
    type: "Robotics / Computer Vision",
    title: "Smart Waste Segregation System",
    description:
      "Led the development of a CNN-based automated classification model with 90%+ detection accuracy combined with ROS-based mechanical control for automated waste segregation bins.",
    tech: ["CNN", "TensorFlow", "ROS", "Mechanical Design", "IoT"],
    highlights: [
      "Created a CNN-based automated classification model with 90%+ detection accuracy.",
      "Designed and sketched mechanical mechanisms for automated bin physical operations and disposal paths.",
    ],
    githubUrl: "https://github.com/Jaganravi131",
  },
];

export const internships = [
  {
    employer: "Chennai Metro Rail Limited (CMRL)",
    role: "Intern, Electrical Maintenance / Rolling Stock",
    period: "June 2025 – July 2025",
    location: "Chennai, India",
    highlights: [
      "Optimized system reliability by analyzing SCADA and TCMS data streams across 15+ train sets, contributing to a 99.9% service availability benchmark through proactive software-driven fault triangulation.",
      "Automated error logging mechanisms by reverse-engineering and analyzing PLC logic sequences for critical hardware systems, reducing diagnostic turnaround time by 20%.",
    ],
  },
];

export const publications = [
  {
    title: "IoT-enabled smart waste segregation",
    role: "Lead Author",
    detail: "Conference paper on IoT-enabled smart waste segregation, IEOM 2025, VIT Vellore.",
  },
];

export const achievements = [
  {
    title: "VIT-AP LaunchPad Contest",
    rank: "Top 5 (Finalist)",
    detail: "Out of 900+ teams nationwide.",
  },
  {
    title: "Mastek DeepBlue Competition",
    rank: "Top 6 (Finalist)",
    detail: "Out of 130+ teams nationwide.",
  },
  {
    title: "Google Solution Challenge 2024",
    rank: "Top 100 (Regional)",
    detail: "Regional Finalist representing outstanding solution design.",
  },
  {
    title: "IIT Kharagpur E-Cell Empresario",
    rank: "Semi-Finalist",
    detail: "Recognized for innovative entrepreneurial concept.",
  },
];

export const education = {
  school: "Sri Sairam Engineering College",
  degree: "B.E. in Mechanical and Automation Engineering",
  period: "2023 – 2027",
  cgpa: "8.53/10",
  location: "Chennai, India",
};
