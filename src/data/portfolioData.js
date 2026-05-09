import {
  FaReact, FaPython, FaHtml5, FaJs,
} from 'react-icons/fa'
import {
  SiMongodb, SiMysql, SiFastapi,
  SiScikitlearn, SiPandas,
} from 'react-icons/si'

export const personalInfo = {
  name: 'Rithika',
  role: 'AI & Full Stack Developer',
  taglines: [
    'Building Intelligent Systems',
    'Turning Data Into Decisions',
    'Crafting Scalable Solutions',
  ],
  bio: 'Passionate Full Stack Developer and AI enthusiast focused on building modern, responsive, and intelligent web applications. I enjoy creating clean user experiences, solving real-world problems, and exploring futuristic technologies through innovative and user-friendly digital solutions.',
  email: 'rithikacg2006@gmail.com',
  location: 'India',
  resumeLink: '/Rithika%20Resume.pdf',
  stats: [
    { label: 'Projects Built', value: '8+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Hackathons', value: '1+' },
  ],
  social: {
    github: 'https://github.com/Rithika-Chandrasekaran',
    linkedin: 'https://www.linkedin.com/in/rithika-c/',
  },
}

export const skillGroups = [
  {
    title: 'AI & Machine Learning',
    gradient: 'from-rose-500 to-violet-600',
    skills: [
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'Machine Learning', icon: SiScikitlearn, color: '#F7931E' },
      { name: 'Data Analytics', icon: SiPandas, color: '#150458' },
      { name: 'Pandas & NumPy', icon: SiPandas, color: '#150458' },
    ],
  },
  {
    title: 'Frontend',
    gradient: 'from-violet-600 to-cyan-400',
    skills: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
      { name: 'HTML & CSS', icon: FaHtml5, color: '#E34F26' },
    ],
  },
  {
    title: 'Backend & Databases',
    gradient: 'from-cyan-400 to-rose-500',
    skills: [
      { name: 'FastAPI / Flask', icon: SiFastapi, color: '#009688' },
      { name: 'REST APIs', icon: SiFastapi, color: '#009688' },
      { name: 'SQL / MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
  },
]

export const projects = [
  {
    title: 'Hype to Flop Predictor',
    description: 'Designed a web-based prediction system that determines whether a product will hype or flop by analyzing Amazon, Flipkart, and social media reviews using sentiment analysis and machine learning model evaluation.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['Python', 'Web Scraping', 'Machine Learning', 'Sentiment Analysis'],
    category: 'ML',
    github: '#',
    live: '#',
    gradient: 'from-rose-500 to-violet-600',
  },
  {
    title: 'Chronocare Web App',
    description: 'Built a personal wellness platform that allows users to track mood, symptoms, water intake, and diet habits, featuring a clean user interface and basic authentication for personalized tracking.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&h=400&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask'],
    category: 'Web',
    github: '#',
    live: '#',
    gradient: 'from-violet-600 to-cyan-400',
  },
  {
    title: 'BillSnap',
    description: 'Developed a web application that extracts bill details from uploaded images using OCR and automatically categorizes items into spending groups such as groceries and snacks for easier expense tracking.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tags: ['Python', 'OCR', 'Web Application', 'Expense Tracking'],
    category: 'Web',
    github: '#',
    live: '#',
    gradient: 'from-cyan-400 to-rose-500',
  },
  {
    title: 'Calendar Booking System',
    description: 'Implemented a scheduling application to manage event bookings by detecting overlapping time slots using interval-based logic and providing a smooth booking experience.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop',
    tags: ['Python', 'Data Structures', 'Web Application', 'Algorithms'],
    category: 'Web',
    github: '#',
    live: '#',
    gradient: 'from-amber-500 to-rose-500',
  },
  {
    title: 'Data Drift Detector',
    description: 'Developed a web-based system to detect data drift in machine learning models using statistical tests and feature-wise analysis. Visualizes distribution changes and monitors model performance in real-world environments.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['Python', 'React', 'FastAPI', 'Scikit-learn', 'MongoDB'],
    category: 'ML',
    github: '#',
    live: '#',
    gradient: 'from-rose-500 to-cyan-400',
  },
  {
    title: 'Supply Chain Risk Analytics',
    description: 'Developed a data-driven platform to monitor, analyze, and predict supply chain risks such as delays, supplier failures, and transportation disruptions with real-time alerts and data visualization.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    tags: ['SQL', 'DBMS', 'Data Analytics', 'Reporting'],
    category: 'Web',
    github: '#',
    live: '#',
    gradient: 'from-violet-600 to-amber-500',
  },
  {
    title: 'AI Vehicle Monitoring & Collision Prediction',
    description: 'Developed an AI-based safety system using Arduino and ultrasonic sensors to monitor vehicle distance and speed in real time and predict possible collisions with emergency alerts.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop',
    tags: ['Arduino', 'Embedded C', 'Ultrasonic Sensor', 'IoT'],
    category: 'IoT',
    github: '#',
    live: '#',
    gradient: 'from-cyan-400 to-violet-600',
  },
  {
    title: 'Smart Complaint & Resolution Tracking',
    description: 'Developed a full-stack web application for efficient complaint management and resolution tracking with user submissions, status tracking, and admin dashboard for centralized issue resolution.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
    tags: ['React', 'Vite', 'FastAPI', 'MySQL', 'REST API'],
    category: 'Web',
    github: '#',
    live: '#',
    gradient: 'from-rose-500 to-amber-500',
  },
]

export const projectCategories = [
  { id: 'all', label: 'All' },
  { id: 'ML', label: 'AI/ML' },
  { id: 'Web', label: 'Web Dev' },
  { id: 'IoT', label: 'IoT' },
]

export const experience = [
  {
    role: 'Full Stack Development Intern',
    company: 'Techforge, Salem',
    period: '2025 - 2026',
    description: 'Worked on developing responsive and scalable web applications using modern frontend and backend technologies. Gained practical experience in API integration, database management, UI/UX development, and real-world software development workflows.',
    type: 'work',
  },
  {
    role: 'B.Tech - Artificial Intelligence & Data Science',
    company: 'KPR Institute of Engineering and Technology, Coimbatore',
    period: '2024 - 2028',
    description: 'CGPA: 8.71/10',
    type: 'education',
  },
  {
    role: 'Higher Secondary (HSC)',
    company: 'Salem District Government Model School, Salem',
    period: '2023 - 2024',
    description: 'Percentage: 89.17%',
    type: 'education',
  },
  {
    role: 'Secondary School (SSLC)',
    company: 'Government Higher Secondary School, Salem',
    period: '2021 - 2022',
    description: 'Percentage: 93.4%',
    type: 'education',
  },
]
