import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Modal from './Modal'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)
    const location = useLocation()

    const navItems = [
        { path: '/', label: 'Home', icon: '🏠' },
        { path: '/timeline', label: 'Timeline', icon: '📅' },
        { path: 'https://www.sih.gov.in/sih2026PS', label: 'Problem Statements', icon: '🎯', external: true },
        { path: '/announcements', label: 'Announcements', icon: '📢' }
    ]

    const dropdownItems = [
        { path: '/about', label: 'About', icon: '📖' },
        { path: '/guidelines', label: 'Guidelines', icon: '📋' },
        { path: '/contact', label: 'Contact', icon: '📞' }
    ]

    const isActive = (path) => location.pathname === path

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isDropdownOpen])

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100'
            : 'bg-white shadow-lg'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-2 sm:py-3">
                    {/* Logo and Title */}
                    <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity group">
                        <div className="relative">
                            {/* Logo Image */}
                            <img
                                src="./logo-sharda.png"
                                alt="SIH 2026 Logo"
                                className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-105 transition-all duration-300"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                                Sharda University
                            </h1>
                            <p className="text-xs font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Internal Hackathon 2026</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1 bg-gray-50 rounded-xl p-1">
                        {navItems.map((item) => (
                            item.external ? (
                                <a
                                    key={item.path}
                                    href={item.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 text-gray-600 hover:text-blue-600 hover:bg-white/70"
                                >
                                    <span className="text-base">{item.icon}</span>
                                    <span>{item.label}</span>
                                </a>
                            ) : (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${isActive(item.path)
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md transform scale-105'
                                        : 'text-gray-600 hover:text-blue-600 hover:bg-white/70'
                                        }`}
                                >
                                    <span className="text-base">{item.icon}</span>
                                    <span>{item.label}</span>
                                </Link>
                            )
                        ))}
                        
                        {/* Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${dropdownItems.some(item => isActive(item.path))
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md transform scale-105'
                                    : 'text-gray-600 hover:text-blue-600 hover:bg-white/70'
                                    }`}
                            >
                                <span>More</span>
                                <svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                                    {dropdownItems.map((item) => (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            onClick={() => setIsDropdownOpen(false)}
                                            className={`flex items-center space-x-3 px-4 py-2 text-sm transition-all duration-200 ${isActive(item.path)
                                                ? 'bg-blue-50 text-blue-600 font-semibold'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                                }`}
                                        >
                                            <span>{item.icon}</span>
                                            <span>{item.label}</span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-3">
                        {/* Notification Bell */}
                        {/* <button className="hidden md:flex relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button> */}

                        {/* CTA Button */}
                        <Link
                            to="/registration"
                            className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-5 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
                        >
                            <span>Register</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={isMenuOpen}
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-gray-100 py-4 animate-fade-in">
                        <div className="flex flex-col space-y-1">
                            {[
                                { path: '/', label: 'Home', icon: '🏠' },
                                { path: '/timeline', label: 'Timeline', icon: '⌛' },
                                { path: '/about', label: 'About', icon: '📑' },
                                { path: '/guidelines', label: 'Guidelines', icon: '📋' },
                                { path: 'https://www.sih.gov.in/sih2026PS', label: 'Problem Statements', icon: '🎯', external: true },
                                { path: '/announcements', label: 'Announcements', icon: '📢'},
                                { path: '/contact', label: 'Contact', icon: '📞' }
                            ].map((item) => (
                                item.external ? (
                                    <a
                                        key={item.path}
                                        href={item.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                                    >
                                        <span className="text-xl">{item.icon}</span>
                                        <span>{item.label}</span>
                                    </a>
                                ) : (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${isActive(item.path)
                                            ? 'bg-blue-600 text-white shadow-lg'
                                            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                            }`}
                                    >
                                        <span className="text-xl">{item.icon}</span>
                                        <span>{item.label}</span>
                                        {isActive(item.path) && (
                                            <div className="ml-auto w-2 h-2 bg-orange-400 rounded-full"></div>
                                        )}
                                    </Link>
                                )
                            ))}

                            {/* Mobile CTA */}
                            <div className="pt-4 border-t border-gray-100 mt-4">
                                <Link
                                    to="/registration"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold px-4 py-3 rounded-lg transition-all duration-200 shadow-lg w-full"
                                >
                                    <span>Register Now</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title="Registration Coming Soon"
            >
                <p className="text-lg mb-4">
                    Registration for SIH 2026 will open soon. Stay tuned for updates!
                </p>
                <p className="text-sm text-gray-500">
                    Follow our announcements page for the latest information about registration dates and procedures.
                </p>
            </Modal>
        </header>
    )
}

export default Header
