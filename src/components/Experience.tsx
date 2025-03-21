import React from 'react';
import { experiences } from '../data';
import { Briefcase, Calendar, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>
        
        <div className="max-w-5xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="card p-8 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-600 to-blue-400 rounded-l-2xl" />
              
              <div className="flex flex-wrap items-start gap-6 mb-8">
                <div className="flex-1">
                  <motion.h3 
                    className="text-2xl font-semibold text-gray-900"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {exp.position}
                  </motion.h3>
                  <div className="flex items-center gap-2 mt-2">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    <span className="text-lg text-gray-600">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-500">{exp.period}</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (idx * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Notable Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (idx * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}