import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../api';
import { 
  FiGithub, 
  FiExternalLink, 
  FiArrowUpRight, 
  FiArrowRight, 
  FiFolder, 
  FiGrid, 
  FiSmartphone, 
  FiGlobe,
  FiEye,
  FiCheck
} from 'react-icons/fi';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    fetchProjects().then((data) => {
      setProjects(data);
    });
  }, []);

  // Filter Categories Definition
  const categories = [
    { id: 'All', label: 'All Projects', icon: FiGrid },
    { id: 'Mobile', label: 'Flutter / Mobile', icon: FiSmartphone },
    { id: 'Web', label: 'Web Applications', icon: FiGlobe },
  ];

  // Dynamically count items per category
  const getCategoryCount = (catId) => {
    if (catId === 'All') return projects.length;
    return projects.filter((p) => {
      const cat = (p.category || '').toLowerCase();
      const techs = (p.technologies || p.technologies_list?.join(' ') || '').toLowerCase();
      const target = catId.toLowerCase();
      return cat.includes(target) || techs.includes(target);
    }).length;
  };

  // Filtered dataset
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => {
        const cat = (p.category || '').toLowerCase();
        const techs = (p.technologies || p.technologies_list?.join(' ') || '').toLowerCase();
        const target = activeCategory.toLowerCase();
        return cat.includes(target) || techs.includes(target);
      });

  return (
    <section id="projects" className="relative py-28 bg-[#020B1C] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-xs font-mono font-medium text-primary uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(10,132,255,0.15)]"
          >
            <FiFolder className="w-3.5 h-3.5" />
            <span>Featured Portfolio & Case Studies</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-space"
          >
            Engineered <span className="text-primary text-glow">Projects</span>
          </motion.h2>

          <div className="h-1 w-12 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 rounded-full" />

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-gray text-sm md:text-base mt-4 max-w-2xl leading-relaxed"
          >
            High-performance mobile applications and web systems built with Flutter, Supabase, and modern web frameworks, focusing on offline-first reliability and responsive UX.
          </motion.p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1.5 rounded-full bg-[#04122B]/90 border border-white/10 backdrop-blur-xl shadow-lg shadow-black/40 gap-1.5 flex-wrap justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = activeCategory === category.id;
              const count = getCategoryCount(category.id);

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'text-white bg-primary shadow-[0_0_20px_rgba(10,132,255,0.4)]'
                      : 'text-text-gray hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-primary'}`} />
                  <span>{category.label}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-medium transition-colors ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-white/5 text-text-gray'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Showcase Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isMobile = (project.category || '').toLowerCase() === 'mobile' || 
                               (project.technologies_list || []).includes('Flutter');
              const platformLabel = isMobile ? 'Flutter Mobile' : 'Web Application';
              const PlatformIcon = isMobile ? FiSmartphone : FiGlobe;
              const projectNumber = String(index + 1).padStart(2, '0');

              return (
                <motion.div
                  layout
                  key={project.id || project.title || index}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative rounded-2xl bg-[#041129]/80 backdrop-blur-xl border border-white/10 hover:border-primary/50 transition-all duration-500 flex flex-col h-full hover:shadow-[0_20px_45px_-12px_rgba(10,132,255,0.25)] hover:-translate-y-1.5 overflow-hidden"
                >
                  {/* Subtle top card glow line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Visual Header / Media Showcase */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#061533]">
                    <img
                      src={project.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Gradient Scrim for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041129] via-[#041129]/40 to-transparent" />

                    {/* Floating Platform Badge */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#020B1C]/85 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-white tracking-wide shadow-md">
                        <PlatformIcon className="w-3 h-3 text-primary" />
                        <span>{platformLabel}</span>
                      </div>
                    </div>

                    {/* Project Index Counter */}
                    <div className="absolute top-3.5 right-3.5 z-10">
                      <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-primary">
                        #{projectNumber}
                      </span>
                    </div>

                    {/* Interactive Hover Quick Action overlay */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                      <Link
                        to={`/project/${project.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold shadow-[0_0_20px_rgba(10,132,255,0.4)] hover:bg-primary/90 transition-all transform -translate-y-2 group-hover:translate-y-0 duration-300"
                      >
                        <FiEye className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </Link>
                      {project.github_link && (
                        <a
                          href={project.github_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300"
                          title="View Source on GitHub"
                          aria-label="View Source on GitHub"
                        >
                          <FiGithub className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                    <div className="space-y-2.5">
                      {/* Subtitle / Tagline */}
                      <div className="text-[11px] font-mono font-medium text-primary tracking-wide uppercase">
                        {project.tagline || 'Software Architecture'}
                      </div>

                      {/* Title with Interactive Link */}
                      <Link
                        to={`/project/${project.id}`}
                        className="group/title flex items-start justify-between gap-2"
                      >
                        <h3 className="text-xl font-bold font-space text-white group-hover/title:text-primary transition-colors leading-snug">
                          {project.title}
                        </h3>
                        <div className="p-1 rounded-md text-text-gray group-hover/title:text-primary transition-colors flex-shrink-0 mt-0.5">
                          <FiArrowUpRight className="w-5 h-5 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-transform" />
                        </div>
                      </Link>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-text-gray leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Key Engineering Highlights */}
                      {project.highlights && project.highlights.length > 0 && (
                        <div className="pt-2 space-y-1.5">
                          {project.highlights.slice(0, 2).map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-text-gray/90">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              <span className="truncate">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Tech stack chips */}
                    <div className="space-y-4 pt-1">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies_list && project.technologies_list.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/10 group-hover:border-primary/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Card Footer Divider & Actions */}
                      <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                        <Link
                          to={`/project/${project.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-white transition-colors group/btn"
                        >
                          <span>Case Study</span>
                          <FiArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>

                        <div className="flex items-center gap-1.5">
                          {project.github_link && (
                            <a
                              href={project.github_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 text-text-gray hover:text-primary border border-white/10 hover:border-primary/30 transition-all"
                              title="GitHub Repository"
                              aria-label={`GitHub repository for ${project.title}`}
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
                              title="Live Application / Demo"
                              aria-label={`Live demo for ${project.title}`}
                            >
                              <FiExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner: GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 via-[#041530]/80 to-primary/5 border border-primary/20 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl shadow-xl"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary flex-shrink-0">
              <FiGithub className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white font-space">
                Looking for more repositories & open source code?
              </h4>
              <p className="text-text-gray text-xs sm:text-sm mt-0.5">
                Explore complete Flutter architectures, utility libraries, and active contributions on GitHub.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/ajhad11"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-primary/90 shadow-[0_0_20px_rgba(10,132,255,0.3)] transition-all flex-shrink-0"
          >
            <span>Explore GitHub @ajhad11</span>
            <FiArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
