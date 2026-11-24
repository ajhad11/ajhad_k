import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../api';
import { 
  FiGithub, 
  FiExternalLink, 
  FiSearch, 
  FiArrowRight,
  FiCheckCircle
} from 'react-icons/fi';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchProjects().then(data => {
      setProjects(data || []);
    });
  }, []);

  const filterTabs = [
    { id: 'All', label: 'All Projects' },
    { id: 'Mobile', label: 'Flutter Mobile' },
    { id: 'Web', label: 'React & Web' },
    { id: 'FullStack', label: 'Django & Full-Stack' },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const q = searchQuery.toLowerCase().trim();
      if (q) {
        const title = (p.title || '').toLowerCase();
        const subtitle = (p.subtitle || '').toLowerCase();
        const techs = (p.technologies || p.technologies_list?.join(' ') || '').toLowerCase();
        if (!title.includes(q) && !subtitle.includes(q) && !techs.includes(q)) return false;
      }

      if (activeFilter === 'Mobile') {
        return (p.category || '').toLowerCase().includes('mobile') || (p.technologies || '').toLowerCase().includes('flutter');
      }
      if (activeFilter === 'Web') {
        return (p.category || '').toLowerCase().includes('web') || (p.technologies || '').toLowerCase().includes('react');
      }
      if (activeFilter === 'FullStack') {
        return (p.category || '').toLowerCase().includes('full-stack') || (p.technologies || '').toLowerCase().includes('django');
      }
      return true;
    });
  }, [projects, activeFilter, searchQuery]);

  return (
    <section id="projects" className="relative py-20 bg-[#F8FAFC]/50 dark:bg-[#071A35]/20 border-b border-[#E2E8F0] dark:border-white/5 overflow-hidden">
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#2563EB]/5 dark:bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#2563EB] uppercase block mb-2">
            // Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#172033] dark:text-white font-space">
            Featured <span className="text-[#2563EB]">Projects</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] max-w-xl mt-3">
            Real-world Flutter mobile applications, responsive React websites, and robust Django backends.
          </p>
          <div className="h-1 w-12 bg-[#2563EB] mt-4 rounded-full" />
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-1.5 font-mono text-xs">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#2563EB] text-white shadow-sm'
                    : 'bg-white dark:bg-[#101B33]/60 text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white border border-[#E2E8F0] dark:border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-60 font-mono text-xs">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] dark:text-[#94A3B8]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-9 pr-3.5 py-1.5 text-xs rounded-xl bg-white dark:bg-[#101B33]/80 border border-[#E2E8F0] dark:border-white/10 text-[#172033] dark:text-white placeholder-[#64748B] dark:placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#2563EB]"
            />
          </div>
        </div>

        {/* Projects Grid: Clean, Simple Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              key={project.id || project.slug}
              className="glass-card rounded-2xl border border-[#E2E8F0] dark:border-white/10 overflow-hidden hover:border-[#2563EB]/40 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between group bg-white dark:bg-[#101B33]/70"
            >
              <div>
                {/* Clean Image Container without heavy overlays */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-[#070D18] border-b border-[#E2E8F0] dark:border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg bg-black/75 dark:bg-[#101B33]/90 backdrop-blur-sm text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-space text-[#172033] dark:text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#2563EB] dark:text-blue-400 mt-0.5 line-clamp-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed line-clamp-2">
                    {project.overview}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {(project.technologies_list || []).slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/[0.04] dark:bg-white/[0.06] border border-[#E2E8F0] dark:border-white/10 text-[#172033] dark:text-blue-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-5 pb-5 pt-3 border-t border-[#E2E8F0] dark:border-white/10 flex items-center justify-between gap-3">
                <Link
                  to={`/project/${project.id}`}
                  className="px-3.5 py-2 rounded-xl font-bold text-xs text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-all flex items-center gap-1.5 cursor-pointer shadow-sm group/btn"
                >
                  <span>View Details</span>
                  <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl text-xs font-mono text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-[#E2E8F0] dark:border-white/10 transition-colors flex items-center gap-1.5"
                      title="GitHub Repository"
                    >
                      <FiGithub className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}

                  {project.live_link && project.live_link !== project.github_link && (
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl text-xs font-mono text-[#2563EB] hover:text-[#1D4ED8] bg-[#2563EB]/10 border border-[#2563EB]/25 transition-colors flex items-center gap-1.5"
                      title="Live Demo"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
