import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSearch, 
  FiLayers, 
  FiDatabase, 
  FiTool, 
  FiSmartphone, 
  FiServer,
  FiCode
} from 'react-icons/fi';
import { 
  SiFlutter, 
  SiDart, 
  SiPython, 
  SiDjango, 
  SiReact, 
  SiTailwindcss, 
  SiPostgresql, 
  SiSupabase, 
  SiFirebase, 
  SiGit, 
  SiJavascript, 
  SiHtml5, 
  SiCss,
  SiAndroid,
  SiMysql
} from 'react-icons/si';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const skillInventory = [
    // 1. Flutter Mobile
    { name: 'Flutter', category: 'mobile', icon: <SiFlutter className="w-5 h-5 text-[#02569B]" />, level: 'Advanced', tag: 'Cross-Platform' },
    { name: 'Dart', category: 'mobile', icon: <SiDart className="w-5 h-5 text-[#0175C2]" />, level: 'Advanced', tag: 'Core Language' },
    { name: 'Provider', category: 'mobile', icon: <FiLayers className="w-5 h-5 text-indigo-500" />, level: 'Advanced', tag: 'State Management' },
    { name: 'BLoC Architecture', category: 'mobile', icon: <FiLayers className="w-5 h-5 text-blue-500" />, level: 'Proficient', tag: 'State Management' },
    { name: 'REST API Integration', category: 'mobile', icon: <FiServer className="w-5 h-5 text-sky-500" />, level: 'Advanced', tag: 'Networking & JSON' },
    { name: 'SQLite', category: 'mobile', icon: <FiDatabase className="w-5 h-5 text-emerald-500" />, level: 'Proficient', tag: 'Local Offline Storage' },

    // 2. React Frontend
    { name: 'React.js', category: 'frontend', icon: <SiReact className="w-5 h-5 text-[#61DAFB]" />, level: 'Advanced', tag: 'Single Page Apps' },
    { name: 'JavaScript (ES6+)', category: 'frontend', icon: <SiJavascript className="w-5 h-5 text-[#F7DF1E]" />, level: 'Advanced', tag: 'Modern Frontend' },
    { name: 'HTML5 & CSS3', category: 'frontend', icon: <SiHtml5 className="w-5 h-5 text-orange-500" />, level: 'Advanced', tag: 'Responsive UI' },
    { name: 'Tailwind CSS', category: 'frontend', icon: <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" />, level: 'Advanced', tag: 'Modern Styling' },

    // 3. Django Backend
    { name: 'Python', category: 'backend', icon: <SiPython className="w-5 h-5 text-[#3776AB]" />, level: 'Advanced', tag: 'Backend Development' },
    { name: 'Django', category: 'backend', icon: <SiDjango className="w-5 h-5 text-[#092E20] dark:text-emerald-400" />, level: 'Advanced', tag: 'Web Framework' },
    { name: 'Django REST Framework', category: 'backend', icon: <SiDjango className="w-5 h-5 text-emerald-600" />, level: 'Advanced', tag: 'RESTful Web APIs' },
    { name: 'JWT Authentication', category: 'backend', icon: <FiCode className="w-5 h-5 text-purple-500" />, level: 'Proficient', tag: 'Auth & Security' },

    // 4. Databases & Cloud
    { name: 'PostgreSQL', category: 'database', icon: <SiPostgresql className="w-5 h-5 text-[#4169E1]" />, level: 'Advanced', tag: 'Relational Database' },
    { name: 'Supabase', category: 'database', icon: <SiSupabase className="w-5 h-5 text-[#3ECF8E]" />, level: 'Advanced', tag: 'Auth & Realtime DB' },
    { name: 'Firebase', category: 'database', icon: <SiFirebase className="w-5 h-5 text-amber-500" />, level: 'Proficient', tag: 'Auth & Cloud Firestore' },
    { name: 'MySQL', category: 'database', icon: <SiMysql className="w-5 h-5 text-[#4479A1]" />, level: 'Proficient', tag: 'SQL Database' },

    // 5. Tools & Workflow
    { name: 'Git & GitHub', category: 'tools', icon: <SiGit className="w-5 h-5 text-[#F05032]" />, level: 'Advanced', tag: 'Version Control' },
    { name: 'VS Code', category: 'tools', icon: <FiTool className="w-5 h-5 text-[#007ACC]" />, level: 'Advanced', tag: 'Primary IDE' },
    { name: 'Android Studio', category: 'tools', icon: <SiAndroid className="w-5 h-5 text-emerald-500" />, level: 'Advanced', tag: 'Mobile Development' },
    { name: 'Postman', category: 'tools', icon: <FiServer className="w-5 h-5 text-orange-500" />, level: 'Advanced', tag: 'API Testing' },
  ];

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'mobile', label: 'Flutter Mobile' },
    { id: 'frontend', label: 'React Frontend' },
    { id: 'backend', label: 'Django Backend' },
    { id: 'database', label: 'Databases & Cloud' },
    { id: 'tools', label: 'Tools' },
  ];

  const filteredSkills = useMemo(() => {
    return skillInventory.filter((skill) => {
      if (activeCategory !== 'all' && skill.category !== activeCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          skill.name.toLowerCase().includes(q) ||
          skill.tag.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="relative py-20 bg-white dark:bg-[#080E1A] border-b border-[#E2E8F0] dark:border-white/5 overflow-hidden">
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#2563EB]/5 dark:bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#2563EB] uppercase block mb-2">
            // Core Stack
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#172033] dark:text-white font-space">
            Skills & <span className="text-[#2563EB]">Technologies</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] max-w-xl mt-3">
            Focused on Flutter mobile development, React frontends, Django REST APIs, and reliable database architectures.
          </p>
          <div className="h-1 w-12 bg-[#2563EB] mt-4 rounded-full" />
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-1.5 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#2563EB] text-white shadow-sm'
                    : 'bg-black/[0.03] dark:bg-white/[0.04] text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white border border-[#E2E8F0] dark:border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-60 font-mono text-xs">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] dark:text-[#94A3B8]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill..."
              className="w-full pl-9 pr-3.5 py-1.5 text-xs rounded-xl bg-white dark:bg-[#101B33]/80 border border-[#E2E8F0] dark:border-white/10 text-[#172033] dark:text-white placeholder-[#64748B] dark:placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#2563EB]"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="glass-card p-4 rounded-2xl border border-[#E2E8F0] dark:border-white/5 hover:border-[#2563EB]/40 transition-all duration-200 bg-white dark:bg-[#101B33]/60 flex items-center gap-3 group hover:-translate-y-0.5 shadow-sm"
              >
                <div className="p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] group-hover:scale-105 transition-transform flex-shrink-0">
                  {skill.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-[#172033] dark:text-white truncate font-space">
                    {skill.name}
                  </h4>
                  <p className="text-[11px] font-mono text-[#64748B] dark:text-[#94A3B8] truncate mt-0.5">
                    {skill.tag}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
