import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchCertificates } from '../api';
import { 
  FiAward, 
  FiFileText, 
  FiShield, 
  FiBookOpen,
  FiExternalLink
} from 'react-icons/fi';

export default function Certifications() {
  const [items, setItems] = useState([]);
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    fetchCertificates().then(data => {
      setItems(data || []);
    });
  }, []);

  const tabs = ['All', 'Verified Certification', 'Education', 'Recommendation Letter'];

  const filteredItems = items.filter(item => {
    if (activeTab === 'All') return true;
    return item.category === activeTab;
  });

  return (
    <section id="certifications" className="relative py-24 bg-[#F8FAFC]/50 dark:bg-[#071A35]/25 border-y border-[#E2E8F0] dark:border-white/5 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-[#2563EB]/5 dark:bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

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
            // Verified Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#172033] dark:text-white font-space">
            Education & <span className="text-[#2563EB]">Certifications</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] max-w-xl mt-3">
            Academic degree, official industry certifications, and performance recommendation letters.
          </p>
          <div className="h-1 w-12 bg-[#2563EB] mt-4 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center items-center gap-1.5 mb-10 flex-wrap font-mono text-xs">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 rounded-xl border transition-all cursor-pointer font-semibold ${
                activeTab === tab
                  ? 'bg-[#2563EB] border-[#2563EB] text-white shadow-sm'
                  : 'bg-white dark:bg-[#101B33]/60 border-[#E2E8F0] dark:border-white/10 text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item, index) => (
            <div
              key={item.title || index}
              className="glass-card rounded-2xl border border-[#E2E8F0] dark:border-white/10 p-5 flex flex-col justify-between hover:border-[#2563EB]/40 transition-all duration-300 group shadow-sm hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-[#101B33]/60"
            >
              <div>
                {/* Header Icon & Date */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                    {item.type === 'degree' ? (
                      <FiBookOpen className="w-4 h-4" />
                    ) : item.type === 'award' ? (
                      <FiShield className="w-4 h-4" />
                    ) : (
                      <FiAward className="w-4 h-4" />
                    )}
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 text-[#64748B] dark:text-[#94A3B8] font-semibold">
                    {item.date_issued}
                  </span>
                </div>

                {/* Title & Organization */}
                <h3 className="text-sm sm:text-base font-bold text-[#172033] dark:text-white font-space group-hover:text-[#2563EB] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-[#2563EB] dark:text-blue-400 font-medium mt-0.5">
                  {item.issuing_organization}
                </p>

                {item.credential_id && (
                  <span className="inline-block text-[10px] font-mono text-[#64748B] dark:text-[#94A3B8] mt-1">
                    ID: {item.credential_id}
                  </span>
                )}

                {/* Short Description */}
                <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed mt-2.5">
                  {item.description}
                </p>
              </div>

              {/* Footer */}
              <div className="pt-3.5 mt-3.5 border-t border-[#E2E8F0] dark:border-white/10 space-y-2">
                {item.skills && (
                  <div className="flex flex-wrap gap-1 font-mono">
                    {item.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[9px] px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-[#64748B] dark:text-[#94A3B8]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                {item.verification_link && (
                  <div className="pt-1">
                    <a
                      href={item.verification_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#2563EB] hover:underline"
                    >
                      <FiFileText className="w-3.5 h-3.5" />
                      <span>Inspect Verified PDF &rarr;</span>
                    </a>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}