import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitContactForm } from '../api';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatusMsg({ type: 'error', text: 'All fields are required.' });
      return;
    }

    setLoading(true);
    setStatusMsg({ type: '', text: '' });

    const result = await submitContactForm(formData);

    setLoading(false);
    if (result.success) {
      setStatusMsg({ 
        type: 'success', 
        text: result.mocked 
          ? 'Message simulated! (Backend not connected, offline backup created successfully)'
          : 'Thank you! Your message has been sent successfully.' 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatusMsg({ type: 'error', text: 'Something went wrong. Please try again.' });
    }
  };

  const contactInfo = [
    { icon: <FiMail className="w-5 h-5" />, label: 'Email', value: 'ajhadk@example.com', href: 'mailto:ajhadk@example.com' },
    { icon: <FiPhone className="w-5 h-5" />, label: 'Phone', value: '+91 9876543210', href: 'tel:+919876543210' },
    { icon: <FiMapPin className="w-5 h-5" />, label: 'Location', value: 'Calicut, Kerala, India', href: null },
  ];

  const socialLinks = [
    { icon: <FiGithub className="w-5 h-5" />, url: 'https://github.com', label: 'GitHub' },
    { icon: <FiLinkedin className="w-5 h-5" />, url: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="relative py-24 bg-[#020B1C] overflow-hidden">
      
      {/* Background glow orb */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-primary/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-space">
            Get In <span className="text-primary text-glow">Touch</span>
          </h2>
          <div className="h-1 w-12 bg-primary mt-4 rounded-full" />
          <p className="text-text-gray mt-6 max-w-xl text-center">
            Have a project in mind or want to explore collaboration? Send a message directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-12"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white font-space">
                Contact Information
              </h3>
              <p className="text-text-gray max-w-md leading-relaxed text-sm md:text-base">
                Feel free to connect through the listed handles. Whether for queries, employment, or project work, I'll aim to respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center space-x-4">
                  <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-text-gray uppercase tracking-wider">
                      {info.label}
                    </h4>
                    {info.href ? (
                      <a href={info.href} className="text-base font-semibold text-white hover:text-primary transition-colors duration-200">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-base font-semibold text-white">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold text-text-gray uppercase tracking-wider">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl glass-card text-text-gray hover:text-primary hover:border-primary/40 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-10 rounded-2xl border border-white/5 space-y-6">
              
              <h3 className="text-xl font-bold text-white font-space mb-2">
                Send a Message
              </h3>

              {statusMsg.text && (
                <div 
                  className={`p-4 rounded-xl text-sm font-semibold border ${
                    statusMsg.type === 'success'
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                      : 'bg-red-500/10 border-red-500/20 text-red-400'
                  }`}
                >
                  {statusMsg.text}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-text-gray uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="px-4 py-3 rounded-xl bg-[#071A35]/30 border border-white/5 text-white placeholder-text-gray/40 focus:outline-none focus:border-primary/50 focus:bg-[#071A35]/50 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-text-gray uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="px-4 py-3 rounded-xl bg-[#071A35]/30 border border-white/5 text-white placeholder-text-gray/40 focus:outline-none focus:border-primary/50 focus:bg-[#071A35]/50 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="subject" className="text-xs font-bold text-text-gray uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Inquiry Topic"
                  className="px-4 py-3 rounded-xl bg-[#071A35]/30 border border-white/5 text-white placeholder-text-gray/40 focus:outline-none focus:border-primary/50 focus:bg-[#071A35]/50 transition-all duration-200"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-text-gray uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Ajhad, I would like to build..."
                  className="px-4 py-3 rounded-xl bg-[#071A35]/30 border border-white/5 text-white placeholder-text-gray/40 focus:outline-none focus:border-primary/50 focus:bg-[#071A35]/50 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm text-white bg-primary hover:bg-primary/95 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(10,132,255,0.3)] transition-all duration-300"
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <FiSend className="w-4 h-4" />
                    Submit Message
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
