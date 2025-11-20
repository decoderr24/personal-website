import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white font-mono mb-4 flex items-center gap-3">
            <Terminal className="text-indigo-500" />
            My Projects
          </h2>
          <div className="h-1 w-20 bg-indigo-500 rounded-full" />
          <p className="mt-4 text-gray-400 max-w-2xl">
            A collection of deep learning models and research projects developed to solve complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;