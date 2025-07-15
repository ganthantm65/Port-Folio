import React from 'react'

const SkillCard = ({ heading, skills,icon }) => {
  return (
    <div className='w-100 md:w-90 h-100 flex flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 items-start justify-around'>
      <h1 className='text-white text-2xl flex items-center gap-2 font-bold'>
        {icon}
        {heading}
    </h1>
      {
        skills.map((skill, index) => (
          <div key={index} className='flex flex-col items-start justify-center gap-3 w-full h-3/4 text-white'>
            <h1 className='text-sm mb-1 '>
                {skill.name} - {skill.level}%
            </h1>
            <div className='w-full h-3 bg-slate-700 rounded'>
              <div
                className='h-3 bg-sky-400 rounded transition-all duration-300'
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default SkillCard
