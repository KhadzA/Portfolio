"use client";

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 px-6 lg:px-16 py-20">
      <div className="max-w-4xl">
        {/* Main heading */}
        <div className="mb-8">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
            Welcome to my portfolio
          </p>
          <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 font-sans">
            Al-khazri Alim
          </h1>
          <p className="text-2xl text-slate-700 dark:text-slate-300 font-light mb-6">
            Frontend | React | JavaScript | Node.js
          </p>
        </div>

        {/* Bio - EDIT THIS */}
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
          Why is 6 afraid of 7? Because 7 8 9! I'm a developer passionate about
          building engaging and user-friendly experiences.
        </p>

        {/* Location - EDIT THIS */}
        <p className="text-base text-slate-500 dark:text-slate-500 mb-8">
          📍{" "}
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            Zamboanga City, Philippines
          </span>
        </p>

        {/* Social links */}
        <div className="flex gap-6 mb-12">
          <a
            href="https://github.com/KhadzA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors font-medium"
          >
            <Github size={20} />
            GitHub
          </a>
          {/* <a
            href="https://dev.to/khadza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium"
          >
            <ExternalLink size={20} />
            Gmail
          </a> */}
        </div>

        {/* CTA */}
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
