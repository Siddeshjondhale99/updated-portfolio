import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-[#050505] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Professional Journey</h2>
          <p className="text-gray-600 dark:text-gray-400">My path in the software industry so far.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent transform -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-12">
                {experience.map((exp, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                         {/* Dot */}
                        <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-50 dark:border-[#050505] transform -translate-x-[9px] md:translate-x-[-8px] mt-1.5 z-10 hidden md:block shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

                        <div className="md:w-1/2" /> {/* Spacer */}
                        
                        <div className="md:w-1/2">
                            <div className="p-8 rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 hover:border-blue-500/30 transition-all duration-300 relative group overflow-hidden shadow-sm dark:shadow-none">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                
                                <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                                        <h4 className="text-lg text-gray-600 dark:text-gray-400 font-medium">{exp.company}</h4>
                                    </div>
                                    <span className="flex items-center text-xs font-medium px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
                                        <Calendar size={12} className="mr-1.5" />
                                        {exp.period}
                                    </span>
                                </div>
                                
                                <div className="flex items-center text-sm text-gray-500 mb-6">
                                    <MapPin size={14} className="mr-1.5" />
                                    {exp.location}
                                </div>
                                
                                <ul className="space-y-3">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="flex items-start text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-3 flex-shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
