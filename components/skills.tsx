"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/config/site";
import { Reveal, SectionHeader } from "./reveal";

const getSkillIcon = (skill: string) => {
  const map: Record<string, string> = {
    TypeScript: "https://cdn.simpleicons.org/typescript/3178C6",
    JavaScript: "https://cdn.simpleicons.org/javascript/F7DF1E",
    Python: "https://cdn.simpleicons.org/python/3776AB",
    SQL: "https://img.icons8.com/color/48/database.png",
    "React.js": "https://cdn.simpleicons.org/react/61DAFB",
    "Next.js": "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
    "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    "Shadcn UI": "https://cdn.simpleicons.org/shadcnui/FFFFFF",
    "Redux Toolkit": "https://cdn.simpleicons.org/redux/764ABC",
    "Framer Motion": "https://cdn.simpleicons.org/framer/0055FF",
    "Node.js": "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    "Express.js": "https://cdn.simpleicons.org/express/FFFFFF",
    "REST APIs": "https://cdn.simpleicons.org/openapiinitiative/6BA539",
    JWT: "https://cdn.simpleicons.org/jsonwebtokens/FFFFFF",
    Firebase: "https://cdn.simpleicons.org/firebase/FFCA28",
    PostgreSQL: "https://cdn.simpleicons.org/postgresql/4169E1",
    MongoDB: "https://cdn.simpleicons.org/mongodb/47A248",
    Redis: "https://cdn.simpleicons.org/redis/FF4438",
    Prisma: "https://cdn.simpleicons.org/prisma/FFFFFF",
    Mongoose: "https://cdn.simpleicons.org/mongoose/FFFFFF",
    "Drizzle ORM": "https://cdn.simpleicons.org/drizzle/C5F74F",
    Git: "https://cdn.simpleicons.org/git/F05032",
    GitHub: "https://cdn.simpleicons.org/github/FFFFFF",
    Postman: "https://cdn.simpleicons.org/postman/FF6C37",
    Docker: "https://cdn.simpleicons.org/docker/2496ED",
    Vercel: "https://cdn.simpleicons.org/vercel/FFFFFF",
    Render: "https://cdn.simpleicons.org/render/FFFFFF",
  };
  return map[skill] || "https://img.icons8.com/color/48/code.png";
};

const skillCategories: Record<string, string[]> = {
  Frontend: ["TypeScript", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Shadcn UI", "Redux Toolkit", "Framer Motion"],
  Backend: ["Python", "SQL", "Node.js", "Express.js", "REST APIs", "JWT", "Firebase", "PostgreSQL", "MongoDB", "Redis", "Prisma", "Mongoose", "Drizzle ORM"],
  Tools: ["Git", "GitHub", "Postman", "Docker", "Vercel", "Render"],
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  if (!site.skills.length) return null;

  const categories = ["All", "Frontend", "Backend", "Tools"];

  const filteredSkills = activeCategory === "All"
    ? site.skills
    : site.skills.filter((skill) => skillCategories[activeCategory]?.includes(skill));

  return (
    <section className="mx-auto w-full max-w-content px-6 py-16">
      <SectionHeader id="skills" index="04" title="Skills & Technologies" />

      {/* Category Tabs & Micro-hint */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-md border px-3 py-1 font-mono text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? "border-accent bg-accent text-bg shadow-md"
                  : "border-border/80 bg-surface/30 text-muted hover:border-accent/40 hover:text-fg"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <span className="font-mono text-[10px] text-faint select-none">
          ( click to filter )
        </span>
      </div>

      <Reveal>
        <motion.div layout className="flex flex-wrap gap-2.5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.span
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={skill}
                className="flex items-center gap-2 cursor-default rounded-full border border-dashed border-border/80 bg-surface/40 px-3.5 py-1.5 font-mono text-xs text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-fg hover:shadow-md hover:bg-surface/80"
              >
                <img
                  src={getSkillIcon(skill)}
                  alt={`${skill} icon`}
                  className="w-4 h-4 object-contain shrink-0"
                  onError={(e) => {
                    e.currentTarget.src = "https://img.icons8.com/color/48/code.png";
                  }}
                />
                {skill}
              </motion.span>
            ))}
          </AnimatePresence>
        </motion.div>
      </Reveal>
    </section>
  );
}
