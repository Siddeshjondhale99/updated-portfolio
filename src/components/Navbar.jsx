import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'hero' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-black/80 backdrop-blur-md py-4 border-b border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="hero" smooth={true} duration={500} className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-600 bg-clip-text text-transparent cursor-pointer">
          SJ.
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.to} 
              smooth={true} 
              duration={500} 
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white cursor-pointer transition-colors text-sm font-medium tracking-wide uppercase"
            >
              {link.name}
            </Link>
          ))}
          
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-yellow-400"
          >
             {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <div className="text-gray-800 dark:text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-black/95 border-b border-gray-200 dark:border-white/10 shadow-lg"
        >
          <div className="flex flex-col items-center py-8 space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.to} 
                smooth={true} 
                duration={500} 
                onClick={() => setIsOpen(false)}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white cursor-pointer text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
