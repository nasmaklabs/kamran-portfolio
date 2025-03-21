import React from 'react';
import { projects } from '../data';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="card group overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent" />
                <h3 className="absolute bottom-4 left-6 right-6 text-xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
              
              <div className="p-6 space-y-4">
                <p className="text-gray-600">{project.description}</p>
                
                <div className="space-y-4">
                  {[
                    { title: 'Problem Solved', content: project.problem },
                    { title: 'Role', content: project.role },
                    { title: 'Outcome', content: project.outcome }
                  ].map((item) => (
                    <div key={item.title}>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.content}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {(project.demoUrl || project.githubUrl) && (
                  <div className="flex gap-4 pt-4 border-t">
                    {project.demoUrl && (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </motion.a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}