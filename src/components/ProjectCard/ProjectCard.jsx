/* eslint-disable react/prop-types */
import { useState } from "react";

const ProjectCard = ({ title, description, link, image, icon, className }) => {
    const [imageError, setImageError] = useState(false);

    return (
      <div className={`p-5 border-2 border-gray-200 dark:border-purple-700/50 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-orange-500 dark:hover:border-orange-400 bg-white dark:bg-gray-800/50 backdrop-blur-sm group ${className}`}>
        <div className="w-full h-48 rounded-xl mb-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center group-hover:brightness-110 transition-all duration-300 overflow-hidden">
          {image && !imageError ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : icon ? (
            <div className="text-5xl">{icon}</div>
          ) : (
            <div className="text-4xl text-gray-400 dark:text-gray-500">📦</div>
          )}
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 font-medium">{description}</p>
        <a href={link} className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 inline-block mt-3 transition-all font-bold flex items-center gap-2 group-hover:gap-3">Learn More <span className="transform group-hover:translate-x-2 transition-transform">→</span></a>
      </div>
    );
  };

export default ProjectCard;
