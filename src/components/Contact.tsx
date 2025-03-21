import React from "react";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <p className="text-xl text-gray-600">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out through any of these
              channels:
            </p>
            <div className="space-y-6">
              <a
                href="mailto:contact@mkhaider.dev"
                className="flex items-center gap-4 p-4 card hover:bg-blue-50 transition-colors group"
              >
                <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">
                    mkamran.haider@hotmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/m-kamran-haider/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 card hover:bg-blue-50 transition-colors group"
              >
                <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">LinkedIn</div>
                  <div className="text-gray-600">Connect with me</div>
                </div>
              </a>

              <a
                href="https://github.com/BlockBrewer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 card hover:bg-blue-50 transition-colors group"
              >
                <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                  <Github className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">GitHub</div>
                  <div className="text-gray-600">Check out my code</div>
                </div>
              </a>

              <a
                href="https://mkamranhaider.info"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 card hover:bg-blue-50 transition-colors group"
              >
                <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Website</div>
                  <div className="text-gray-600">Visit my personal site</div>
                </div>
              </a>
            </div>
          </div>

          <div className="card p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send a Message [coming soon]
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-200 font-medium"
              >
                Send Message [coming soon]
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
