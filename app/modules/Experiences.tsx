"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MapPin } from "lucide-react";
import { EXPERIENCES } from "../data/constant";

const Experiences = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="w-full py-16">
      <h2 className="mb-10 text-2xl font-bold tracking-tight text-primary">
        Experience
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1.75 top-2 bottom-2 w-px bg-neutral-200 dark:bg-neutral-700" />

        <div className="flex flex-col gap-8">
          {EXPERIENCES.map((exp, i) => {
            const isOpen = expanded === i;
            return (
              <div key={i} className="relative pl-8">
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-white dark:bg-neutral-950"
                />

                {/* Header row */}
                <button
                  className="w-full text-left"
                  onClick={() => setExpanded(isOpen ? null : i)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                        {exp.company}
                      </h3>
                      <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-0.5">
                        {exp.roles.map((role, r) => (
                          <span key={r} className="text-sm text-primary font-medium">
                            {role.title}
                            <span className="ml-2 font-normal text-neutral-400 dark:text-neutral-500">
                              {role.period}
                            </span>
                          </span>
                        ))}
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-xs text-neutral-400 dark:text-neutral-500">
                        <MapPin size={11} />
                        {exp.location}
                      </div>
                    </div>
                    <div className="mt-0.5 shrink-0 text-neutral-400 dark:text-neutral-500">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </div>
                </button>

                {/* Expandable body */}
                {isOpen && (
                  <div className="mt-3 flex flex-col gap-3">
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                      {exp.description}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-md border border-primary/20 bg-primary/5 px-2 py-0.5 text-xs font-medium text-primary"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
