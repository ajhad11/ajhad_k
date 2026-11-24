import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiArrowLeft, 
  FiExternalLink, 
  FiGithub, 
  FiCheck, 
  FiSmartphone, 
  FiMonitor, 
  FiMaximize2, 
  FiCheckCircle, 
  FiAlertCircle,
  FiTarget,
  FiLayers,
  FiX,
  FiCalendar,
  FiTag
} from 'react-icons/fi';
import { fetchProjects } from '../api';

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchProjects()
      .then((data) => {
        const found = data.find(p => 
          String(p.id) === String(id) || 
          (p.slug && String(p.slug).toLowerCase() === String(id).toLowerCase())
        );
        if (found) {
          const screens = found.screens && found.screens.length > 0 
            ? found.screens 
            : [found.image].filter(Boolean);
          setProject({
            ...found,
            screens: screens
          });
          setActiveImageIndex(0);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching project details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0B1120] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#2563EB]/20 border-t-[#2563EB] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0B1120] flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold font-space text-[#172033] dark:text-white mb-3">
          Project Not Found
        </h2>
        <p className="text-sm text-[#64748B] dark:text-[#94A3B8] mb-6">
          The requested project case study could not be located.
        </p>
        <Link
          to="/"
          className="px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors"
        >
          Return to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 bg-white dark:bg-[#0B1120] text-[#172033] dark:text-white transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#64748B] dark:text-[#94A3B8] hover:text-[#2563EB] transition-colors mb-8"
        >
          <FiArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>

        {/* Project Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-[#E2E8F0] dark:border-white/10">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#2563EB]/10 text-[#2563EB] dark:text-blue-400 font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-[10px] font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                ● {project.status || 'Active Production'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-space text-[#172033] dark:text-white tracking-tight">
              {project.title}
            </h1>
            <p className="text-sm md:text-base font-medium text-[#64748B] dark:text-[#94A3B8] mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3">
            {project.github_link && (
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold border border-[#E2E8F0] dark:border-white/10 hover:border-[#2563EB]/40 flex items-center gap-2 transition-colors bg-[#F8FAFC] dark:bg-[#101B33]"
              >
                <FiGithub className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.live_link && (
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] flex items-center gap-2 transition-colors shadow-sm"
              >
                <FiExternalLink className="w-4 h-4" />
                <span>Live Demo / App</span>
              </a>
            )}
          </div>
        </div>

        {/* Gallery / Screenshot Showcase */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl border border-[#E2E8F0] dark:border-white/10 overflow-hidden shadow-xl bg-[#020B1C]">
            
            {/* Screenshot Frame */}
            <div className="relative aspect-[16/9] max-h-[520px] flex items-center justify-center p-4">
              <img
                src={project.screens[activeImageIndex] || project.image}
                alt={`${project.title} Preview`}
                className="w-full h-full object-contain rounded-lg shadow-md cursor-pointer"
                onClick={() => setIsFullscreen(true)}
              />

              <button
                onClick={() => setIsFullscreen(true)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-black/60 text-white hover:bg-black/90 transition-colors"
                title="Fullscreen Preview"
              >
                <FiMaximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Multiple Screenshots Selector (if available) */}
            {project.screens.length > 1 && (
              <div className="px-4 py-3 bg-[#0B1120] border-t border-white/10 flex items-center gap-2 overflow-x-auto">
                {project.screens.map((screen, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 aspect-[16/10] rounded-md overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeImageIndex === idx ? 'border-[#2563EB] scale-105' : 'border-white/20 opacity-60'
                    }`}
                  >
                    <img src={screen} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

          </div>
        </div>

        {/* In-Depth Technical Specification Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Left Column: Problem, Solution, Overview */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview */}
            <div className="glass-card p-6 rounded-2xl border border-[#E2E8F0] dark:border-white/10">
              <h3 className="text-lg font-bold font-space text-[#172033] dark:text-white mb-3">
                Project Overview
              </h3>
              <p className="text-xs md:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Problem & Solution Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                <div className="flex items-center gap-2 mb-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase font-mono">
                  <FiAlertCircle className="w-4 h-4" />
                  <span>The Engineering Problem</span>
                </div>
                <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                  {project.problem_statement}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#2563EB]/5 border border-[#2563EB]/25">
                <div className="flex items-center gap-2 mb-2 text-[#2563EB] font-bold text-xs uppercase font-mono">
                  <FiTarget className="w-4 h-4" />
                  <span>The Implemented Solution</span>
                </div>
                <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features & System Capabilities */}
            <div className="glass-card p-6 rounded-2xl border border-[#E2E8F0] dark:border-white/10">
              <h3 className="text-lg font-bold font-space text-[#172033] dark:text-white mb-4">
                Key Features & Capabilities
              </h3>
              <div className="space-y-2.5">
                {(project.key_features || []).map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5">
                    <FiCheckCircle className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-[#172033] dark:text-[#F8FAFC] leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Notes */}
            {project.architecture_notes && (
              <div className="p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] mb-2 flex items-center gap-1.5">
                  <FiLayers className="w-3.5 h-3.5" />
                  <span>Architecture & Integration Notes</span>
                </h4>
                <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                  {project.architecture_notes}
                </p>
              </div>
            )}

            {/* Code Spec Block */}
            <div className="code-window p-4 font-mono text-xs">
              <div className="flex items-center space-x-2 pb-2 mb-3 border-b border-black/10 dark:border-white/10 text-[10px] text-[#64748B] dark:text-[#94A3B8]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-2 font-bold text-[#2563EB]">system_manifest.json</span>
              </div>
              <div className="space-y-0.5 text-[11px]">
                <p>&#123;</p>
                <p className="pl-4"><span className="tok-prop">"systemId"</span>: <span className="tok-str">"{project.slug || project.id}"</span>,</p>
                <p className="pl-4"><span className="tok-prop">"tier"</span>: <span className="tok-str">"{project.category}"</span>,</p>
                <p className="pl-4"><span className="tok-prop">"runtime"</span>: <span className="tok-str">"{(project.technologies_list || []).slice(0, 3).join(' • ')}"</span>,</p>
                <p className="pl-4"><span className="tok-prop">"stateArchitecture"</span>: <span className="tok-str">"Reactive / Clean Architecture"</span>,</p>
                <p className="pl-4"><span className="tok-prop">"deploymentStatus"</span>: <span className="tok-str">"{project.status || 'Active'}"</span></p>
                <p>&#125;</p>
              </div>
            </div>

          </div>

          {/* Right Column: Metadata Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Tech Stack Box */}
            <div className="glass-card p-6 rounded-2xl border border-[#E2E8F0] dark:border-white/10">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#172033] dark:text-white mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {(project.technologies_list || []).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-[#2563EB]/10 text-[#2563EB] dark:bg-[#2563EB]/20 dark:text-blue-300 font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Quick Specs */}
            <div className="glass-card p-6 rounded-2xl border border-[#E2E8F0] dark:border-white/10 space-y-4 text-xs">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#172033] dark:text-white">
                Project Information
              </h4>

              <div>
                <p className="text-[#64748B] dark:text-[#94A3B8]">Domain & Type</p>
                <p className="font-semibold text-[#172033] dark:text-white mt-0.5">{project.category}</p>
              </div>

              <div>
                <p className="text-[#64748B] dark:text-[#94A3B8]">Production Status</p>
                <p className="font-semibold text-emerald-500 mt-0.5">{project.status || 'Active'}</p>
              </div>

              <div>
                <p className="text-[#64748B] dark:text-[#94A3B8]">Code Availability</p>
                <p className="font-semibold text-[#172033] dark:text-white mt-0.5">
                  {project.github_link ? 'Public GitHub Repository' : 'Private Commercial Implementation'}
                </p>
              </div>
            </div>

            {/* Connect CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#101B33] to-[#2563EB] text-white space-y-3">
              <h4 className="font-bold font-space text-base">Discuss This Architecture?</h4>
              <p className="text-xs text-white/80 leading-relaxed">
                Interested in deep technical details or code walkthroughs for this system?
              </p>
              <Link
                to="/#contact"
                className="inline-block px-4 py-2 rounded-xl text-xs font-bold bg-white text-[#101B33] hover:bg-slate-100 transition-colors shadow-sm"
              >
                Reach Out Directly
              </Link>
            </div>

          </div>

        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsFullscreen(false)}
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <FiX className="w-6 h-6" />
            </button>
            <img
              src={project.screens[activeImageIndex] || project.image}
              alt="Fullscreen Zoom"
              className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
