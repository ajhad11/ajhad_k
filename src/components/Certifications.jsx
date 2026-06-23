import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchCertificates } from '../api';
import { FiAward, FiExternalLink } from 'react-icons/fi';

export default function Certifications() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetchCertificates().then(data => {
      setCertificates(data);
    });
  }, []);

  return (
    <section id="certifications" className="relative py-24 bg-[#071A35]/15 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-space">
            Certifications & <span className="text-primary text-glow">Awards</span>
          </h2>
          <div className="h-1 w-12 bg-primary mt-4 rounded-full" />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-white/5 hover:border-primary/20 flex flex-col justify-between transition-all duration-300 group"
            >
              
              {/* Image Preview Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#020B1C]">
                <img
                  src={cert.image || 'https://images.unsplash.com/photo-1589330694653-ded6df53f7ec?auto=format&fit=crop&w=800&q=80'}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020B1C] to-transparent opacity-40" />
                
                {/* Verification Quick Link */}
                {cert.verification_link && (
                  <a
                    href={cert.verification_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 p-3 rounded-full bg-[#020B1C]/80 border border-white/10 text-white hover:text-primary hover:border-primary/40 backdrop-blur-md transition-all duration-200"
                    aria-label="Verify Certificate"
                  >
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-primary">
                    <FiAward className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      {cert.issuing_organization}
                    </span>
                  </div>
                  
                  <h3 className="text-base md:text-lg font-bold text-white font-space">
                    {cert.title}
                  </h3>
                </div>

                <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/5 text-xs text-text-gray font-semibold">
                  <span>Issued Date</span>
                  <span className="text-white/80">{cert.date_issued}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
