import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSearch, 
  FiLayers, 
  FiCpu, 
  FiDatabase, 
  FiTool, 
  FiSmartphone, 
  FiServer,
  FiCode,
  FiCheck
} from 'react-icons/fi';
import { 
  SiFlutter, 
  SiDart, 
  SiDotnet, 
  SiPython, 
  SiDjango, 
  SiReact, 
  SiTailwindcss, 
  SiPostgresql, 
  SiSupabase, 
  SiFirebase, 
  SiDocker, 
  SiGit, 
  SiFastapi, 
  SiOpenai, 
  SiGoogle, 
  SiJavascript, 
  SiHtml5, 
  SiCss,
  SiAndroid
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const skillInventory = [
    // Mobile Development
    { name: 'Flutter', category: 'mobile', icon: <SiFlutter className="w-5 h-5 text-[#02569B]" />, level: 'Expert', tag: 'Mobile & Multiplatform' },
    { name: 'Dart', category: 'mobile', icon: <SiDart className="w-5 h-5 text-[#0175C2]" />, level: 'Expert', tag: 'Core Language' },
    { name: 'BLoC Architecture', category: 'mobile', icon: <FiLayers className="w-5 h-5 text-blue-500" />, level: 'Advanced', tag: 'State Management' },
    { name: 'Provider', category: 'mobile', icon: <FiLayers className="w-5 h-5 text-indigo-500" />, level: 'Expert', tag: 'State Management' },
    { name: 'GetX', category: 'mobile', icon: <FiLayers className="w-5 h-5 text-purple-500" />, level: 'Proficient', tag: 'Micro-State' },
    { name: 'SQLite (Offline)', category: 'mobile', icon: <FiDatabase className="w-5 h-5 text-sky-500" />, level: 'Expert', tag: 'Local Database' },
    { name: 'Android Native SDK', category: 'mobile', icon: <SiAndroid className="w-5 h-5 text-emerald-500" />, level: 'Advanced', tag: 'Platform Channels' },

    // .NET & Enterprise
    { name: 'C#', category: 'dotnet', icon: <TbBrandCSharp className="w-5 h-5 text-purple-600" />, level: 'Advanced', tag: 'Object-Oriented' },
    { name: '.NET Core', category: 'dotnet', icon: <SiDotnet className="w-5 h-5 text-[#512BD4]" />, level: 'Advanced', tag: 'Enterprise Runtime' },
    { name: 'ASP.NET Core Web API', category: 'dotnet', icon: <SiDotnet className="w-5 h-5 text-[#512BD4]" />, level: 'Advanced', tag: 'High-Throughput APIs' },
    { name: 'Entity Framework Core', category: 'dotnet', icon: <FiDatabase className="w-5 h-5 text-purple-500" />, level: 'Advanced', tag: 'ORM & Migrations' },
    { name: 'LINQ', category: 'dotnet', icon: <FiCode className="w-5 h-5 text-indigo-600" />, level: 'Expert', tag: 'Type-Safe Queries' },
    { name: 'WPF & Windows Forms', category: 'dotnet', icon: <FiServer className="w-5 h-5 text-blue-600" />, level: 'Advanced', tag: 'Desktop Architecture' },
    { name: 'Double-Entry ERP Ledgers', category: 'dotnet', icon: <FiCheck className="w-5 h-5 text-emerald-500" />, level: 'Advanced', tag: 'Financial Systems' },

    // Applied AI & Automation
    { name: 'Gemini API', category: 'ai', icon: <SiGoogle className="w-5 h-5 text-[#4285F4]" />, level: 'Advanced', tag: 'Multimodal Vision & LLM' },
    { name: 'OpenAI API', category: 'ai', icon: <SiOpenai className="w-5 h-5 text-emerald-500" />, level: 'Advanced', tag: 'Function Calling & Prompts' },
    { name: 'RAG Architecture', category: 'ai', icon: <FiCpu className="w-5 h-5 text-[#2563EB]" />, level: 'Advanced', tag: 'Dense Retrieval & Embeddings' },
    { name: 'Model Context Protocol (MCP)', category: 'ai', icon: <FiLayers className="w-5 h-5 text-purple-500" />, level: 'Exploring', tag: 'Standardized AI Server' },
    { name: 'LangChain', category: 'ai', icon: <FiCpu className="w-5 h-5 text-amber-500" />, level: 'Proficient', tag: 'Chains & Tool Calling' },
    { name: 'ChromaDB & FAISS', category: 'ai', icon: <FiDatabase className="w-5 h-5 text-emerald-600" />, level: 'Advanced', tag: 'Vector Search Index' },
    { name: 'FastAPI', category: 'ai', icon: <SiFastapi className="w-5 h-5 text-[#009688]" />, level: 'Advanced', tag: 'Async AI Microservices' },

    // Backend & API
    { name: 'Python', category: 'backend', icon: <SiPython className="w-5 h-5 text-[#3776AB]" />, level: 'Advanced', tag: 'Backend & Automation' },
    { name: 'Django / Django REST', category: 'backend', icon: <SiDjango className="w-5 h-5 text-[#092E20] dark:text-emerald-400" />, level: 'Advanced', tag: 'Full-Stack APIs' },
    { name: 'RESTful API Design', category: 'backend', icon: <FiServer className="w-5 h-5 text-[#2563EB]" />, level: 'Expert', tag: 'JSON Contracts' },
    { name: 'JWT & OAuth Security', category: 'backend', icon: <FiTool className="w-5 h-5 text-rose-500" />, level: 'Advanced', tag: 'RBAC & Auth' },

    // Databases & Cloud
    { name: 'PostgreSQL', category: 'database', icon: <SiPostgresql className="w-5 h-5 text-[#4169E1]" />, level: 'Advanced', tag: 'ACID Relational' },
    { name: 'Supabase', category: 'database', icon: <SiSupabase className="w-5 h-5 text-[#3ECF8E]" />, level: 'Expert', tag: 'Realtime Sync & Auth' },
    { name: 'SQL Server', category: 'database', icon: <FiDatabase className="w-5 h-5 text-red-600" />, level: 'Advanced', tag: 'Enterprise Relational' },
    { name: 'Firebase', category: 'database', icon: <SiFirebase className="w-5 h-5 text-amber-500" />, level: 'Proficient', tag: 'Cloud Firestore & Push' },
    { name: 'Docker', category: 'database', icon: <SiDocker className="w-5 h-5 text-[#2496ED]" />, level: 'Proficient', tag: 'Containers & Deployment' },

    // Frontend & Web
    { name: 'React', category: 'frontend', icon: <SiReact className="w-5 h-5 text-[#61DAFB]" />, level: 'Advanced', tag: 'Single Page Apps' },
    { name: 'Tailwind CSS', category: 'frontend', icon: <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" />, level: 'Expert', tag: 'Modern Styling' },
    { name: 'JavaScript (ES6+)', category: 'frontend', icon: <SiJavascript className="w-5 h-5 text-[#F7DF1E]" />, level: 'Advanced', tag: 'Modern Web' },
    { name: 'HTML5 & CSS3', category: 'frontend', icon: <SiHtml5 className="w-5 h-5 text-orange-500" />, level: 'Expert', tag: 'Semantic Layouts' },

    // Tools & Version Control
    { name: 'Git & GitHub', category: 'tools', icon: <SiGit className="w-5 h-5 text-[#F05032]" />, level: 'Expert', tag: 'Version Control & PRs' },
    { name: 'Visual Studio & VS Code', category: 'tools', icon: <FiTool className="w-5 h-5 text-[#007ACC]" />, level: 'Expert', tag: 'Primary IDEs' },
    { name: 'Android Studio', category: 'tools', icon: <SiAndroid className="w-5 h-5 text-emerald-500" />, level: 'Advanced', tag: 'Emulators & Profiling' },
    { name: 'Postman', category: 'tools', icon: <FiServer className="w-5 h-5 text-orange-500" />, level: 'Expert', tag: 'API Testing & Mocks' },
  ];

  const categories = [
    { id: 'all', label: 'All Stack', icon: <FiLayers className="w-3.5 h-3.5" /> },
    { id: 'mobile', label: 'Flutter Mobile', icon: <SiFlutter className="w-3.5 h-3.5 text-[#0A84FF]" /> },
    { id: 'dotnet', label: '.NET & Enterprise', icon: <SiDotnet className="w-3.5 h-3.5 text-[#512BD4]" /> },
    { id: 'ai', label: 'Applied AI & RAG', icon: <FiCpu className="w-3.5 h-3.5 text-[#2563EB]" /> },
    { id: 'backend', label: 'Backend & APIs', icon: <SiPython className="w-3.5 h-3.5 text-emerald-500" /> },
    { id: 'database', label: 'Databases & Cloud', icon: <FiDatabase className="w-3.5 h-3.5 text-blue-500" /> },
    { id: 'frontend', label: 'Frontend', icon: <SiReact className="w-3.5 h-3.5 text-sky-400" /> },
    { id: 'tools', label: 'Tools', icon: <FiTool className="w-3.5 h-3.5 text-amber-500" /> },
  ];

  const filteredSkills = useMemo(() => {
    return skillInventory.filter((skill) => {
      if (activeCategory !== 'all' && skill.category !== activeCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return skill.name.toLowerCase().includes(q) || skill.tag.toLowerCase().includes(q);
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="relative py-24 bg-white dark:bg-[#0B1120] overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#2563EB]/5 dark:bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

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
            // Technical Competencies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#172033] dark:text-white font-space">
            Skills & <span className="text-[#2563EB]">Technologies</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] max-w-xl mt-3">
            A comprehensive, battle-tested toolset spanning cross-platform mobile apps, enterprise systems, normalized databases, and applied AI integrations.
          </p>
          <div className="h-1 w-12 bg-[#2563EB] mt-4 rounded-full" />
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold border transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#2563EB] border-[#2563EB] text-white shadow-sm'
                    : 'bg-[#F8FAFC] dark:bg-[#101B33]/60 border-[#E2E8F0] dark:border-white/5 text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Quick Search Bar */}
          <div className="relative w-full sm:w-64 font-mono text-xs">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] dark:text-[#94A3B8]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Flutter, C#, RAG)..."
              className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-[#F8FAFC] dark:bg-[#101B33]/80 border border-[#E2E8F0] dark:border-white/10 text-[#172033] dark:text-white placeholder-[#64748B] dark:placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#2563EB]"
            />
          </div>

        </div>

        {/* Visual Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={skill.name}
                className="glass-card p-3.5 rounded-2xl border border-[#E2E8F0] dark:border-white/10 hover:border-[#2563EB]/40 flex flex-col justify-between transition-all duration-200 group hover:-translate-y-1 hover:shadow-lg bg-white dark:bg-[#101B33]/60"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="w-9 h-9 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-[#E2E8F0] dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    {skill.icon}
                  </div>
                  <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full ${
                    skill.level === 'Expert'
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                      : skill.level === 'Advanced'
                      ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'
                      : 'bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20'
                  }`}>
                    {skill.level}
                  </span>
                </div>

                <div className="mt-3">
                  <h4 className="text-xs sm:text-sm font-bold text-[#172033] dark:text-white font-space group-hover:text-[#2563EB] transition-colors leading-tight">
                    {skill.name}
                  </h4>
                  <p className="text-[10px] text-[#64748B] dark:text-[#94A3B8] font-mono mt-0.5 truncate">
                    {skill.tag}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Quick Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-[#E2E8F0] dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#64748B] dark:text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Dual Core Specialization: <strong>Flutter Cross-Platform</strong> &bull; <strong>.NET Enterprise Ecosystem</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span>Also delivering with:</span>
            <span className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-[#172033] dark:text-white font-bold">FastAPI</span>
            <span className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-[#172033] dark:text-white font-bold">RAG</span>
            <span className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-[#172033] dark:text-white font-bold">Docker</span>
          </div>
        </div>

      </motion.div>
    </section>
  );
}