import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiArrowLeft, 
  FiExternalLink, 
  FiGithub, 
  FiCheck, 
  FiSmartphone, 
  FiMonitor, 
  FiMaximize2, 
  FiChevronLeft, 
  FiChevronRight, 
  FiClock, 
  FiCheckCircle, 
  FiZap,
  FiCode,
  FiX
} from 'react-icons/fi';
import { fetchProjects } from '../api';

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [deviceFrame, setDeviceFrame] = useState('desktop'); // 'desktop' or 'mobile'
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [interactiveSimActive, setInteractiveSimActive] = useState(false);
  const [simStep, setSimStep] = useState(0);

  const getEnrichedProject = (proj) => {
    if (!proj) return null;
    const titleLower = proj.title.toLowerCase();

    let features = proj.features_list || [];
    let screens = proj.screens_list || [];

    if (features.length === 0 && proj.features) {
      features = proj.features.split('\n').map(f => f.trim()).filter(Boolean);
    }
    if (screens.length === 0 && proj.screens) {
      screens = proj.screens.split(',').map(s => s.trim()).filter(Boolean);
    }

    if (features.length === 0) {
      if (titleLower.includes('townseek')) {
        features = [
          "Interactive map interface with distance calculation and navigation",
          "Categorized search for clinics, hotels, transport hubs, and shops",
          "Real-time filters (rating, distance, availability)",
          "In-app appointment booking and confirmation system",
          "Business owner dashboard for managing bookings, staff, and services"
        ];
      } else if (titleLower.includes('bill')) {
        features = [
          "Real-time gold rate updating and conversion calculators",
          "Weight calculations for multi-item transactions in grams and carats",
          "Automated tax, making charges, and discount calculations",
          "PDF invoice generation with print and share options"
        ];
      } else if (titleLower.includes('inventory')) {
        features = [
          "Live inventory monitoring for all precious metal categories",
          "Integrated barcode generation and camera scanner support",
          "Low-stock alert notifications and automated restock triggers",
          "Interactive analytics dashboard showing sales trends and profits"
        ];
      } else if (titleLower.includes('library')) {
        features = [
          "Digital cataloging of books by title, author, genre, and ISBN",
          "Student borrowing check-out and return tracking system",
          "Automated fine calculation for overdue items",
          "E-book reading portal supporting PDF and EPUB files"
        ];
      } else if (titleLower.includes('event')) {
        features = [
          "Event planning dashboard with scheduling and timeline editor",
          "Vendor registry and marketplace with direct chat features",
          "Customer booking portal with dynamic pricing calculations",
          "Interactive calendar displaying slot and venue bookings"
        ];
      } else if (titleLower.includes('tripsettle')) {
        features = [
          "Group expense tracking with multi-person split calculation engine",
          "Automated debt simplification to minimize total repayment transactions",
          "Supabase real-time database sync for instant updates across devices",
          "Categorical expense breakdowns with visual analytics charts",
          "Settlement reminders and offline transaction recording"
        ];
      } else if (titleLower.includes('construction')) {
        features = [
          "Real-time site project planning and milestone tracking dashboard",
          "Resource and labor allocation management with progress metrics",
          "Material requisition workflows and inventory consumption tracking",
          "Role-based access control for contractors, engineers, and site managers",
          "Cloud synchronization powered by Supabase and PostgreSQL"
        ];
      } else {
        features = [
          "Dynamic response and modern user interface design",
          "Secure data handling and state management integrations",
          "Optimized load times and layout responsiveness",
          "Interactive elements and custom animation transitions"
        ];
      }
    }

    const defaultImg = proj.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';
    let baseScreens = [];
    if (defaultImg) baseScreens.push(defaultImg);

    if (screens.length > 0) {
      screens.forEach(s => {
        if (s && !baseScreens.includes(s)) baseScreens.push(s);
      });
    }

    const genericMockups = [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
    ];

    const combinedScreens = [...baseScreens];
    genericMockups.forEach(m => {
      if (!combinedScreens.some(s => s.toLowerCase() === m.toLowerCase()) && combinedScreens.length < 8) {
        combinedScreens.push(m);
      }
    });

    return {
      ...proj,
      features,
      screens: combinedScreens
    };
  };

  useEffect(() => {
    setLoading(true);
    fetchProjects()
      .then((data) => {
        const found = data.find(p => String(p.id) === String(id));
        if (found) {
          const enriched = getEnrichedProject(found);
          setProject(enriched);
          setActiveImageIndex(0);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching project details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020B1C] flex items-center justify-center">
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#020B1C] flex flex-col items-center justify-center text-white px-6">
        <h2 className="text-2xl md:text-3xl font-bold font-space mb-4">Project Not Found</h2>
        <p className="text-text-gray mb-8">The requested demo or project details do not exist.</p>
        <Link
          to="/"
          className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(10,132,255,0.3)]"
        >
          <FiArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  const isUpcoming = project.status === 'upcoming';
  const currentScreen = project.screens[activeImageIndex] || project.image;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.screens.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.screens.length) % project.screens.length);
  };

  return (
    <div className="min-h-screen bg-[#020B1C] text-white pt-24 pb-16 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Back Link Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-text-gray hover:text-white transition-colors duration-200 group font-medium text-sm"
          >
            <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
            Back to All Projects & Demos
          </Link>

          {/* Status Badge */}
          {isUpcoming ? (
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse">
              <FiClock className="w-4 h-4" />
              Demo Upcoming ({project.release_date || 'Target 2026'})
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              <FiCheckCircle className="w-4 h-4" />
              Interactive Demo Ready
            </span>
          )}
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center">
          
          {/* Info Details */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold font-space tracking-tight leading-tight">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-2">
              {(project.technologies_list || []).map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-base md:text-lg text-text-gray leading-relaxed">
              {project.description}
            </p>

            {/* Upcoming progress bar if applicable */}
            {isUpcoming && project.completion_percent && (
              <div className="bg-[#071A35]/60 border border-amber-500/30 rounded-2xl p-4">
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span className="text-amber-300 uppercase tracking-wider">Demo Development Status</span>
                  <span>{project.completion_percent}% Completed</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-400 via-primary to-emerald-400 rounded-full"
                    style={{ width: `${project.completion_percent}%` }}
                  />
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              {project.live_link ? (
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-bold text-white bg-primary hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_rgba(10,132,255,0.3)]"
                >
                  <FiExternalLink className="w-4 h-4" />
                  Launch Live Demo Site
                </a>
              ) : (
                <button
                  onClick={() => setInteractiveSimActive(!interactiveSimActive)}
                  className="flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-primary to-blue-600 hover:opacity-95 transition-all duration-300 shadow-[0_0_20px_rgba(10,132,255,0.3)]"
                >
                  <FiZap className="w-4 h-4 text-amber-300 animate-pulse" />
                  {interactiveSimActive ? 'Close Simulation' : 'Run Interactive Demo Sandbox'}
                </button>
              )}

              {project.github_link && (
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-semibold text-white glass-card hover:bg-white/5 transition-all duration-300 border border-white/10"
                >
                  <FiGithub className="w-4 h-4" />
                  GitHub Repository
                </a>
              )}
            </div>
          </div>

          {/* Interactive Demo Device Simulator Frame */}
          <div className="lg:col-span-6">
            <div className="glass-card border border-white/10 rounded-3xl p-4 shadow-2xl relative overflow-hidden flex flex-col items-center">
              
              {/* Frame Controls Header */}
              <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-mono text-text-gray text-[11px] truncate max-w-[150px]">
                    demo-sandbox://{project.title.toLowerCase().replace(/\s+/g, '-')}.app
                  </span>
                </div>

                {/* Switch Device Mode */}
                <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/5">
                  <button
                    onClick={() => setDeviceFrame('desktop')}
                    className={`p-1.5 rounded text-xs transition-colors ${
                      deviceFrame === 'desktop' ? 'bg-primary text-white' : 'text-text-gray hover:text-white'
                    }`}
                    title="Desktop Monitor View"
                  >
                    <FiMonitor className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDeviceFrame('mobile')}
                    className={`p-1.5 rounded text-xs transition-colors ${
                      deviceFrame === 'mobile' ? 'bg-primary text-white' : 'text-text-gray hover:text-white'
                    }`}
                    title="Mobile Phone View"
                  >
                    <FiSmartphone className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsFullscreen(true)}
                    className="p-1.5 rounded text-xs text-text-gray hover:text-white transition-colors"
                    title="Fullscreen Preview"
                  >
                    <FiMaximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Screen Display Frame */}
              <div className={`relative transition-all duration-500 overflow-hidden bg-black/60 rounded-2xl flex items-center justify-center ${
                deviceFrame === 'mobile'
                  ? 'w-[260px] aspect-[9/18] border-8 border-gray-800 rounded-[35px] shadow-2xl my-4'
                  : 'w-full aspect-video border border-white/5'
              }`}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentScreen}
                    src={currentScreen}
                    alt={project.title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Screenshot Navigation Overlay Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-primary text-white backdrop-blur-md transition-all border border-white/10"
                >
                  <FiChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-primary text-white backdrop-blur-md transition-all border border-white/10"
                >
                  <FiChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-white border border-white/10">
                  Screen {activeImageIndex + 1} of {project.screens.length}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Interactive Simulation Sandbox Panel */}
        <AnimatePresence>
          {interactiveSimActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-16 glass-card p-6 md:p-8 rounded-3xl border border-primary/40 bg-gradient-to-br from-[#071A35] via-[#020B1C] to-black shadow-2xl relative overflow-hidden"
            >
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/20 text-primary border border-primary/30">
                    <FiZap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-space text-white">Live Application Sandbox Simulation</h3>
                    <p className="text-xs text-text-gray">Test application features & state mutations right in your browser</p>
                  </div>
                </div>
                <button
                  onClick={() => setInteractiveSimActive(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>

              {/* Simulation steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {project.features.slice(0, 3).map((feat, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSimStep(idx)}
                    className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 ${
                      simStep === idx
                        ? 'bg-primary/20 border-primary text-white shadow-[0_0_15px_rgba(10,132,255,0.25)]'
                        : 'bg-white/[0.02] border-white/5 text-text-gray hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold mb-2">
                      <span className="uppercase text-primary">Feature Action #{idx + 1}</span>
                      {simStep === idx && <span className="px-2 py-0.5 rounded bg-primary text-white text-[10px]">ACTIVE</span>}
                    </div>
                    <p className="text-xs font-medium leading-relaxed">{feat}</p>
                  </div>
                ))}
              </div>

              {/* Simulation Console Output */}
              <div className="bg-black/80 rounded-2xl p-4 border border-white/10 font-mono text-xs text-emerald-400 space-y-1 select-none">
                <div className="text-text-gray/50 pb-1 border-b border-white/5 flex justify-between">
                  <span>[Console Output] Status: ONLINE</span>
                  <span>Latency: 12ms</span>
                </div>
                <p>&gt; Initializing application runtime module...</p>
                <p>&gt; Loaded tech dependencies: {project.technologies}</p>
                <p className="text-amber-300">&gt; Triggering step #{simStep + 1}: "{project.features[simStep] || 'Core feature execution'}"</p>
                <p className="text-cyan-400">&gt; Response status: 200 OK — State synchronized successfully.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Key Features Section */}
        <div className="pt-12 border-t border-white/5 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-space text-white mb-2">
            Key <span className="text-primary text-glow">Features & Technical Capabilities</span>
          </h2>
          <div className="h-0.5 w-12 bg-primary mb-8 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, i) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                key={i}
                className="glass-card hover:border-primary/30 rounded-2xl p-6 border border-white/5 flex gap-4 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                  <FiCheck className="w-4 h-4" />
                </div>
                <p className="text-sm md:text-base text-text-gray font-medium leading-relaxed">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Application Screens Gallery */}
        <div className="pt-12 border-t border-white/5">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-space text-white">
                Application <span className="text-primary text-glow">Screens & Wireframes</span>
              </h2>
              <div className="h-0.5 w-12 bg-primary mt-2 rounded-full" />
            </div>
            <span className="text-xs font-semibold text-text-gray/50 uppercase tracking-widest hidden sm:inline">
              Click any screen to view in Sandbox →
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {project.screens.map((screen, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setActiveImageIndex(idx);
                  window.scrollTo({ top: 180, behavior: 'smooth' });
                }}
                className={`cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 aspect-video bg-black/40 relative group ${
                  activeImageIndex === idx
                    ? 'border-primary shadow-[0_0_20px_rgba(10,132,255,0.4)] scale-102'
                    : 'border-white/5 hover:border-white/20'
                }`}
              >
                <img
                  src={screen}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-1.5 p-2 text-center">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-white bg-primary px-3 py-1 rounded-full shadow-md">
                    View Screen {idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFullscreen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
              <button
                onClick={() => setIsFullscreen(false)}
                className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-20"
              >
                <FiX className="w-6 h-6" />
              </button>
              <img
                src={currentScreen}
                alt="Fullscreen Preview"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
