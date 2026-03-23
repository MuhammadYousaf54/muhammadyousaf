import { useState, useEffect } from 'react'
import {Link, NavLink, useNavigate} from '@router'
import { Moon, Sun, LogOut, Menu, X, LayoutDashboard } from 'lucide-react'

export default function Header() {
    const navigate = useNavigate()
    const [isDark, setIsDark] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [isOwnerAdmin, setIsOwnerAdmin] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasHydrated, setHasHydrated] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const savedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const savedUserRole = localStorage.getItem('userRole') || null;
        const savedOwnerFlag = localStorage.getItem('isOwnerAdmin') === 'true';
        const savedEmail = (localStorage.getItem('userEmail') || '').toLowerCase();

        setIsDark(savedTheme === 'dark');
        setIsLoggedIn(savedIsLoggedIn);
        setUserRole(savedUserRole);
        setIsOwnerAdmin(savedOwnerFlag || savedEmail === 'muhammadyousaf5482@gmail.com');
        setHasHydrated(true);
    }, []);

    useEffect(() => {
        if (!hasHydrated) return;
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [hasHydrated, isDark]);

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
    const isAdminView = isLoggedIn && (userRole === 'Admin' || isOwnerAdmin);
    const navLinkClassName = ({isActive}) =>
        `block rounded-lg px-3 py-2 duration-200 ${isActive ? "text-orange-500 font-bold" : isDark ? "text-white" : "text-gray-800"} hover:text-orange-500 ${isDark ? 'hover:bg-white/10' : 'hover:bg-slate-100'}`;

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className={`${isDark ? 'bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900' : 'bg-gradient-to-r from-blue-50 via-white to-cyan-50'} relative px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300 border-b ${isDark ? 'border-purple-700' : 'border-cyan-100'}`}>
                <div className="flex flex-nowrap justify-between items-center gap-3 mx-auto w-full min-w-0">
                    <Link to="/" className={`flex items-center text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r ${isDark ? 'from-orange-400 via-pink-400 to-purple-400' : 'from-orange-500 via-purple-600 to-blue-600'} bg-clip-text text-transparent hover:scale-105 transition-transform`}>
                        Muhammad Yousaf
                    </Link>

                    {!isAdminView && (
                        <div className="hidden md:flex md:items-center md:ml-8" id="desktop-menu">
                            <ul className={`flex flex-row space-x-2 lg:space-x-3 w-full ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                <li>
                                    <NavLink to="/" onClick={closeMenu} className={navLinkClassName}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" onClick={closeMenu} className={navLinkClassName}>
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/services" onClick={closeMenu} className={navLinkClassName}>
                                        Services
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" onClick={closeMenu} className={navLinkClassName}>
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/github" onClick={closeMenu} className={navLinkClassName}>
                                        Github
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog" onClick={closeMenu} className={navLinkClassName}>
                                        Blog
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* Right Side Icons and Buttons */}
                    <div className="ml-auto flex flex-nowrap items-center gap-2 sm:gap-3">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`${isDark ? 'text-white hover:bg-purple-800/80 border-white/10' : 'text-gray-800 hover:bg-blue-100 border-slate-200'} ${isAdminView ? 'flex' : 'flex md:hidden'} items-center justify-center rounded-xl border p-2.5 transition-colors`}
                            title={isMenuOpen ? "Close Menu" : "Open Menu"}
                        >
                            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className={`${isDark ? 'bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 border-yellow-400/20' : 'bg-orange-100 hover:bg-orange-200 text-orange-600 border-orange-200'} focus:ring-4 ${isDark ? 'focus:ring-yellow-500/50' : 'focus:ring-orange-300'} font-medium rounded-xl border text-sm p-2.5 focus:outline-none transition-all duration-300`}
                            title={isDark ? "Light Mode" : "Dark Mode"}
                        >
                            {isDark ? <Sun size={18} className="sm:w-5 sm:h-5" /> : <Moon size={18} className="sm:w-5 sm:h-5" />}
                        </button>
                        
                        {isLoggedIn ? (
                            <>
                                <div className={`${isDark ? 'text-cyan-300 border-cyan-400/20 bg-cyan-950/30' : 'text-purple-600 border-purple-200 bg-purple-100'} hidden md:block text-xs sm:text-sm font-bold px-3 py-2 rounded-xl border whitespace-nowrap`}>
                                    {userRole && `${isOwnerAdmin ? 'Owner Admin' : userRole}`}
                                </div>
                                {userRole === 'Admin' && (
                                    <Link
                                        to="/blog/admin"
                                        className={`${isDark ? 'text-white bg-indigo-700 hover:bg-indigo-600' : 'text-white bg-indigo-600 hover:bg-indigo-700'} flex items-center gap-2 font-bold rounded-xl text-xs sm:text-sm px-3 sm:px-4 py-2.5 transition-all duration-300 whitespace-nowrap`}
                                        title="Admin Dashboard"
                                    >
                                        <LayoutDashboard size={16} className="sm:w-5 sm:h-5" />
                                        <span>Dashboard</span>
                                    </Link>
                                )}
                                <button
                                    onClick={handleLogout}
                                    className={`${isDark ? 'text-white bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700' : 'text-white bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600'} flex items-center gap-1 sm:gap-2 focus:ring-4 ${isDark ? 'focus:ring-red-700/50' : 'focus:ring-red-300'} font-bold rounded-xl text-xs sm:text-sm px-3 sm:px-4 py-2.5 focus:outline-none transition-all duration-300 whitespace-nowrap`}
                                >
                                    <LogOut size={16} className="sm:w-5 sm:h-5" />
                                    <span className="hidden sm:inline">Logout</span>
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className={`${isDark ? 'text-cyan-300 hover:text-cyan-100 hover:bg-cyan-950/30 bg-cyan-950/10' : 'text-purple-700 hover:text-purple-900 hover:bg-purple-100 bg-purple-50'} focus:ring-4 ${isDark ? 'focus:ring-cyan-500/50' : 'focus:ring-purple-300'} font-bold rounded-xl text-xs sm:text-sm px-3 sm:px-4 py-2.5 focus:outline-none transition-all duration-300 border ${isDark ? 'border-cyan-700/50' : 'border-purple-200'} whitespace-nowrap`}
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/services"
                                    className={`${isDark ? 'text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600' : 'text-white bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 hover:from-orange-600 hover:via-purple-600 hover:to-blue-600'} focus:ring-4 focus:ring-orange-300 font-bold rounded-xl text-xs sm:text-sm px-3 sm:px-4 py-2.5 focus:outline-none transition-all duration-300 shadow-lg whitespace-nowrap`}
                                >
                                    Start
                                </Link>
                            </>
                        )}
                    </div>
                </div>

                {isMenuOpen && (
                    <div
                        className={`${isDark ? 'bg-slate-900/95 border-purple-700/60' : 'bg-white/95 border-slate-200'} ${isAdminView ? 'absolute left-4 right-4 top-full mt-3 md:left-auto md:right-6 md:w-80' : 'absolute left-4 right-4 top-full mt-3 md:hidden'} z-50 rounded-2xl border shadow-2xl backdrop-blur-xl`}
                        id="mobile-menu-2"
                    >
                        <ul className={`flex flex-col gap-1 p-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                            <li>
                                <NavLink to="/" onClick={closeMenu} className={navLinkClassName}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" onClick={closeMenu} className={navLinkClassName}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/services" onClick={closeMenu} className={navLinkClassName}>
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" onClick={closeMenu} className={navLinkClassName}>
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/github" onClick={closeMenu} className={navLinkClassName}>
                                    Github
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" onClick={closeMenu} className={navLinkClassName}>
                                    Blog
                                </NavLink>
                            </li>
                            {isLoggedIn && userRole === 'Admin' && (
                                <li>
                                    <NavLink to="/blog/admin" onClick={closeMenu} className={navLinkClassName}>
                                        Admin
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}

