"use client";

import { useState } from "react";
import { SKILLS_ICONS } from "../data/constant";
import Icon from "./Icon";

type Category = keyof typeof SKILLS_ICONS;

const CATEGORY_COLORS: Record<string, string> = {
  languages: "#F59E0B",
  frontend: "#3B82F6",
  backend: "#10B981",
  databases: "#8B5CF6",
  testing: "#EF4444",
  devops: "#F97316",
  tools: "#EC4899",
};

const CATEGORY_LABELS: Record<string, string> = {
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  databases: "Databases",
  testing: "Testing",
  devops: "DevOps",
  tools: "Tools",
};

const ALL_TAB = "all";

const allSkills = Object.entries(SKILLS_ICONS).flatMap(([group, skills]) =>
  Object.entries(skills).map(([key, label]) => ({
    id: key,
    label: label as string,
    group: group as Category,
  })),
);

const SkillBubbles = () => {
  const [active, setActive] = useState<string>(ALL_TAB);

  const tabs = [ALL_TAB, ...Object.keys(SKILLS_ICONS)];
  const filtered =
    active === ALL_TAB ? allSkills : allSkills.filter((s) => s.group === active);

  return (
    <section className="w-full">
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-primary">
        Skills
      </h2>

      {/* Tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const isActive = active === tab;
          const color = tab === ALL_TAB ? "#6B7280" : CATEGORY_COLORS[tab];
          return (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className="rounded-full border px-3 py-1 text-xs font-medium transition-colors"
              style={{
                borderColor: color,
                backgroundColor: isActive ? color : "transparent",
                color: isActive ? "white" : color,
              }}
            >
              {tab === ALL_TAB ? "All" : CATEGORY_LABELS[tab]}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8">
        {filtered.map((skill) => {
          const color = CATEGORY_COLORS[skill.group];
          return (
            <div
              key={skill.id}
              className="flex flex-col items-center gap-1.5 rounded-xl border p-3 transition-shadow hover:shadow-md dark:hover:shadow-neutral-900"
              style={{ borderColor: color + "40" }}
              title={skill.label}
            >
              <Icon type={skill.label} color={color} size="1.6em" />
              <span className="w-full truncate text-center text-[10px] text-neutral-500 dark:text-neutral-400">
                {skill.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillBubbles;
