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

        <div className="max-w-4xl mx-auto">
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
              development, cloud architecture, and distributed systems.
            </p>

            <p className="text-xl leading-relaxed">
              Throughout my career, I've successfully led multiple high-impact
              projects, including the development of enterprise resource
              planning systems, analytics platforms, Blockchain and
              microservices-based e-commerce solutions. My focus on clean code,
              performance optimization, and architectural best practices has
              consistently delivered measurable business value.
            </p>

            <p className="text-xl leading-relaxed">
              Currently, I'm passionate about cloud-native development,
              blockchain development, machine learning integration, and building
              resilient distributed systems that scale. I believe in continuous
              learning and staying ahead of technology trends while maintaining
              a strong foundation in software engineering principles.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "8+", text: "Years of Experience" },
              { number: "15+", text: "Projects Delivered" },
              // { number: "5+", text: "Enterprise Clients" },
            ].map((stat, index) => (
              <motion.div
                key={stat.text}
                className="card p-8 text-center hover:bg-blue-50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-4xl font-bold text-blue-600 mb-4">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
