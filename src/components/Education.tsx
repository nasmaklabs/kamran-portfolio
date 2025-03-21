import React from "react";
import { education, certifications } from "../data";
import { Award, BookOpen, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        {/* & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                className="p-3 bg-blue-100 rounded-xl"
                whileHover={{ scale: 1.1 }}
              >
                <BookOpen className="w-6 h-6 text-blue-600" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  className="card p-6 hover:bg-blue-50 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-lg text-blue-600 mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-500 mb-3">{edu.year}</p>
                  {edu.details && (
                    <p className="text-gray-600 border-t pt-3">{edu.details}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                className="p-3 bg-blue-100 rounded-xl"
                whileHover={{ scale: 1.1 }}
              >
                <Award className="w-6 h-6 text-blue-600" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Certifications
              </h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  className="card p-6 hover:bg-blue-50 transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-lg text-blue-600 mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 mb-3">{cert.year}</p>
                  {cert.url && (
                    <motion.a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
                      whileHover={{ x: 4 }}
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  )}
                </motion.div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
