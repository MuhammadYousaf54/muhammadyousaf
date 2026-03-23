/* eslint-disable react/prop-types */
import { useState } from "react";

const ProjectCard = ({ title, description, link, image, icon, className }) => {
  const [imageError, setImageError] = useState(false);
  const safeLink = link && link !== "#" ? link : "/contact";

  return (
    <div
      className={`group flex h-full flex-col rounded-2xl border-2 border-gray-200 bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-2xl dark:border-purple-700/50 dark:bg-gray-800/50 dark:hover:border-orange-400 ${className || ""}`}
    >
      <div className="mb-4 flex h-44 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 transition-all duration-300 group-hover:brightness-110 dark:from-gray-700 dark:to-gray-600 sm:h-48">
        {image && !imageError ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : icon ? (
          <div className="text-4xl font-black text-gray-700 dark:text-gray-100 sm:text-5xl">{icon}</div>
        ) : (
          <div className="text-4xl text-gray-400 dark:text-gray-500">[]</div>
        )}
      </div>

      <h3 className="text-lg font-bold text-gray-900 transition-all group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent dark:text-white">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm font-medium leading-6 text-gray-700 dark:text-gray-300">
        {description}
      </p>
      <a
        href={safeLink}
        className="mt-4 inline-flex items-center gap-2 font-bold text-orange-500 transition-all hover:text-orange-600 group-hover:gap-3 dark:text-orange-400 dark:hover:text-orange-300"
      >
        Learn More <span className="transform transition-transform group-hover:translate-x-2">-&gt;</span>
      </a>
    </div>
  );
};

export default ProjectCard;
