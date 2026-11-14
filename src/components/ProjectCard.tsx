import Image from "next/image";
import type { Project } from "@/content/portfolio";
import ProjectArt from "./ProjectArt";

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="arrow">
      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const fit = project.plate.fit ?? "cover";
  const live = project.links.some((link) => link.label.toLowerCase().includes("live"));

  return (
    <article className="project">
      <div className="project__shot">
        <div className="shot">
          <div className="shot__bar">
            <span className="shot__dots" aria-hidden="true">
              <i /> <i /> <i />
            </span>
            <span className="shot__label">{project.plate.label}</span>
          </div>
          <div
            className={`shot__body shot__body--${
              project.plate.kind === "figure" ? "figure" : fit
            }`}
          >
            {project.plate.kind === "image" && project.plate.src ? (
              <Image
                src={project.plate.src}
                alt={project.plate.alt ?? ""}
                fill
                sizes="(max-width: 760px) 100vw, 46vw"
                style={{ objectFit: fit, objectPosition: "top center" }}
              />
            ) : (
              <ProjectArt figure={project.plate.figure ?? "agents"} />
            )}
          </div>
        </div>
      </div>

      <div className="project__body">
        <p className="project__meta">
          {live && (
            <span className="pill pill--live">
              <i aria-hidden="true" />
              Live
            </span>
          )}
          <span>{project.type}</span>
          <span className="project__year">{project.year}</span>
        </p>

        <h3 className="project__title">{project.title}</h3>
        <p className="project__summary">{project.summary}</p>

        <ul className="tags" aria-label="Stack">
          {project.stack.slice(0, 4).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="project__links">
          {project.links.map((link) => (
            <a
              key={link.href}
              className="link-arrow"
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              {link.label}
              <Arrow />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
