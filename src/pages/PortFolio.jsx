import React, { useState, useEffect } from 'react';
import {
  Database, GithubIcon, Linkedin, Mail, Monitor, Server, Wrench,
  Menu, X, ChevronDown, Code, Layers, Zap, Award, Briefcase,
  ExternalLink, User, MapPin, Calendar, Star, ArrowRight
} from 'lucide-react';
import SkillCard from '../components/SkillCard.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProjectCard from '../components/ProjectCode.jsx';
import MyPhoto from '../assets/images/me.jpg';
import about from '../assets/images/about.png';

const PortFolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['home', 'about', 'services', 'skills', 'projects', 'contact'];
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = {
  frontend: [
    { name: 'React.js / Next.js', level: 92 },
    { name: 'JavaScript (ES6+)', level: 88 },
    { name: 'Tailwind / CSS3', level: 85 },
    { name: 'TypeScript', level: 78 }
  ],
  backend: [
    { name: 'Java / Spring Boot', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'RESTful APIs', level: 88 }
    // "Python / FastAPI" removed
  ],
  database: [
    { name: 'PostgreSQL', level: 84 },
    { name: 'MySQL', level: 86 },
    { name: 'MongoDB', level: 78 }
    // "Prisma / ORM" removed
  ],
  tools: [
    { name: 'Git / GitHub', level: 85 },
    { name: 'Vercel / Render', level: 78 },
    { name: 'Figma', level: 65 }
    // "Docker" removed
  ]
};

  const projects = [
    {
      title: 'Enterprise Expense Tracker',
      description: 'Full-stack financial management platform with real-time analytics, multi-role access, and automated reporting.',
      tech: ['React', 'Spring Boot', 'MySQL', 'JWT'],
      github: 'https://github.com/ganthantm65/expense-management-system',
      features: ['Real-time tracking', 'Advanced reporting', 'Admin dashboard', 'Budget alerts']
    },
    {
      title: 'Retail & Inventory System',
      description: 'Modern retail management solution, smart invoicing, stock tracking with detailed analytics dashboard.',
      tech: ['React', 'Spring Boot', 'PostgreSQL', 'Tailwind'],
      github: 'https://github.com/ganthantm65/inventory-retail-management',
      features: ['Inventory intelligence', 'Invoice generation', 'Supplier management', 'Sales insights']
    },
    {
      title: 'AI Resume Builder',
      description: 'AI-driven resume crafting tool with intelligent content suggestions, multiple templates and export.',
      tech: ['React', 'Spring Boot', 'PostgreSQL', 'OpenAI'],
      github: 'https://github.com/ganthantm65/ai-resume-builder',
      features: ['AI suggestions', 'Live preview', 'PDF generation', 'Cloud storage']
    },
    {
      title: 'Recipe Social Hub',
      description: 'Community-driven recipe platform with sharing, saving, ingredient discovery and personalized feeds.',
      tech: ['React', 'Spring Boot', 'MySQL', 'Redis'],
      github: 'https://github.com/ganthantm65/recipe-app',
      features: ['Social sharing', 'Ingredient tracker', 'User profiles', 'Search filters']
    }
  ];

  const services = [
    { title: "Full Stack Dev", description: "End-to-end web applications with React, Spring Boot, modern databases, and scalable APIs.", icon: <Code className="w-6 h-6" /> },
    { title: "UI/UX Engineering", description: "Crafting responsive, elegant interfaces with focus on conversion and user delight.", icon: <Layers className="w-6 h-6" /> },
    { title: "API & Integration", description: "RESTful API design, third-party integrations, microservices architecture.", icon: <Zap className="w-6 h-6" /> },
    { title: "Freelance Consulting", description: "Code reviews, performance optimization, and technical mentoring.", icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Subtle background orbs - light theme version */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-emerald-200/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-200/30 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl"></div>
      </div>

      {/* Header - Light Theme */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrollY > 30 ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={() => scrollToSection('home')} className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-violet-600 hover:opacity-90 transition">
            Ganthan<span className="text-gray-800">.dev</span>
          </button>
          
          <ul className="hidden md:flex items-center gap-7 text-sm font-medium">
            {['Home', 'About', 'Services', 'Skills', 'Projects', 'Contact'].map((item) => {
              const id = item.toLowerCase();
              return (
                <li key={item}>
                  <button onClick={() => scrollToSection(id)} className={`relative text-gray-700 hover:text-emerald-600 transition-all duration-200 ${activeSection === id ? 'text-emerald-600 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-emerald-500' : ''}`}>
                    {item}
                  </button>
                </li>
              );
            })}
            <li>
              <button onClick={() => scrollToSection('contact')} className="px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-violet-600 text-white text-sm font-semibold shadow-md hover:shadow-emerald-500/30 hover:scale-105 transition-all">
                Hire Me
              </button>
            </li>
          </ul>

          <button className="md:hidden text-gray-800 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 py-5 px-6 flex flex-col gap-4">
            {['Home', 'About', 'Services', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-gray-700 hover:text-emerald-600 text-left py-2 border-b border-gray-100 text-base">
                {item}
              </button>
            ))}
            <button onClick={() => scrollToSection('contact')} className="mt-2 bg-gradient-to-r from-emerald-500 to-violet-600 w-full py-2 rounded-full text-white font-semibold">
              Let's Talk
            </button>
          </div>
        )}
      </header>

      <main className="relative z-10">
        {/* Hero Section - Light */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 pt-28 pb-20 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="relative inline-block mb-6">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full ring-4 ring-emerald-400/40 shadow-xl overflow-hidden mx-auto bg-white">
                <img src={MyPhoto} alt="Ganthan T.M" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 rounded-full p-2 shadow-lg">
                <Code className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="space-y-5 animate-[fadeUp_0.6s_ease-out]">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="text-gray-900">Ganthan T.M</span>
                <span className="bg-gradient-to-r from-emerald-600 via-violet-600 to-amber-600 bg-clip-text text-transparent block text-2xl md:text-3xl mt-2">
                  Full Stack Developer & Freelance Engineer
                </span>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                I build modern, scalable web applications with clean architecture and elegant user experience. Available for freelance collaborations & full-stack projects.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button onClick={() => scrollToSection('projects')} className="group px-7 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-violet-600 text-white font-semibold shadow-md hover:shadow-emerald-500/30 flex items-center gap-2 transition-all hover:scale-[1.02]">
                  Explore Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>
                <button onClick={() => scrollToSection('contact')} className="px-7 py-3 rounded-full border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-all">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
            <ChevronDown className="w-7 h-7 text-emerald-500" />
          </div>
        </section>

        {/* About Section - Light */}
        <section id="about" className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm transition-all">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-2/5 relative">
                <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
                  <img src={about} alt="About workspace" className="w-full object-cover h-72 lg:h-80 hover:scale-105 transition duration-500" />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-emerald-100 backdrop-blur rounded-xl px-4 py-2 border border-emerald-300 shadow-sm">
                  <span className="text-emerald-700 font-mono text-sm">2+ Years Experience</span>
                </div>
              </div>
              <div className="lg:w-3/5 space-y-5">
                <div className="inline-flex px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold tracking-wide">✦ About Me</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Crafting code with purpose & elegance</h2>
                <p className="text-gray-600 leading-relaxed">
                  I'm a full-stack developer and freelance specialist passionate about delivering high-performance web applications. Expertise in Java, Spring Boot, React, and cloud-ready solutions. My goal is to turn complex requirements into intuitive, scalable digital products that businesses love.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-2 text-gray-700"><User className="w-5 h-5 text-emerald-600" /> <span>B.E. CSE (2023–2027)</span></div>
                  <div className="flex items-center gap-2 text-gray-700"><MapPin className="w-5 h-5 text-emerald-600" /> <span>Tirunelveli, India</span></div>
                  <div className="flex items-center gap-2 text-gray-700"><Calendar className="w-5 h-5 text-emerald-600" /> <span>Available for freelance</span></div>
                  <div className="flex items-center gap-2 text-gray-700"><Star className="w-5 h-5 text-emerald-600" /> <span>6+ open-source projects</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Light */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-mono text-sm uppercase tracking-wider bg-emerald-50 px-4 py-1.5 rounded-full">What I Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Freelance Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-3">High-quality development & tech consulting for modern businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={idx} title={service.title} description={service.description} icon={service.icon} />
            ))}
          </div>
        </section>

        {/* Skills Section - Light */}
        <section id="skills" className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-violet-600 to-amber-600 bg-clip-text text-transparent">Technical Proficiency</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2">Modern stack I use to build production-ready applications</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard heading="Frontend" skills={skills.frontend} icon={<Monitor className="w-5 h-5" />} />
            <SkillCard heading="Backend" skills={skills.backend} icon={<Server className="w-5 h-5" />} />
            <SkillCard heading="Database" skills={skills.database} icon={<Database className="w-5 h-5" />} />
            <SkillCard heading="Dev Tools" skills={skills.tools} icon={<Wrench className="w-5 h-5" />} />
          </div>
        </section>

        {/* Projects Section - Light */}
        <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <span className="text-emerald-600 text-sm font-mono bg-emerald-50 px-4 py-1 rounded-full">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Real-world solutions delivering measurable value</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </section>

        {/* Contact Section - Light */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 md:p-12 text-center shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's work together</h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">Have a project in mind or need a dedicated developer? Let's discuss how we can create something outstanding.</p>
            <div className="flex flex-wrap justify-center gap-5">
              <a href="mailto:tmganthan@gmail.com" className="inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-emerald-500 to-violet-600 rounded-2xl text-white font-medium shadow-md hover:shadow-emerald-500/30 transition-all hover:scale-105">
                <Mail size={18} /> tmganthan@gmail.com
              </a>
              <a href="https://github.com/ganthantm65/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-7 py-3.5 bg-white border border-gray-300 rounded-2xl text-gray-700 font-medium hover:bg-gray-50 transition-all">
                <GithubIcon size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ganthan-t-m" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-7 py-3.5 bg-white border border-gray-300 rounded-2xl text-gray-700 font-medium hover:bg-gray-50 transition-all">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
            <div className="mt-12 pt-6 border-t border-gray-200 text-gray-500 text-sm flex flex-wrap justify-center gap-6">
              <span>⚡ Open for freelance & full-time contracts</span>
              <span>🌍 Remote / Worldwide</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 py-8 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-6">© {new Date().getFullYear()} Ganthan T.M — Elegant full-stack solutions. All rights reserved.</div>
      </footer>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp { animation: fadeUp 0.6s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default PortFolio;