import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
          alt="Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/95 via-primary-900/90 to-primary-800/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(124,45,206,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
      </div>

      {/* Content */}
      <div className="relative w-full">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              className="space-y-8 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4">
                <motion.div
                  className="inline-flex items-center px-4 py-2 rounded-full border border-primary-400/30 bg-primary-900/30 backdrop-blur-sm"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="animate-pulse w-2 h-2 rounded-full bg-primary-400 mr-3" />
                  <span className="text-primary-200 font-medium">
                    Available for Projects
                  </span>
                </motion.div>

                <motion.h1
                  className="text-5xl md:text-7xl font-bold text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Crafting Digital
                  <span className="block mt-2 bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
                    Excellence
                  </span>
                </motion.h1>

                <motion.p
                  className="text-2xl md:text-3xl text-primary-100 font-display max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Senior Software Engineer with 8+ years building
                  enterprise-scale solutions
                </motion.p>
              </div>

              <motion.p
                className="text-xl text-primary-100 max-w-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Specializing in cloud architecture, distributed systems,
                blockchain, and full-stack development. Turning complex
                challenges into elegant, scalable solutions.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  onClick={scrollToContact}
                  className="group inline-flex items-center px-8 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5 mr-3 transition-transform group-hover:rotate-12" />
                  Start a Project
                </motion.button>

                <motion.a
                  href="/pdf/m-kamran-profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 text-lg font-medium rounded-full bg-teal-700 text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5 mr-3 transition-transform group-hover:-translate-y-1" />
                  Download Resume
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="hidden md:flex justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-accent-500 rounded-full blur-2xl opacity-30 animate-pulse" />
                <motion.div
                  className="relative rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 aspect-square w-[28rem]"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src="/images/kamran-haider.jpg"
                    alt="Muhammad Kamran Haider"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          {/* <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6 text-primary-400" />
            </motion.div>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}
