import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400">Innovation through code.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="group relative bg-gray-50 dark:bg-[#111] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/5 hover:border-purple-500/30 transition-all duration-500 shadow-sm dark:shadow-none"
                >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="p-8 relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{project.title}</h3>
                                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">{project.subtitle}</p>
                            </div>
                            <div className="flex space-x-3">
                                {project.links?.github && (
                                    <a href={project.links.github} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                        <Github size={20} />
                                    </a>
                                )}
                                {project.links?.live && (
                                     <a href={project.links.live} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={20} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm">
                            {project.description}
                        </p>

                        <div className="hidden group-hover:block mb-6 animate-fadeIn">
                             <ul className="space-y-2">
                                {project.points.slice(0, 2).map((point, i) => ( // Show first 2 points on hover
                                    <li key={i} className="text-xs text-gray-500 dark:text-gray-500 flex items-start">
                                        <span className="mr-2 mt-1 text-purple-600 dark:text-purple-500">▹</span>
                                        {point}
                                    </li>
                                ))}
                             </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="px-3 py-1 bg-white dark:bg-white/5 text-xs text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
