// ============================================
// FILE: src/App.tsx
// ============================================
import { useState, useEffect } from 'react';
import { ProjectCard } from './components/ProjectCard';
import { CertificationCard } from './components/CertificationCard';
import { SkillSection } from './components/SkillSection';
import { SocialSidebar } from './components/SocialSidebar';
import { projects, certifications, skills, socialLinks, aboutInfo } from './data/portfolioData';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'certifications', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* Social Media Sidebar */}
      <SocialSidebar links={socialLinks} />

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/95 backdrop-blur-lg shadow-lg border-b border-zinc-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-300">
            MEGAMERZ
          </h1>
          <ul className="hidden md:flex gap-8">
            {['home', 'about', 'skills', 'certifications', 'projects', 'contact'].map(item => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-slate-300 transition-colors ${
                    activeSection === item ? 'text-slate-300' : 'text-zinc-400'
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black"></div>
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-zinc-500 rounded-full opacity-10"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 animate-fade-in text-slate-200">
            Hi, I'm <span className="text-slate-400">MEGAMERZ</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-4">
            Student @ Presidency University Bangalore | AI/ML Enthusiast
          </p>
          <p className="text-lg text-zinc-500 mb-8">
            iOS Developer • Python Expert • Unity Game Dev • PC Build Consultant
          </p>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-lg font-semibold transition-all duration-300 border border-zinc-700"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center text-slate-300">
            About Me
          </h2>
          <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-zinc-800">
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-6">
              Currently pursuing Computer Science at Presidency University Bangalore, after completing my schooling in Kuwait. 
              I'm passionate about AI/ML, iOS development, and creating innovative tech solutions that make a real impact.
            </p>
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-6">
              From building FPS games in Unity to developing facial recognition systems and iOS apps, I love exploring 
              the intersection of creativity and technology. I also run a PC build consultancy in Kuwait, helping clients 
              with custom builds, camera setups, and office installations.
            </p>
            <p className="text-lg text-zinc-400 mb-8">
              When I'm not coding, you'll find me exploring the iOS ecosystem, riding Royal Enfield bikes, creating tech YouTube content, 
              or designing clean, professional UIs for real-world applications.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {Object.entries(aboutInfo).map(([key, info]) => (
                <div key={key} className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                  <div className="text-4xl mb-3">{info.icon}</div>
                  <h3 className="text-xl font-bold text-slate-300 mb-2">{info.title}</h3>
                  <p className="text-zinc-400">{info.primary}</p>
                  <p className="text-sm text-zinc-500">{info.secondary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center text-slate-300">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <SkillSection title="💻 Programming" skills={skills.programming} type="grid" />
            <SkillSection title="🛠️ Technical Abilities" skills={skills.technical} type="list" />
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-3xl font-bold text-slate-300 mb-6">🔧 Hardware & Services</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {skills.services.map((service, i) => (
                <div key={i} className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:bg-zinc-800 transition-colors">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h4 className="text-lg font-bold text-slate-300 mb-2">{service.title}</h4>
                  <p className="text-zinc-400 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center text-slate-300">
            Certifications & Badges
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <CertificationCard
                key={cert.id}
                title={cert.title}
                organization={cert.organization}
                year={cert.year}
                icon={cert.icon}
                link={cert.link}
              />
            ))}
          </div>

          <div className="mt-12 bg-zinc-900/30 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800 text-center">
            <p className="text-zinc-400 text-lg">
              💡 Update your certifications in src/data/portfolioData.ts
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center text-slate-300">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
                github={project.github}
              />
            ))}
          </div>

          <div className="mt-12 bg-zinc-900/30 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-2xl font-bold text-zinc-300 mb-4">📚 Additional Projects</h3>
            <p className="text-zinc-400 mb-4">Various school and practical projects including:</p>
            <div className="grid md:grid-cols-3 gap-4">
              {['Event Reports & Documentation', 'Creative Posters & Presentations', 'CS Practical Assignments', 'Creative Writing Projects', 'GitHub Repository Management', 'Web Deployment Projects'].map(item => (
                <div key={item} className="bg-zinc-800/30 rounded-lg p-3 text-zinc-400 text-sm border border-zinc-800">
                  • {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-slate-300">
            Let's Connect
          </h2>
          <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-12 border border-zinc-800">
            <p className="text-xl text-zinc-300 mb-8">
              Interested in collaborating on a project, need PC build consultation, or just want to chat about tech? 
              Feel free to reach out!
            </p>
            
            {/* Mobile Social Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 lg:hidden">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" 
                 className="p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors">
                <div className="text-2xl mb-2">💼</div>
                <div className="text-sm text-zinc-400">GitHub</div>
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" 
                 className="p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors">
                <div className="text-2xl mb-2">📱</div>
                <div className="text-sm text-zinc-400">Instagram</div>
              </a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" 
                 className="p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors">
                <div className="text-2xl mb-2">🎥</div>
                <div className="text-sm text-zinc-400">YouTube</div>
              </a>
              <a href={`mailto:${socialLinks.email}`} 
                 className="p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors">
                <div className="text-2xl mb-2">📧</div>
                <div className="text-sm text-zinc-400">Email</div>
              </a>
            </div>

            <div className="space-y-4 mb-8">
              <a href={`mailto:${socialLinks.email}`} className="block text-lg text-zinc-300 hover:text-slate-300 transition-colors">
                📧 {socialLinks.email}
              </a>
              <p className="text-zinc-400">📍 Bangalore, India | Kuwait</p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-zinc-800">
              <p className="text-zinc-400 mb-4">🏍️ Royal Enfield Enthusiast | 🎮 FPS Gamer | 📱 iOS Ecosystem Lover</p>
              <p className="text-zinc-500 text-sm">© 2025 MEGAMERZ — All Rights Reserved</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
