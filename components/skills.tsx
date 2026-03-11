"use client";

import { Code2, Database, Palette, Cpu, GitBranch, Zap } from "lucide-react";

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    icon: <Code2 size={24} />,
    skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "TypeScript"],
  },
  {
    category: "Backend",
    icon: <Database size={24} />,
    skills: [
      "Node.js",
      "Express.js",
      "Firebase",
      "API Development",
      "REST APIs",
    ],
  },
  {
    category: "Database",
    icon: <Cpu size={24} />,
    skills: ["Firebase Firestore", "MySQL"],
  },
  {
    category: "Tools & Technologies",
    icon: <GitBranch size={24} />,
    skills: ["Git", "GitHub", "Google Cloud", "Arduino"],
  },
  {
    category: "Other",
    icon: <Zap size={24} />,
    skills: ["Problem Solving", "Collaborative Development"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 lg:px-16 bg-white dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A comprehensive overview of my technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-600 dark:text-blue-400">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {skillGroup.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
