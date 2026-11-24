import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../api';
import { 
  FiGithub, 
  FiExternalLink, 
  FiSearch, 
  FiLayers, 
  FiArrowRight,
  FiCheckCircle,
  FiMaximize2
} from 'react-icons/fi';
import { SiFlutter, SiDotnet, SiReact, SiPython } from 'react-icons/si';

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
    { id: 'Enterprise', label: 'Enterprise & .NET' },
    { id: 'Web', label: 'Full-Stack Web & 3D' },
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
      if (activeFilter === 'Enterprise') {
        return (p.category || '').toLowerCase().includes('enterprise') || (p.technologies || '').toLowerCase().includes('.net');
      }
      if (activeFilter === 'Web') {
        return (p.category || '').toLowerCase().includes('web') || (p.category || '').toLowerCase().includes('3d');
      }
      return true;
    });
  }, [projects, activeFilter, searchQuery]);

  return (
    <section id="projects" className="relative py-24 bg-[#F8FAFC]/50 dark:bg-[#071A35]/20 border-y border-[#E2E8F0] dark:border-white/5 overflow-hidden">
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#2563EB]/5 dark:bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#2563EB] uppercase block mb-2">
            // Production Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#172033] dark:text-white font-space">
            Featured <span className="text-[#2563EB]">Projects</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] max-w-xl mt-3">
            Real-world systems engineered with clean reactive architecture, ACID data integrity, and intuitive UI designs.
          </p>
          <div className="h-1 w-12 bg-[#2563EB] mt-4 rounded-full" />
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center justify-center gap-1.5 font-mono text-xs">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#2563EB] text-white shadow-sm'
                    : 'bg-white dark:bg-[#101B33]/60 text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white border border-[#E2E8F0] dark:border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64 font-mono text-xs">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] dark:text-[#94A3B8]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by tech or name..."
              className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl bg-white dark:bg-[#101B33]/80 border border-[#E2E8F0] dark:border-white/10 text-[#172033] dark:text-white placeholder-[#64748B] dark:placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#2563EB]"
            />
          </div>
        </div>

        {/* Projects Grid: Visual-First Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={project.id || project.slug}
              className="glass-card rounded-3xl border border-[#E2E8F0] dark:border-white/10 overflow-hidden hover:border-[#2563EB]/40 transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between group bg-white dark:bg-[#101B33]/70"
            >
              <div>
                {/* Large Visual Screenshot Mockup Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#020B1C] border-b border-[#E2E8F0] dark:border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#101B33]/90 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-3.5 right-3.5">
                    <span className="px-2.5 py-1 rounded-full bg-[#0B1120]/90 backdrop-blur-md border border-emerald-500/30 text-[10px] font-mono font-semibold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{project.status || 'Active'}</span>
                    </span>
                  </div>

                  {/* Title overlay on image */}
                  <div className="absolute bottom-3.5 left-4 right-4">
                    <h3 className="text-xl sm:text-2xl font-bold font-space text-white tracking-tight leading-tight drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-blue-200 mt-0.5 line-clamp-1 drop-shadow-sm">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Content: Concise & High Impact */}
                <div className="p-6 space-y-4">
                  {/* Crisp 1-2 sentence overview */}
                  <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed line-clamp-2">
                    {project.overview}
                  </p>

                  {/* 3 Key Capabilities Highlight Bullets */}
                  <div className="space-y-1.5 pt-1">
                    {(project.key_features || []).slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs">
                        <FiCheckCircle className="w-3.5 h-3.5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                        <span className="text-[#172033] dark:text-slate-200 leading-snug line-clamp-1 font-medium">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {(project.technologies_list || []).slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] border border-[#E2E8F0] dark:border-white/10 text-[#172033] dark:text-blue-300 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                    {(project.technologies_list || []).length > 5 && (
                      <span className="text-[10px] font-mono px-2 py-1 rounded-lg text-[#64748B] dark:text-[#94A3B8]">
                        +{(project.technologies_list || []).length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-6 pb-6 pt-3 border-t border-[#E2E8F0] dark:border-white/10 flex items-center justify-between gap-3">
                <Link
                  to={`/project/${project.id}`}
                  className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-all flex items-center gap-1.5 cursor-pointer shadow-sm group/btn"
                >
                  <span>View Case Study</span>
                  <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl text-xs font-mono text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-[#E2E8F0] dark:border-white/10 transition-colors flex items-center gap-1.5"
                      title="GitHub Repository"
                    >
                      <FiGithub className="w-4 h-4" />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  )}

                  {project.live_link && project.live_link !== project.github_link && (
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl text-xs font-mono text-[#2563EB] hover:text-[#1D4ED8] bg-[#2563EB]/10 border border-[#2563EB]/25 transition-colors flex items-center gap-1.5"
                      title="Live Demo"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span className="hidden sm:inline">Live</span>
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}