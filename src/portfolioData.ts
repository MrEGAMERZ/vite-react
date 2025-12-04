// ============================================
// FILE: src/data/portfolioData.ts
// ============================================
export const projects = [
  {
    id: 1,
    title: '⚔️ Shooting Strike',
    subtitle: 'FPS PC Game',
    description: 'A 5-level first-person shooter built with Unity featuring multiple weapons, powerups, and a comprehensive scoring system. Developed collaboratively with advanced enemy AI and immersive gameplay mechanics.',
    technologies: ['Unity', 'C#', '3D Design', 'Game Physics'],
    link: '', // Add your project link here
    github: '', // Add GitHub link if available
  },
  {
    id: 2,
    title: '🤖 Facial Attendance System',
    subtitle: 'AI-Powered Recognition',
    description: 'Python-based attendance tracking system with facial recognition ML models, intuitive GUI, and automated CSV logging. Successfully demonstrated at school science exhibition.',
    technologies: ['Python', 'OpenCV', 'AI/ML', 'Tkinter'],
    link: '',
    github: '',
  },
  {
    id: 3,
    title: '📱 Student Cloud',
    subtitle: 'iOS Education App',
    description: 'Comprehensive iOS application designed for student ecosystem with Firebase authentication, real-time data sync, and professional UI/UX. Features login system and cloud-based resource management.',
    technologies: ['Swift', 'Firebase', 'iOS SDK', 'UIKit'],
    link: '',
    github: '',
  },
  {
    id: 4,
    title: '⏰ TimeBuddy',
    subtitle: 'Time Management App',
    description: 'iOS time management application specifically designed for students to organize study schedules, track assignments, and manage academic deadlines with smart notifications and productivity insights.',
    technologies: ['Swift', 'CoreData', 'iOS', 'UserNotifications'],
    link: '',
    github: '',
  },
];

export const certifications = [
  {
    id: 1,
    title: 'Python Programming',
    organization: 'Add Your Organization',
    year: '2024',
    icon: '🐍',
    link: '', // Add certification link
  },
  {
    id: 2,
    title: 'iOS Development',
    organization: 'Add Your Organization',
    year: '2024',
    icon: '📱',
    link: '',
  },
  {
    id: 3,
    title: 'Machine Learning',
    organization: 'Add Your Organization',
    year: '2024',
    icon: '🤖',
    link: '',
  },
  {
    id: 4,
    title: 'Unity Certified',
    organization: 'Add Your Organization',
    year: '2024',
    icon: '🎮',
    link: '',
  },
  {
    id: 5,
    title: 'React.js',
    organization: 'Add Your Organization',
    year: '2024',
    icon: '⚛️',
    link: '',
  },
  {
    id: 6,
    title: 'Firebase',
    organization: 'Add Your Organization',
    year: '2024',
    icon: '🔥',
    link: '',
  },
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

// ============================================
// FILE: src/components/ProjectCard.tsx
// ============================================
interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export function ProjectCard({ title, subtitle, description, technologies, link, github }: ProjectCardProps) {
  return (
    <div className="group bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all">
      <h3 className="text-2xl font-bold mb-2 text-slate-300">{title}</h3>
      <p className="text-slate-400 text-sm font-semibold mb-4">{subtitle}</p>
      <p className="text-zinc-400 mb-6 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map(tech => (
          <span key={tech} className="px-3 py-1 bg-zinc-800/50 text-zinc-400 rounded-full text-sm border border-zinc-700">
            {tech}
          </span>
        ))}
      </div>
      
      {(link || github) && (
        <div className="flex gap-3 mt-4">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" 
               className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm transition-colors">
              View Project
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" 
               className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm transition-colors">
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
}

// ============================================
// FILE: src/components/CertificationCard.tsx
// ============================================
interface CertificationCardProps {
  title: string;
  organization: string;
  year: string;
  icon: string;
  link?: string;
}

export function CertificationCard({ title, organization, year, icon, link }: CertificationCardProps) {
  const CardContent = () => (
    <>
      <div className="flex items-start justify-between mb-4">
        <div className="text-5xl">{icon}</div>
        <span className="text-xs text-zinc-500 bg-zinc-800 px-3 py-1 rounded-full">{year}</span>
      </div>
      <h3 className="text-xl font-bold text-slate-300 mb-2 group-hover:text-slate-200 transition-colors">
        {title}
      </h3>
      <p className="text-zinc-400 text-sm">{organization}</p>
    </>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer"
         className="block bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all group">
        <CardContent />
      </a>
    );
  }

  return (
    <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all group">
      <CardContent />
    </div>
  );
}

// ============================================
// FILE: src/components/SkillSection.tsx
// ============================================
interface SkillSectionProps {
  title: string;
  skills: string[];
  type?: 'grid' | 'list';
}

export function SkillSection({ title, skills, type = 'grid' }: SkillSectionProps) {
  return (
    <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800">
      <h3 className="text-3xl font-bold text-slate-300 mb-6">{title}</h3>
      {type === 'grid' ? (
        <div className="grid grid-cols-2 gap-3">
          {skills.map(skill => (
            <div key={skill} className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 text-center hover:bg-zinc-800 transition-colors">
              <span className="text-zinc-300 font-medium text-sm">{skill}</span>
            </div>
          ))}
        </div>
      ) : (
        <ul className="space-y-3 text-zinc-300">
          {skills.map(skill => (
            <li key={skill} className="flex items-start gap-3">
              <span className="text-slate-400 mt-1">▹</span>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ============================================
// FILE: src/components/SocialSidebar.tsx
// ============================================
interface SocialLink {
  href: string;
  title: string;
  icon: JSX.Element;
}

interface SocialSidebarProps {
  links: {
    github: string;
    instagram: string;
    youtube: string;
    linkedin: string;
    email: string;
  };
}

export function SocialSidebar({ links }: SocialSidebarProps) {
  const socialLinks: SocialLink[] = [
    {
      href: links.github,
      title: 'GitHub',
      icon: (
        <svg className="w-6 h-6 text-zinc-400 group-hover:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      href: links.instagram,
      title: 'Instagram',
      icon: (
        <svg className="w-6 h-6 text-zinc-400 group-hover:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      href: links.youtube,
      title: 'YouTube',
      icon: (
        <svg className="w-6 h-6 text-zinc-400 group-hover:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      href: `mailto:${links.email}`,
      title: 'Email',
      icon: (
        <svg className="w-6 h-6 text-zinc-400 group-hover:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      href: links.linkedin,
      title: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6 text-zinc-400 group-hover:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-4 bg-zinc-900/80 backdrop-blur-sm p-3 rounded-r-xl border-r border-zinc-700">
        {socialLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target={link.title !== 'Email' ? '_blank' : undefined}
            rel={link.title !== 'Email' ? 'noopener noreferrer' : undefined}
            className="p-3 hover:bg-zinc-800 rounded-lg transition-colors group"
            title={link.title}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
