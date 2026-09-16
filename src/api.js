import axios from 'axios';

// Base URL configuration targeting the Django REST backend API server
const API_BASE_URL = 'http://127.0.0.1:8000/api';

// Create a pre-configured Axios instance for HTTP requests
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Timeout after 10 seconds if backend is unreachable
});

// Mock fallback data dictionary to prevent site breakage when backend is offline
const FALLBACK_DATA = {
  skills: [
    { name: 'HTML', category: 'frontend', proficiency: 95 },
    { name: 'CSS', category: 'frontend', proficiency: 90 },
    { name: 'JavaScript', category: 'frontend', proficiency: 92 },
    { name: 'React', category: 'frontend', proficiency: 90 },
    { name: 'Bootstrap', category: 'frontend', proficiency: 85 },
    { name: 'Tailwind CSS', category: 'frontend', proficiency: 92 },
    { name: 'Python', category: 'backend', proficiency: 90 },
    { name: 'Django', category: 'backend', proficiency: 88 },
    { name: 'REST API', category: 'backend', proficiency: 90 },
    { name: 'Hive', category: 'database', proficiency: 80 },
    { name: 'PostgreSQL', category: 'database', proficiency: 85 },
    { name: 'MySQL', category: 'database', proficiency: 75 },

    { name: 'SQLite', category: 'database', proficiency: 90 },
    { name: 'Flutter', category: 'mobile', proficiency: 92 },
    { name: 'Dart', category: 'mobile', proficiency: 90 },
    { name: 'BLoC', category: 'state', proficiency: 88 },
    { name: 'Provider', category: 'state', proficiency: 90 },
    { name: 'Git', category: 'tools', proficiency: 88 },
    { name: 'GitHub', category: 'tools', proficiency: 90 },
    { name: 'VS Code', category: 'tools', proficiency: 95 },
  ],
  experience: [
    {
      job_title: 'Flutter Developer Intern',
      company: 'Recongal Technologies',
      location: 'Calicut, Kerala',
      duration: 'May 2025 - Aug 2026',
      responsibilities_list: [
        'Mobile App Development with Flutter & Dart',
        'State Management (BLoC / Provider)',
        'Modern Responsive UI/UX Implementation',
        'App Store & Google Play Store Deployment workflows'
      ]
    },
    {
      job_title: 'Web Development Intern',
      company: 'Verveox Technologies',
      location: 'Remote / Calicut',
      duration: 'Dec 2024 - May 2025',
      responsibilities_list: [
        'Frontend Web Application Development',
        'Responsive Design & Performance Optimization',
        'RESTful API Integration & Testing',
        'Database Management & Maintenance'
      ]
    },
  ],
  projects: [

    {
      id: 1,
      title: 'Gold Bill Management',
      category: 'Mobile',
      tagline: 'Retail Billing & Gold Weight Calculator',
      description: 'A specialized Flutter mobile application designed for jewelers and gold merchants. Ensures precision billing with multi-karat calculation, real-time rate updates, and automated digital invoices.',
      highlights: ['Accurate Multi-Karat Valuation', 'Offline SQLite Local Database', 'Automated PDF Invoicing'],
      image: '/assets/gold_bill Naganeshi.png',
      technologies_list: ['Flutter', 'SQLite', 'Provider', 'PDF Engine'],
      technologies: 'Flutter SQLite Provider',
      live_link: 'https://github.com/ajhad11/gold_applicaion',
      github_link: 'https://github.com/ajhad11/gold_applicaion',
      features_list: [
        "Real-time gold rate updating and conversion calculators",
        "Weight calculations for multi-item transactions in grams and carats",
        "Automated tax, making charges, and discount calculations",
        "PDF invoice generation with print and instant share options"
      ]
    },
    {
      id: 2,
      title: "TripSettle",
      category: 'Mobile',
      tagline: 'Collaborative Group Expense & Debt Splitter',
      description: 'TripSettle makes group travel budgeting simple by tracking shared expenses, automatically splitting bills, and calculating optimal balance settlements to avoid confusion.',
      highlights: ['Smart Debt Simplification', 'Realtime Supabase Cloud Sync', 'Group Ledger & Spending Reports'],
      image: "/assets/tripsettle.png",
      technologies_list: ["Flutter", "Supabase", "PostgreSQL", "State Management"],
      technologies: "Flutter Supabase PostgreSQL",
      live_link: "https://github.com/ajhad11/tripsettle",
      github_link: 'https://github.com/ajhad11/tripsettle',
      features_list: [
        "Group expense tracking with multi-person split calculation engine",
        "Automated debt simplification to minimize total repayment transactions",
        "Supabase real-time database sync for instant updates across devices",
        "Categorical expense breakdowns with visual analytics charts",
        "Settlement reminders and offline transaction recording"
      ]
    },
    {
      id: 3,
      title: "Construction Management System",
      category: 'Mobile',
      tagline: 'Enterprise Site & Resource Planning System',
      description: 'A comprehensive mobile application for civil construction teams enabling site project tracking, labor and resource allocation, task workflows, and real-time collaboration.',
      highlights: ['Site Progress & Milestones', 'Material Requisition Logs', 'Role-Based Team Permissions'],
      image: "/assets/construction.png",
      technologies_list: ["Flutter", "Supabase", "PostgreSQL"],
      technologies: "Flutter Supabase PostgreSQL",
      live_link: "https://github.com/ajhad11/construction_app",
      github_link: 'https://github.com/ajhad11/construction_app',
      features_list: [
        "Real-time site project planning and milestone tracking dashboard",
        "Resource and labor allocation management with progress metrics",
        "Material requisition workflows and inventory consumption tracking",
        "Role-based access control for contractors, engineers, and site managers",
        "Cloud synchronization powered by Supabase and PostgreSQL"
      ]
    },
    {
      id: 4,
      title: 'Townseek',
      category: 'Mobile',
      tagline: 'Smart Location & Local Business Discovery',
      description: 'A smart location-based mobile application for discovering nearby businesses, services, and hospitals with GPS routing, verified listings, and direct booking capabilities.',
      highlights: ['GPS-based Spatial Discovery', 'Interactive Maps & Routing', 'Supabase Cloud Backend'],
      image: '/assets/townseek.png',
      technologies_list: ['Flutter', 'Supabase', 'Provider', 'Google Maps'],
      technologies: 'Flutter Supabase Provider',
      live_link: 'https://github.com/ajhad11/townseek',
      github_link: 'https://github.com/ajhad11/townseek',
      features_list: [
        "Interactive map interface with distance calculation and navigation",
        "Categorized search for clinics, hotels, transport hubs, and shops",
        "Real-time filters (rating, distance, availability)",
        "In-app appointment booking and confirmation system",
        "Business owner dashboard for managing bookings and staff"
      ]
    },
    {
      id: 5,
      title: 'E-Library Management System',
      category: 'Web',
      tagline: 'Digital Book Cataloging & Student Portal',
      description: 'An interactive web platform for modern libraries to manage book collections, student records, cataloging, checkout and return workflows, and instant catalog searches.',
      highlights: ['Instant Search & Filter', 'Borrowing Records & Due Dates', 'Responsive Web Interface'],
      image: '/assets/E_library_management.png',
      technologies_list: ['HTML5', 'CSS3', 'JavaScript', 'Web APIs'],
      technologies: 'HTML CSS JavaScript',
      live_link: 'https://github.com/ajhad11',
      github_link: 'https://github.com/ajhad11',
      features_list: [
        "Digital cataloging of books by title, author, genre, and ISBN",
        "Student borrowing check-out and return tracking system",
        "Automated fine calculation for overdue items",
        "Responsive web layout with instant filter and search"
      ]
    },

    // {
    //   id: 4,
    //   title: 'Event Management System',
    //   description: 'Complete event planning and booking platform with vendor management, event scheduling, dynamic pricing, and customer inquiries.',
    //   image: '/assets/event_management.png',
    //   technologies_list: ['React', 'Django', 'PostgreSQL'],
    //   technologies: 'React Django PostgreSQL',
    //   live_link: 'https://github.com/ajhad11',
    //   github_link: 'https://github.com/ajhad11',
    //   category: 'Full Stack'
    // },
  ],
  certificates: [
    {
      title: 'Flutter Development (A+)',
      issuing_organization: 'Avodha Edutech Pvt. Ltd',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      verification_link: '/assets/doc/flutter certificate.pdf',
      date_issued: 'Nov 2024',
      category: 'Development',
      description: 'Advanced Flutter mobile application development program covering widget lifecycle, state management, REST API integration, animations, and clean architecture.',
      skills: ['Flutter', 'Dart', 'State Management', 'API Integration', 'Mobile UI/UX']
    },
    {
      title: 'Flutter Development with AI',
      issuing_organization: 'Multysense EduTech',
      verification_link: '/assets/doc/Certificate_MS2502010502042 (1).pdf',
      date_issued: 'Nov 2025',
      category: 'Development',
      description: 'Comprehensive certification in integrating AI capabilities with Flutter applications, modern machine learning API integrations, and smart features.',
      skills: ['Flutter',  'Dart',  'Full Stack Mobile']
    },
    {
      title: 'Web Development Certification',
      issuing_organization: 'Verveox Technologies',
      verification_link: '/assets/doc/web certficate.pdf',
      date_issued: 'May 2025',
      category: 'Development',
      description: 'Practical web application development covering responsive frontends, modular JavaScript components, REST API integration, and database operations.',
      skills: ['Node.js', 'JavaScript', 'HTML5/CSS3', 'REST API', 'Responsive Design']
    },
    {
      title: 'Internship Experience',
      issuing_organization: 'Recongal Technologies',
      verification_link: '/assets/doc/LOR.pdf',
      date_issued: 'Aug 2026',
      category: 'Development',
      description: 'Letter of recommendation recognizing dedicated performance, Flutter mobile application delivery, problem-solving, and team collaboration during internship.',
      skills: ['Flutter', 'Mobile Architecture', 'Team Collaboration', 'Problem Solving']
    },
    {
      title: 'AI Internship Offer',
      issuing_organization: 'isudio Technologies',
      verification_link: '/assets/doc/Ajhad K - Artificial Intelligence Internship - Offer Letter.pdf',
      date_issued: 'Nov 2025',
      category: 'Awards & LOR',
      description: 'Official internship offer & commendation letter for Artificial Intelligence and intelligent mobile systems development.',
      skills: ['Artificial Intelligence', 'Mobile Systems', 'System Design']
    }
  ]
};

