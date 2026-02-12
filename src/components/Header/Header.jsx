import { useState, useEffect } from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import { Moon, Sun, LogOut, Menu, X, LayoutDashboard } from 'lucide-react'

export default function Header() {
    const navigate = useNavigate()
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });
    
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('isLoggedIn') === 'true';
    });
    
    const [userRole, setUserRole] = useState(() => {
        return localStorage.getItem('userRole') || null;
    });

    const [isOwnerAdmin, setIsOwnerAdmin] = useState(() => {
        const savedFlag = localStorage.getItem('isOwnerAdmin') === 'true';
        const savedEmail = (localStorage.getItem('userEmail') || '').toLowerCase();
        return savedFlag || savedEmail === 'muhammadyousaf5482@gmail.com';
    });
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('isOwnerAdmin');
        setIsLoggedIn(false);
        setUserRole(null);
        setIsOwnerAdmin(false);
        navigate('/');
        alert('You have been logged out successfully!');
    };
    
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className={`${isDark ? 'bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900' : 'bg-gradient-to-r from-blue-50 via-white to-cyan-50'} px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300 border-b ${isDark ? 'border-purple-700' : 'border-cyan-100'}`}>
                <div className="flex flex-wrap justify-between items-center mx-auto w-full">
                    <Link to="/" className={`flex items-center text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r ${isDark ? 'from-orange-400 via-pink-400 to-purple-400' : 'from-orange-500 via-purple-600 to-blue-600'} bg-clip-text text-transparent hover:scale-105 transition-transform`}>
                        Muhammad Yousaf
                    </Link>
                    
                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors ${isDark ? 'text-white hover:bg-purple-800' : 'text-gray-800 hover:bg-blue-100'}`}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Right Side Icons and Buttons */}
                    <div className="flex items-center md:order-2 gap-2 sm:gap-4">
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className={`${isDark ? 'bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300' : 'bg-orange-100 hover:bg-orange-200 text-orange-600'} focus:ring-4 ${isDark ? 'focus:ring-yellow-500/50' : 'focus:ring-orange-300'} font-medium rounded-full text-sm p-2 sm:p-3 focus:outline-none transition-all duration-300 transform hover:scale-110`}
                            title={isDark ? "Light Mode" : "Dark Mode"}
                        >
                            {isDark ? <Sun size={18} className="sm:w-5 sm:h-5" /> : <Moon size={18} className="sm:w-5 sm:h-5" />}
                        </button>
                        
                        {isLoggedIn ? (
                            <>
                                <div className={`${isDark ? 'text-cyan-300' : 'text-purple-600'} text-xs sm:text-sm font-bold px-2 sm:px-3 py-2 rounded-lg ${isDark ? 'bg-cyan-950/30' : 'bg-purple-100'} hidden sm:block`}>
                                    {userRole && `${isOwnerAdmin ? 'Owner Admin' : userRole}`}
                                </div>
                                {userRole === 'Admin' && (
                                    <Link
                                        to="/blog/admin"
                                        className={`${isDark ? 'text-white bg-indigo-700 hover:bg-indigo-600' : 'text-white bg-indigo-600 hover:bg-indigo-700'} flex items-center gap-2 font-bold rounded-lg text-xs sm:text-sm px-2 sm:px-4 py-2 transition-all duration-300 transform hover:scale-105`}
                                        title="Admin Dashboard"
                                    >
                                        <LayoutDashboard size={16} className="sm:w-5 sm:h-5" />
                                        <span className="hidden sm:inline">Dashboard</span>
                                    </Link>
                                )}
                                <button
                                    onClick={handleLogout}
                                    className={`${isDark ? 'text-white bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700' : 'text-white bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600'} flex items-center gap-1 sm:gap-2 focus:ring-4 ${isDark ? 'focus:ring-red-700/50' : 'focus:ring-red-300'} font-bold rounded-lg text-xs sm:text-sm px-2 sm:px-4 py-2 focus:outline-none transition-all duration-300 transform hover:scale-105`}
                                >
                                    <LogOut size={16} className="sm:w-5 sm:h-5" />
                                    <span className="hidden sm:inline">Logout</span>
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className={`${isDark ? 'text-cyan-300 hover:text-cyan-100 hover:bg-cyan-950/30 bg-cyan-950/10' : 'text-purple-700 hover:text-purple-900 hover:bg-purple-100 bg-purple-50'} focus:ring-4 ${isDark ? 'focus:ring-cyan-500/50' : 'focus:ring-purple-300'} font-bold rounded-lg text-xs sm:text-sm px-2 sm:px-4 py-2 focus:outline-none transition-all duration-300 border ${isDark ? 'border-cyan-700/50' : 'border-purple-200'}`}
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/services"
                                    className={`${isDark ? 'text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600' : 'text-white bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 hover:from-orange-600 hover:via-purple-600 hover:to-blue-600'} focus:ring-4 focus:ring-orange-300 font-bold rounded-lg text-xs sm:text-sm px-2 sm:px-4 py-2 focus:outline-none transition-all duration-300 transform hover:scale-105 shadow-lg`}
                                >
                                    Start
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Navigation Menu */}
                    <div
                        className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto md:order-1 md:ml-0 mt-4 md:mt-0 items-start md:items-center`}
                        id="mobile-menu-2"
                    >
                        <ul className={`flex flex-col md:flex-row md:space-x-6 lg:space-x-8 w-full md:w-auto ${isDark ? 'text-white' : 'text-gray-800'}`}>
                            <li>
                                <NavLink
                                to="/"
                                    onClick={closeMenu}
                                    className={({isActive}) =>
                                        `block py-2 px-0 md:px-2 lg:px-0 duration-200 ${isActive ? "text-orange-500 font-bold" : isDark ? "text-white" : "text-gray-800"} border-b md:border-0 hover:text-orange-500 transition-colors`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    onClick={closeMenu}
                                    className={({isActive}) =>
                                        `block py-2 px-0 md:px-2 lg:px-0 duration-200 ${isActive ? "text-orange-500 font-bold" : isDark ? "text-white" : "text-gray-800"} border-b md:border-0 hover:text-orange-500 transition-colors`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/services"
                                    onClick={closeMenu}
                                    className={({isActive}) =>
                                        `block py-2 px-0 md:px-2 lg:px-0 duration-200 ${isActive ? "text-orange-500 font-bold" : isDark ? "text-white" : "text-gray-800"} border-b md:border-0 hover:text-orange-500 transition-colors`
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    onClick={closeMenu}
                                    className={({isActive}) =>
                                        `block py-2 px-0 md:px-2 lg:px-0 duration-200 ${isActive ? "text-orange-500 font-bold" : isDark ? "text-white" : "text-gray-800"} border-b md:border-0 hover:text-orange-500 transition-colors`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/github"
                                    onClick={closeMenu}
                                    className={({isActive}) =>
                                        `block py-2 px-0 md:px-2 lg:px-0 duration-200 ${isActive ? "text-orange-500 font-bold" : isDark ? "text-white" : "text-gray-800"} border-b md:border-0 hover:text-orange-500 transition-colors`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/blog"
                                    onClick={closeMenu}
                                    className={({isActive}) =>
                                        `block py-2 px-0 md:px-2 lg:px-0 duration-200 ${isActive ? "text-orange-500 font-bold" : isDark ? "text-white" : "text-gray-800"} border-b md:border-0 hover:text-orange-500 transition-colors`
                                    }
                                >
                                    Blog
                                </NavLink>
                            </li>
                            {isLoggedIn && userRole === 'Admin' && (
                                <li>
                                    <NavLink
                                    to="/blog/admin"
                                        onClick={closeMenu}
                                        className={({isActive}) =>
                                            `block py-2 px-0 md:px-2 lg:px-0 duration-200 ${isActive ? "text-orange-500 font-bold" : isDark ? "text-white" : "text-gray-800"} border-b md:border-0 hover:text-orange-500 transition-colors`
                                        }
                                    >
                                        Admin
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
