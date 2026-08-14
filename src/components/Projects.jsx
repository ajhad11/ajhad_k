import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../api';
import { FiExternalLink, FiGithub, FiInfo } from 'react-icons/fi';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    fetchProjects().then(data => {
      setProjects(data);
    });
  }, []);

  // Filter keys
  const filters = ['all', 'react', 'django', 'flutter', 'postgresql'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => 
        project.technologies?.toLowerCase().includes(activeFilter)
      );

  return (
    <section id="projects" className="relative py-24 bg-[#020B1C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-space">
            Featured <span className="text-primary text-glow">Projects</span>
          </h2>
          <div className="h-1 w-12 bg-primary mt-4 rounded-full" />
          <p className="text-text-gray mt-6 max-w-xl text-center">
            A curated showcase of applications built using Flutter mobile architecture, React frontend frameworks, Django backends, and databases.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase border transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(10,132,255,0.3)]'
                  : 'bg-[#071A35]/40 border-white/5 text-text-gray hover:text-white hover:border-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id || project.title || index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-white/5 hover:border-primary/20 flex flex-col justify-between transition-all duration-300 group"
              >
                
                {/* Project Image Panel */}
                <div className="relative aspect-video overflow-hidden border-b border-white/5 bg-[#071A35]/50">
                  <img
                    src={project.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020B1C] to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Card Details */}
                <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                  <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white font-space group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm md:text-base text-text-gray leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech list badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies_list && project.technologies_list.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded bg-primary/5 border border-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-8">
                    {project.id && (
                      <Link
                        to={`/project/${project.id}`}
                        className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-primary hover:bg-primary/90 transition-all duration-300 shadow-[0_0_15px_rgba(10,132,255,0.25)]"
                      >
                        <FiInfo className="w-3.5 h-3.5" />
                        Details & Sandbox
                      </Link>
                    )}

                    {project.live_link && (
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold text-white glass-card hover:bg-white/10 transition-all duration-300 border border-white/10"
                      >
                        <FiExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                    
                    {project.github_link && (
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold text-white glass-card hover:bg-white/10 transition-all duration-300 border border-white/10"
                      >
                        <FiGithub className="w-3.5 h-3.5" />
                        Code
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
