import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchCertificates } from '../api';
import { 
  FiAward, 
  FiExternalLink, 
  FiCheckCircle, 
  FiCalendar, 
  FiShield, 
  FiX, 
  FiDownload, 
  FiCheck, 
  FiFileText,
  FiChevronRight,
  FiCopy
} from 'react-icons/fi';

export default function Certifications() {
  const [certificates, setCertificates] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    fetchCertificates().then(data => {
      setCertificates(data);
    });
  }, []);

  const categories = ['All', 'Development', 'Awards & LOR'];

  const filteredCertificates = activeCategory === 'All'
    ? certificates
    : certificates.filter(cert => cert.category === activeCategory || (!cert.category && activeCategory === 'Development'));

  const handleCopyId = (id, e) => {
    e.stopPropagation();
    if (!id) return;
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="certifications" className="relative py-28 bg-[#020B1C] border-y border-white/5 overflow-hidden">
      {/* Background Ambient Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(10,132,255,0.2)]"
          >
            <FiShield className="w-3.5 h-3.5" />
            Verified Credentials & Honors
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-space"
          >
            Certifications & <span className="text-primary text-glow">Awards</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-gray max-w-2xl mt-4 text-sm md:text-base leading-relaxed"
          >
            Official accreditation, specialized industry certifications, and recommendations recognizing excellence in mobile & web development.
          </motion.p>
          
          <div className="h-1 w-16 bg-gradient-to-r from-transparent via-primary to-transparent mt-6 rounded-full" />
        </div>

 

        {/* Filter Tabs */}
        <div className="flex justify-center items-center gap-2 mb-12 flex-wrap">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'text-white shadow-[0_0_20px_rgba(10,132,255,0.3)]' 
                    : 'text-text-gray hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCertTab"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {category}
              </button>
            );
          })}
        </div>

        {/* Certificates Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert, index) => (
              <motion.div
                key={cert.title || index}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-primary/40 flex flex-col justify-between transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(10,132,255,0.15)]"
              >
                <div>
                  {/* Card Header Bar with Icon & Status Badges */}
                  <div className="p-6 pb-4 bg-gradient-to-r from-primary/10 via-transparent to-transparent border-b border-white/5 flex items-start justify-between">
                    <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(10,132,255,0.2)]">
                      <FiAward className="w-6 h-6" />
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                        <FiCheckCircle className="w-3 h-3 text-emerald-400" />
                        Verified
                      </span>

                      {cert.category && (
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-medium tracking-wider bg-white/5 border border-white/5 text-text-gray">
                          {cert.category}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Details Body */}
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      {/* Organization & Icon */}
                      <div className="text-primary font-semibold text-xs tracking-wide uppercase mb-2">
                        {cert.issuing_organization}
                      </div>
                      
                      {/* Certificate Title */}
                      <h3 className="text-lg font-bold text-white font-space leading-snug group-hover:text-primary transition-colors duration-300">
                        {cert.title}
                      </h3>

                      {/* Description Snippet */}
                      {cert.description && (
                        <p className="text-xs text-text-gray mt-3 leading-relaxed line-clamp-3">
                          {cert.description}
                        </p>
                      )}
                    </div>

                    {/* Skill Tags */}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-5">
                        {cert.skills.map((skill, sIdx) => (
                          <span 
                            key={sIdx}
                            className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-white/[0.04] text-text-gray border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 py-4 border-t border-white/5 bg-white/[0.01] flex items-center justify-between text-xs mt-2">
                  <div className="flex items-center text-text-gray gap-1.5 font-medium">
                    <FiCalendar className="w-3.5 h-3.5 text-primary/70" />
                    <span>{cert.date_issued}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    {cert.verification_link && (
                      <a
                        href={cert.verification_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 text-text-gray hover:text-primary border border-white/10 transition-colors"
                        title="Open Document PDF"
                      >
                        <FiExternalLink className="w-4 h-4" />
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="flex items-center gap-1 font-semibold text-primary hover:text-white transition-colors duration-200 group/btn"
                    >
                      Details
                      <FiChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Certificate Preview Modal Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#071A35] border border-white/15 rounded-3xl shadow-2xl p-6 md:p-8 text-white flex flex-col justify-between scrollbar-thin"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
                aria-label="Close modal"
              >
                <FiX className="w-5 h-5" />
              </button>

              <div>
                {/* Header Icon & Org */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                    <FiAward className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      {selectedCert.issuing_organization}
                    </span>
                    <h3 className="text-2xl font-bold font-space leading-snug">
                      {selectedCert.title}
                    </h3>
                  </div>
                </div>

                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-text-gray mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <FiCalendar className="w-4 h-4 text-primary" />
                    <span>Issued: {selectedCert.date_issued}</span>
                  </div>

                  {selectedCert.credential_id && (
                    <div 
                      onClick={(e) => handleCopyId(selectedCert.credential_id, e)}
                      className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors bg-white/5 px-2.5 py-1 rounded-lg border border-white/5"
                      title="Click to copy Credential ID"
                    >
                      <FiFileText className="w-3.5 h-3.5 text-primary" />
                      <span className="font-mono">{selectedCert.credential_id}</span>
                      {copiedId === selectedCert.credential_id ? (
                        <FiCheck className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <FiCopy className="w-3.5 h-3.5 text-text-gray" />
                      )}
                    </div>
                  )}

                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    Verified Credential
                  </span>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Credential Description</h4>
                  <p className="text-sm text-text-gray leading-relaxed">
                    {selectedCert.description || 'Official accreditation and certificate issued upon completion of rigorous training and practical project implementations.'}
                  </p>
                </div>

                {/* Skills */}
                {selectedCert.skills && selectedCert.skills.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Skills & Competencies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Action Footer Buttons */}
              <div className="flex items-center gap-3 pt-6 border-t border-white/10 mt-6">
                {selectedCert.verification_link && (
                  <a
                    href={selectedCert.verification_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(10,132,255,0.3)] transition-all"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Open Document PDF
                  </a>
                )}

                {selectedCert.verification_link && (
                  <a
                    href={selectedCert.verification_link}
                    download
                    className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 font-semibold text-sm flex items-center justify-center gap-2 transition-all"
                    title="Download PDF"
                  >
                    <FiDownload className="w-4 h-4" />
                    Download
                  </a>
                )}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

