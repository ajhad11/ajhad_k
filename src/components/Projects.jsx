import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchProjects } from '../api';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    fetchProjects().then((data) => {
      setProjects(data);
    });
  }, []);

  // Filter categories
  const categories = ['All', 'Flutter', 'Web'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => {
        const techs = (p.technologies || p.technologies_list?.join(' ') || '').toLowerCase();
        const cat = (p.category || '').toLowerCase();
        const active = activeCategory.toLowerCase();
        return techs.includes(active) || cat.includes(active);
      });

  return (
    <section id="projects" className="relative py-20 bg-[#020B1C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-space">
            Featured <span className="text-primary text-glow">Projects</span>
          </h2>
          <div className="h-1 w-10 bg-primary mx-auto mt-3 rounded-full" />
          <p className="text-text-gray text-sm md:text-base mt-4 max-w-lg mx-auto">
            A showcase of mobile apps and web platforms built with Flutter, React, and modern technologies.
          </p>
        </div>

        {/* Clean Filter Tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(10,132,255,0.3)]'
                  : 'bg-white/5 text-text-gray hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id || project.title || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(10,132,255,0.1)]"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-[#071A35]/60">
                  <img
                    src={project.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020B1C]/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-bold text-white font-space group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      {/* Action Links */}
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        {project.github_link && (
                          <a
                            href={project.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 text-text-gray hover:text-primary border border-white/10 hover:border-primary/30 transition-all"
                            title="View GitHub Code"
                            aria-label={`View ${project.title} repository`}
                          >
                            <FiGithub className="w-4 h-4" />
                          </a>
                        )}
                        {project.live_link && project.live_link !== project.github_link && (
                          <a
                            href={project.live_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 text-text-gray hover:text-primary border border-white/10 hover:border-primary/30 transition-all"
                            title="Live Demo"
                            aria-label={`Live demo for ${project.title}`}
                          >
                            <FiExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-xs text-text-gray leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies_list && project.technologies_list.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
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
