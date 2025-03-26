import {
  Download,
  Mail,
  Blocks,
  BrainCircuit,
  Cloud,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10">
        <div className="max-w-[90rem] mx-auto">
          <div className="grid lg:grid-cols-2 min-h-screen items-center gap-8">
            {/* Left Column - Content */}
            <div className="relative px-6 lg:px-12 py-12 lg:py-24">
              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 bg-primary-900/30 border border-primary-700/30 rounded-full px-4 py-2 mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                </span>
                <span className="text-white text-sm font-medium">
                  Available for Projects
                </span>
              </motion.div>

              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                  <span className="text-white">Crafting</span>
                  <span className="block mt-2 bg-gradient-to-r from-primary-400 via-accent-500 to-primary-400 bg-clip-text text-transparent">
                    Digital Excellence
                  </span>
                </h1>

                <p className="text-lg lg:text-xl text-gray-300 max-w-xl">
                  Full Stack & Blockchain Developer with 8+ years of experience
                  building scalable, enterprise solutions that drive business
                  growth and innovation.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 py-8">
                  {[
                    { number: "8+", label: "Years Experience" },
                    { number: "20+", label: "Projects Delivered" },
                    { number: "10+", label: "Worldwide Clients" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-2xl lg:text-3xl font-bold text-white">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <button
                    onClick={scrollToContact}
                    className="group relative inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-lg overflow-hidden transition-all duration-300 hover:bg-primary-600"
                  >
                    <Mail className="w-5 h-5 transition-transform group-hover:rotate-12" />
                    <span className="font-medium">Start a Project</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </button>

                  <a
                    href="/pdf/m-kamran-profile.pdf"
                    target="_blank"
                    className="group inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <Download className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
                    <span className="font-medium">Download Resume</span>
                  </a>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative h-full lg:h-screen overflow-hidden px-6 py-12 lg:p-0 lg:m-2 shadow-lg">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-primary-800/10 to-transparent" />

              {/* Code Window */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative bg-black/40 backdrop-blur-xl rounded-xl border border-white/20 p-4 lg:p-6 shadow-2xl"
              >
                {/* Window Controls */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>

                {/* Animated Icons */}
                <div className="grid grid-cols-4 gap-6 py-8">
                  {[
                    {
                      icon: Globe,
                      label: "Full Stack",
                      color: "from-blue-500 to-blue-600",
                      description: "End-to-End Development",
                    },
                    {
                      icon: BrainCircuit,
                      label: "Architecture",
                      color: "from-purple-500 to-purple-600",
                      description: "System Design",
                    },
                    {
                      icon: Blocks,
                      label: "Blockchain",
                      color: "from-orange-500 to-orange-600",
                      description: "Web3 & DApps",
                    },
                    {
                      icon: Cloud,
                      label: "DevOps",
                      color: "from-green-500 to-green-600",
                      description: "CI/CD & Cloud",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex flex-col items-center gap-3 group"
                    >
                      <div
                        className={`p-4 rounded-xl bg-gradient-to-br ${item.color} transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                      >
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-300">
                        {item.label}
                      </span>
                      <span className="text-xs text-gray-500 text-center">
                        {item.description}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Code Snippets */}
                <div className="space-y-3 font-mono text-sm">
                  <div className="text-gray-400">{"const developer = {"}</div>
                  <div className="pl-4">
                    <span className="text-blue-400">name</span>:
                    <span className="text-green-400">
                      'Muhammad Kamran Haider'
                    </span>
                    ,
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">role</span>:
                    <span className="text-green-400">
                      'Full Stack & Blockchain Developer',
                    </span>
                    ,
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">expertise</span>: [
                    <span className="text-green-400">
                      'Specializing in Cloud Architecture, Distributed Systems,
                      Blockchain, Smart Contracts, DApps, and Full-stack
                      Development',
                    </span>
                    ,]
                  </div>
                  <div className="text-gray-400">{"}"}</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
