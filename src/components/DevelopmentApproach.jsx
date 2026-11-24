import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiSearch, 
  FiFileText, 
  FiDatabase, 
  FiLayout, 
  FiCpu, 
  FiCheckSquare,
  FiGitBranch
} from 'react-icons/fi';

export default function DevelopmentApproach() {
  const steps = [
    {
      step: '01',
      title: 'Understand the Problem',
      tagline: 'Discovery & Domain Analysis',
      icon: <FiSearch className="w-4 h-4 text-[#2563EB]" />,
      desc: 'Define real-world business context, map user journeys, and establish measurable technical KPIs before writing code.',
      deliverables: ['Problem statement', 'User workflow maps', 'Success metrics baseline']
    },
    {
      step: '02',
      title: 'Requirement Analysis',
      tagline: 'Technical Feasibility',
      icon: <FiFileText className="w-4 h-4 text-indigo-500" />,
      desc: 'Formulate functional specifications, evaluate cross-platform constraints, and define strict latency/security targets.',
      deliverables: ['Technical specifications', 'Entity requirement matrices', 'Security & latency SLAs']
    },
    {
      step: '03',
      title: 'System & Database Architecture',
      tagline: 'Schemas & Clean Design',
      icon: <FiDatabase className="w-4 h-4 text-emerald-500" />,
      desc: 'Design normalized schemas in PostgreSQL/SQL Server, enforce ACID transaction boundaries, and structure Clean Architecture layers.',
      deliverables: ['Normalized ERD schemas', 'API contract specifications', 'State management models']
    },
    {
      step: '04',
      title: 'UI/UX & Application Development',
      tagline: 'Implementation & 60 FPS UI',
      icon: <FiLayout className="w-4 h-4 text-[#0A84FF]" />,
      desc: 'Build responsive interfaces in Flutter, React, or .NET/WPF with predictable reactive streams, reusable widgets, and validations.',
      deliverables: ['Component library', 'Reactive state streams', 'Responsive multi-screen views']
    },
    {
      step: '05',
      title: 'API, AI & Tool Integration',
      tagline: 'RAG & Protocol Connectivity',
      icon: <FiCpu className="w-4 h-4 text-purple-500" />,
      desc: 'Connect REST endpoints, integrate RAG dense vector retrieval, implement Model Context Protocol (MCP) servers, and wire external APIs.',
      deliverables: ['REST / JSON-RPC endpoints', 'Vector indexing pipelines', 'Asynchronous queues']
    },
    {
      step: '06',
      title: 'Testing, Deployment & CI/CD',
      tagline: 'Reliability & Release',
      icon: <FiCheckSquare className="w-4 h-4 text-emerald-600" />,
      desc: 'Execute unit tests, cross-device responsiveness validation, packaging (APK, Windows EXE, web), and production telemetry.',
      deliverables: ['Automated test suites', 'Production release builds', 'Telemetry & monitoring logs']
    }
  ];

  return (
    <section id="approach" className="relative py-24 bg-white dark:bg-[#0B1120] overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#2563EB]/5 dark:bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#2563EB] uppercase block mb-2">
            // 09. ENGINEERING_WORKFLOW
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#172033] dark:text-white font-space">
            How I Build <span className="text-[#2563EB]">Software</span>
          </h2>
          <div className="h-1 w-12 bg-[#2563EB] mt-4 rounded-full" />
        </div>

        {/* 6-Step Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((st) => (
            <div
              key={st.step}
              className="glass-card rounded-2xl border border-[#E2E8F0] dark:border-white/10 p-5 flex flex-col justify-between hover:border-[#2563EB]/40 transition-all duration-300 group shadow-sm hover:shadow-xl hover:-translate-y-1 relative"
            >
              <div>
                
                {/* Step Header */}
                <div className="flex items-center justify-between mb-3 font-mono">
                  <span className="text-xl font-extrabold text-[#2563EB]">
                    STAGE_{st.step}
                  </span>
                  <div className="p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10">
                    {st.icon}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-base font-bold text-[#172033] dark:text-white font-space group-hover:text-[#2563EB] transition-colors">
                  {st.title}
                </h3>
                <p className="text-xs font-mono text-[#2563EB] dark:text-blue-400 font-medium mt-0.5">
                  {st.tagline}
                </p>

                {/* Description */}
                <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed mt-2.5">
                  {st.desc}
                </p>

              </div>

              {/* Deliverables List */}
              <div className="pt-3.5 mt-3.5 border-t border-[#E2E8F0] dark:border-white/10 font-mono">
                <p className="text-[9px] text-[#64748B] dark:text-[#94A3B8] uppercase tracking-wider mb-1.5 font-bold">
                  Artifacts Delivered:
                </p>
                <div className="space-y-1">
                  {st.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5 text-[10px] text-[#172033] dark:text-[#F8FAFC]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
