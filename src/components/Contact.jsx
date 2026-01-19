import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { Mail, Phone, Linkedin, Github, ChevronUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Contact = () => {
    return (
        <footer id="contact" className="bg-white dark:bg-[#0a0a0a] pt-24 pb-12 border-t border-gray-200 dark:border-white/5 relative transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-md">
                            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a href={`mailto:${personalInfo.contact.email}`} className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-blue-500/30 shadow-sm dark:shadow-none">
                            <div className="p-2 bg-blue-100 dark:bg-blue-500/20 rounded-lg text-blue-600 dark:text-blue-400">
                                <Mail size={20} />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500">Email</div>
                                <div className="font-medium">{personalInfo.contact.email}</div>
                            </div>
                        </a>
                        
                        <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
                            <div className="p-2 bg-purple-100 dark:bg-purple-500/20 rounded-lg text-purple-600 dark:text-purple-400">
                                <Phone size={20} />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500">Phone</div>
                                <div className="font-medium">{personalInfo.contact.phone}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-gray-200 dark:bg-white/5 mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                    </p>

                    <div className="flex items-center space-x-6">
                         <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"><Github size={20} /></a>
                         <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"><Linkedin size={20} /></a>
                         
                         <Link to="hero" smooth={true} duration={1000} className="p-2 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-lg text-gray-500 dark:text-gray-400 cursor-pointer transition-colors">
                            <ChevronUp size={20} />
                         </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
