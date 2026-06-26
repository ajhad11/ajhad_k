import axios from 'axios';

// Base URL configuration targeting the Django REST backend API server
const API_BASE_URL = 'http://127.0.0.1:8000/api';

// Create a pre-configured Axios instance for HTTP requests
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Timeout after 10 seconds if backend is unreachable
});

// Mock fallback data dictionary to prevent site breakage when Django server is offline
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
    { name: 'Hive', category: 'darabase', proficiency: 65 },
    { name: 'PostgreSQL', category: 'database', proficiency: 85 },
    { name: 'SQLite', category: 'database', proficiency: 90 },
    { name: 'Flutter', category: 'mobile', proficiency: 88 },
    { name: 'Dart', category: 'mobile', proficiency: 85 },
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
        'Mobile App Development',
        'State Management (Bloc / Provider)',
        'UI/UX Implementation',
        'App Store & Play Store Deployment'
      ]
    },

        {
      job_title: 'Web Development Intern',
      company: 'Verveox Technologies',
      location: 'Remote / Calicut',
      duration: 'Dec 2025 - May 2025',
      responsibilities_list: [
        'Frontend Development',
        'Responsive Design',
        'API Integration',
        'Database Management'
      ]
    },
  ],
  projects: [
   { id: 1,
    title: 'Townseek',
      description: 'TownSeek is a smart location-based application for discovering nearby businesses, services, and hospitals. It provides search, navigation, booking, and business management features in one platform.',
      image: 'public/assets/townseek.png',
      technologies_list: ['Flutter', 'Supabse', 'Provider', ],
      technologies: 'Flutter Supabse Provider',
    live_link: 'https://github.com/ajhad11/townseek',
    github_link: 'https://github.com/ajhad11/townseek'
    },
    {
      id: 1,
      title: 'Gold Bill Management',
      description: 'Gold Bill Management is a simple system for creating and managing gold wights bills. It ensures accurate billing, secure record-keeping, and easy transaction tracking.',
      image: '/assets/gold_invertry.png',
      technologies_list: ['Flutter', 'SQfile', 'Provider'],
      technologies: 'Flutter SQfile Provider',
      live_link: 'https://github.com/ajhad11/gold_billing_app',
      github_link: 'https://github.com/ajhad11/gold_billing_app'
    },
    {
      id: 1,
      title: 'Gold Inventory Management',
      description: 'A robust inventory management system designed for gold merchants. It manages stocks, tracks billing and transactions, and includes detailed analytics reporting.',
      image: '/assets/gold_invertry.png',
      technologies_list: ['Flutter', 'SQfile', 'Provider'],
      technologies: 'Flutter SQfile Provider',
      live_link: 'https://your-demo-link.com',
      github_link: 'https://github.com/yourusername/gold-inventory'
    },
    {
      id: 2,
      title: 'E-Library Management System',
      description: 'Digital library platform for managing books, student records, issue and return tracking, and search functionality.',
      image: 'public/assets/E_library_management.png',
      technologies_list: ['HTML', 'CSS', 'JS'],
      technologies: 'Flutter SQLite Dart',
      live_link: 'https://your-demo-link.com',
      github_link: 'https://github.com/yourusername/e-library',
      category: 'Flutter'
    },
    {
      id: 3,
      title: 'Event Management System',
      description: 'Complete event planning and booking platform with vendor management, event scheduling, and customer inquiries.',
      image: 'public/assets/event_management.png',
      technologies_list: ['React', 'dajngo', 'PQSQL'],
      technologies: 'React dajngo PQSQL',
      live_link: 'https://your-demo-link.com',
      github_link: 'https://github.com/yourusername/event-management',
      category: 'React'
    }
  ],
  certificates: [
    {
      title: 'Flutter Development (A+)',
      issuing_organization: 'Avodha Edutech Pvt. Ltd',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      verification_link: '/assets/doc/AJHAD K_Certificate.pdf',
      date_issued: 'Nov 2024'
    },
    {
      title: 'Flutter Development with AI',
      issuing_organization: 'Multysense EduTech',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      verification_link: '/assets/doc/Ajhad K - Artificial Intelligence Internship - Offer Letter.pdf',
      date_issued: 'Nov 2025'
    },

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
      message: "Offline mode simulation: Message received! (Backend is currently offline or unreachable)" 
    };
  }
};

export default api;
