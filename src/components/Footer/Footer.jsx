
// import React from 'react'
import { Link } from '@router';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-white via-blue-50 to-gray-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 border-t-2 border-orange-200 dark:border-purple-700 transition-colors">
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 p-4 py-6 sm:py-8 md:py-10 lg:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8">
                    <div>
                        <Link to="/" className="flex items-center group">
                           <h1 className="text-lg sm:text-xl md:text-2xl font-black bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent group-hover:from-orange-300 group-hover:to-purple-300 transition-all">Muhammad Yousaf</h1>
                        </Link>
                        <p className="text-gray-700 dark:text-gray-400 font-medium mt-2 sm:mt-3 max-w-xs text-xs sm:text-sm leading-relaxed">Full Stack Developer & AI Automation Expert</p>
                    </div>
                    <div>
                        <h2 className="mb-4 sm:mb-5 text-sm sm:text-base font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text uppercase tracking-wide">Resources</h2>
                        <ul className="text-gray-700 dark:text-gray-300 font-semibold space-y-2 sm:space-y-3 text-xs sm:text-sm">
                            <li className="hover:translate-x-2 transition-transform">
                                <Link to="/" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors group flex items-center gap-2">
                                    <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">â†’</span> Home
                                </Link>
                            </li>
                            <li className="hover:translate-x-2 transition-transform">
                                <Link to="/about" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors group flex items-center gap-2">
                                    <span className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">â†’</span> About
                                </Link>
                            </li>
                            <li className="hover:translate-x-2 transition-transform">
                                <Link to="/services" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors group flex items-center gap-2">
                                    <span className="text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity">â†’</span> Services
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 sm:mb-5 text-sm sm:text-base font-bold text-transparent bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text uppercase tracking-wide">Follow Us</h2>
                        <ul className="text-gray-700 dark:text-gray-300 font-semibold space-y-2 sm:space-y-3 text-xs sm:text-sm">
                            <li className="hover:translate-x-2 transition-transform">
                                <a
                                    href="https://github.com/Muhammadyousaf54"
                                    className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors group flex items-center gap-2"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="text-orange-500 dark:text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">â˜…</span> Github
                                </a>
                            </li>
                            <li className="hover:translate-x-2 transition-transform">
                                <a
                                    href="https://linkedin.com"
                                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors group flex items-center gap-2"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="text-blue-500 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">â˜…</span> LinkedIn
                                </a>
                            </li>
                            <li className="hover:translate-x-2 transition-transform">
                                <a
                                    href="mailto:muhammadyousaf5482@gmail.com"
                                    className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors group flex items-center gap-2"
                                >
                                    <span className="text-pink-500 dark:text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity">â˜…</span> Email
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 sm:mb-5 text-sm sm:text-base font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text uppercase tracking-wide">Legal</h2>
                        <ul className="text-gray-700 dark:text-gray-300 font-semibold space-y-2 sm:space-y-3 text-xs sm:text-sm">
                            <li className="hover:translate-x-2 transition-transform">
                                <Link to="#" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors group flex items-center gap-2">
                                    <span className="text-cyan-500 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">â†’</span> Privacy Policy
                                </Link>
                            </li>
                            <li className="hover:translate-x-2 transition-transform">
                                <Link to="#" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors group flex items-center gap-2">
                                    <span className="text-blue-500 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">â†’</span> Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-6 sm:my-8 border-gray-300 dark:border-purple-700/50" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-0 sm:flex sm:items-center sm:justify-between">
                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-400 font-medium">Â© 2024 Muhammad Yousaf. All rights reserved.</span>
                    <div className="flex gap-3 sm:gap-5">
                        <a href="https://github.com/Muhammadyousaf54" className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors transform hover:scale-125" target="_blank" rel="noreferrer">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.545 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.002 12.002 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                        </a>
                        <a href="https://linkedin.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-125" target="_blank" rel="noreferrer">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.25-.129.599-.129.948v5.439h-3.554s.05-8.807 0-9.726h3.554v1.375c.427-.659 1.191-1.594 2.897-1.594 2.117 0 3.704 1.385 3.704 4.363v5.582zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.951.771-1.71 1.915-1.71 1.144 0 1.915.759 1.915 1.71 0 .951-.771 1.71-1.915 1.71zm1.595 11.597H3.762V9.58h3.17v10.872zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
                        </a>
                        <a href="mailto:muhammadyousaf5482@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors transform hover:scale-125">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                        </a>
                        <a href="https://twitter.com" className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors transform hover:scale-125" target="_blank" rel="noreferrer">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9-5.5z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