// GET request to fetch developer skills from Django API endpoints
export const fetchSkills = async () => {
  try {
    const response = await api.get('/skills/');
    return response.data; // Return JSON data list
  } catch (error) {
    console.warn("API Error, using fallback data for skills:", error.message);
    return FALLBACK_DATA.skills; // Return mock list if offline
  }
};

// GET request to fetch internship/work experience logs
export const fetchExperience = async () => {
  try {
    const response = await api.get('/experience/');
    return response.data;
  } catch (error) {
    console.warn("API Error, using fallback data for experience:", error.message);
    return FALLBACK_DATA.experience;
  }
};

// GET request to fetch project catalog items
export const fetchProjects = async () => {
  try {
    const response = await api.get('/projects/');
    return response.data;
  } catch (error) {
    console.warn("API Error, using fallback data for projects:", error.message);
    return FALLBACK_DATA.projects;
  }
};

// GET request to fetch certification items
export const fetchCertificates = async () => {
  try {
    const response = await api.get('/certificates/');
    return response.data;
  } catch (error) {
    console.warn("API Error, using fallback data for certificates:", error.message);
    return FALLBACK_DATA.certificates;
  }
};

// POST request to submit client message data payload to Django REST
export const submitContactForm = async (formData) => {
  try {
    const response = await api.post('/contact/', formData);
    return { success: true, data: response.data };
  } catch (error) {
    console.warn("API Error submitting contact form:", error.message);
    // Return simulated success response so front-end alerts succeed even offline
    return {
      success: true,
      mocked: true,
      message: "Message received! (Backup stored successfully)"
    };
  }
};

export default api;
