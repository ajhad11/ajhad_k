import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitContactForm } from '../api';
import { 
  FiMail, 
  FiMapPin, 
  FiGithub, 
  FiLinkedin, 
  FiSend, 
  FiCheck, 
  FiCopy,
  FiPhone
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });
  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ajhadk453@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter a message.';
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
      subject: `Portfolio Message from ${formData.name.trim()}`,
      message: formData.message.trim(),
    };

    const result = await submitContactForm(submissionPayload);

    setLoading(false);
    if (result.success) {
      setStatusMsg({ 
        type: 'success', 
        text: 'Message sent successfully! I will get back to you soon.' 
      });
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      setStatusMsg({ 
        type: 'error', 
        text: 'Failed to send message. Please email me directly at ajhadk453@gmail.com' 
      });
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-[#F8FAFC]/60 dark:bg-[#071A35]/20 border-t border-[#E2E8F0] dark:border-white/5 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#2563EB]/5 dark:bg-[#2563EB]/10 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#2563EB] uppercase block mb-2">
            // Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#172033] dark:text-white font-space">
            Get In <span className="text-[#2563EB]">Touch</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] max-w-md mt-3">
            Have a project in mind, an opportunity, or a question? Feel free to reach out.
          </p>
          <div className="h-1 w-12 bg-[#2563EB] mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="md:col-span-5 space-y-4">
            <div className="glass-card p-6 rounded-2xl border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-[#101B33]/60 shadow-sm space-y-4">
              
              <h3 className="text-base font-bold font-space text-[#172033] dark:text-white">
                Contact Information
              </h3>

              <div className="space-y-3 text-xs">
                {/* Email */}
                <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-[#E2E8F0] dark:border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <FiMail className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                    <div className="min-w-0">
                      <span className="text-[10px] text-[#64748B] dark:text-[#94A3B8] block">Email</span>
                      <a href="mailto:ajhadk453@gmail.com" className="font-semibold text-[#172033] dark:text-white hover:text-[#2563EB] truncate block">
                        ajhadk453@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white transition-colors cursor-pointer flex-shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copiedEmail ? <FiCheck className="w-4 h-4 text-emerald-500" /> : <FiCopy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp / Phone */}
                <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-[#E2E8F0] dark:border-white/5 flex items-center gap-2.5">
                  <FaWhatsapp className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-[#64748B] dark:text-[#94A3B8] block">WhatsApp / Mobile</span>
                    <a 
                      href="https://wa.me/971562001042" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-semibold text-emerald-500 hover:underline block"
                    >
                      +971 56 200 1042
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-[#E2E8F0] dark:border-white/5 flex items-center gap-2.5">
                  <FiMapPin className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-[#64748B] dark:text-[#94A3B8] block">Location</span>
                    <p className="font-semibold text-[#172033] dark:text-white">
                      Calicut, Kerala, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-3 border-t border-[#E2E8F0] dark:border-white/10 flex items-center gap-2">
                <a
                  href="https://github.com/ajhad11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-[#E2E8F0] dark:border-white/10 text-xs font-semibold text-[#172033] dark:text-white hover:border-[#2563EB]/40 transition-colors"
                >
                  <FiGithub className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/ajhad-k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-[#E2E8F0] dark:border-white/10 text-xs font-semibold text-[#172033] dark:text-white hover:border-[#2563EB]/40 transition-colors"
                >
                  <FiLinkedin className="w-4 h-4 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Clean Simple Form */}
          <div className="md:col-span-7">
            <div className="glass-card p-6 rounded-2xl border border-[#E2E8F0] dark:border-white/10 shadow-sm bg-white dark:bg-[#101B33]/60">
              
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#172033] dark:text-white mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] dark:bg-[#0B1120] border text-xs text-[#172033] dark:text-white focus:outline-none transition-colors ${
                      errors.name ? 'border-rose-500' : 'border-[#E2E8F0] dark:border-white/10 focus:border-[#2563EB]'
                    }`}
                  />
                  {errors.name && <p className="text-[10px] text-rose-500 mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-[#172033] dark:text-white mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] dark:bg-[#0B1120] border text-xs text-[#172033] dark:text-white focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-[#E2E8F0] dark:border-white/10 focus:border-[#2563EB]'
                    }`}
                  />
                  {errors.email && <p className="text-[10px] text-rose-500 mt-1">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#172033] dark:text-white mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] dark:bg-[#0B1120] border text-xs text-[#172033] dark:text-white focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-rose-500' : 'border-[#E2E8F0] dark:border-white/10 focus:border-[#2563EB]'
                    }`}
                  />
                  {errors.message && <p className="text-[10px] text-rose-500 mt-1">{errors.message}</p>}
                </div>

                {/* Status Message */}
                {statusMsg.text && (
                  <div className={`p-3 rounded-xl text-xs font-medium ${
                    statusMsg.type === 'success' 
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' 
                      : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                  }`}>
                    {statusMsg.text}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl font-bold text-xs text-white bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <FiSend className="w-3.5 h-3.5" />
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
