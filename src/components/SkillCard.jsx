import React from 'react';

const SkillCard = ({ heading, skills, icon }) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-100 hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-5 border-b border-gray-100 pb-3">
        <div className="p-2 bg-emerald-100 rounded-xl text-emerald-600">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 tracking-tight">{heading}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-gray-700">{skill.name}</span>
              <span className="text-emerald-600 text-xs font-mono">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-violet-500 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;