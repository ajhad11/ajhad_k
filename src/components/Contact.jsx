import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitContactForm } from '../api';
import { 
  FiMail, 
  FiMapPin, 
  FiGithub, 
  FiLinkedin, 
  FiSend, 
  FiCheckCircle, 
  FiAlertCircle,
  FiCopy,
  FiCheck,
  FiTerminal
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role_type: 'Full-Time Role',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });
  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);

  const roleTypes = [
    'Full-Time Software Developer',
    'Flutter Mobile Engineering',
    '.NET Enterprise Solutions',
    'AI / RAG Integration',
    'General Inquiry'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ajhadk453@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Valid email address required.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatusMsg({ type: '', text: '' });

    const submissionPayload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: `[${formData.role_type}] ${formData.subject.trim() || 'Portfolio Inquiry'}`,
      message: formData.message.trim(),
    };

    const result = await submitContactForm(submissionPayload);

    setLoading(false);
    if (result.success) {
      setStatusMsg({ 
        type: 'success', 
        text: 'Message dispatched successfully. AJHAD K will respond promptly.' 
      });
      setFormData({
        name: '',
        email: '',
        role_type: 'Full-Time Role',
        subject: '',
        message: ''
      });
      setErrors({});
    } else {
      setStatusMsg({ 
        type: 'error', 
        text: 'Server delivery failed. Please email ajhadk453@gmail.com directly.' 
      });
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#F8FAFC]/60 dark:bg-[#071A35]/20 border-t border-[#E2E8F0] dark:border-white/5 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#2563EB]/5 dark:bg-[#2563EB]/10 rounded-full filter blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#2563EB] uppercase block mb-2">
            // Let's Connect
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#172033] dark:text-white font-space">
            Get In <span className="text-[#2563EB]">Touch</span>
          </h2>
          <div className="h-1 w-12 bg-[#2563EB] mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Developer Endpoints */}
          <div className="lg:col-span-5 space-y-4 font-mono text-xs">
            <div className="glass-card p-5 rounded-2xl border border-[#E2E8F0] dark:border-white/10 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[#2563EB] font-bold">
                <FiTerminal className="w-4 h-4" />
                <span>endpoints.config</span>
              </div>

              <div className="space-y-3">
                {/* Email with copy */}
                <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-[#E2E8F0] dark:border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#64748B] dark:text-[#94A3B8] block">EMAIL_ENDPOINT</span>
                    <a href="mailto:ajhadk453@gmail.com" className="font-semibold text-[#172033] dark:text-white hover:text-[#2563EB]">
                      ajhadk453@gmail.com
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <FiCheck className="w-4 h-4 text-emerald-500" /> : <FiCopy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp */}
                <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-[#E2E8F0] dark:border-white/5">
                  <span className="text-[10px] text-[#64748B] dark:text-[#94A3B8] block">DIRECT_CALL_WHATSAPP</span>
                  <a href="https://wa.me/971562001042" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-500 hover:underline">
                    +971 56 200 1042
                  </a>
                </div>

                {/* Location */}
                <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-[#E2E8F0] dark:border-white/5">
                  <span className="text-[10px] text-[#64748B] dark:text-[#94A3B8] block">BASE_LOCATION</span>
                  <p className="font-semibold text-[#172033] dark:text-white">Kerala, India (Open to Remote / Relocation)</p>
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-3 border-t border-[#E2E8F0] dark:border-white/10 flex items-center gap-2">
                <a
                  href="https://github.com/ajhad11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-black/5 dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 text-[#172033] dark:text-white hover:border-[#2563EB]/40 transition-colors"
                >
                  <FiGithub className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/ajhad-k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-black/5 dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 text-[#172033] dark:text-white hover:border-[#2563EB]/40 transition-colors"
                >
                  <FiLinkedin className="w-4 h-4 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Console Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 md:p-7 rounded-2xl border border-[#E2E8F0] dark:border-white/10 shadow-sm bg-white dark:bg-[#101B33]">
              
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Role Type Chips */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-1.5 font-bold">
                    Select Inquiry Purpose:
                  </label>
                  <div className="flex flex-wrap gap-1 font-mono text-xs">
                    {roleTypes.map((role) => (
                      <button
                        key={role}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, role_type: role }))}
                        className={`px-3 py-1 rounded-lg border transition-all cursor-pointer ${
                          formData.role_type === role
                            ? 'bg-[#2563EB] border-[#2563EB] text-white shadow-sm font-semibold'
                            : 'bg-[#F8FAFC] dark:bg-[#0B1120] border-[#E2E8F0] dark:border-white/10 text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white'
                        }`}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[#172033] dark:text-white mb-1 font-space">
                      Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={`w-full px-3 py-2 rounded-xl bg-[#F8FAFC] dark:bg-[#0B1120] border text-xs text-[#172033] dark:text-white focus:outline-none transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-[#E2E8F0] dark:border-white/10 focus:border-[#2563EB]'
                      }`}
                    />
                    {errors.name && <p className="text-[10px] font-mono text-rose-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#172033] dark:text-white mb-1 font-space">
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={`w-full px-3 py-2 rounded-xl bg-[#F8FAFC] dark:bg-[#0B1120] border text-xs text-[#172033] dark:text-white focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-[#E2E8F0] dark:border-white/10 focus:border-[#2563EB]'
                      }`}
                    />
                    {errors.email && <p className="text-[10px] font-mono text-rose-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-[#172033] dark:text-white mb-1 font-space">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Engineering role / Architecture discussion"
                    className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] dark:bg-[#0B1120] border border-[#E2E8F0] dark:border-white/10 text-xs text-[#172033] dark:text-white focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#172033] dark:text-white mb-1 font-space">
                    Message Payload <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Details regarding your team, role scope, or project..."
                    className={`w-full px-3 py-2 rounded-xl bg-[#F8FAFC] dark:bg-[#0B1120] border text-xs text-[#172033] dark:text-white focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-rose-500' : 'border-[#E2E8F0] dark:border-white/10 focus:border-[#2563EB]'
                    }`}
                  />
                  {errors.message && <p className="text-[10px] font-mono text-rose-500 mt-1">{errors.message}</p>}
                </div>

                {/* Status Message */}
                {statusMsg.text && (
                  <div
                    className={`p-2.5 rounded-xl flex items-center gap-2 text-xs font-mono ${
                      statusMsg.type === 'success'
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                        : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/30'
                    }`}
                  >
                    {statusMsg.type === 'success' ? <FiCheckCircle className="w-4 h-4 flex-shrink-0" /> : <FiAlertCircle className="w-4 h-4 flex-shrink-0" />}
                    <span>{statusMsg.text}</span>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl font-mono font-bold text-xs text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>POST /dispatch_message</span>
                      <FiSend className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
