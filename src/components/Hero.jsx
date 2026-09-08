import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaPython } from 'react-icons/fa';
import { SiDjango, SiFlutter, SiJavascript, SiPostgresql } from 'react-icons/si';
import { motion } from 'framer-motion';
import { scrollToSection } from './Navbar';

export default function Hero() {
  const floatingSkills = [
    { name: 'Flutter', icon: <SiFlutter className="text-[#02569B] w-6 h-6" />, pos: 'top-10 left-10', delay: 0 },
    { name: 'React', icon: <FaReact className="text-[#61DAFB] w-6 h-6 animate-[spin_8s_linear_infinite]" />, pos: 'top-1/4 right-8', delay: 1 },
    { name: 'Django', icon: <SiDjango className="text-[#092E20] w-6 h-6" />, pos: 'bottom-16 left-4', delay: 2 },
    { name: 'Python', icon: <FaPython className="text-[#3776AB] w-6 h-6" />, pos: 'top-1/2 left-2/3', delay: 1.5 },
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E] w-6 h-6" />, pos: 'bottom-24 right-12', delay: 0.5 },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791] w-6 h-6" />, pos: 'top-12 right-1/3', delay: 2.5 }
    
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Glow Orbs in Background */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-primary/15 rounded-full filter blur-[80px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full filter blur-[100px] animate-pulse-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <div className="inline-flex items-center space-x-2">
            <span className="h-[2px] w-8 bg-primary"></span>
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-primary uppercase">
              HELLO, I'M
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white font-space">
            AJHAD <span className="text-primary text-glow">K</span>
          </h1>

          {/* Titles / Specializations */}
          <div className="flex flex-wrap gap-2 text-lg md:text-2xl font-medium text-text-gray">
            <span className="px-3 py-1 rounded bg-[#071A35]/50 border border-white/5 text-primary">Full Stack Developer</span>
            {/* <span className="px-3 py-1 rounded bg-[#071A35]/50 border border-white/5 text-white/90">Flutter Developer</span>
            <span className="px-3 py-1 rounded bg-[#071A35]/50 border border-white/5 text-white/70">React Developer</span> */}
          </div>

          <p className="text-base md:text-lg text-text-gray max-w-xl leading-relaxed">
            I build scalable web applications, mobile applications, and modern digital experiences. 
            Passionate about React, Django, Flutter, and creating high-quality software solutions.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className="px-8 py-3.5 rounded-full font-medium text-sm text-white bg-primary hover:bg-primary/95 hover:shadow-[0_0_20px_rgba(10,132,255,0.4)] transition-all duration-300 cursor-pointer"
            >
              View Projects
            </a>
            
            {/* Resume link */}
            <a
              href="/assets/doc/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-medium text-sm text-white glass-card hover:bg-white/5 transition-all duration-300"
            >
              View Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 pt-6">
            <a
              href="https://github.com/ajhad11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-gray hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-gray hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:ajhadk8@gmail.com"
              className="text-text-gray hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Right Side Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex items-center justify-center min-h-[400px]"
        >
          {/* Main workspace mockup */}
          <div className="relative w-full max-w-[450px] aspect-square rounded-2xl glass-card flex items-center justify-center overflow-hidden border border-white/10 shadow-2xl">
            {/* Background design grids */}
            <div className="absolute inset-0 bg-radial-gradient from-primary/10 to-transparent pointer-events-none" />
            
            {/* Simulated terminal/editor code layout */}
            <div className="w-[85%] h-[75%] rounded-lg bg-[#020B1C]/90 border border-white/5 p-4 font-mono text-[10px] text-primary/80 overflow-hidden shadow-inner flex flex-col space-y-2 select-none">
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[9px] text-text-gray/50">App.jsx</span>
              </div>
              <p className="text-emerald-400">import React from 'react';</p>
              <p className="text-emerald-400">import djangoApi from './api';</p>
              <p className="text-text-gray/50">// Fetching portfolio analytics</p>
              <p className="text-purple-400">const AjhadK = () =&gt; &#123;</p>
              <p className="pl-4 text-cyan-400">const [projects, setProjects] = useState([]);</p>
              <p className="pl-4 text-pink-400">useEffect(() =&gt; &#123;</p>
              <p className="pl-8 text-white">djangoApi.fetchProjects().then(setProjects);</p>
              <p className="pl-4 text-pink-400">&#125;, []);</p>
              <p className="pl-4 text-yellow-300">return (</p>
              <p className="pl-8 text-blue-400">&lt;div className="portfolio-wrapper"&gt;</p>
              <p className="pl-12 text-primary">&lt;HeroSection data=&#123;AjhadK&#125; /&gt;</p>
              <p className="pl-12 text-primary">&lt;ExperienceTimeline /&gt;</p>
              <p className="pl-8 text-blue-400">&lt;/div&gt;</p>
              <p className="pl-4 text-yellow-300">);</p>
              <p className="text-purple-400">&#125;;</p>
              <p className="text-purple-400">export default AjhadK;</p>
            </div>
            
            {/* Animated central glowing element */}
            <div className="absolute w-24 h-24 rounded-full bg-primary/20 blur-xl animate-pulse" />
          </div>

          {/* Floating Technology Cards */}
          {floatingSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: skill.delay,
              }}
              className={`absolute ${skill.pos} z-20 glass-card px-4 py-2.5 rounded-xl border border-white/10 flex items-center space-x-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-primary/40 hover:shadow-[0_0_20px_rgba(10,132,255,0.15)] transition-colors duration-300 select-none cursor-default`}
            >
              {skill.icon}
              <span className="text-xs font-semibold text-white/95">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
