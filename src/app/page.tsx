import { achievements, education, highlights, internships, projects, publications, site } from "@/content/portfolio";

export default function Home() {
  return (
    <main className="page-shell">
      {/* HERO SECTION */}
      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="status-badge">
            <span className="pulse-dot"></span>
            Open for Internships & Software/ML Engineer Roles
          </div>
          <h1>{site.role}</h1>
          <p className="lede">
            Hi, I&apos;m <strong>{site.name}</strong>. I build production-style AI systems, optimize real-time machine learning inference, and design decentralized blockchain solutions. Currently pursuing my B.E. at Sri Sairam Engineering College.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#work">
              View Projects
            </a>
            <a className="secondary-button" href="#contact">
              Get in Touch
            </a>
          </div>
        </div>

        <aside className="hero-panel">
          <p className="panel-label">Profile Card</p>
          <h2>{site.name}</h2>
          <p className="panel-role">{site.role}</p>
          <p className="muted flex-align">
            <svg className="icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {site.location}
          </p>

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

      {/* TECHNICAL SKILLS & EDUCATION */}
      <section className="section-wrap section-tight grid-2col">
        <div className="edu-block">
          <p className="eyebrow">Education</p>
          <div className="edu-card">
            <h3>{education.school}</h3>
            <p className="degree">{education.degree}</p>
            <div className="edu-meta">
              <span><strong>CGPA:</strong> {education.cgpa}</span>
              <span><strong>Timeline:</strong> {education.period}</span>
            </div>
            <p className="muted">{education.location}</p>
          </div>
        </div>
        <div className="skills-block">
          <p className="eyebrow">Technical Skills</p>
          <div className="skills-grid">
            <div className="skill-cat">
              <h4>Languages & Databases</h4>
              <p>Python, C++, Java, C, SQL, PostgreSQL, MongoDB, Node.js</p>
            </div>
            <div className="skill-cat">
              <h4>AI & Machine Learning</h4>
              <p>Generative AI, MLOps, LLMs/RAG, Computer Vision (CNNs), TensorFlow, Scikit-learn, XGBoost, GNN, LSTM, Agentic Workflows</p>
            </div>
            <div className="skill-cat">
              <h4>Backend & Tools</h4>
              <p>FastAPI, Flask, REST APIs, Docker, Linux (Ubuntu/Kali), Git</p>
            </div>
            <div className="skill-cat">
              <h4>Systems & DSA</h4>
              <p>ROS, PLC/SCADA, System Design, Data Structures & Algorithms (400+ Skillrack solved)</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="section-wrap section-tight" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Professional Experience</p>
          <h2>Internship Work</h2>
        </div>
        <div className="experience-list">
          {internships.map((job) => (
            <article key={job.employer} className="experience-card">
              <div className="exp-header">
                <div>
                  <h3>{job.employer}</h3>
                  <p className="exp-role">{job.role}</p>
                </div>
                <div className="exp-meta">
                  <span className="exp-date">{job.period}</span>
                  <span className="muted">{job.location}</span>
                </div>
              </div>
              <ul className="exp-bullets">
                {job.highlights.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="section-wrap section-tight" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>Featured Projects & Research</h2>
        </div>
        <div className="card-grid">
          {projects.map((project) => (
            <article key={project.title} className="work-card">
              <div>
                <p className="work-type">{project.type}</p>
                <h3>{project.title}</h3>
              </div>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>

              <ul className="project-bullets">
                {project.highlights.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>

              <div className="project-actions">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="demo-link flex-align">
                    Live Demo
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="code-link flex-align">
                    GitHub Code
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PUBLICATIONS & ACHIEVEMENTS */}
      <section className="section-wrap section-tight grid-2col">
        <div className="publications-block">
          <p className="eyebrow">Publications</p>
          <div className="publications-list">
            {publications.map((pub, idx) => (
              <div key={idx} className="pub-card">
                <span className="pub-role">{pub.role}</span>
                <h3>{pub.title}</h3>
                <p className="muted">{pub.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="achievements-block">
          <p className="eyebrow">Achievements</p>
          <div className="achievements-list">
            {achievements.map((ach, idx) => (
              <div key={idx} className="achievement-card">
                <div className="ach-header">
                  <h3>{ach.title}</h3>
                  <span className="ach-rank">{ach.rank}</span>
                </div>
                <p className="muted">{ach.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT PANEL */}
      <section className="section-wrap contact-panel section-tight" id="contact">
        <div className="contact-heading">
          <p className="eyebrow">Get in touch</p>
          <h2>Let&apos;s build something together.</h2>
          <p className="lede">
            I am always open to exploring internships, research assistantships, backend, and machine learning opportunities.
          </p>
        </div>
        
        <div className="contact-info-grid">
          <div className="contact-card-item">
            <span className="card-label">Direct Email</span>
            <a href={`mailto:${site.email}`} className="email-highlight">
              {site.email}
            </a>
            <p className="muted">Response within 24 hours</p>
          </div>
          
          <div className="contact-card-item">
            <span className="card-label">Call & Location</span>
            <p className="contact-val">{site.phone}</p>
            <p className="muted">{site.location}</p>
          </div>

          <div className="contact-card-item">
            <span className="card-label">Professional Profiles</span>
            <div className="social-links-grid">
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="social-btn">
                LinkedIn
              </a>
              <a href={site.github} target="_blank" rel="noreferrer" className="social-btn">
                GitHub
              </a>
              <a href={site.skillrack} target="_blank" rel="noreferrer" className="social-btn">
                Skillrack
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
