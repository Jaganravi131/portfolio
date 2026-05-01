import { audiences, highlights, projects, services, site, writing } from "@/content/portfolio";

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio strategy in progress</p>
          <h1>{site.summary}</h1>
          <p className="lede">
            A single portfolio can support hiring, client acquisition, and thought leadership if the
            structure is intentional. This first pass is designed to do all three without splitting
            the story apart.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#work">
              Explore work
            </a>
            <a className="secondary-button" href="#contact">
              Start a conversation
            </a>
          </div>
        </div>

        <aside className="hero-panel">
          <p className="panel-label">Profile</p>
          <h2>{site.name}</h2>
          <p>{site.role}</p>
          <p className="muted">{site.location}</p>

          <div className="stats-grid" aria-label="Key portfolio highlights">
            {highlights.map((item) => (
              <div key={item.label} className="stat-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="section-wrap section-tight">
        <div className="section-heading">
          <p className="eyebrow">Audience fit</p>
          <h2>One site, three audiences, one coherent story.</h2>
        </div>
        <div className="card-grid three-up">
          {audiences.map((audience) => (
            <article key={audience.title} className="info-card">
              <h3>{audience.title}</h3>
              <p>{audience.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap section-tight" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Mix design and development through the same case study logic.</h2>
        </div>
        <div className="card-grid">
          {projects.map((project) => (
            <article key={project.title} className="work-card">
              <p className="work-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.tech && (
                <p style={{ fontSize: "0.85rem", color: "var(--accent)", margin: "0.4rem 0" }}>
                  {project.tech.join(" • ")}
                </p>
              )}
              {project.highlights && (
                <ul style={{ margin: "0.5rem 0 0 1.1rem", paddingLeft: 0, fontSize: "0.9rem" }}>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap split-layout section-tight">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Make the business side easy to understand.</h2>
        </div>
        <div className="content-stack">
          <div className="info-card accent-card">
            <p>
              If the portfolio is doing its job, clients should immediately understand what you can
              do, what you charge with, and how you work.
            </p>
          </div>
          <ul className="list-grid">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-wrap section-tight">
        <div className="section-heading">
          <p className="eyebrow">Writing and thought leadership</p>
          <h2>Add depth without turning the site into a blog first.</h2>
        </div>
        <div className="card-grid three-up">
          {writing.map((item) => (
            <article key={item.title} className="info-card compact-card">
              <p className="work-type">{item.category}</p>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap contact-panel section-tight" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Ready to talk about opportunities, projects, or collaboration.</h2>
        </div>
        <div>
          <p>
            <strong>{site.name}</strong> — {site.role} • {site.location}
          </p>
          <p className="muted">
            <a href={`mailto:${site.email}`}>{site.email}</a> • <a href={`tel:${site.phone}`}>{site.phone}</a>
          </p>
          <p className="muted" style={{ marginTop: 8 }}>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            {" • "}
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            {" • "}
            <a href={site.skillrack} target="_blank" rel="noreferrer">
              Skillrack
            </a>
          </p>
          <p style={{ marginTop: 12 }}>
            The full resume and project links are listed on this site. For a quick download or a
            conversation, email me or open a GitHub repo to review code and readme details.
          </p>
        </div>
      </section>
    </main>
  );
}
