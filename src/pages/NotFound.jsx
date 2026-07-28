import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 px-4 py-16 sm:py-20 relative overflow-hidden min-h-[calc(100vh-180px)]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-8 left-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl rotate-45 opacity-20 animate-bounce"></div>
        <div className="absolute top-12 right-8 w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-12 left-1/4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl rotate-12 opacity-15 animate-spin" style={{ animationDuration: '20s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-xl mx-auto">
        {/* 404 Number with Gradient */}
        <div className="mb-4">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-none">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent drop-shadow-2xl">
              404
            </span>
          </h1>
        </div>

        {/* Error Icon */}
        <div className="mb-4">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-xl rounded-xl border border-white/30 shadow-2xl">
            <span className="text-2xl sm:text-3xl">🔍</span>
          </div>
        </div>

        {/* Title and Description */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg">
          Page Not Found
        </h2>
        <p className="text-sm sm:text-base text-blue-100 mb-6 max-w-md mx-auto leading-relaxed drop-shadow-md px-4">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center px-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-2xl text-center"
          >
            🏠 Go Back Home
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-6 py-3 border-2 border-white/40 text-white hover:bg-white/20 font-semibold rounded-lg transition-all duration-300 backdrop-blur-md shadow-xl text-center"
          >
            📞 Contact Support
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <p className="text-xs text-blue-200 mb-3">Or try these popular pages:</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link to="/about" className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-lg transition-all duration-200 backdrop-blur-md">
              📖 About
            </Link>
            <Link to="/timeline" className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-lg transition-all duration-200 backdrop-blur-md">
              📅 Timeline
            </Link>
            <Link to="/announcements" className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-lg transition-all duration-200 backdrop-blur-md">
              📢 Announcements
            </Link>
            <Link to="/guidelines" className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-lg transition-all duration-200 backdrop-blur-md">
              📋 Guidelines
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
