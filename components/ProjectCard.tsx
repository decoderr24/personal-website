import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Zap } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative rounded-2xl bg-space-800/30 backdrop-blur-md border border-white/10 overflow-hidden flex flex-col h-full"
    >
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-indigo-900/20 z-10 group-hover:bg-transparent transition-all duration-500" />
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-space-900 to-transparent z-20" />
      </div>

      {/* Animated Gradient Border on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" style={{ padding: '1px' }} />
      <div className="absolute inset-[1px] bg-space-900/90 rounded-2xl -z-10 pointer-events-none" />

      <div className="p-6 flex flex-col flex-grow relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono uppercase tracking-wider flex items-center gap-1">
            <Zap size={12} />
            {project.category}
          </div>
          <div className="flex space-x-3">
             <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all transform hover:rotate-12"
              title="View Code"
            >
              <Github size={18} />
            </a>
             <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-indigo-400 transition-all transform hover:-translate-y-1 hover:translate-x-1"
              title="Open Project"
            >
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 font-mono group-hover:text-indigo-300 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs font-medium text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-all"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;