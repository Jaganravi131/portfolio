"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/content/portfolio";
import ProjectCard from "./ProjectCard";

type Filter = "all" | ProjectCategory;

const filters: Array<{ id: Filter; label: string }> = [
  { id: "all", label: "All work" },
  { id: "ai", label: "AI & agents" },
  { id: "fullstack", label: "Full stack" },
  { id: "web3", label: "Web3" },
  { id: "hardware", label: "Hardware" },
];

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>("all");

  const visible = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((project) => project.categories.includes(active)),
    [active, projects],
  );

  return (
    <div className="work__body">
      <div className="filters" role="group" aria-label="Filter projects">
        {filters.map((filter) => {
          const id = filter.id;
          const count =
            id === "all"
              ? projects.length
              : projects.filter((project) => project.categories.includes(id)).length;

          return (
            <button
              key={filter.id}
              type="button"
              className={`filter${active === filter.id ? " is-active" : ""}`}
              aria-pressed={active === filter.id}
              onClick={() => setActive(filter.id)}
            >
              {filter.label}
              <span>{String(count).padStart(2, "0")}</span>
            </button>
          );
        })}
      </div>

      <div className="projects" key={active}>
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        {visible.length} projects shown
      </p>
    </div>
  );
}
