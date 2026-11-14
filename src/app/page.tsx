import ContactCard from "@/components/ContactCard";
import CopyEmail from "@/components/CopyEmail";
import CountUp from "@/components/CountUp";
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import Portrait from "@/components/Portrait";
import ProjectGrid from "@/components/ProjectGrid";
import ScrollFx from "@/components/ScrollFx";
import SiteNav from "@/components/SiteNav";
import {
  about,
  archive,
  awards,
  education,
  experience,
  figures,
  projects,
  research,
  site,
  toolkit,
} from "@/content/portfolio";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <ScrollFx />
      <SiteNav initials={site.initials} name={site.name} />

      <div className="page" id="top">
        <main id="main">
          {/* ------------------------------- HERO ------------------------------- */}
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero__aura hero__aura--one" aria-hidden="true" />
            <div className="hero__aura hero__aura--two" aria-hidden="true" />

            <div className="wrap">
              <div className="bento hero__bento">
                <article className="tile tile--intro">
                  <p className="eyebrow eyebrow--live">
                    <i aria-hidden="true" />
                    Open to internships now · 2027 graduate
                  </p>

                  <h1 className="hero__title" id="hero-title">
                    {site.headline[0]}
                    <br />
                    <span className="grad">{site.headline[1]}</span>
                  </h1>

                  <p className="hero__lede">{site.lede}</p>

                  <div className="hero__actions">
                    <a className="button button--primary" href="#work">
                      Explore the work
                      <ArrowIcon />
                    </a>
                    <a
                      className="button button--ghost"
                      href={site.github}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <GitHubIcon />
                      GitHub
                    </a>
                  </div>

                  <div className="hero__social" aria-label="Elsewhere">
                    <a href={`mailto:${site.email}`} className="social">
                      <MailIcon />
                      <span>Email</span>
                    </a>
                    <a
                      href={site.linkedin}
                      className="social"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <LinkedInIcon />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={site.github}
                      className="social"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <GitHubIcon />
                      <span>GitHub</span>
                    </a>
                  </div>
                </article>

                <div className="tile tile--portrait">
                  <Portrait initials={site.initials} />
                </div>

                <aside className="tile tile--glance" aria-label="At a glance">
                  <dl className="glance">
                    <div>
                      <dt>Availability</dt>
                      <dd>Internship now · backend or applied ML from 2027</dd>
                    </div>
                    <div>
                      <dt>Based in</dt>
                      <dd>Chennai, India · open to Bengaluru or remote</dd>
                    </div>
                    <div>
                      <dt>Currently</dt>
                      <dd>FRIDAY, a local-first agent runtime with an approval gate</dd>
                    </div>
                    <div>
                      <dt>Reply time</dt>
                      <dd>Within one working day</dd>
                    </div>
                  </dl>
                </aside>

                {figures.map((figure) => (
                  <div className="tile tile--stat" key={figure.label}>
                    <p className="stat__value">
                      <CountUp value={figure.value} decimals={figure.decimals} />
                      {figure.suffix && <span className="stat__suffix">{figure.suffix}</span>}
                    </p>
                    <p className="stat__label">{figure.label}</p>
                    <p className="stat__detail">{figure.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ------------------------------- WORK ------------------------------- */}
          <section className="section work" id="work" aria-labelledby="work-title">
            <div className="wrap">
              <header className="section__head" data-reveal>
                <div>
                  <p className="eyebrow">Selected work</p>
                  <h2 className="section__title" id="work-title">
                    Eight projects. <span className="grad">Two running live.</span>
                  </h2>
                </div>
                <p className="section__intro">{site.workIntro}</p>
              </header>

              <ProjectGrid projects={projects} />

              <section className="archive" aria-labelledby="archive-title" data-reveal>
                <header className="archive__head">
                  <div>
                    <p className="eyebrow">More repositories</p>
                    <h3 id="archive-title">Also on GitHub</h3>
                  </div>
                  <a
                    className="link-arrow"
                    href={site.github}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    All 28 repositories
                    <ArrowIcon />
                  </a>
                </header>
                <ul className="archive__list">
                  {archive.map((repo) => (
                    <li key={repo.href}>
                      <a href={repo.href} target="_blank" rel="noreferrer noopener">
                        <span className="archive__lang">{repo.language}</span>
                        <span className="archive__name">{repo.name}</span>
                        <span className="archive__desc">{repo.description}</span>
                        <ArrowIcon />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </section>

          {/* ------------------------------- ABOUT ------------------------------ */}
          <section className="section about" id="about" aria-labelledby="about-title">
            <div className="wrap">
              <header className="section__head" data-reveal>
                <div>
                  <p className="eyebrow">Profile</p>
                  <h2 className="section__title" id="about-title">
                    Background, <span className="grad">and the tools behind it.</span>
                  </h2>
                </div>
                <p className="section__intro">
                  Mechanical and automation engineering, then software and applied machine
                  learning. Every project here was built outside coursework.
                </p>
              </header>

              <div className="bento">
                <article className="tile tile--profile" data-reveal>
                  <h3 className="tile__title">{about.title}</h3>
                  {about.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                  <p className="about__sign">
                    <span className="about__monogram" aria-hidden="true">
                      {site.initials}
                    </span>
                    <span>
                      <b>{about.signature}</b>
                      {about.signatureRole}
                    </span>
                  </p>
                </article>

                <aside className="tile tile--stack" aria-labelledby="stack-title" data-reveal>
                  <h3 className="tile__title" id="stack-title">
                    Tools
                  </h3>
                  <dl className="stack">
                    {toolkit.map((group) => (
                      <div key={group.group}>
                        <dt>{group.group}</dt>
                        <dd>
                          <ul>
                            {group.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="stack__note">
                    Backend work runs on Python and FastAPI; the interfaces are React and
                    TypeScript.
                  </p>
                </aside>

                <article className="tile tile--record" data-reveal>
                  <p className="tile__label">Experience</p>
                  {experience.map((row) => (
                    <div key={row.name}>
                      <span className="timeline__meta">{row.meta}</span>
                      <h3>{row.name}</h3>
                      <p>{row.detail}</p>
                    </div>
                  ))}
                </article>

                <article className="tile tile--record" data-reveal>
                  <p className="tile__label">Education</p>
                  {education.map((row) => (
                    <div key={row.name}>
                      <span className="timeline__meta">{row.meta}</span>
                      <h3>{row.name}</h3>
                      <p>{row.detail}</p>
                    </div>
                  ))}
                </article>

                <article className="tile tile--research" data-reveal>
                  <div className="research__body">
                    <p className="tile__label">Research</p>
                    <span className="timeline__meta">{research[0].meta}</span>
                    <h3>{research[0].name}</h3>
                    <p>{research[0].detail}</p>
                  </div>
                  {research[0].facts && (
                    <ul className="research__facts">
                      {research[0].facts.map((fact) => (
                        <li key={fact.label}>
                          <b>{fact.value}</b>
                          <span>{fact.label}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>

                <article className="tile tile--awards" aria-labelledby="awards-title" data-reveal>
                  <p className="tile__label" id="awards-title">
                    Awards and finals
                  </p>
                  <ul>
                    {awards.map((award) => (
                      <li key={award.name}>
                        <span className="awards__name">{award.name}</span>
                        <span className="awards__detail">{award.detail}</span>
                        <span className="awards__meta">{award.meta}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </section>

          {/* ------------------------------ CONTACT ----------------------------- */}
          <section className="section contact" id="contact" aria-labelledby="contact-title">
            <div className="wrap">
              <div className="contact__panel" data-reveal>
                <div className="contact__aura" aria-hidden="true" />

                <div className="contact__copy">
                  <p className="eyebrow">Contact</p>
                  <h2 className="contact__title" id="contact-title">
                    {site.contactTitle}
                  </h2>
                  <p className="contact__note">{site.contactNote}</p>

                  <div className="contact__email">
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                    <CopyEmail email={site.email} />
                  </div>

                  <div className="contact__links">
                    <a href={site.github} target="_blank" rel="noreferrer noopener">
                      <GitHubIcon />
                      GitHub
                    </a>
                    <a href={site.linkedin} target="_blank" rel="noreferrer noopener">
                      <LinkedInIcon />
                      LinkedIn
                    </a>
                    <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
                  </div>

                  <p className="eyebrow eyebrow--live contact__status">
                    <i aria-hidden="true" />
                    Replies within one working day
                  </p>
                </div>

                <div className="contact__form">
                  <ContactCard />
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="wrap footer__inner">
            <p className="footer__sign">
              <span className="footer__mark" aria-hidden="true">
                {site.initials}
              </span>
              © 2026 Jagan Babu R. Chennai, India.
            </p>

            <p className="footer__credits">
              Next.js, TypeScript and hand-written CSS. No template.
            </p>

            <a className="footer__top" href="#top">
              Back to top
              <ArrowIcon />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
