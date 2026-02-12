/* eslint-disable react/no-unescaped-entities */
// import React from 'react'

export default function About() {
  const skills = [
    'React.js', 'Next.js', 'Node.js', 'Express.js',
    'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'TypeScript',
    'Python', 'JavaScript', 'AI/ML', 'Data Analysis',
    'REST APIs', 'GraphQL', 'Git', 'Docker',
    'AWS', 'Firebase', 'Vite', 'Webpack',
    'Figma', 'Postman', 'Zapier', 'CRM Integration'
  ];

  return (
      <div className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-blue-50 to-cyan-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950 transition-colors min-h-screen">
          <div className="container m-auto px-4 sm:px-6 lg:px-8 text-gray-700 dark:text-gray-300">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:gap-12 mb-12 lg:mb-16 items-center">
                  <div className="w-full md:w-5/12 lg:w-5/12">
                      <img
                          src="/images/yousaf.jpeg"
                          alt="Muhammad Yousaf"
                          className="rounded-full w-full h-auto shadow-lg sm:shadow-xl md:shadow-2xl border-4 border-white dark:border-slate-800 transition-transform"
                      />
                  </div>
                  <div className="w-full md:w-7/12 lg:w-6/12">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white font-black bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent dark:from-orange-400 dark:via-pink-400 dark:to-purple-400 leading-tight">
                      Professional Full Stack Developer & AI Automation Expert
                      </h2>
                      <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 text-start leading-relaxed font-medium">
                      I'm Muhammad Yousaf with 5+ years of professional experience in web development. I specialize in building modern, scalable web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js). My expertise extends to data analysis, AI automation, and digital marketing solutions. I'm passionate about creating efficient, user-friendly applications and staying at the forefront of technology trends.
                      </p>
                      <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 text-start font-medium">
                      I have successfully delivered 50+ projects for 40+ satisfied clients, combining technical excellence with business acumen to drive real results.
                      </p>
                  </div>
              </div>

              {/* Experience Cards */}
              <div className="mb-12 lg:mb-16">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white font-black text-center mb-8 sm:mb-12 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-300">Professional Experience</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950 dark:to-cyan-900 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-6 md:p-8 border-2 border-blue-200 dark:border-blue-700 hover:shadow-lg sm:hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all">🌐 Web Development</h3>
                          <p className="text-blue-700 dark:text-blue-300 text-base sm:text-lg md:text-lg font-black mb-3 sm:mb-4">5+ Years</p>
                          <p className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">Full-stack applications with React, Node.js, MongoDB, and modern frameworks.</p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950 dark:to-pink-900 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-6 md:p-8 border-2 border-purple-200 dark:border-purple-700 hover:shadow-lg sm:hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 group-hover:bg-clip-text transition-all">📊 Data Analysis</h3>
                          <p className="text-purple-700 dark:text-purple-300 text-base sm:text-lg md:text-lg font-black mb-3 sm:mb-4">2+ Years</p>
                          <p className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">Data visualization, analysis, and actionable insights using Python and BI tools.</p>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950 dark:to-red-900 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-6 md:p-8 border-2 border-orange-200 dark:border-orange-700 hover:shadow-lg sm:hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-500 group-hover:bg-clip-text transition-all">🤖 AI Automation</h3>
                          <p className="text-orange-700 dark:text-orange-300 text-base sm:text-lg md:text-lg font-black mb-3 sm:mb-4">1+ Year</p>
                          <p className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">AI-powered automation, CRM integration, and intelligent business solutions.</p>
                      </div>
                  </div>
              </div>

              {/* Skills Section */}
              <div className="mb-12 lg:mb-16">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white font-black text-center mb-8 sm:mb-12 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent dark:from-pink-400 dark:to-purple-300">Technical Skills</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
                      {skills.map((skill, index) => (
                          <div key={index} className="bg-gradient-to-br from-orange-100 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center border-2 border-orange-300 dark:border-orange-600 hover:shadow-md sm:hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer">
                              <p className="font-black text-gray-900 dark:text-white text-xs sm:text-sm group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all">{skill}</p>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Achievements */}
              <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-lg sm:rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center shadow-lg sm:shadow-2xl">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 sm:mb-8">Achievements</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                      <div className="transform hover:scale-110 transition-transform duration-300">
                          <p className="text-4xl sm:text-5xl md:text-6xl font-black mb-2">50+</p>
                          <p className="text-base sm:text-lg md:text-xl font-bold">Projects</p>
                      </div>
                      <div className="transform hover:scale-110 transition-transform duration-300 border-l-4 border-r-4 border-white/30 px-4 sm:px-0">
                          <p className="text-4xl sm:text-5xl md:text-6xl font-black mb-2">40+</p>
                          <p className="text-base sm:text-lg md:text-xl font-bold">Clients</p>
                      </div>
                      <div className="transform hover:scale-110 transition-transform duration-300">
                          <p className="text-4xl sm:text-5xl md:text-6xl font-black mb-2">5+</p>
                          <p className="text-base sm:text-lg md:text-xl font-bold">Years Experience</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
