// src/data/portfolioData.ts
export const projects = [
  {
    id: 1,
    title: '⚔️ Shooting Strike',
    subtitle: 'FPS PC Game',
    description: 'A 5-level first-person shooter built with Unity featuring multiple weapons, powerups, and a comprehensive scoring system.',
    technologies: ['Unity', 'C#', '3D Design', 'Game Physics'],
    link: '',
    github: '',
  },
  {
    id: 2,
    title: '🤖 Facial Attendance System',
    subtitle: 'AI-Powered Recognition',
    description: 'Python-based attendance tracking system with facial recognition ML models.',
    technologies: ['Python', 'OpenCV', 'AI/ML', 'Tkinter'],
    link: '',
    github: '',
  },
  {
    id: 3,
    title: '📱 Student Cloud',
    subtitle: 'iOS Education App',
    description: 'Comprehensive iOS application designed for student ecosystem with Firebase authentication.',
    technologies: ['Swift', 'Firebase', 'iOS SDK', 'UIKit'],
    link: '',
    github: '',
  },
  {
    id: 4,
    title: '⏰ TimeBuddy',
    subtitle: 'Time Management App',
    description: 'iOS time management application for students.',
    technologies: ['Swift', 'CoreData', 'iOS', 'UserNotifications'],
    link: '',
    github: '',
  },
];

export const certifications = [
  { id: 1, title: 'Python Programming', organization: 'Add Your Organization', year: '2024', icon: '🐍', link: '' },
  { id: 2, title: 'iOS Development', organization: 'Add Your Organization', year: '2024', icon: '📱', link: '' },
  { id: 3, title: 'Machine Learning', organization: 'Add Your Organization', year: '2024', icon: '🤖', link: '' },
  { id: 4, title: 'Unity Certified', organization: 'Add Your Organization', year: '2024', icon: '🎮', link: '' },
  { id: 5, title: 'React.js', organization: 'Add Your Organization', year: '2024', icon: '⚛️', link: '' },
  { id: 6, title: 'Firebase', organization: 'Add Your Organization', year: '2024', icon: '🔥', link: '' },
];

export const skills = {
  programming: ['Python', 'React.js', 'JavaScript', 'Swift', 'Tailwind CSS', 'Firebase', 'Unity', 'Vite', 'HTML/CSS'],
  technical: [
    'Building iOS apps in Swift with Firebase',
    'Full-stack development (React + Firebase)',
    'Facial recognition ML models in Python',
    'FPS game development in Unity',
    'Responsive web design & deployment',
  ],
  services: [
    { icon: '🖥️', title: 'PC Hardware & Assembly', description: 'Custom builds & optimization' },
    { icon: '📷', title: 'Camera Setup Services', description: 'Security & professional cameras' },
    { icon: '🏢', title: 'Office Installation', description: 'Complete workspace solutions' },
  ],
};

export const socialLinks = {
  github: 'https://github.com/MEGAMERZ',
  instagram: 'https://instagram.com/yourhandle',
  youtube: 'https://youtube.com/@yourchannel',
  linkedin: 'https://linkedin.com/in/yourprofile',
  email: 'yourmail@gmail.com',
};

export const aboutInfo = {
  education: {
    icon: '🎓',
    title: 'Education',
    primary: 'Presidency University Bangalore',
    secondary: 'Previously studied in Kuwait (K-12)',
  },
  business: {
    icon: '💼',
    title: 'Business',
    primary: 'PC Build Consultant',
    secondary: 'Camera & Office Setup Services',
  },
  interests: {
    icon: '🎯',
    title: 'Interests',
    primary: 'AI/ML, iOS Dev, Gaming',
    secondary: 'Royal Enfield, Tech YouTube',
  },
};
