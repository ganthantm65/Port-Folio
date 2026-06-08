import React from 'react';
import { GithubIcon, Briefcase, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-100 hover:-translate-y-1 flex flex-col h-full">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-2xl font-bold text-gray-800 tracking-tight group-hover:text-emerald-600 transition">{project.title}</h3>
        <div className="bg-emerald-100 p-1.5 rounded-lg">
          <Briefcase className="w-5 h-5 text-emerald-600" />
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-5">{project.description}</p>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span key={i} className="text-xs font-mono bg-gray-100 border border-gray-200 rounded-full px-3 py-1 text-gray-700">{tech}</span>
          ))}
        </div>
        <div className="space-y-1.5 mb-5">
          <p className="text-xs uppercase tracking-wider text-emerald-600 font-semibold">Key features</p>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
            {project.features.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span className="text-gray-600 text-xs">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-auto pt-2">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium bg-gray-50 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 rounded-full px-5 py-2.5 text-gray-700 transition-all duration-200"
        >
          <GithubIcon className="w-4 h-4" /> View Repository <ExternalLink className="w-3.5 h-3.5 opacity-70" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;