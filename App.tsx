import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Starfield from './components/Starfield';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-space-900 text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      <Starfield />
      <Navigation />

      <Hero />
      <Skills />
      <Projects />
      <Contact />

      <footer className="py-8 border-t border-white/5 text-center text-gray-600 text-sm font-mono relative z-10 bg-space-900">
        <p>© {new Date().getFullYear()} Rifky Bintang. Built with React & Tailwind.</p>
      </footer>
    </main>
  );
};

export default App;