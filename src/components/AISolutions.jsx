import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchAISolutions } from '../api';
import { 
  FiCpu, 
  FiActivity, 
  FiArrowRight, 
  FiLayers, 
  FiCheckCircle,
  FiZap
} from 'react-icons/fi';
import { SiPython, SiGoogle, SiOpenai, SiFastapi } from 'react-icons/si';

export default function AISolutions() {
  const [solutions, setSolutions] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    fetchAISolutions().then(data => {
      setSolutions(data || []);
    });
  }, []);

  const statusFilters = ['All', 'Completed', 'In Progress', 'Exploring'];

  const filteredSolutions = solutions.filter(item => {
    if (activeFilter === 'All') return true;
    return item.status === activeFilter;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return {
          label: 'Completed',
          class: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
        };
      case 'In Progress':
        return {
          label: 'In Progress',
          class: 'bg-[#2563EB]/10 text-[#2563EB] dark:text-blue-400 border-[#2563EB]/30'
        };
      case 'Exploring':
      default:
        return {
          label: 'Exploring',
          class: 'bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/30'
        };
    }
  };

  return (
    <section id="ai-solutions" className="relative py-24 bg-white dark:bg-[#0B1120] overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#2563EB]/5 dark:bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

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
            // Applied Intelligence
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#172033] dark:text-white font-space">
            AI Integrations & <span className="text-[#2563EB]">RAG Pipelines</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] max-w-xl mt-3">
            Practical AI implementations connecting LLMs to proprietary documents, desktop apps, and business workflows.
          </p>
          <div className="h-1 w-12 bg-[#2563EB] mt-4 rounded-full" />
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center items-center gap-1.5 mb-10 flex-wrap font-mono text-xs">
          {statusFilters.map((st) => (
            <button
              key={st}
              onClick={() => setActiveFilter(st)}
              className={`px-3.5 py-1.5 rounded-xl border transition-all cursor-pointer font-semibold ${
                activeFilter === st
                  ? 'bg-[#2563EB] border-[#2563EB] text-white shadow-sm'
                  : 'bg-[#F8FAFC] dark:bg-[#101B33]/60 border-[#E2E8F0] dark:border-white/10 text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white'
              }`}
            >
              {st} {st === 'All' ? `(${solutions.length})` : ''}
            </button>
          ))}
        </div>

        {/* 6 AI Solutions Cards Grid: Compact & High Impact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSolutions.map((item) => {
            const statusBadge = getStatusBadge(item.status);
            return (
              <div
                key={item.id}
                className="glass-card rounded-2xl border border-[#E2E8F0] dark:border-white/10 p-5 flex flex-col justify-between hover:border-[#2563EB]/40 transition-all duration-300 group shadow-sm hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-[#101B33]/60"
              >
                <div>
                  
                  {/* Status Bar */}
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-1.5 text-[#2563EB]">
                      <FiZap className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase">
                        AI_PIPELINE_0{item.id}
                      </span>
                    </div>
                    <span className={`text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${statusBadge.class}`}>
                      ● {statusBadge.label}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-base font-bold text-[#172033] dark:text-white font-space group-hover:text-[#2563EB] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[#2563EB] dark:text-blue-400 font-medium mt-0.5">
                    {item.subtitle}
                  </p>

                  {/* Crisp Explanation */}
                  <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed mt-2.5 line-clamp-3">
                    {item.explanation}
                  </p>

                  {/* Clean Visual Flow Steps */}
                  <div className="mt-4 p-3 rounded-xl bg-black/[0.02] dark:bg-black/20 border border-[#E2E8F0] dark:border-white/5 font-mono">
                    <p className="text-[9px] uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-2 flex items-center gap-1.5 font-bold">
                      <FiActivity className="w-3 h-3 text-[#2563EB]" />
                      <span>Pipeline Flow</span>
                    </p>

                    <div className="flex flex-wrap items-center gap-1.5 text-[10px]">
                      {(item.workflow || []).map((wf, idx) => (
                        <React.Fragment key={wf.step}>
                          <span className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-[#172033] dark:text-slate-200 font-medium">
                            {wf.title}
                          </span>
                          {idx < (item.workflow || []).length - 1 && (
                            <span className="text-[#2563EB] text-[9px]">&rarr;</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Technologies */}
                <div className="pt-3.5 mt-3.5 border-t border-[#E2E8F0] dark:border-white/10">
                  <div className="flex flex-wrap gap-1 font-mono">
                    {(item.technologies || []).map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 text-[#172033] dark:text-blue-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}