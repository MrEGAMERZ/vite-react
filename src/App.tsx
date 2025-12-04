import { useState, useEffect } from 'react';

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
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col gap-4 bg-zinc-900/80 backdrop-blur-sm p-3 rounded-r-xl border-r border-zinc-700">
          <a href="https://github.com/MEGAMERZ" target="_blank" rel="noopener noreferrer" 
             className="p-3 hover:bg-zinc-800 rounded-lg transition-colors group" title="GitHub">
            <svg className="w-6 h-6 text-zinc-400 group-hover:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" 
             className="p-3 hover:bg-zinc-800 rounded-lg transition-colors group" title="Instagram">
            <svg className="w-6 h-6 text-zinc-400 group-hover:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" 
             className="p-3 hover:bg-zinc-800 rounded-lg transition-colors group" title="YouTube">
            <svg className="w-6 h-6 text-zinc-400 group-hover:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a href="mailto:yourmail@gmail.com" 
             className="p-3 hover:bg-zinc-800 rounded-lg transition-colors group" title="Email">
            <svg className="w-6 h-6 text-zinc-400 group-hover:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" 
             className="p-3 hover:bg-zinc-800 rounded-lg transition-colors group" title="LinkedIn">
            <svg className="w-6 h-6 text-zinc-400 group-hover:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

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
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="text-xl font-bold text-slate-300 mb-2">Education</h3>
                <p className="text-zinc-400">Presidency University Bangalore</p>
                <p className="text-sm text-zinc-500">Previously studied in Kuwait (K-12)</p>
              </div>
              
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="text-4xl mb-3">💼</div>
                <h3 className="text-xl font-bold text-slate-300 mb-2">Business</h3>
                <p className="text-zinc-400">PC Build Consultant</p>
                <p className="text-sm text-zinc-500">Camera & Office Setup Services</p>
              </div>
              
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-xl font-bold text-slate-300 mb-2">Interests</h3>
                <p className="text-zinc-400">AI/ML, iOS Dev, Gaming</p>
                <p className="text-sm text-zinc-500">Royal Enfield, Tech YouTube</p>
              </div>
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
            <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800">
              <h3 className="text-3xl font-bold text-slate-300 mb-6">💻 Programming</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Python', 'React.js', 'JavaScript', 'Swift', 'Tailwind CSS', 'Firebase', 'Unity', 'Vite', 'HTML/CSS'].map(skill => (
                  <div key={skill} className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 text-center hover:bg-zinc-800 transition-colors">
                    <span className="text-zinc-300 font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800">
              <h3 className="text-3xl font-bold text-slate-300 mb-6">🛠️ Technical Abilities</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">▹</span>
                  <span>Building iOS apps in Swift with Firebase</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">▹</span>
                  <span>Full-stack development (React + Firebase)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">▹</span>
                  <span>Facial recognition ML models in Python</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">▹</span>
                  <span>FPS game development in Unity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">▹</span>
                  <span>Responsive web design & deployment</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-3xl font-bold text-slate-300 mb-6">🔧 Hardware & Services</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: '🖥️', title: 'PC Hardware & Assembly', desc: 'Custom builds & optimization' },
                { icon: '📷', title: 'Camera Setup Services', desc: 'Security & professional cameras' },
                { icon: '🏢', title: 'Office Installation', desc: 'Complete workspace solutions' }
              ].map((service, i) => (
                <div key={i} className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:bg-zinc-800 transition-colors">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h4 className="text-lg font-bold text-slate-300 mb-2">{service.title}</h4>
                  <p className="text-zinc-400 text-sm">{service.desc}</p>
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
            {[
              { title: 'Python Programming', org: 'Add Your Organization', year: '2024', icon: '🐍' },
              { title: 'iOS Development', org: 'Add Your Organization', year: '2024', icon: '📱' },
              { title: 'Machine Learning', org: 'Add Your Organization', year: '2024', icon: '🤖' },
              { title: 'Unity Certified', org: 'Add Your Organization', year: '2024', icon: '🎮' },
              { title: 'React.js', org: 'Add Your Organization', year: '2024', icon: '⚛️' },
              { title: 'Firebase', org: 'Add Your Organization', year: '2024', icon: '🔥' }
            ].map((cert, i) => (
              <div key={i} className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{cert.icon}</div>
                  <span className="text-xs text-zinc-500 bg-zinc-800 px-3 py-1 rounded-full">{cert.year}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-300 mb-2 group-hover:text-slate-200 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-zinc-400 text-sm">{cert.org}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-zinc-900/30 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800 text-center">
            <p className="text-zinc-400 text-lg">
              💡 Replace these with your actual certifications from platforms like Coursera, Udemy, Apple Developer, Unity Learn, etc.
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
            {[
              {
                title: '⚔️ Shooting Strike',
                subtitle: 'FPS PC Game',
                desc: 'A 5-level first-person shooter built with Unity featuring multiple weapons, powerups, and a comprehensive scoring system. Developed collaboratively with advanced enemy AI and immersive gameplay mechanics.',
                tech: ['Unity', 'C#', '3D Design', 'Game Physics']
              },
              {
                title: '🤖 Facial Attendance System',
                subtitle: 'AI-Powered Recognition',
                desc: 'Python-based attendance tracking system with facial recognition ML models, intuitive GUI, and automated CSV logging. Successfully demonstrated at school science exhibition.',
                tech: ['Python', 'OpenCV', 'AI/ML', 'Tkinter']
              },
              {
                title: '📱 Student Cloud',
                subtitle: 'iOS Education App',
                desc: 'Comprehensive iOS application designed for student ecosystem with Firebase authentication, real-time data sync, and professional UI/UX. Features login system and cloud-based resource management.',
                tech: ['Swift', 'Firebase', 'iOS SDK', 'UIKit']
              },
              {
                title: '⏰ TimeBuddy',
                subtitle: 'Time Management App',
                desc: 'iOS time management application specifically designed for students to organize study schedules, track assignments, and manage academic deadlines with smart notifications and productivity insights.',
                tech: ['Swift', 'CoreData', 'iOS', 'UserNotifications']
              }
            ].map((project, i) => (
              <div key={i} className="group bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all">
                <h3 className="text-2xl font-bold mb-2 text-slate-300">{project.title}</h3>
                <p className="text-slate-400 text-sm font-semibold mb-4">{project.subtitle}</p>
                <p className="text-zinc-400 mb-6 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-zinc-800/50 text-zinc-400 rounded-full text-sm border border-zinc-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
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
              <a href="https://github.com/MEGAMERZ" target="_blank" rel="noopener noreferrer" 
                 className="p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors">
                <div className="text-2xl mb-2">💼</div>
                <div className="text-sm text-zinc-400">GitHub</div>
              </a>
              <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" 
                 className="p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors">
                <div className="text-2xl mb-2">📱</div>
                <div className="text-sm text-zinc-400">Instagram</div>
              </a>
              <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" 
                 className="p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors">
                <div className="text-2xl mb-2">🎥</div>
                <div className="text-sm text-zinc-400">YouTube</div>
              </a>
              <a href="mailto:yourmail@gmail.com" 
                 className="p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors">
                <div className="text-2xl mb-2">📧</div>
                <div className="text-sm text-zinc-400">Email</div>
              </a>
            </div>

            <div className="space-y-4 mb-8">
              <a href="mailto:yourmail@gmail.com" className="block text-lg text-zinc-300 hover:text-slate-300 transition-colors">
                📧 yourmail@gmail.com
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
