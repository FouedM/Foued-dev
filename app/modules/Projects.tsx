"use client";

import { ExternalLink } from "lucide-react";
import { PROJECTS } from "../data/constant";

const TYPE_COLORS: Record<string, string> = {
  Fullstack: "#3B82F6",
  Frontend: "#8B5CF6",
  Mobile: "#F59E0B",
  API: "#10B981",
};

const Projects = () => {
  return (
    <section id="projects" className="w-full py-16">
      <h2 className="mb-10 text-2xl font-bold tracking-tight text-primary">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => {
          const typeColor = TYPE_COLORS[project.type] ?? "#6B7280";
          return (
            <div
              key={project.name}
              className="flex flex-col gap-4 rounded-xl border border-neutral-200 p-5 transition-shadow hover:shadow-md dark:border-neutral-800"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-bold leading-snug text-neutral-900 dark:text-neutral-100">
                  {project.name}
                </h3>
                <span
                  className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                  style={{
                    backgroundColor: typeColor + "15",
                    color: typeColor,
                  }}
                >
                  {project.type}
                </span>
              </div>

              {/* Description */}
              <p className="flex-1 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                {project.description}
              </p>

              {/* Tools */}
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-neutral-200 px-2 py-0.5 text-[10px] font-medium text-neutral-500 dark:border-neutral-700 dark:text-neutral-400"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Links or note */}
              <div className="flex items-center gap-3 border-t border-neutral-100 pt-3 dark:border-neutral-800">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 transition-colors hover:text-primary"
                  >
                    <svg viewBox="0 0 24 24" width={13} height={13} fill="currentColor">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 transition-colors hover:text-primary"
                  >
                    <ExternalLink size={13} />
                    Live demo
                  </a>
                )}
                {!project.github && !project.demo && project.note && (
                  <span className="text-xs italic text-neutral-400 dark:text-neutral-500">{project.note}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
