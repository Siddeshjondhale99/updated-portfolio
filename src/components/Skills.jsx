import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 dark:via-purple-900/50 to-transparent" />
        
        <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Technical Arsenal</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Technologies and tools I leverage to build scalable, high-performance applications.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, items], idx) => (
                <SkillCard key={idx} title={category.charAt(0).toUpperCase() + category.slice(1)} items={items} index={idx} />
              ))}
            </div>
        </div>
    </section>
  );
};

const SkillCard = ({ title, items, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="p-8 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/[0.07] shadow-sm dark:shadow-none group"
  >
    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors border-l-4 border-blue-500 pl-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((skill, i) => (
        <span 
          key={i} 
          className="px-3 py-1.5 bg-white dark:bg-black/40 rounded-lg text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-all cursor-default shadow-sm dark:shadow-none"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export default Skills;
