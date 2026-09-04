import { Link } from 'react-router-dom'

const Home = () => {
  const stats = [
    { number: "36", label: "Hours", icon: "⏰" },
    { number: "₹1.5L+", label: "Prize Money", icon: "💰" },
    { number: "13,91,884", label: "Participants", icon: "👥" },
    { number: "2877+", label: "Problem Statements", icon: "📋" }
  ]

  const highlights = [
    {
      title: "Innovation Challenge",
      description: "Tackle real-world problems with cutting-edge solutions",
      icon: "💡",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "Industry Mentors",
      description: "Get guidance from tech leaders and domain experts",
      icon: "🎓",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      title: "Government Impact",
      description: "Build solutions that can transform public services",
      icon: "🏛️",
      gradient: "from-green-400 to-teal-500"
    },
    {
      title: "Career Opportunities",
      description: "Connect with recruiters and showcase your talent",
      icon: "🚀",
      gradient: "from-purple-400 to-pink-500"
    }
  ]

  const tracks = [
    { name: "Smart Automation", color: "bg-purple-600", count: "150+", icon: "🤖" },
    { name: "Heritage & Culture", color: "bg-orange-700", count: "45+", icon: "🏛️" },
    { name: "Agriculture/FoodTech", color: "bg-green-700", count: "120+", icon: "🌾" },
    { name: "Smart Vehicles", color: "bg-blue-700", count: "55+", icon: "🚗" },
    { name: "Transportation", color: "bg-indigo-600", count: "80+", icon: "🚚" },
    { name: "Robotics & Drones", color: "bg-cyan-700", count: "95+", icon: "🛸" },
    { name: "Clean & Green Tech", color: "bg-teal-700", count: "110+", icon: "🌱" },
    { name: "Tourism", color: "bg-pink-600", count: "40+", icon: "✈️" },
    { name: "Renewable Energy", color: "bg-amber-700", count: "75+", icon: "⚡" },
    { name: "Blockchain & Security", color: "bg-red-700", count: "85+", icon: "🔒" },
    { name: "Smart Education", color: "bg-blue-600", count: "130+", icon: "🎓" },
    { name: "Disaster Management", color: "bg-gray-600", count: "50+", icon: "🚨" },
    { name: "Games & Toys", color: "bg-purple-700", count: "35+", icon: "🎮" },
    { name: "Miscellaneous", color: "bg-gray-600", count: "60+", icon: "📦" },
    { name: "Fintech", color: "bg-yellow-700", count: "90+", icon: "💰" },
    { name: "Space Technology", color: "bg-indigo-700", count: "70+", icon: "🚀" },
    { name: "Fitness & Sports", color: "bg-green-700", count: "30+", icon: "⚽" },
    { name: "MedTech/HealthTech", color: "bg-red-600", count: "140+", icon: "🏥" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with 3D Background */}
      <section className="relative py-8 sm:py-16 pt-0 sm:pt-10 h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          {/* Animated geometric shapes */}
          <div className="absolute top-16 left-8 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl rotate-45 opacity-20 animate-bounce"></div>
          <div className="absolute top-32 right-16 w-20 h-20 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute bottom-24 left-1/4 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl rotate-12 opacity-15 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-16 right-1/3 w-24 h-24 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-25 animate-ping" style={{ animationDuration: '3s' }}></div>

          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-cyan-300 rounded-full opacity-80 animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-pink-300 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent transform skew-x-12"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex items-center h-full">
          <div className="w-full space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent drop-shadow-2xl">
                  <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl">Sharda</span>
                </span>
                <span className="block bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 bg-clip-text text-transparent drop-shadow-2xl">
                  Smart India Hackathon 2026
                </span>
              </h1>
              {/* <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/30 shadow-2xl">
                <span className="text-white font-semibold text-sm">🏛️ Sharda University</span>
              </div> */}
            </div>

            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-4">
              India's premier innovation platform where brilliant minds collaborate to solve real-world challenges
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4 px-4">
              <Link
                to="/registration"
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-2xl text-center"
              >
                🚀 Register Now
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto px-6 py-3 border-2 border-white/40 text-white hover:bg-white/20 font-semibold rounded-lg transition-all duration-300 backdrop-blur-md shadow-xl text-center"
              >
                📖 Learn More
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8 max-w-3xl mx-auto px-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/10 backdrop-blur-xl rounded-xl p-3 sm:p-4 border border-white/20 shadow-2xl group-hover:bg-white/20 transition-all duration-300 transform group-hover:-translate-y-1">
                    <div className="text-xl sm:text-2xl md:text-3xl font-black text-cyan-300 mb-1 drop-shadow-lg">{stat.number}</div>
                    <div className="text-blue-200 text-xs sm:text-sm font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Join SIH 2026?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Experience innovation, mentorship, and real-world impact
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${highlight.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {highlight.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Themes */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Themes</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Choose from diverse domains and make a real impact
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {tracks.map((track, index) => (
              <div key={index} className="group flex">
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100 hover:border-gray-200 w-full flex flex-col items-center justify-center min-h-[160px] sm:min-h-[180px]">
                  {/* Large Icon */}
                  <div className="text-3xl sm:text-4xl mb-3 flex items-center justify-center">
                    {track.icon}
                  </div>

                  {/* Count Badge */}
                  <div className={`inline-flex items-center justify-center w-14 h-7 ${track.color} rounded-full text-white font-bold text-xs mb-3`}>
                    {track.count}
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1 leading-tight text-center px-1">{track.name}</h3>
                  <p className="text-xs text-gray-600">Problems</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Preview */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Official SIH Event Timeline</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Key dates and milestones for SIH 2026
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2">Registration</h3>
              <p className="text-sm sm:text-base text-gray-600">Opens August 2026</p>
              <p className="text-sm text-gray-500">Form your team and register</p>
              <p className="text-sm font-semibold text-red-600 mt-1">⏰ Deadline: September 4, 2026</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2">Sharda Smart India Hackathon</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-2">5 Sept (Screening) & 10-11 Sept (Final)</p>
              <p className="text-sm text-gray-500">Online & Campus-level</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2">Grand Finale</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-2">December 2026</p>
              <p className="text-sm text-gray-500">National-level finale</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/timeline"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-colors duration-200"
            >
              View Complete Timeline
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section - SIH 2025 Glimpses */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Sharda SIH 2025 Glimpses
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Memories from our previous Sharda Smart India Hackathon - innovation, collaboration, and success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Photo 1 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-200 aspect-[4/3]">
              <img
                src="./2025-glimpses/6.jpeg"
                alt="SIH 2025 - Team Collaboration"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext fill="%239ca3af" font-family="Arial" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EAdd Photo Here%3C/text%3E%3C/svg%3E'
                }}
              />
            </div>

            {/* Photo 2 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-200 aspect-[4/3]">
              <img
                src="./2025-glimpses/5.jpeg"
                alt="SIH 2025 - Innovation in Action"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext fill="%239ca3af" font-family="Arial" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EAdd Photo Here%3C/text%3E%3C/svg%3E'
                }}
              />
            </div>

            {/* Photo 3 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-200 aspect-[4/3]">
              <img
                src="./2025-glimpses/4.jpeg"
                alt="SIH 2025 - Winners Celebration"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext fill="%239ca3af" font-family="Arial" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EAdd Photo Here%3C/text%3E%3C/svg%3E'
                }}
              />
            </div>

            {/* Photo 4 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-200 aspect-[4/3]">
              <img
                src="./2025-glimpses/3.jpeg"
                alt="SIH 2025 - Mentorship Session"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext fill="%239ca3af" font-family="Arial" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EAdd Photo Here%3C/text%3E%3C/svg%3E'
                }}
              />
            </div>

            {/* Photo 5 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-200 aspect-[4/3]">
              <img
                src="./2025-glimpses/2.jpeg"
                alt="SIH 2025 - Presentation Time"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext fill="%239ca3af" font-family="Arial" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EAdd Photo Here%3C/text%3E%3C/svg%3E'
                }}
              />
            </div>

            {/* Photo 6 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-200 aspect-[4/3]">
              <img
                src="./2025-glimpses/1.jpeg"
                alt="SIH 2025 - Team Spirit"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext fill="%239ca3af" font-family="Arial" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EAdd Photo Here%3C/text%3E%3C/svg%3E'
                }}
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
