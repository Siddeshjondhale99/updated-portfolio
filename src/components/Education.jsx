import React from 'react';
import { motion } from 'framer-motion';
import { education, certifications } from '../data';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-[#050505] transition-colors duration-300">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* Education Column */}
        <div>
            <div className="flex items-center mb-8">
                <GraduationCap className="text-blue-600 dark:text-blue-500 mr-4" size={32} />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
            </div>
            
            <div className="space-y-8">
                {education.map((edu, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="pl-6 border-l-2 border-gray-200 dark:border-white/10 relative"
                    >
                        <span className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-blue-500 rounded-full" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.institution}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{edu.degree}</p>
                        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                            <span>{edu.period}</span>
                            <span>{edu.details}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                            {edu.project}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Certifications Column */}
        <div>
            <div className="flex items-center mb-8">
                <Award className="text-purple-600 dark:text-purple-500 mr-4" size={32} />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Certifications & Achievements</h2>
            </div>

            <div className="grid gap-4">
                {certifications.map((cert, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-4 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 hover:border-purple-500/30 transition-all flex items-start shadow-sm dark:shadow-none"
                    >
                        <Award size={18} className="text-purple-600 dark:text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{cert}</span>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
