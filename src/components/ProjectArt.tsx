import type { PlateFigure } from "@/content/portfolio";

function Agents() {
  const steps = [
    { name: "Scout", detail: "live boards", count: 3 },
    { name: "Score", detail: "TF-IDF · Gemini", count: 2 },
    { name: "Tailor", detail: "quality gate", count: 1 },
    { name: "Apply", detail: "Playwright", count: 2 },
    { name: "Digest", detail: "chat · mail", count: 1 },
  ];

  return (
    <div className="art art--agents">
      <div className="art__head">
        <span>career copilot</span>
        <span className="art__mono">9 agents · 5 stages</span>
      </div>
      <div className="agents">
        {steps.map((step) => (
          <div className="agents__row" key={step.name}>
            <span className="agents__name">{step.name}</span>
            <span className="agents__dots" aria-hidden="true">
              {Array.from({ length: step.count }).map((_, index) => (
                <i key={index} />
              ))}
            </span>
            <span className="agents__detail">{step.detail}</span>
            <span className="agents__count">{String(step.count).padStart(2, "0")}</span>
          </div>
        ))}
      </div>
      <div className="art__foot">
        <span className="art__flag">human approval</span>
        <span>the application is always submitted by a person</span>
      </div>
    </div>
  );
}

function Audit() {
  const rows = [
    { name: "Disparate impact", a: 0.62, b: 0.81 },
    { name: "Demographic parity", a: 0.58, b: 0.74 },
    { name: "Equalized odds", a: 0.69, b: 0.86 },
    { name: "Proxy correlation", a: 0.31, b: 0.44 },
  ];

  return (
    <div className="art art--audit">
      <div className="art__head">
        <span>equivis · fairness report</span>
        <span className="art__mono">sample output</span>
      </div>
      <div className="audit__legend">
        <span><i className="dot dot--a" /> Group A</span>
        <span><i className="dot dot--b" /> Group B</span>
        <span className="audit__floor">floor 0.80</span>
      </div>
      <div className="audit">
        {rows.map((row) => (
          <div className="audit__row" key={row.name}>
            <span className="audit__name">{row.name}</span>
            <span className="audit__track">
              <i className="audit__bar audit__bar--a" style={{ width: `${row.a * 100}%` }} />
              <i className="audit__bar audit__bar--b" style={{ width: `${row.b * 100}%` }} />
              <i className="audit__line" aria-hidden="true" />
            </span>
            <span className="audit__values">
              <b>{row.a.toFixed(2)}</b>
              <b>{row.b.toFixed(2)}</b>
            </span>
          </div>
        ))}
      </div>
      <div className="art__foot">
        <span className="art__flag">playbook written</span>
        <span>compliance steps and data-science fixes, per role</span>
      </div>
    </div>
  );
}

function Command() {
  const bars = [8, 14, 22, 12, 30, 44, 26, 18, 34, 48, 30, 16, 24, 12, 20, 10, 26, 14, 8, 12];
  const apps = ["Mail", "Sheets", "Browser", "Social"];

  return (
    <div className="art art--command">
      <div className="art__head">
        <span>groqflow · voice</span>
        <span className="art__mono">en · hi</span>
      </div>
      <div className="command__quote">
        <span className="command__wave" aria-hidden="true">
          {bars.map((bar, index) => (
            <i key={index} style={{ height: `${bar}px` }} />
          ))}
        </span>
        <p>&ldquo;Email the Q1 report to the CFO and highlight the key numbers.&rdquo;</p>
      </div>
      <div className="command__route">
        {apps.map((app, index) => (
          <span className={`command__app${index === 0 ? " is-on" : ""}`} key={app}>
            {app}
          </span>
        ))}
      </div>
      <div className="art__foot">
        <span className="art__flag">redacted first</span>
        <span>sensitive regions are removed before the screen is read</span>
      </div>
    </div>
  );
}

function Graph() {
  const nodes = [
    { x: 200, y: 118, label: "India", major: true },
    { x: 96, y: 62, label: "Energy" },
    { x: 312, y: 64, label: "Trade" },
    { x: 330, y: 172, label: "Semiconductors" },
    { x: 190, y: 202, label: "Climate" },
    { x: 72, y: 168, label: "Finance" },
    { x: 246, y: 40, label: "Chokepoints" },
  ];
  const edges: Array<[number, number]> = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
    [1, 5], [1, 6], [2, 6], [2, 3], [4, 5], [3, 6],
  ];

  return (
    <div className="art art--graph">
      <div className="art__head">
        <span>bharatgraph · ontology</span>
        <span className="art__mono">neo4j · 3d</span>
      </div>
      <div className="graph">
        <svg viewBox="0 0 400 240" role="img" aria-label="A node-link graph: India at the centre, linked to energy, trade, finance, climate, chokepoints and semiconductors.">
          <g className="graph__grid" aria-hidden="true">
            {Array.from({ length: 9 }).map((_, index) => (
              <line key={`v${index}`} x1={index * 50} y1="0" x2={index * 50} y2="240" />
            ))}
            {Array.from({ length: 5 }).map((_, index) => (
              <line key={`h${index}`} x1="0" y1={index * 60} x2="400" y2={index * 60} />
            ))}
          </g>
          <g className="graph__edges">
            {edges.map(([from, to]) => (
              <line
                key={`${from}-${to}`}
                x1={nodes[from].x}
                y1={nodes[from].y}
                x2={nodes[to].x}
                y2={nodes[to].y}
              />
            ))}
          </g>
          {nodes.map((node) => (
            <g key={node.label} className={node.major ? "graph__node is-major" : "graph__node"}>
              <circle cx={node.x} cy={node.y} r={node.major ? 9 : 5} />
              <text
                x={node.x}
                y={node.y + (node.major ? 26 : 18)}
                textAnchor="middle"
                className="graph__label"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <div className="art__foot">
        <span className="art__flag">groq · extracted edges</span>
        <span>every link carries the source it came from</span>
      </div>
    </div>
  );
}

export default function ProjectArt({ figure }: { figure: PlateFigure }) {
  if (figure === "audit") return <Audit />;
  if (figure === "command") return <Command />;
  if (figure === "graph") return <Graph />;
  return <Agents />;
}
