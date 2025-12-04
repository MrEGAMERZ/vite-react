import { useState, useEffect } from 'react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
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

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            MEGAMERZ
          </h1>
          <ul className="hidden md:flex gap-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map(item => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-blue-400 transition-colors ${
                    activeSection === item ? 'text-blue-400' : ''
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-20"
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
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 animate-fade-in">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">MEGAMERZ</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Student @ Presidency University Bangalore | AI/ML Enthusiast
          </p>
          <p className="text-lg text-gray-400 mb-8">
            iOS Developer • Python Expert • Unity Game Dev • PC Build Consultant • Building innovative solutions
          </p>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-bold hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/50"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-blue-500/30 shadow-2xl">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Currently pursuing Computer Science at Presidency University Bangalore, after completing my schooling in Kuwait. 
              I'm passionate about AI/ML, iOS development, and creating innovative tech solutions that make a real impact.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              From building FPS games in Unity to developing facial recognition systems and iOS apps, I love exploring 
              the intersection of creativity and technology. I also run a PC build consultancy in Kuwait, helping clients 
              with custom builds, camera setups, and office installations.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              When I'm not coding, you'll find me exploring the iOS ecosystem, riding Royal Enfield bikes, creating tech YouTube content, 
              or designing clean, professional UIs for real-world applications.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Education</h3>
                <p className="text-gray-400">Presidency University Bangalore</p>
                <p className="text-sm text-gray-500">Previously studied in Kuwait (K-12)</p>
              </div>
              
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                <div className="text-4xl mb-3">💼</div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Business</h3>
                <p className="text-gray-400">PC Build Consultant</p>
                <p className="text-sm text-gray-500">Camera & Office Setup Services</p>
              </div>
              
              <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-6">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-xl font-bold text-pink-400 mb-2">Interests</h3>
                <p className="text-gray-400">AI/ML, iOS Dev, Gaming</p>
                <p className="text-sm text-gray-500">Royal Enfield, Tech YouTube</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/10 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30">
              <h3 className="text-3xl font-bold text-blue-400 mb-6">💻 Programming</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Python', 'React.js', 'JavaScript', 'Swift', 'Tailwind CSS', 'Firebase', 'Unity', 'Vite', 'HTML/CSS'].map(skill => (
                  <div key={skill} className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 text-center hover:bg-blue-500/20 transition-colors">
                    <span className="text-blue-300 font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-purple-900/10 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30">
              <h3 className="text-3xl font-bold text-purple-400 mb-6">🛠️ Technical Abilities</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Building iOS apps in Swift with Firebase</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Full-stack development (React + Firebase)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Facial recognition ML models in Python</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>FPS game development in Unity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Responsive web design & deployment</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-900/20 to-pink-900/10 backdrop-blur-xl rounded-3xl p-8 border border-pink-500/30">
            <h3 className="text-3xl font-bold text-pink-400 mb-6">🔧 Hardware & Services</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: '🖥️', title: 'PC Hardware & Assembly', desc: 'Custom builds & optimization' },
                { icon: '📷', title: 'Camera Setup Services', desc: 'Security & professional cameras' },
                { icon: '🏢', title: 'Office Installation', desc: 'Complete workspace solutions' }
              ].map((service, i) => (
                <div key={i} className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-6 hover:bg-pink-500/20 transition-colors">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h4 className="text-lg font-bold text-pink-300 mb-2">{service.title}</h4>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: '⚔️ Shooting Strike',
                subtitle: 'FPS PC Game',
                desc: 'A 5-level first-person shooter built with Unity featuring multiple weapons, powerups, and a comprehensive scoring system. Developed collaboratively with advanced enemy AI and immersive gameplay mechanics.',
                tech: ['Unity', 'C#', '3D Design', 'Game Physics'],
                gradient: 'from-red-500 to-orange-500'
              },
              {
                title: '🤖 Facial Attendance System',
                subtitle: 'AI-Powered Recognition',
                desc: 'Python-based attendance tracking system with facial recognition ML models, intuitive GUI, and automated CSV logging. Successfully demonstrated at school science exhibition.',
                tech: ['Python', 'OpenCV', 'AI/ML', 'Tkinter'],
                gradient: 'from-green-500 to-teal-500'
              },
              {
                title: '📱 Student Cloud',
                subtitle: 'iOS Education App',
                desc: 'Comprehensive iOS application designed for student ecosystem with Firebase authentication, real-time data sync, and professional UI/UX. Features login system and cloud-based resource management.',
                tech: ['Swift', 'Firebase', 'iOS SDK', 'UIKit'],
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: '⏰ TimeBuddy',
                subtitle: 'Time Management App',
                desc: 'iOS time management application specifically designed for students to organize study schedules, track assignments, and manage academic deadlines with smart notifications and productivity insights.',
                tech: ['Swift', 'CoreData', 'iOS', 'UserNotifications'],
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((project, i) => (
              <div key={i} className="group bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} mb-6 group-hover:scale-110 transition-transform flex items-center justify-center text-3xl`}>
                  {project.title.charAt(0)}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-purple-400 text-sm font-semibold mb-4">{project.subtitle}</p>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-gray-300 mb-4">📚 Additional Projects</h3>
            <p className="text-gray-400 mb-4">Various school and practical projects including:</p>
            <div className="grid md:grid-cols-3 gap-4">
              {['Event Reports & Documentation', 'Creative Posters & Presentations', 'CS Practical Assignments', 'Creative Writing Projects', 'GitHub Repository Management', 'Web Deployment Projects'].map(item => (
                <div key={item} className="bg-gray-800/50 rounded-lg p-3 text-gray-400 text-sm border border-gray-700">
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
          <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-xl rounded-3xl p-12 border border-blue-500/30 shadow-2xl">
            <p className="text-xl text-gray-300 mb-8">
              Interested in collaborating on a project, need PC build consultation, or just want to chat about tech? 
              Feel free to reach out!
            </p>
            <div className="space-y-6 mb-8">
              <a href="mailto:yourmail@gmail.com" className="block text-xl text-gray-300 hover:text-blue-400 transition-colors">
                📧 yourmail@gmail.com
              </a>
              <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="block text-xl text-gray-300 hover:text-pink-400 transition-colors">
                📱 Instagram: @yourhandle
              </a>
              <a href="https://github.com/MEGAMERZ" target="_blank" rel="noopener noreferrer" className="block text-xl text-gray-300 hover:text-purple-400 transition-colors">
                💼 GitHub: MEGAMERZ
              </a>
              <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" className="block text-xl text-gray-300 hover:text-red-400 transition-colors">
                🎥 YouTube: Tech & Unboxing Content
              </a>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-gray-400 mb-4">🏍️ Royal Enfield Enthusiast | 🎮 FPS Gamer | 📱 iOS Ecosystem Lover</p>
              <p className="text-gray-500 text-sm">© 2025 MEGAMERZ — All Rights Reserved</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
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
