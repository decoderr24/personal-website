import React from 'react';
import { motion } from 'framer-motion';
import { INTERESTS } from '../constants';
import { Cpu, Activity } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end gap-4"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-mono mb-2 flex items-center gap-4">
              <Cpu className="text-indigo-500" size={40} />
              NEURAL NETWORKS
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Core competencies and technical horizons currently being explored.
            </p>
          </div>
          <div className="flex-grow h-px bg-gradient-to-r from-indigo-500/50 to-transparent mb-4 hidden md:block" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INTERESTS.map((interest, index) => (
            <motion.div
              key={interest}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                delay: index * 0.1,
                y: {
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }
              }}
              whileHover={{ scale: 1.05, borderColor: "rgba(99, 102, 241, 0.8)", backgroundColor: "rgba(17, 24, 39, 0.8)" }}
              className="group relative flex items-center p-6 rounded-xl bg-space-800/40 border border-white/5 backdrop-blur-sm cursor-default transition-colors"
            >
              {/* Connection Line Visual */}
              <div className="absolute -left-[1px] top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-full transition-all duration-500 bg-indigo-500 rounded-l-xl" />
              
              {/* Node Dot */}
              <div className="relative">
                 <div className="w-3 h-3 rounded-full bg-indigo-500 mr-5 shadow-[0_0_10px_rgba(99,102,241,0.8)] group-hover:scale-150 transition-transform duration-300" />
                 <div className="absolute inset-0 w-3 h-3 rounded-full bg-indigo-400 animate-ping opacity-75" />
              </div>
              
              <span className="text-gray-200 font-mono text-lg tracking-wide group-hover:text-white transition-colors">
                {interest}
              </span>
              
              <Activity className="ml-auto text-indigo-500/0 group-hover:text-indigo-500/100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0" size={20} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;