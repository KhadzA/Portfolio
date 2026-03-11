"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-400 py-12 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-slate-800">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">
              Al-khazri Alim
            </h3>
            <p className="text-sm text-slate-500">
              Frontend developer and a Student, inexperienced but passionate
              about learning and creating. Always eager to take on new
              challenges and grow my skills in web development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#skills"
                  className="hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="hover:text-white transition-colors"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/KhadzA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub Profile
                </a>
              </li>
              {/* <li>
                <a
                  href="https://dev.to/khadza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Dev.to Blog
                </a>
              </li> */}
              {/* EDIT: Add more links as needed */}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {currentYear} Al-khazri Alim. All rights reserved.</p>
          <p>Built with React, Tailwind CSS & Lucide React Icons</p>
        </div>
      </div>
    </footer>
  );
}
