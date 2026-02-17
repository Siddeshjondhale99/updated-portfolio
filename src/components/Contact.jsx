import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { Mail, Phone, Linkedin, Github, ChevronUp, Send } from 'lucide-react';
import { Link } from 'react-scroll';

const Contact = () => {
    const [focusedInput, setFocusedInput] = useState(null);

    const inputClasses = (name) => `
        w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-white/5 
        border ${focusedInput === name ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-200 dark:border-white/10'} 
        outline-none transition-all duration-300 dark:text-white backdrop-blur-sm
    `;

    return (
        <footer id="contact" className="bg-gradient-to-b from-white to-gray-50 dark:from-[#0a0a0a] dark:to-[#111] pt-24 pb-12 border-t border-gray-200 dark:border-white/5 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center max-w-2xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-6">Let's Connect</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <div className="flex flex-col gap-8">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/60 dark:bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-gray-200/50 dark:border-white/10 shadow-xl"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Info</h3>
                            <div className="space-y-6">
                                <a 
                                    href={`mailto:${personalInfo.contact.email}`} 
                                    className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-white dark:hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-blue-100 dark:hover:border-white/10"
                                >
                                    <div className="p-3 bg-blue-100 dark:bg-blue-500/20 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                                        <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{personalInfo.contact.email}</div>
                                    </div>
                                </a>
                                
                                <div className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-white dark:hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-purple-100 dark:hover:border-white/10">
                                    <div className="p-3 bg-purple-100 dark:bg-purple-500/20 rounded-xl text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Phone</div>
                                        <div className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{personalInfo.contact.phone}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-2xl rounded-bl-3xl -z-10" />
                        
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Send a Message</h3>
                        <form action="https://formsubmit.co/siddeshjondhale99@gmail.com" method="POST" className="space-y-6">
                            <div className="group">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name"
                                    required 
                                    onFocus={() => setFocusedInput('name')}
                                    onBlur={() => setFocusedInput(null)}
                                    className={inputClasses('name')}
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email"
                                    required 
                                    onFocus={() => setFocusedInput('email')}
                                    onBlur={() => setFocusedInput(null)}
                                    className={inputClasses('email')}
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400">Message</label>
                                <textarea 
                                    name="message" 
                                    id="message"
                                    required 
                                    rows="4"
                                    onFocus={() => setFocusedInput('message')}
                                    onBlur={() => setFocusedInput(null)}
                                    className={`${inputClasses('message')} resize-none`}
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <input type="hidden" name="_captcha" value="false" />
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit" 
                                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                <span>Send Message</span>
                                <Send size={20} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent my-12" />

                <div className="flex flex-col md:flex-row justify-between items-center bg-white/50 dark:bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 dark:border-white/5">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                    </p>

                    <div className="flex items-center space-x-6">
                         <motion.a 
                            whileHover={{ y: -3, color: '#181717' }} 
                            href={personalInfo.contact.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-500 dark:text-gray-400 dark:hover:text-white transition-colors"
                        >
                            <Github size={24} />
                        </motion.a>
                         <motion.a 
                            whileHover={{ y: -3, color: '#0077b5' }} 
                            href={personalInfo.contact.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-500 dark:text-gray-400 dark:hover:text-white transition-colors"
                        >
                            <Linkedin size={24} />
                        </motion.a>
                         
                         <Link to="hero" smooth={true} duration={1000}>
                            <motion.div 
                                whileHover={{ y: -5 }}
                                className="p-3 bg-white dark:bg-white/10 hover:shadow-lg rounded-xl text-gray-500 dark:text-gray-400 cursor-pointer border border-gray-200 dark:border-white/5 transition-all"
                            >
                                <ChevronUp size={20} />
                            </motion.div>
                         </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
