import React from "react"

const SkillCard = ({ heading, skills, icon }) => {
  return (
    <div className='w-full sm:w-80 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20'>
      <div className='flex items-center gap-3 mb-4'>
        {icon}
        <h3 className='text-xl font-bold text-white'>{heading}</h3>
      </div>
      <div className='space-y-3'>
        {skills.map((skill, index) => (
          <div key={index} className='space-y-2'>
            <div className='flex justify-between text-white'>
              <span className='font-medium'>{skill.name}</span>
              <span className='text-sm opacity-80'>{skill.level}%</span>
            </div>
            <div className='w-full bg-gray-700 rounded-full h-2 overflow-hidden'>
              <div 
                className='h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out'
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
 export default SkillCard