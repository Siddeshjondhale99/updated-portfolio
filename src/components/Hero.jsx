import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { personalInfo } from '../data';
import profileImg from '../assets/profile.png';
import resume from "../assets/resume.pdf";

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden pt-20 transition-colors duration-300">
            {/* Background Gradient Elements */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-200/50 dark:bg-purple-900/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-200/50 dark:bg-blue-900/20 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-blue-600 dark:text-blue-400 font-medium tracking-wider mb-4">HELLO, I'M</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                        {personalInfo.name.split(' ')[0]} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-600">
                            {personalInfo.name.split(' ')[1]}
                        </span>
                    </h1>
                    <h3 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">{personalInfo.role}</h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-lg mb-8 leading-relaxed">
                        {personalInfo.summary}
                    </p>

                    <div className="flex space-x-6">
                        <SocialLink href={personalInfo.contact.github} icon={<Github />} label="GitHub" />
                        <SocialLink href={personalInfo.contact.linkedin} icon={<Linkedin />} label="LinkedIn" />
                        <SocialLink href={`mailto:${personalInfo.contact.email}`} icon={<Mail />} label="Email" />
                        <a href={resume} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-6 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-all text-gray-700 dark:text-white shadow-sm dark:shadow-none group">
                            <span className="text-sm font-medium">Resume</span>
                            <FileText size={18} className="text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-white transition-colors" />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    {/* Abstract Floating UI Representation */}
                    <div className="relative w-full h-[500px] flex items-center justify-center">
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="absolute w-[350px] h-[350px] rounded-full border-2 border-white/20 dark:border-white/10 backdrop-blur-xl z-10 flex items-center justify-center p-3"
                        >
                             <div className="w-full h-full rounded-full overflow-hidden relative group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 group-hover:opacity-0 transition-opacity duration-500 rounded-full z-10" />
                                <img src={profileImg} alt="Profile" className="w-full h-full object-cover rounded-full transform group-hover:scale-110 transition-transform duration-700" />
                             </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
                            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
                            className="absolute top-10 right-10 w-40 h-40 bg-white/80 dark:bg-gray-900/80 rounded-2xl border border-gray-100 dark:border-white/10 backdrop-blur-md z-0 flex flex-col items-center justify-center p-4 border-l-4 border-l-blue-500 shadow-xl dark:shadow-none"
                        >
                            <div className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-1">150+</div>
                            <div className="text-gray-500 text-xs text-center">LeetCode Problems Solved</div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
                            className="absolute bottom-20 left-0 w-48 h-24 bg-white/80 dark:bg-gray-900/80 rounded-2xl border border-gray-100 dark:border-white/10 backdrop-blur-md z-20 flex items-center justify-center space-x-4 p-4 shadow-xl dark:shadow-none"
                        >
                             <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">J</div>
                             <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-500/20 flex items-center justify-center text-yellow-600 dark:text-yellow-400 font-bold">JS</div>
                             <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold">R</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon, label }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="p-3 bg-white border border-gray-200 dark:bg-white/5 dark:border-white/10 rounded-full text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-300 shadow-sm dark:shadow-none"
        aria-label={label}
    >
        {icon}
    </a>
)

export default Hero;
