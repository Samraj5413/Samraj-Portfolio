import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, BookOpen, Briefcase, User, Code, Menu, X } from 'lucide-react';
import profilepic from "./assets/profile-pic.jpg";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 300;

      sections.forEach(section => {
        if (section.offsetTop <= scrollPosition && 
            section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FFF5EE] text-gray-800">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gradient">Portfolio</h1>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 hover:text-indigo-600 transition-colors">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white/80 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none mt-2 md:mt-0 rounded-lg shadow-lg md:shadow-none`}>
              <div className="flex flex-col md:flex-row gap-2 p-4 md:p-0">
                {['home', 'about', 'skills', 'experience', 'projects'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollTo(section)}
                    className={`
                      px-6 py-2 rounded-full font-medium transition-all duration-300
                      ${activeSection === section 
                        ? 'bg-indigo-600 text-white shadow-lg transform scale-105' 
                        : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}
                    `}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-[#FFF5EE]" />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden animate-float animate-glow">
              <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={profilepic} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 slide-in">
              <span className="text-gradient">Hi, I'm SAMRAJ!</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 slide-in" style={{animationDelay: '0.2s'}}>
              I love creating and i like to code
            </p>
            <div className="flex justify-center gap-6 slide-in" style={{animationDelay: '0.4s'}}>
              <a href="https://github.com/Samraj5413/" className="hover-scale text-gray-600 hover:text-indigo-600">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/sam-raj-69033a24a/" className="hover-scale text-gray-600 hover:text-indigo-600">
                <Linkedin size={28} />
              </a>
              <a href="mailto:samraj6083@gmail.com" className="hover-scale text-gray-600 hover:text-indigo-600">
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <User className="text-indigo-600" />
            <h2 className="text-3xl font-bold text-gradient">About Me</h2>
          </div>
          <div className="max-w-3xl bg-white/50 backdrop-blur-sm p-8 rounded-2xl hover-scale shadow-lg">
            <p className="text-gray-700 text-lg leading-relaxed">
            I'm a tech enthusiast with a diverse interest in cloud computing, cybersecurity, and web development. With a foundation in Electronics and Communication Engineering, I tackle challenges with a problem-solving mindset and a passion for innovation. I thrive in dynamic environments that encourage continuous learning and exploration, whether it's working on serverless architectures, diving into ethical hacking, or experimenting with the latest tech trends.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-[#FFF5EE] via-white to-[#FFF5EE]">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-12">
            <Code className="text-indigo-600" />
            <h2 className="text-3xl font-bold text-gradient">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['React', 'JavaScript', 'Node.js', 'Express.js','Python', 'Java', 'SQL', 'Git', 'AWS', 'Flask'].map((skill, index) => (
              <div 
                key={skill}
                className="bg-white/50 backdrop-blur-sm p-6 rounded-xl hover-scale shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="font-semibold text-center text-gradient">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-12">
            <Briefcase className="text-indigo-600" />
            <h2 className="text-3xl font-bold text-gradient">Experience</h2>
          </div>
          <div className="max-w-3xl ">
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl hover-scale shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gradient">Intern Trainee</h3>
                  <p className="text-indigo-600">Base Automation Technologies</p>
                </div>
                <span className="text-gray-600 mt-2 md:mt-0">Aug - Sep 2024</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li>Assisted in the assembly and testing of control panels used in automated systems.</li>
                <li>Gained hands-on experience working with Human Machine Interfaces (HMIs) for system monitoring.</li>
                <li>Supported the integration of relays and PLCs into industrial automation solutions.</li>
                <li>Collaborated with the team to troubleshoot and ensure the smooth operation of control systems.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-[#FFF5EE] via-white to-[#FFF5EE]">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-12">
            <BookOpen className="text-indigo-600" />
            <h2 className="text-3xl font-bold text-gradient">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'URL Shortener',
                description: 'A URL shortening application built using HTML , CSS , JavaSciript , Python(Flask) , and MySQL. It allows users to shorten long URLs and provides a user-friendly interface for managing shortened links.',
                link: 'https://github.com/Samraj5413/url-shortener',
              },
              {
                title: 'Maze Game',
                description: 'A fun, interactive maze game built using only HTML, CSS, and JavaScript. This full JavaScript-based project allows users to navigate through a randomly generated maze and reach the exit.',
                link: 'https://github.com/Samraj5413/Maze-Game',
              },
            ].map((project, index) => (
              <div 
                key={project.title}
                className="bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden hover-scale shadow-lg"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-gradient">{project.title}</h3>
                  <p className="text-gray-700 mb-6">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-sm border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 SAMRAJ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;