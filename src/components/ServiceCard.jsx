import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-emerald-100 hover:-translate-y-1">
      <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-emerald-100 to-violet-100 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;