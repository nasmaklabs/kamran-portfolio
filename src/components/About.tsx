import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Summary
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[2fr,1fr] gap-12 items-start">
            <motion.div
              className="prose prose-lg max-w-none text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-xl leading-relaxed">
                With 8 years of experience in software engineering, I specialize
                in building scalable, enterprise-grade applications using modern
                technologies and best practices. My expertise spans full-stack
                development, blockchain solutions, and distributed systems.
              </p>

              <p className="text-xl leading-relaxed">
                Throughout my career, I've successfully led multiple high-impact
                projects, including decentralized applications, smart contract
                development, and enterprise blockchain solutions. My focus on
                clean code, performance optimization, and architectural best
                practices has consistently delivered measurable business value.
              </p>

              <p className="text-xl leading-relaxed">
                Currently, I'm passionate about blockchain technology, Web3
                development, and building resilient distributed systems that
                scale. I believe in continuous learning and staying ahead of
                technology trends while maintaining a strong foundation in
                software engineering principles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="sticky top-8">
                <div className="relative aspect-[1] overflow-hidden rounded-2xl">
                  <img
                    src="/images/kamran-haider.jpg"
                    alt="Muhammad Kamran"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
