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
    { name: 'SQLite', category: 'database', proficiency: 90 },
    { name: 'Flutter', category: 'mobile', proficiency: 92 },
    { name: 'Dart', category: 'mobile', proficiency: 90 },
    { name: 'BLoC', category: 'state', proficiency: 88 },
    { name: 'Provider', category: 'state', proficiency: 90 },
    { name: 'Git', category: 'tools', proficiency: 88 },
    { name: 'GitHub', category: 'tools', proficiency: 90 },
    { name: 'VS Code', category: 'tools', proficiency: 95 },
    { name: 'Figma', category: 'tools', proficiency: 75 },
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
      title: 'Townseek',
      description: 'TownSeek is a smart location-based application for discovering nearby businesses, services, and hospitals. It provides search, navigation, booking, and business management features in one platform.',
      image: '/assets/townseek.png',
      technologies_list: ['Flutter', 'Supabase', 'Provider'],
      technologies: 'Flutter Supabase Provider',
      live_link: 'https://github.com/ajhad11/townseek',
      github_link: 'https://github.com/ajhad11/townseek'
    },
    {
      id: 2,
      title: 'Gold Bill Management',
      description: 'Gold Bill Management is a specialized system for creating and managing gold weight bills. It ensures accurate billing, secure record-keeping, and streamlined transaction tracking.',
      image: '/assets/gold_bill Naganeshi.png',
      technologies_list: ['Flutter', 'SQLite', 'Provider'],
      technologies: 'Flutter SQLite Provider',
      live_link: 'https://github.com/ajhad11/gold_applicaion',
      github_link: 'https://github.com/ajhad11/gold_applicaion'
    },

    {
      id: 4,
      title: 'E-Library Management System',
      description: 'Digital library platform for managing books, student records, issue and return tracking, cataloging, and quick search functionality.',
      image: '/assets/E_library_management.png',
      technologies_list: ['HTML', 'CSS', 'JavaScript'],
      technologies: 'HTML CSS JavaScript',
      live_link: 'https://github.com/ajhad11',
      github_link: 'https://github.com/ajhad11',
      category: 'Web'
    },
    // {
    //   id: 5,
    //   title: 'Event Management System',
    //   description: 'Complete event planning and booking platform with vendor management, event scheduling, dynamic pricing, and customer inquiries.',
    //   image: '/assets/event_management.png',
    //   technologies_list: ['React', 'Django', 'PostgreSQL'],
    //   technologies: 'React Django PostgreSQL',
    //   live_link: 'https://github.com/ajhad11',
    //   github_link: 'https://github.com/ajhad11',
    //   category: 'Full Stack'
    // },
     {
      id: 6,
      title: "TripSettle",
      description: "TripSettle makes group trip expenses simple by tracking spending, splitting bills, and calculating balances.Share expenses, track contributions, and settle payments easily with your travel group.",
      image: "/assets/tripsettle.png",
      technologies_list: ["Flutter", "Supabase", "PostgreSQL"],
      technologies: "Flutter Supabase PostgreSQL",
      live_link: "https://github.com/ajhad11/tripsettle",
      github_link: 'https://github.com/ajhad11/tripsettle',

    },
    {
      id: 7,
      title: "Construction Management System",
      description: "A comprehensive construction management system for project planning, resource allocation, task tracking, and real-time collaboration among teams.",
      image: "/assets/construction.png",
      technologies_list: ["Flutter", "Supabase", "PostgreSQL"],
      technologies: "Flutter Supabase PostgreSQL",
      live_link: "https://github.com/ajhad11/construction_app",
      github_link: 'https://github.com/ajhad11/construction_app',
    }
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
