import React from 'react';
import { skills } from '../data';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div 
              key={category.category} 
              className="card p-8 hover:translate-y-[-4px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      {skill.level && (
                        <span className="text-blue-600 font-semibold">{skill.level}%</span>
                      )}
                    </div>

                    {skill.level && (
                      <motion.div 
                        className="w-full bg-gray-200 rounded-full h-2 overflow-hidden"
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "100%" }}
                        transition={{ delay: (index * 0.1) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="skill-bar"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: (index * 0.1) + (skillIndex * 0.1), duration: 0.8 }}
                          viewport={{ once: true }}
                        />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}