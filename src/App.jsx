import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-[#0a0a0a] min-h-screen text-gray-900 dark:text-white font-sans selection:bg-blue-500/30 transition-colors duration-300">
        <Navbar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
