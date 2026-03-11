"use client";

import { Mail, Github, Linkedin, ExternalLink, PhoneCall } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 lg:px-16 bg-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-slate-400 mb-12">
          I'm always open to new opportunities, collaborations, and
          conversations. Feel free to reach out!
        </p>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Email */}
          <a
            href="mailto:alimkhadz111@gmail.com"
            className="p-8 bg-slate-900 rounded-xl border border-slate-800 hover:border-blue-500 transition-all group"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-blue-900/30 rounded-lg group-hover:bg-blue-900/50 transition-colors">
                <Mail className="text-blue-400" size={24} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-slate-400">alimkhadz111@gmail.com</p>
            {/* EDIT: Replace with your actual email */}
          </a>

          <a
            href="tel:+639127259560"
            className="p-8 bg-slate-900 rounded-xl border border-slate-800 hover:border-blue-500 transition-all group"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-blue-900/30 rounded-lg group-hover:bg-blue-900/50 transition-colors">
                <PhoneCall className="text-blue-400" size={24} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
            <p className="text-slate-400">+63 912 725 9560</p>
            {/* EDIT: Replace with your actual phone number */}
          </a>

          {/* Location */}
          <div className="p-8 bg-slate-900 rounded-xl border border-slate-800">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-blue-900/30 rounded-lg">
                <ExternalLink className="text-blue-400" size={24} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Location</h3>
            <p className="text-slate-400">Zamboanga City, Philippines</p>
            {/* EDIT: Update with your actual location */}
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/KhadzA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-medium"
            >
              <Github size={20} />
              GitHub
            </a>
            {/* <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
            >
              <Linkedin size={20} />
              LinkedIn
            </a> */}
            {/* EDIT: Add more social links if needed */}
          </div>
        </div>

        {/* CTA */}
        <a
          href="mailto:your.email@example.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-lg"
        >
          <Mail size={20} />
          Send Me an Email
        </a>
      </div>
    </section>
  );
}
