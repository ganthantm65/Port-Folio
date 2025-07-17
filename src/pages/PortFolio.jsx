import React from 'react'
import about from "../assets/images/about.png"
import MyPhoto from "../assets/images/me.jpg"
import SkillCard from '../components/SkillCard'
import { Database, GithubIcon, Linkedin, Mail, Monitor, Server, ToolCaseIcon } from 'lucide-react'

const PortFolio = () => {
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
    <div className='w-screen min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-slate-900 to-indigo-900 overflow-y-auto gap-20'>
      <header className='w-full h-20 fixed flex flex-col flex-row items-center bg-slate-900 justify-between px-6 py-4 z-50 '>
        <h1 className='text-white text-2xl font-bold'>Port Folio</h1>
        <ul className={`text-white text-xl hidden md:flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 mt-3 md:mt-0 `}>
          <li 
          onClick={()=>{document.getElementById("home").scrollIntoView({behavior:"smooth"})}}
          className='cursor-pointer hover:text-cyan-400 transition'>Home</li>
          <li 
          onClick={()=>{document.getElementById("about").scrollIntoView({behavior:"smooth"})}}
          className='cursor-pointer hover:text-cyan-400 transition'>About</li>
          <li 
          onClick={()=>{document.getElementById("skills").scrollIntoView({behavior:"smooth"})}}
          className='cursor-pointer hover:text-cyan-400 transition'>Skills</li>
          <li 
          onClick={()=>{document.getElementById("projects").scrollIntoView({behavior:"smooth"})}}
          className='cursor-pointer hover:text-cyan-400 transition'>Projects</li>
        </ul>
      </header>

      <section id='home' className='w-full flex flex-col items-center justify-evenly gap-5 mt-35 px-4'>
        <img src={MyPhoto} className='w-50 h-50 md:w-54 md:h-54 rounded-full shadow-lg ' />
        <h1 className='text-4xl text-sky-400 font-bold text-center'>Ganthan T.M</h1>
        <h2 className='text-2xl text-sky-400 text-center'>Aspiring Full Stack Developer</h2>
        <p className='text-white text-lg max-w-2xl mx-auto text-center'>
          Passionate about creating innovative web solutions with modern technologies
        </p>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-3'>
          <a href='https://github.com/ganthantm65/' target='_blank' rel="noopener noreferrer" className='cursor-pointer px-5 py-2 text-center bg-gradient-to-r from-blue-600 to-sky-400 text-white rounded-lg shadow-lg hover:scale-105 transition'>Visit My Profile</a>
          <button 
          onClick={()=>{document.getElementById("contact me").scrollIntoView({behavior:"smooth"})}}
          className='cursor-pointer px-5 py-2 text-center bg-gradient-to-r from-blue-600 to-sky-400 text-white rounded-lg shadow-lg hover:scale-105 transition'>Contact Me</button>
        </div>
      </section>

      <section id="about" className='w-11/12 md:w-4/5 flex flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 items-center justify-evenly gap-5 mt-35'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 bg-clip-text text-transparent'>About Me</h1>
        <div className='w-full flex flex-col md:flex-row items-center justify-around gap-6'>
          <img src={about} alt="About" className='w-60 h-60 object-cover rounded-lg' />
          <p className='w-full md:w-1/2 text-white text-lg leading-relaxed text-center md:text-left'>
            I'm a full-stack developer with expertise in Java, Spring Boot, React, and PostgreSQL. I enjoy building secure, scalable, and user-focused web applications. My strengths lie in writing clean, maintainable code and designing efficient backend systems. I'm passionate about learning new technologies and solving real-world problems through thoughtful engineering. Currently pursuing an engineering degree at Government College of Engineering, Tirunelveli (2023–2027).
          </p>
        </div>
      </section>

      <section id='skills' className='w-full flex flex-col items-center gap-5 mt-35 px-4'>
        <h1 className='text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-sky-300 bg-clip-text'>Skills</h1>
        <div className='w-full flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6'>
          <SkillCard heading={"Frontend"} skills={skills.frontend} icon={<Monitor className='w-6 h-6 text-cyan-500' />} />
          <SkillCard heading={"Backend"} skills={skills.backend} icon={<Server className='w-6 h-6 text-cyan-500' />} />
          <SkillCard heading={"Database"} skills={skills.database} icon={<Database className='w-6 h-6 text-cyan-500' />} />
          <SkillCard heading={"Tools"} skills={skills.tools} icon={<ToolCaseIcon className='w-6 h-6 text-cyan-500' />} />
        </div>
      </section>

      <section id='projects' className='w-full flex flex-col items-center gap-6 px-4 mt-35'>
        <h1 className='text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-sky-300 bg-clip-text'>Projects</h1>
        <div className='w-full flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-6'>
          {
            projects.map((project, index) => (
              <div key={index} className='w-full md:w-1/3 flex flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 gap-4'>
                <h2 className='text-2xl text-white font-bold'>{project.title}</h2>
                <p className='text-white text-base'>{project.description}</p>
                <div className='text-white'>
                  <p className='text-xl font-semibold mb-1'>Tech Stacks:</p>
                  <div className='flex flex-wrap gap-2'>
                    {project.tech.map((tech, i) => <span key={i} className='bg-sky-500 text-white px-2 py-1 rounded text-sm'>{tech}</span>)}
                  </div>
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className='mt-2 w-fit px-4 py-2 text-white bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-300 rounded-xl flex items-center gap-2 hover:scale-105 transition'>
                  <GithubIcon className='w-5 h-5' /> Visit Repository
                </a>
              </div>
            ))
          }
        </div>
      </section>
      
      <section id='contact me' className='w-full flex flex-col items-center gap-6 px-4 mt-35'>
        <h1 className='text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-sky-300 bg-clip-text'>Contact Me</h1>
        <div className='flex flex-col md:flex-row gap-6 text-white text-lg'>
          <a href="mailto:tmganthan@gmail.com" target="_blank" rel="noopener noreferrer" className='w-50 bg-gradient-to-r from-blue-800 to-sky-500 p-4 rounded-lg'>
            <Mail className='text-white'/> Mail me
          </a>
          <a href="https://www.linkedin.com/in/ganthan-t-m" target="_blank" rel="noopener noreferrer" className='w-50 bg-gradient-to-r from-blue-800 to-sky-500 p-4 rounded-lg'>
            <Linkedin className='text-white' /> Connect with me
          </a>
        </div>
      </section>

      <footer className='w-full h-16 bg-sky-500 flex items-center justify-center text-white text-center px-4 mt-35'>
        © {new Date().getFullYear()} Ganthan T.M — All rights reserved.
      </footer>
    </div>
  )
}

export default PortFolio
