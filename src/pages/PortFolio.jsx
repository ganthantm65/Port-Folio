import React, { useState, useEffect } from 'react'
import { Database, GithubIcon, Linkedin, Mail, Monitor, Server, ToolCaseIcon, Menu, X, ChevronDown } from 'lucide-react'
import SkillCard from '../components/SkillCard'
import MyPhoto from '../assets/images/me.jpg'
import about from '../assets/images/about.png'


const PortFolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const skills = {
    frontend: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML/CSS', level: 80 },
      { name: 'Tailwind CSS', level: 85 }
    ],
    backend: [
      { name: 'Java', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'FastAPI', level: 75 }
    ],
    database: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 }
    ],
    tools: [
      { name: 'Docker', level: 75 },
      { name: 'Git/GitHub', level: 85 },
      { name: 'Render', level: 70 }
    ]
  }

  const projects = [
    {
      title: 'Enterprise Expense Tracker',
      description: 'A comprehensive expense management system for enterprises with real-time tracking, reporting, and analytics capabilities.',
      tech: ['React', 'Spring Boot', 'MySQL'],
      github: 'https://github.com/ganthantm65/expense-management-system',
      features: ['Real-time tracking', 'Advanced reporting', 'User management', 'Analytics dashboard']
    },
    {
      title: 'Inventory and Retail Management',
      description: 'Modern retail billing solution with inventory management, invoice generation, and customer management features.',
      tech: ['React', 'Spring Boot', 'PostgreSQL'],
      github: 'https://github.com/ganthantm65/inventory-retail-management',
      features: ['Inventory management', 'Invoice generation', 'Customer database', 'Sales analytics']
    },
    {
      title: 'AI Resume Builder',
      description: 'Intelligent resume builder powered by AI that helps users create professional resumes with smart suggestions.',
      tech: ['React', 'Spring Boot', 'PostgreSQL'],
      github: 'https://github.com/ganthantm65/ai-resume-builder',
      features: ['AI-powered suggestions', 'Multiple templates', 'Real-time preview', 'PDF export']
    },
    {
      title: 'Recipe App',
      description: 'Social recipe sharing platform where users can discover, save, and share their favorite recipes with the community.',
      tech: ['React', 'Spring Boot', 'MySQL'],
      github: 'https://github.com/ganthantm65/recipe-app',
      features: ['Recipe discovery', 'Social sharing', 'Ingredient tracking', 'User profiles']
    }
  ]

  return (
    <div className='w-screen min-h-screen relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-x-hidden'>
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <header className={`w-full h-20 fixed flex items-center justify-between px-6 py-4 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-slate-900/90 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}>
        <h1 className='text-white text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
          Portfolio
        </h1>
        
        <ul className='hidden md:flex items-center gap-8'>
          {['home', 'about', 'skills', 'projects'].map((section) => (
            <li 
              key={section}
              onClick={() => scrollToSection(section)}
              className='cursor-pointer text-white hover:text-cyan-400 transition-all duration-300 hover:scale-105 capitalize font-medium'
            >
              {section}
            </li>
          ))}
          <li 
            onClick={() => scrollToSection('contact me')}
            className='cursor-pointer px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30'
          >
            Contact
          </li>
        </ul>

        <button 
          className='md:hidden text-white p-2'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className='absolute top-20 left-0 w-full bg-slate-900/95 backdrop-blur-lg border-b border-white/10 md:hidden'>
            <ul className='flex flex-col items-center py-4 gap-4'>
              {['home', 'about', 'skills', 'projects', 'contact me'].map((section) => (
                <li 
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className='cursor-pointer text-white hover:text-cyan-400 transition capitalize'
                >
                  {section}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <section id='home' className='w-full min-h-screen flex flex-col items-center justify-center gap-8 px-4 relative'>
        <div className='animate-fadeInUp'>
          <div className='relative group'>
            <img 
              src={MyPhoto} 
              className='w-48 h-48 md:w-56 md:h-56 rounded-full shadow-2xl border-4 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 group-hover:scale-105' 
            />
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
          </div>
        </div>
        
        <div className='text-center space-y-4 animate-fadeInUp delay-200'>
          <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent'>
            Ganthan T.M
          </h1>
          <h2 className='text-2xl md:text-3xl text-cyan-300 font-light'>
            Aspiring Full Stack Developer
          </h2>
          <p className='text-white/80 text-lg max-w-2xl mx-auto leading-relaxed'>
            Passionate about creating innovative web solutions with modern technologies and clean, maintainable code
          </p>
        </div>

        <div className='flex flex-col sm:flex-row items-center gap-4 animate-fadeInUp delay-400'>
          <a 
            href='https://github.com/ganthantm65/' 
            target='_blank' 
            rel="noopener noreferrer" 
            className='group px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300 font-medium flex items-center gap-2'
          >
            <GithubIcon className='w-5 h-5 group-hover:rotate-12 transition-transform' />
            Visit My Profile
          </a>
          <button 
            onClick={() => scrollToSection('contact me')}
            className='px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-white transition-all duration-300 font-medium hover:scale-105'
          >
            Contact Me
          </button>
        </div>

        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <ChevronDown className='w-8 h-8 text-cyan-400' />
        </div>
      </section>

      <section id="about" className='w-full flex justify-center px-4 py-20'>
        <div className='w-full max-w-6xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8'>
          <h1 className='text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent'>
            About Me
          </h1>
          <div className='flex flex-col lg:flex-row items-center gap-12'>
            <div className='flex-shrink-0'>
              <img 
                src={about} 
                alt="About" 
                className='w-80 h-60 object-cover rounded-2xl shadow-2xl border border-white/20 hover:scale-105 transition-transform duration-300' 
              />
            </div>
            <div className='flex-1 space-y-6'>
              <p className='text-white/90 text-lg leading-relaxed'>
                I'm a full-stack developer with expertise in Java, Spring Boot, React, and PostgreSQL. I enjoy building secure, scalable, and user-focused web applications. My strengths lie in writing clean, maintainable code and designing efficient backend systems.
              </p>
              <p className='text-white/90 text-lg leading-relaxed'>
                I'm passionate about learning new technologies and solving real-world problems through thoughtful engineering. Currently pursuing an engineering degree at Government College of Engineering, Tirunelveli (2023–2027).
              </p>
              <div className='flex flex-wrap gap-3 mt-6'>
                {['Full Stack', 'Clean Code', 'Problem Solving', 'Team Player'].map((trait, index) => (
                  <span 
                    key={index}
                    className='px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 rounded-full text-sm font-medium'
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='skills' className='w-full flex flex-col items-center gap-12 px-4 py-20'>
        <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent text-center'>
          Skills & Expertise
        </h1>
        <div className='w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <SkillCard heading={"Frontend"} skills={skills.frontend} icon={<Monitor className='w-6 h-6 text-cyan-500' />} />
          <SkillCard heading={"Backend"} skills={skills.backend} icon={<Server className='w-6 h-6 text-cyan-500' />} />
          <SkillCard heading={"Database"} skills={skills.database} icon={<Database className='w-6 h-6 text-cyan-500' />} />
          <SkillCard heading={"Tools"} skills={skills.tools} icon={<ToolCaseIcon className='w-6 h-6 text-cyan-500' />} />
        </div>
      </section>

      <section id='projects' className='w-full flex flex-col items-center gap-12 px-4 py-20'>
        <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent text-center'>
          Featured Projects
        </h1>
        <div className='w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <div key={index} className='group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20'>
              <div className='space-y-6'>
                <h2 className='text-2xl text-white font-bold group-hover:text-cyan-300 transition-colors'>
                  {project.title}
                </h2>
                <p className='text-white/80 text-base leading-relaxed'>
                  {project.description}
                </p>
                
                <div className='space-y-4'>
                  <div>
                    <p className='text-lg font-semibold text-cyan-300 mb-3'>Tech Stack</p>
                    <div className='flex flex-wrap gap-2'>
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className='bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-200 px-3 py-1 rounded-full text-sm font-medium'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className='text-lg font-semibold text-cyan-300 mb-3'>Key Features</p>
                    <div className='grid grid-cols-2 gap-2'>
                      {project.features.map((feature, i) => (
                        <div key={i} className='flex items-center gap-2'>
                          <div className='w-2 h-2 bg-cyan-400 rounded-full'></div>
                          <span className='text-white/70 text-sm'>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:scale-105 transition-all duration-300 font-medium hover:shadow-lg hover:shadow-cyan-500/30'
                >
                  <GithubIcon className='w-5 h-5' />
                  View Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section id='contact me' className='w-full flex flex-col items-center gap-12 px-4 py-20'>
        <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent text-center'>
          Let's Connect
        </h1>
        <p className='text-white/80 text-lg text-center max-w-2xl'>
          Ready to collaborate on exciting projects or discuss opportunities? I'd love to hear from you!
        </p>
        <div className='flex flex-col sm:flex-row gap-6'>
          <a 
            href="mailto:tmganthan@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='group flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30'
          >
            <Mail className='w-6 h-6 group-hover:animate-pulse' />
            <span className='font-medium'>Send Email</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/ganthan-t-m" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='group flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30'
          >
            <Linkedin className='w-6 h-6 group-hover:animate-pulse' />
            <span className='font-medium'>LinkedIn</span>
          </a>
        </div>
      </section>

      <footer className='w-full bg-gradient-to-r from-slate-900 to-blue-900 border-t border-white/10 px-6 py-8'>
        <div className='max-w-6xl mx-auto text-center'>
          <p className='text-white/60'>
            © {new Date().getFullYear()} Ganthan T.M — Crafted with passion and modern web technologies
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  )
}

export default PortFolio