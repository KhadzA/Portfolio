"use client";

import { Award, BookOpen } from "lucide-react";

interface EducationItem {
  type: "education" | "certification";
  title: string;
  institution: string;
  year: string;
  description?: string;
}

const educationData: EducationItem[] = [
  {
    type: "education",
    title: "Bachelor of Science in Information Technology",
    institution: "Zamboanga Peninsula Polytechnic State University",
    year: "2021 - 2026",
  },
  // I can add description like   "  description: 'EDIT: Add your education details here. Include GPA, relevant coursework, etc.', "
  {
    type: "education",
    title: "Senior High School - STEM Strand",
    institution: "Southern City Colleges",
    year: "2019 - 2021",
  },
  {
    type: "education",
    title: "High School",
    institution: "Southern City Colleges",
    year: "2017 - 2018",
  },
  {
    type: "education",
    title: "Elementary",
    institution: "Mampang Elementary School",
    year: "2010 - 2016",
  },
  {
    type: "certification",
    title: "Certificate of Course Completion - Introduction to Cybersecurity",
    institution: "CISCO Networking Academy",
    year: "2024",
    description:
      "Achieved student level credential for completing the Introduction to Cybersecurity course",
  },
  {
    type: "certification",
    title: "OJT 1 Certificate of Completion - Admission Office",
    institution: "ZPPSU Admission",
    year: "2023",
    description:
      "Certificate for assisting Zamboanga Peninsula Polytechnic State University(ZPPSU) Admission office for 248 hours",
  },
  {
    type: "certification",
    title: "OJT 2 Certificate of Completion - Computer Services Division",
    institution: "CHRMO Zamboanga",
    year: "2024",
    description:
      "Certificate for assisting Office of the City Mayor—Computer Services Division (CSD) for 248 hours",
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="py-20 px-6 lg:px-16 bg-white dark:bg-slate-950"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Continuous learning and professional development
          </p>
        </div>

        <div className="space-y-8">
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen
                className="text-blue-600 dark:text-blue-400"
                size={28}
              />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Education
              </h3>
            </div>
            <div className="space-y-6 ml-0">
              {educationData
                .filter((item) => item.type === "education")
                .map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 transition-all"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {item.institution}
                    </p>
                    {item.description && (
                      <p className="text-slate-600 dark:text-slate-400">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-blue-600 dark:text-blue-400" size={28} />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Certifications
              </h3>
            </div>
            <div className="space-y-6">
              {educationData
                .filter((item) => item.type === "certification")
                .map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 transition-all"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {item.institution}
                    </p>
                    {item.description && (
                      <p className="text-slate-600 dark:text-slate-400">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
