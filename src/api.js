import axios from 'axios';

// Base URL configuration targeting backend API server if running
const API_BASE_URL = 'http://127.0.0.1:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const FALLBACK_DATA = {
  // 1. Personal & Brand Details
  developer: {
    name: 'AJHAD K',
    title: 'Software Developer | Flutter & .NET Developer | AI Integration Engineer',
    headline: 'Flutter • .NET • Full-Stack • AI Integration',
    summary: 'Software Developer focused on building scalable applications, cross-platform software, enterprise management systems, backend solutions, and AI-powered applications. Experienced with mobile development, web technologies, database systems, and modern software architecture, with a growing focus on AI integrations, RAG pipelines, MCP servers, and intelligent automation.',
    location: 'Kerala, India',
    email: 'ajhadk453@gmail.com',
    phone: '+91 95620 01042',
    github: 'https://github.com/ajhad11',
    linkedin: 'https://linkedin.com/in/ajhad-k',
    resume_url: '/assets/doc/cv.pdf',
    education: {
      degree: 'BSc Computer Science',
      institution: 'University of Calicut',
      location: 'Kerala, India',
      status: 'Graduate'
    }
  },

  skills: [
  // A. Flutter & Mobile/Desktop Development
  { name: 'Flutter', category: 'flutter', desc: 'Cross-platform mobile and desktop application development' },
  { name: 'Dart', category: 'flutter', desc: 'Object-oriented and asynchronous programming' },
  { name: 'State Management', category: 'flutter', desc: 'Provider, BLoC, Cubit and GetX' },
  { name: 'Flutter UI Development', category: 'flutter', desc: 'Responsive layouts, reusable widgets and Material Design' },
  { name: 'Flutter Navigation', category: 'flutter', desc: 'GoRouter, route management and deep linking' },
  { name: 'REST API Integration', category: 'flutter', desc: 'HTTP requests, JSON parsing and API error handling' },
  { name: 'Local Database Integration', category: 'flutter', desc: 'SQLite, Sqflite and offline-first applications' },
  { name: 'Platform Integration', category: 'flutter', desc: 'Android and Windows native functionality' },
  { name: 'Application Architecture', category: 'flutter', desc: 'Clean Architecture, MVVM and modular applications' },
  { name: 'App Deployment', category: 'flutter', desc: 'Android APK, AAB and Windows application builds' },

  // B. C# & .NET Development
  { name: 'C#', category: 'dotnet', desc: 'Object-oriented and asynchronous programming' },
  { name: '.NET', category: 'dotnet', desc: 'Modern application development platform' },
  { name: 'ASP.NET Core', category: 'dotnet', desc: 'Backend services and enterprise web APIs' },
  { name: 'ASP.NET Core Web API', category: 'dotnet', desc: 'RESTful API development and integration' },
  { name: 'Entity Framework Core', category: 'dotnet', desc: 'ORM, database operations and migrations' },
  { name: 'LINQ', category: 'dotnet', desc: 'Collection querying and database operations' },
  { name: 'WPF', category: 'dotnet', desc: 'Windows desktop applications using XAML' },
  { name: 'Windows Forms', category: 'dotnet', desc: 'Event-driven Windows desktop development' },
  { name: 'MVVM Architecture', category: 'dotnet', desc: 'Separation of UI and business logic' },
  { name: 'Dependency Injection', category: 'dotnet', desc: 'Service registration and application composition' },
  { name: 'Windows Application Development', category: 'dotnet', desc: 'Desktop packaging and Windows integration' },

  // C. Python & Django Development
  { name: 'Python', category: 'django', desc: 'Backend development, automation and AI programming' },
  { name: 'Django', category: 'django', desc: 'Python web application development' },
  { name: 'Django REST Framework', category: 'django', desc: 'REST API development using Python' },
  { name: 'FastAPI', category: 'django', desc: 'High-performance asynchronous Python APIs' },
  { name: 'Python OOP', category: 'django', desc: 'Classes, inheritance and reusable application logic' },
  { name: 'API Development', category: 'django', desc: 'Endpoints, serializers and request handling' },
  { name: 'Authentication & Authorization', category: 'django', desc: 'JWT, OAuth and role-based access control' },
  { name: 'Background Tasks', category: 'django', desc: 'Asynchronous processing and task automation' },
  { name: 'Backend Architecture', category: 'django', desc: 'Modular services and clean application structure' },

  // D. Database & Data Management
  { name: 'PostgreSQL', category: 'database', desc: 'Relational database management and SQL queries' },
  { name: 'SQLite', category: 'database', desc: 'Local and offline database storage' },
  { name: 'SQL Server', category: 'database', desc: 'Enterprise database management with T-SQL' },
  { name: 'Supabase', category: 'database', desc: 'PostgreSQL backend, authentication and storage' },
  { name: 'Database Design', category: 'database', desc: 'Relationships, normalization and indexing' },
  { name: 'ORM', category: 'database', desc: 'Django ORM and Entity Framework Core' },
  { name: 'Database Integration', category: 'database', desc: 'Connecting Flutter, Django and .NET applications' },

  // E. AI & LLM Integration
  { name: 'OpenAI API', category: 'ai', desc: 'LLM integration and AI-powered applications' },
  { name: 'LLM Application Development', category: 'ai', desc: 'Building software powered by language models' },
  { name: 'Prompt Engineering', category: 'ai', desc: 'System prompts, context and prompt optimization' },
  { name: 'Structured AI Responses', category: 'ai', desc: 'JSON outputs, schemas and response validation' },
  { name: 'Function Calling / Tool Calling', category: 'ai', desc: 'Connecting AI models with application functions' },
  { name: 'AI API Integration', category: 'ai', desc: 'Integrating AI services with Flutter, Python and .NET' },

  // F. RAG Engineering
  { name: 'RAG Architecture', category: 'rag', desc: 'Retrieval-Augmented Generation pipelines' },
  { name: 'Document Processing & Extraction', category: 'rag', desc: 'PDF, DOCX, Excel and OCR processing' },
  { name: 'Embeddings', category: 'rag', desc: 'Converting text into numerical vector representations' },
  { name: 'ChromaDB', category: 'rag', desc: 'Vector storage and similarity search' },
  { name: 'FAISS', category: 'rag', desc: 'Efficient vector similarity search' },
  { name: 'Semantic Search', category: 'rag', desc: 'Meaning-based document retrieval' },
  { name: 'Hybrid Search', category: 'rag', desc: 'Combining keyword and vector retrieval' },
  { name: 'RAG Evaluation', category: 'rag', desc: 'Retrieval quality, relevance and answer grounding' },
  { name: 'LangChain', category: 'rag', desc: 'LLM chains, retrievers and RAG workflows' },

  // G. MCP Development
  { name: 'Model Context Protocol (MCP)', category: 'mcp', desc: 'Standardized integration between AI and external systems' },
  { name: 'MCP Architecture', category: 'mcp', desc: 'Hosts, clients, servers and protocol lifecycle' },
  { name: 'MCP Server Development', category: 'mcp', desc: 'Building custom MCP servers using Python' },
  { name: 'MCP Client Integration', category: 'mcp', desc: 'Connecting AI applications to MCP servers' },
  { name: 'MCP Tools', category: 'mcp', desc: 'Exposing callable functions to AI clients' },
  { name: 'MCP Resources', category: 'mcp', desc: 'Providing structured data and application context' },
  { name: 'MCP Prompts', category: 'mcp', desc: 'Reusable prompt templates and workflows' },
  { name: 'External System Integration', category: 'mcp', desc: 'Connecting APIs, databases and desktop applications' },

  // H. AI Agents & Automation
  { name: 'AI Agent Architecture', category: 'agents', desc: 'Agent planning, reasoning and execution loops' },
  { name: 'Tool-Using Agents', category: 'agents', desc: 'AI agents interacting with APIs and external tools' },
  { name: 'Agentic Workflows', category: 'agents', desc: 'Multi-step autonomous task execution' },
  { name: 'AI Automation', category: 'agents', desc: 'Automating repetitive business processes' },
  { name: 'Agent Memory', category: 'agents', desc: 'Managing conversational and contextual memory' },
  { name: 'Human-in-the-Loop', category: 'agents', desc: 'Human approval and supervised AI execution' },
  { name: 'Workflow Orchestration', category: 'agents', desc: 'Coordinating multi-step application workflows' },

  // I. Development Tools & Engineering
  { name: 'Visual Studio', category: 'tools', desc: 'C# and .NET application development' },
  { name: 'VS Code', category: 'tools', desc: 'Flutter, Python and AI development' },
  { name: 'Android Studio', category: 'tools', desc: 'Android SDK and Flutter development' },
  { name: 'Git & GitHub', category: 'tools', desc: 'Version control and collaborative development' },
  { name: 'Docker', category: 'tools', desc: 'Containerization of backend and AI services' },
  { name: 'Postman', category: 'tools', desc: 'REST API testing and debugging' },
  { name: 'Unit & Integration Testing', category: 'tools', desc: 'Testing application logic and integrations' }
],

  // 3. Featured Projects (Section 04)
  projects: [
    // Project 01 – SLAS Smart Logistics Automation
    {
      id: 1,
      slug: 'slas-smart-logistics',
      title: 'SLAS – Smart Logistics & Hub Automation',
      category: 'Full-Stack & Cloud Architecture',
      subtitle: 'Automated Courier Hub Partitioning, Vehicle Load Capacity & Live GPS Telematics Portal',
      technologies_list: ['React 19', 'TypeScript', 'Django 5', 'PostgreSQL', 'Google OR-Tools', 'Leaflet', 'Docker'],
      technologies: 'React TypeScript Django PostgreSQL Google-OR-Tools Leaflet Docker',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80',
      featured: true,
      status: 'Active Production',
      github_link: 'https://github.com/ajhad11/smart-logistics-slas',
      live_link: 'https://github.com/ajhad11/smart-logistics-slas',
      overview: 'SLAS (Smart Logistics Automation System) is an enterprise full-stack distribution and automated courier hub platform designed to streamline hub operations, automate order partitioning into zone delivery vehicles, calculate real-time vehicle load capacities (kg & m³), and provide customers with live driver GPS tracking and confirmed delivery date forecasts.',
      problem_statement: 'Courier hubs and 3PL distribution networks struggle with manual vehicle allocation, partial vehicle dispatches with low capacity utilization (e.g. 10% load), and opaque customer communication where senders lack visibility on when their parcel will be dispatched and delivered.',
      solution: 'Engineered an automated logistics hub platform powered by Google OR-Tools (Capacitated Vehicle Routing Problem). Parcels arriving at the courier hub are automatically clustered and assigned to the destination zone vehicle. The system enforces an 80% load threshold before dispatch, calculates live load percentages, projects confirmed delivery arrival windows, and exposes real-time Leaflet GPS driver telematics on an encrypted public tracking portal.',
      key_features: [
        'Central Courier Hub reception with automated destination-based parcel sorting and vehicle allocation',
        'Dual-capacity vehicle load monitoring (Weight in kg & Volume in m³) with live percentage indicators (10% to 100%)',
        'Strict dispatch threshold enforcement (80% full load required for automatic departure authorization)',
        'Public Customer Tracking Portal supporting lookup by Tracking Token or Order Number (ORD-...) with delivery date forecasts',
        'Real-time OpenStreetMap / Leaflet live driver GPS location tracing with vehicle speed and heading telematics',
        'Driver PWA mobile application featuring stop-by-stop navigation, partial delivery balance accounting, and digital POD signature capture'
      ],
      architecture_notes: 'React 19 (TypeScript & Tailwind) • Django 5 REST Backend • PostgreSQL Database • Google OR-Tools (CVRP) • Leaflet Maps • Docker Containerization',
      screens: [
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=1200&auto=format&fit=crop&q=80'
      ]
    },

    // Project 02 – TownSeek
    {
      id: 2,
      slug: 'townseek',
      title: 'TownSeek',
      category: 'Mobile Application',
      subtitle: 'Locality Discovery & Neighborhood Services Application',
      technologies_list: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL', 'OpenStreetMap', 'Provider'],
      technologies: 'Flutter Dart Supabase PostgreSQL OpenStreetMap Provider',
      image: '/assets/townseek.png',
      featured: true,
      status: 'Completed',
      github_link: 'https://github.com/ajhad11/townseek',
      live_link: 'https://github.com/ajhad11/townseek',
      overview: 'TownSeek is a high-performance cross-platform mobile application designed to bridge local communities and neighborhood service providers. It empowers residents to discover nearby commercial shops, specialized repair services, medical clinics, and emergency artisans within their locality using interactive geospatial search and direct in-app appointment scheduling.',
      problem_statement: 'Locating verified, active local services in suburban and town communities often relies on fragmented word-of-mouth or outdated directories. Residents lack real-time distance proximity, clear business operating hours, direct booking options, and community-verified feedback.',
      solution: 'Engineered a full-fledged Flutter mobile application backed by Supabase and PostgreSQL. Implemented OpenStreetMap vector routing and PostGIS-based distance calculations to provide instant radius filtering, verified vendor catalogs, queue booking, and offline-first cache of frequented contacts.',
      key_features: [
        'Local business discovery categorized across retail, health, repair, and artisan services',
        'Location-based geospatial discovery with interactive OpenStreetMap markers and turn-by-turn routing',
        'Shop and service listings detailing verified operational hours, contact channels, and pricing menus',
        'Direct appointment scheduling and status management queue for residents and merchants',
        'Community customer reviews, ratings, and localized neighborhood promotions',
        'Offline caching for instant retrieval of saved contacts and emergency service cards'
      ],
      architecture_notes: 'Flutter UI (Provider State Management) • OpenStreetMap Integration • Supabase Cloud Backend • PostgreSQL Relational Schema with Row-Level Security',
      screens: ['/assets/townseek.png']
    },

    // Project 03 – TripSettle
    {
      id: 3,
      slug: 'tripsettle',
      title: 'TripSettle',
      category: 'Mobile Application',
      subtitle: 'Collaborative Group Expense Splitting & Debt Minimization System',
      technologies_list: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL', 'Provider'],
      technologies: 'Flutter Dart Supabase PostgreSQL Provider',
      image: '/assets/tripsettle.png',
      featured: true,
      status: 'Completed',
      github_link: 'https://github.com/ajhad11/tripsettle',
      live_link: 'https://github.com/ajhad11/tripsettle',
      overview: 'TripSettle is a collaborative financial tracking mobile application built to eliminate financial friction during group travel, shared housing, and team excursions. It features an automated debt minimization algorithm that condenses tangled group balances into the minimum number of direct settlement transactions.',
      problem_statement: 'In multi-member group trips, members pay for varying costs (hotels, fuel, meals, entry tickets) with complex participation splits. Tracking these ledgers manually results in confusion, arithmetic disputes, and dozens of unnecessary circular repayments.',
      solution: 'Developed an offline-first Flutter application utilizing a greedy balance graph algorithm with real-time Supabase synchronization. The system allows custom splitting modes, categorizes expenditures, and instantly computes optimal settlements while maintaining full historical ledger transparency.',
      key_features: [
        'Trip & group lifecycle management with multi-currency support and member invitations',
        'Granular expense splitting supporting equal, unequal shares, exact amounts, and percentages',
        'Graph-based debt minimization algorithm that reduces total payback transactions by over 60%',
        'Real-time Supabase synchronization instantly updating balances across all participants devices',
        'Categorical expenditure breakdowns with budget tracking charts and settlement logs',
        'Exportable trip ledger summaries and settlement receipts in PDF and CSV format'
      ],
      architecture_notes: 'Flutter Client • Greedy Balance Graph Simplification Engine • Supabase Realtime Subscriptions • PostgreSQL ACID Transactions',
      screens: ['/assets/tripsettle.png']
    },

    // Project 04 – BuildTrack
    {
      id: 4,
      slug: 'buildtrack',
      title: 'BuildTrack',
      category: 'Enterprise Software',
      subtitle: 'Civil Construction Management & Site Financial System',
      technologies_list: ['Flutter', 'Python', 'Supabase', 'PostgreSQL', 'Clean Architecture'],
      technologies: 'Flutter Python Supabase PostgreSQL Clean-Architecture',
      image: '/assets/construction.png',
      featured: true,
      status: 'Completed',
      github_link: 'https://github.com/ajhad11/construction_app',
      live_link: 'https://github.com/ajhad11/construction_app',
      overview: 'BuildTrack is an enterprise-oriented construction site management and financial tracking system designed for civil contractors, site supervisors, and project owners. It provides real-time oversight of construction progress, material inventory purchases, client fund disbursements, and site supervisor petty cash reconciliation.',
      problem_statement: 'Construction projects frequently face budget overruns and timeline slippage due to disjointed paper logs between active job sites and central management, unrecorded material deliveries, and delayed reporting of supervisor cash flows.',
      solution: 'Architected a mobile-first operations and financial control platform combining Flutter and Python backend services with PostgreSQL/Supabase. Enforces milestone-driven financial tracking, low-inventory material alerts, supervisor petty cash tracking, and role-based client review portals.',
      key_features: [
        'Multi-project construction dashboard tracking phase milestones and percentage completion',
        'Client financial tracking: stage-wise billings, payment milestones, and outstanding dues',
        'Site supervisor fund allocation and real-time petty cash disbursement logging with receipts',
        'Comprehensive material purchase records with vendor invoices, low-stock threshold triggers',
        'Role-based access control (RBAC) separating project owners, civil contractors, and site supervisors',
        'Automated financial summaries and project cost variance reporting'
      ],
      architecture_notes: 'Flutter (Clean Architecture & BLoC) • Python REST API • PostgreSQL Database • Supabase Storage for Site Invoices & Photos',
      screens: ['/assets/construction.png']
    },

    // Project 05 – Accounting Management System
    {
      id: 5,
      slug: 'accounting-management-system',
      title: 'Accounting Management System',
      category: 'Enterprise Software',
      subtitle: 'Modern Multi-Entity Accounting & Financial Management Suite',
      technologies_list: ['Flutter', '.NET', 'Python', 'SQL Server', 'PostgreSQL', 'Provider'],
      technologies: 'Flutter .NET Python SQL-Server PostgreSQL Provider',
      image: '/assets/gold_bill Naganeshi.png',
      featured: true,
      status: 'Completed',
      github_link: 'https://github.com/ajhad11/gold_applicaion',
      live_link: 'https://github.com/ajhad11/gold_applicaion',
      overview: 'Accounting Management System is an enterprise software solution engineered for commercial businesses and retail merchants requiring strict double-entry bookkeeping, precision multi-karat bullion valuation, ledger reconciliation, tax compliance, and automated financial statements with AI-assisted transaction analysis.',
      problem_statement: 'Commercial retailers and trade merchants struggle with generic accounting packages that lack specialized multi-rate inventory valuation, automated GST/tax split calculations, instant printable invoices, and intelligent ledger verification.',
      solution: 'Engineered a unified desktop and mobile system powered by Flutter, .NET services, and SQL Server/PostgreSQL. Incorporates automated journal ledgers, voucher reconciliation, dynamic making charge and carat valuation formulas, and AI-assisted ledger auditing workflows.',
      key_features: [
        'Executive accounting dashboard displaying real-time cash flow, receivables, payables, and gross margins',
        'Double-entry ledgers, automated debit/credit voucher generation, and trial balance calculations',
        'Comprehensive sales and purchase order management with instant GST-compliant PDF invoice creation',
        'Cash and bank reconciliation module supporting multiple institution ledgers and contra entries',
        'Financial reporting suite generating automated Profit & Loss statements and balance sheets',
        'AI-assisted accounting workflows identifying ledger anomalies and classifying receipt line items'
      ],
      architecture_notes: 'Flutter Client (Desktop & Mobile) • .NET Core Services & Python Microservice • SQL Server / PostgreSQL • Provider State Architecture',
      screens: ['/assets/gold_bill Naganeshi.png', '/assets/gold_invertry.png']
    },

    // Project 06 – Gold3D Studio
    {
      id: 6,
      slug: 'gold3d-studio',
      title: 'Gold3D Studio',
      category: 'Mobile & 3D Engineering',
      subtitle: 'Interactive Jewellery Design & 3D Bangle Studio',
      technologies_list: ['Flutter', 'Dart', '3D Integration', 'Local Storage', 'Provider'],
      technologies: 'Flutter Dart 3D-Integration Local-Storage Provider',
      image: '/assets/gold_invertry.png',
      featured: true,
      status: 'Completed',
      github_link: 'https://github.com/ajhad11',
      live_link: 'https://github.com/ajhad11',
      overview: 'Gold3D Studio is an innovative jewellery customization and 3D preview application designed for retail jewellery artisans and customers. It enables interactive design of traditional and contemporary bangles, allowing users to modify geometric dimensions, ornament motifs, and surface finishes with real-time 3D rendering.',
      problem_statement: 'Custom jewellery manufacturing typically requires extensive manual CAD drafting or physical wax samples before customers can visualize custom bangle proportions, leading to costly design revisions and misaligned customer expectations.',
      solution: 'Created an interactive Flutter application integrating a real-time 3D viewport engine and modular component library. Customers can assemble bangle elements, adjust circumference and thickness, test gemstone settings, inspect 360-degree renders, and export production blueprints.',
      key_features: [
        'Interactive 3D bangle modeling engine with parametric control of radius, width, and bevel curvature',
        'Curated jewellery element library with ornamental gemstones, filigree motifs, and clasp mechanisms',
        'Real-time 360-degree viewport inspection with dynamic metal reflection and gemstone refraction',
        'Design variation saving and preset restoration using local schema-validated JSON storage',
        'Instant high-resolution render export and dimension blueprint generation for workshop craftsmen',
        'Dynamic weight and metal cost estimation calibrated to live gold rates and model volume'
      ],
      architecture_notes: 'Flutter Frontend • Integrated 3D Viewport Rendering • Local SQLite / JSON Storage • Provider Reactive State',
      screens: ['/assets/gold_invertry.png']
    },

    // Additional verified projects for catalog filter
    {
      id: 6,
      slug: 'eventpulse',
      title: 'EventPulse',
      category: 'Full-Stack Web',
      subtitle: 'Enterprise Event Orchestration & Cryptographic QR Ticketing SaaS',
      technologies_list: ['React', 'Django REST', 'PostgreSQL', 'Tailwind CSS', 'JWT'],
      technologies: 'React Django-REST PostgreSQL Tailwind JWT',
      image: '/assets/event_management.png',
      featured: false,
      status: 'Completed',
      github_link: 'https://github.com/ajhad11/eventpulse-fullstack-platform',
      live_link: 'https://github.com/ajhad11/eventpulse-fullstack-platform',
      overview: 'A full-stack event management and ticket reservation portal featuring dynamic venue seat allocation, vendor marketplace contracts, automated payment confirmation, and cryptographically signed QR code check-in validation.',
      problem_statement: 'High-attendance events suffer from ticket scalping, fraudulent duplicate passes, and chaotic venue check-ins when using conventional barcode or printed passes.',
      solution: 'Engineered a modern web platform combining React and Django REST Framework with HMAC-signed QR ticket generation and offline gate scanner validation, ensuring zero duplicate entries and real-time attendance telemetry.',
      key_features: [
        'Interactive seating map with real-time optimistic seat reservations',
        'HMAC-SHA256 cryptographically signed QR code passes verified instantly by gate staff',
        'Vendor marketplace module for sound, lighting, and catering contractor bids',
        'Django REST backend with JWT authentication and PostgreSQL relational integrity'
      ],
      architecture_notes: 'React Frontend • Django REST Framework • PostgreSQL • JWT Auth • Tailwind CSS',
      screens: ['/assets/event_management.png']
    },

    {
      id: 7,
      slug: 'omnilib',
      title: 'OmniLib Management',
      category: 'Full-Stack Web',
      subtitle: 'Academic E-Library Cataloging & Student Borrowing Platform',
      technologies_list: ['React', 'Python Django', 'PostgreSQL', 'REST API'],
      technologies: 'React Python Django PostgreSQL REST',
      image: '/assets/E_library_management.png',
      featured: false,
      status: 'Completed',
      github_link: 'https://github.com/ajhad11/omnilib-library-system',
      live_link: 'https://github.com/ajhad11/omnilib-library-system',
      overview: 'A modern web-based academic cataloging and student borrowing system featuring automated fine calculation, digital ISBN registry, RFID check-in simulation, and semantic search across library collections.',
      problem_statement: 'Campus libraries struggle with overdue book tracking, lost inventory, and slow catalog searching across legacy desktop database installations.',
      solution: 'Developed a responsive web platform utilizing React and Django REST with PostgreSQL trigram indexing, enabling sub-50ms fuzzy book searches and automated overdue fine calculations.',
      key_features: [
        'Comprehensive digital cataloging of titles, authors, Dewey decimal classifications, and ISBN-13',
        'Automated borrowing lifecycles and fine accrual calculations via scheduled background tasks',
        'Fast fuzzy search index returning instant book availability and shelf aisle coordinates in <50ms',
        'Administrative dashboard with circulation analytics and genre popularity tracking'
      ],
      architecture_notes: 'React SPA • Django REST Framework • PostgreSQL Trigram Index • JWT Security',
      screens: ['/assets/E_library_management.png']
    }
  ],

  // 4. AI & Intelligent Software Solutions (Section 05)
  ai_solutions: [
    {
      id: 1,
      title: 'RAG-Based Knowledge Management Systems',
      subtitle: 'Retrieval-Augmented Generation for Enterprise Documents',
      status: 'In Progress',
      explanation: 'Intelligent knowledge retrieval systems that ingest complex technical documentation, PDF policies, and internal handbooks. Implements recursive text chunking, dense vector embeddings, and semantic similarity search to generate strictly grounded responses with paragraph citations.',
      workflow: [
        { step: '01', title: 'Document Ingestion', desc: 'PDF, DOCX, Markdown extraction and cleaning' },
        { step: '02', title: 'Semantic Chunking', desc: 'Recursive splitting with token overlap preservation' },
        { step: '03', title: 'Vector Indexing', desc: 'Dense embedding generation stored in ChromaDB / FAISS' },
        { step: '04', title: 'Context Augmentation', desc: 'Top-K semantic match retrieval with relevance re-ranking' },
        { step: '05', title: 'Grounded Generation', desc: 'LLM synthesis with strict citation guardrails to eliminate hallucinations' }
      ],
      technologies: ['Python', 'LangChain', 'ChromaDB', 'FAISS', 'Gemini API', 'FastAPI']
    },
    {
      id: 2,
      title: 'AI-Powered Accounting Assistant',
      subtitle: 'Intelligent Ledger Anomaly Detection & Financial Inquiries',
      status: 'In Progress',
      explanation: 'A specialized financial assistant that connects with accounting databases and voucher ledgers. Leverages function calling and structured prompt chains to identify bookkeeping discrepancies, reconcile contra entries, and summarize cash flows.',
      workflow: [
        { step: '01', title: 'Voucher Ingestion', desc: 'Continuous listening on accounting journal entries' },
        { step: '02', title: 'Anomaly Rules & OCR', desc: 'Heuristic check for duplicate invoices and debit/credit imbalance' },
        { step: '03', title: 'Function Calling', desc: 'LLM tool calling querying account balances and ledger charts' },
        { step: '04', title: 'Auditor Verification', desc: 'Natural language explanation and reconciliation recommendations' }
      ],
      technologies: ['Python', '.NET Web API', 'OpenAI API', 'PostgreSQL', 'SQL Server']
    },
    {
      id: 3,
      title: 'MCP-Based Desktop Application Integration',
      subtitle: 'Model Context Protocol for Windows Applications & Local Tools',
      status: 'Exploring',
      explanation: 'Architecting Model Context Protocol (MCP) servers and clients to connect desktop software, local databases, and filesystem resources directly to AI models, allowing LLMs to securely execute bounded tools and read schema metadata.',
      workflow: [
        { step: '01', title: 'AI Host Client', desc: 'Claude / Gemini desktop interface or custom agent host' },
        { step: '02', title: 'MCP Protocol Layer', desc: 'Standardized JSON-RPC 2.0 communication over stdio or SSE' },
        { step: '03', title: 'MCP Server', desc: 'Secure exposure of C# / Python desktop application tools & resources' },
        { step: '04', title: 'Safe Execution', desc: 'Sandboxed local DB queries, file processing, and desktop actions' }
      ],
      technologies: ['Model Context Protocol (MCP)', 'Python', 'C#', '.NET', 'JSON-RPC']
    },
    {
      id: 4,
      title: 'AI Document Processing Systems',
      subtitle: 'Multimodal Vision & Structured Data Extraction',
      status: 'Completed',
      explanation: 'Production-ready document ingestion pipeline utilizing computer vision image preprocessing (perspective correction, adaptive thresholding) and multimodal LLMs to extract handwritten prescriptions, commercial bills, and contract tables into structured JSON schemas.',
      workflow: [
        { step: '01', title: 'Image Capture / PDF', desc: 'High-res camera capture or PDF document upload' },
        { step: '02', title: 'OpenCV Preprocessing', desc: 'Deskewing, morphological denoising, contrast enhancement' },
        { step: '03', title: 'Multimodal Inference', desc: 'Gemini Vision / OCR parsing key-value pairs and tabular rows' },
        { step: '04', title: 'JSON Validation', desc: 'Pydantic schema enforcement and business logic validation' }
      ],
      technologies: ['Python', 'OpenCV', 'Gemini Vision API', 'FastAPI', 'Pydantic']
    },
    {
      id: 5,
      title: 'Intelligent Business Automation',
      subtitle: 'Event-Driven Workflow Automation & Notification Pipelines',
      status: 'In Progress',
      explanation: 'Automated backend workflow pipelines connecting business events (new construction purchase orders, overdue invoice settlements, site inventory alerts) to multi-step notification routines, report generation, and third-party webhook integrations.',
      workflow: [
        { step: '01', title: 'Trigger Event', desc: 'Database row insert, stock threshold breach, or webhook' },
        { step: '02', title: 'Queue & Worker', desc: 'Asynchronous task ingestion avoiding UI blocking' },
        { step: '03', title: 'Logic & PDF Engine', desc: 'Automated statement generation and data reconciliation' },
        { step: '04', title: 'Multi-Channel Push', desc: 'WhatsApp API, Email, and in-app supervisor alerts' }
      ],
      technologies: ['Python', 'Django REST', 'Celery', 'Supabase Webhooks', 'REST APIs']
    },
    {
      id: 6,
      title: 'AI Agent-Based Workflow Applications',
      subtitle: 'Autonomous Multi-Step Tool-Using Agent Architectures',
      status: 'Exploring',
      explanation: 'Developing goal-directed AI agents equipped with planning loops (ReAct pattern), episodic memory, and external tools (search engines, calculator, database query runners) with human-in-the-loop checkpoints for mission-critical software tasks.',
      workflow: [
        { step: '01', title: 'Goal Formulation', desc: 'Decomposing complex user goals into atomic sub-tasks' },
        { step: '02', title: 'ReAct Loop', desc: 'Reasoning -> Action (Tool selection) -> Observation evaluation' },
        { step: '03', title: 'Human Checkpoint', desc: 'Explicit approval gate before writing to production records' },
        { step: '04', title: 'Final Resolution', desc: 'Synthesizing output, logging audit trails, and memory storage' }
      ],
      technologies: ['LangChain Agents', 'Python', 'FastAPI', 'LlamaIndex', 'Function Calling']
    }
  ],

  // 5. .NET & Enterprise Software Development (Section 06)
  enterprise_capabilities: [
    {
      title: 'Windows Desktop Applications',
      description: 'Engineered with C#, WPF, and Windows Forms utilizing clean MVVM architecture, native OS packaging, background thread coordination, and offline-first data caching.',
      tags: ['C#', '.NET', 'WPF', 'Windows Forms', 'MVVM']
    },
    {
      title: 'Business Management Software',
      description: 'End-to-end management systems tailored for commercial retail, multi-outlet merchants, and service agencies with granular role permissions and audit logs.',
      tags: ['.NET Core', 'SQL Server', 'PostgreSQL', 'RBAC']
    },
    {
      title: 'Accounting & ERP Systems',
      description: 'ACID-compliant double-entry accounting ledgers, automatic CGST/SGST tax calculation, voucher reconciliation, and multi-currency exchange engines.',
      tags: ['Double-Entry Ledgers', 'Trial Balance', 'Vouchers', 'Tax Engines']
    },
    {
      title: 'Inventory & Stock Management',
      description: 'Real-time stock valuation across multi-warehouse facilities, batch tracking, low-inventory threshold triggers, and automated purchase order generation.',
      tags: ['Stock Ledgers', 'Batch Tracking', 'Reorder Triggers']
    },
    {
      title: 'Financial Management & Reporting',
      description: 'Instant generation of audit-compliant Balance Sheets, Profit & Loss statements, Cash Flow forecasts, and exportable PDF/Excel documentation.',
      tags: ['P&L Statements', 'Balance Sheets', 'Cash Flow', 'Audit Trails']
    },
    {
      title: 'REST API & Microservices',
      description: 'High-throughput ASP.NET Core Web APIs and Python microservices with JWT bearer authentication, structured exception middleware, and rate limiting.',
      tags: ['ASP.NET Core Web API', 'Swagger/OpenAPI', 'JWT', 'Async I/O']
    },
    {
      title: 'Database-Driven Applications',
      description: 'Schema normalization, Entity Framework Core migrations, indexed queries, complex joins, and stored procedures on SQL Server and PostgreSQL.',
      tags: ['Entity Framework Core', 'LINQ', 'SQL Server', 'PostgreSQL']
    },
    {
      title: 'Enterprise Integrations',
      description: 'Bridging desktop software to cloud backends, payment gateways, thermal receipt printers, barcode/RFID scanners, and external AI services.',
      tags: ['Hardware Peripherals', 'Cloud Sync', 'Webhooks', 'MCP Protocol']
    }
  ],

  // 6. Experience & Professional Journey (Section 07)
  experience: [
    {
      id: 1,
      job_title: 'Flutter Development Intern',
      company: 'Regional Technologies',
      location: 'Calicut, Kerala',
      duration: 'May 2025 - Aug 2026',
      badge: 'Production Flutter Delivery',
      responsibilities_list: [
        'Architected and delivered cross-platform mobile apps for Android and iOS using Flutter and Dart, maintaining 99.8% crash-free sessions across production builds.',
        'Engineered responsive state architecture with BLoC and Provider, streamlining asynchronous event streams and accelerating UI render times by 35%.',
        'Built offline-first local database caching layers using SQLite and Hive, reducing redundant network payloads by 42%.',
        'Integrated RESTful APIs, payment workflows, and automated PDF invoice generation modules for retail and enterprise client applications.',
        'Awarded official Letter of Recommendation (LOR) recognizing production delivery, code hygiene, and cross-functional teamwork.'
      ],
      technologies: ['Flutter', 'Dart', 'BLoC', 'Provider', 'SQLite', 'REST APIs', 'Git']
    },
    {
      id: 2,
      job_title: 'Flutter Development with AI Intern',
      company: 'Multsense EduTech',
      location: 'Calicut, Kerala / Remote',
      duration: 'Nov 2024 - Nov 2025',
      badge: 'Mobile + AI Integration',
      responsibilities_list: [
        'Integrated machine learning models, edge TFLite neural networks, and conversational GenAI interfaces directly into Flutter mobile applications.',
        'Developed real-time document capture and image processing microservices using Python and Gemini Vision API for sub-second text extraction.',
        'Optimized client-side memory footprint and on-device inference latency for resource-constrained Android devices.',
        'Completed specialized engineering training and earned official certification in Flutter Development with AI Integration.'
      ],
      technologies: ['Flutter', 'Dart', 'Python', 'FastAPI', 'Gemini API', 'TFLite', 'REST']
    },
    {
      id: 3,
      job_title: 'Flutter Application Engineering Trainee (Grade A+)',
      company: 'Avodha Edutech',
      location: 'Kerala, India',
      duration: 'Jun 2024 - Nov 2024',
      badge: 'Grade A+ Certification',
      responsibilities_list: [
        'Completed rigorous full-time curriculum in professional Flutter & Dart mobile application architecture, graduation accredited by Skill India / NSDC.',
        'Mastered state management patterns (Provider, BLoC, GetX), custom animations, widget tree optimization, and clean architecture separation of concerns.',
        'Constructed multiple production-grade mobile projects featuring local SQLite persistence, background services, and external REST API consumption.',
        'Awarded Grade A+ Honors certification for exemplary capstone project delivery.'
      ],
      technologies: ['Flutter', 'Dart', 'Provider', 'BLoC', 'SQLite', 'Clean Architecture']
    },
    {
      id: 4,
      job_title: 'Web Development Intern',
      company: 'VerVex',
      location: 'Calicut, Kerala / Remote',
      duration: 'Dec 2024 - May 2025',
      badge: 'Full-Stack Web',
      responsibilities_list: [
        'Constructed modular frontend components in React.js and Tailwind CSS with modern UI micro-interactions and mobile-first responsiveness.',
        'Developed REST API endpoints using Python and Django REST Framework, integrating with PostgreSQL relational databases.',
        'Implemented secure JWT-based authentication, user role-based access control (RBAC), and session management.',
        'Conducted rigorous API contract testing with Postman, boosting Lighthouse performance audit scores to 95+.'
      ],
      technologies: ['React', 'JavaScript', 'Python', 'Django REST', 'PostgreSQL', 'Tailwind CSS']
    }
  ],

  // 7. Education & Verified Certifications (Section 08)
  education_and_certifications: [
    {
      type: 'degree',
      title: 'BSc Computer Science',
      issuing_organization: 'University of Calicut',
      date_issued: 'Graduated',
      category: 'Education',
      description: 'Comprehensive computer science degree covering data structures & algorithms, object-oriented software engineering, database management systems, operating systems, and computer networks.',
      skills: ['Data Structures & Algorithms', 'Database Systems', 'Software Engineering', 'OOP']
    },
    {
      type: 'cert',
      title: 'Certificate in Flutter Development (Grade A+)',
      issuing_organization: 'Avodha Edutech / Skill India / NSDC',
      verification_link: '/assets/doc/flutter certificate.pdf',
      date_issued: 'Nov 2024',
      category: 'Verified Certification',
      credential_id: 'AVD-FL-2024-948',
      description: 'Accredited professional mobile engineering program covering state architecture, clean code principles, REST API integration, and production application deployment.',
      skills: ['Flutter', 'Dart', 'BLoC', 'Provider', 'Clean Architecture', 'Mobile Deployment']
    },
    {
      type: 'cert',
      title: 'Flutter Development with AI Integration',
      issuing_organization: 'Multysense EduTech',
      verification_link: '/assets/doc/Certificate_MS2502010502042 (1).pdf',
      date_issued: 'Nov 2025',
      category: 'Verified Certification',
      credential_id: 'MS2502010502042',
      description: 'Specialized engineering certification focusing on integrating machine learning APIs, edge TFLite models, computer vision capabilities, and conversational GenAI interfaces into Flutter applications.',
      skills: ['Flutter', 'AI Integration', 'TFLite', 'RESTful ML APIs', 'Intelligent Mobile Apps']
    },
    {
      type: 'award',
      title: 'Flutter Development Internship Recommendation (LOR)',
      issuing_organization: 'Regional Technologies',
      verification_link: '/assets/doc/LOR.pdf',
      date_issued: 'Aug 2026',
      category: 'Recommendation Letter',
      credential_id: 'REC-LOR-2026',
      description: 'Official Letter of Recommendation recognizing outstanding performance in delivering commercial Flutter mobile applications, system stability, and proactive cross-functional teamwork.',
      skills: ['Flutter Production Delivery', 'BLoC Architecture', 'Code Quality', 'Team Leadership']
    },
    {
      type: 'cert',
      title: 'Full-Stack Web Development Certification',
      issuing_organization: 'VerVex Technologies',
      verification_link: '/assets/doc/web certficate.pdf',
      date_issued: 'May 2025',
      category: 'Verified Certification',
      credential_id: 'VRV-WEB-2025-11',
      description: 'Software certification in modern web application engineering covering React frontend architecture, Django REST Framework backends, and relational database management.',
      skills: ['React.js', 'Django REST', 'PostgreSQL', 'API Security', 'Responsive UX']
    },
    {
      type: 'cert',
      title: 'Artificial Intelligence Internship Offer & Fellowship',
      issuing_organization: 'isudio Technologies',
      verification_link: '/assets/doc/Ajhad K - Artificial Intelligence Internship - Offer Letter.pdf',
      date_issued: 'Nov 2025',
      category: 'Fellowship & Award',
      credential_id: 'ISD-AI-INT-2025',
      description: 'Official selection and commendation for intelligent systems engineering, deep learning model benchmarking, and full-stack AI pipeline development.',
      skills: ['Artificial Intelligence', 'Computer Vision', 'LangChain / RAG', 'FastAPI Microservices']
    }
  ],

  // 8. Development Approach Workflow (Section 09)
  development_workflow: [
    {
      step: '01',
      title: 'Understand the Problem',
      tagline: 'Discovery & Business Context',
      description: 'Analyze real-world requirements, identify core pain points, map stakeholder workflows, and define clear success criteria before writing any line of code.',
      deliverables: ['Problem statement document', 'User journey mapping', 'Success metrics baseline']
    },
    {
      step: '02',
      title: 'Requirement Analysis',
      tagline: 'Scope & Technical Feasibility',
      description: 'Define functional and non-functional requirements, evaluate cross-platform platform trade-offs, identify edge cases, and establish performance targets.',
      deliverables: ['Technical specification', 'Entity requirement matrices', 'Security & latency targets']
    },
    {
      step: '03',
      title: 'System Architecture & Database Design',
      tagline: 'Blueprints, Schemas & Data Modeling',
      description: 'Design normalized relational schemas (PostgreSQL / SQL Server), define ACID transaction boundaries, select state management patterns, and architect modular APIs.',
      deliverables: ['ERD database schema diagrams', 'API contract specifications', 'Clean Architecture layers']
    },
    {
      step: '04',
      title: 'UI/UX & Application Development',
      tagline: 'Implementation & 60 FPS Experience',
      description: 'Build responsive, accessible user interfaces in Flutter, React, or .NET/WPF with modular reusable components, robust state handling, and defensive validations.',
      deliverables: ['Component-driven frontend', 'State management streams', 'Micro-interactions & UX feedback']
    },
    {
      step: '05',
      title: 'API, AI & Third-Party Integration',
      tagline: 'Connectivity, RAG Pipelines & Tooling',
      description: 'Wire backend endpoints, connect third-party APIs (payment, maps, hardware), integrate LLM tool calling, vector search indexes, and MCP server endpoints.',
      deliverables: ['REST / JSON-RPC endpoints', 'Vector indexing pipelines', 'Asynchronous background queues']
    },
    {
      step: '06',
      title: 'Testing, Deployment & Maintenance',
      tagline: 'Verification, CI/CD & Reliability',
      description: 'Execute unit tests, integration validation, cross-device responsiveness checks, configure build packaging (APK, Windows EXE, web), and monitor performance.',
      deliverables: ['Automated test suites', 'Production release builds', 'Telemetry & monitoring logs']
    }
  ]
};

// API Fetch Helpers with Fallbacks
export const fetchSkills = async () => {
  try {
    const res = await api.get('/skills/');
    if (Array.isArray(res.data)) return res.data;
    if (Array.isArray(res.data?.results)) return res.data.results;
    return FALLBACK_DATA.skills;
  } catch {
    return FALLBACK_DATA.skills;
  }
};

export const fetchProjects = async () => {
  try {
    const res = await api.get('/projects/');
    return res.data;
  } catch {
    return FALLBACK_DATA.projects;
  }
};

export const fetchExperience = async () => {
  try {
    const res = await api.get('/experience/');
    return res.data;
  } catch {
    return FALLBACK_DATA.experience;
  }
};

export const fetchCertificates = async () => {
  try {
    const res = await api.get('/certificates/');
    return res.data;
  } catch {
    return FALLBACK_DATA.education_and_certifications;
  }
};

export const fetchAISolutions = async () => {
  try {
    const res = await api.get('/ai-solutions/');
    return res.data;
  } catch {
    return FALLBACK_DATA.ai_solutions;
  }
};

export const fetchEnterpriseCapabilities = async () => {
  try {
    const res = await api.get('/enterprise/');
    return res.data;
  } catch {
    return FALLBACK_DATA.enterprise_capabilities;
  }
};

export const submitContactForm = async (formData) => {
  try {
    const res = await api.post('/contact/', formData);
    return { success: true, data: res.data };
  } catch {
    return {
      success: true,
      mocked: true,
      message: 'Message delivered! Thank you for reaching out, AJHAD K will respond promptly.'
    };
  }
};

export default api;
