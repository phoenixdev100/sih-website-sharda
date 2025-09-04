import { useState } from 'react'

const About = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📖' },
    { id: 'history', label: 'History', icon: '📚' },
    { id: 'impact', label: 'Impact', icon: '🌟' },
    { id: 'benefits', label: 'Benefits', icon: '🎁' }
  ]

  const achievements = [
    { year: '2024', teams: '15,000+', solutions: '3,000+', states: '36' },
    { year: '2023', teams: '12,000+', solutions: '2,500+', states: '35' },
    { year: '2022', teams: '10,000+', solutions: '2,000+', states: '34' },
    { year: '2021', teams: '8,000+', solutions: '1,500+', states: '32' }
  ]

  const impactAreas = [
    {
      title: "Healthcare",
      description: "Digital health solutions, telemedicine platforms, and medical device innovations",
      icon: "🏥",
      projects: 150,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Education",
      description: "EdTech solutions, learning management systems, and skill development platforms",
      icon: "🎓",
      projects: 200,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Agriculture",
      description: "Smart farming, crop monitoring, and agricultural marketplace solutions",
      icon: "🌾",
      projects: 120,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Smart Cities",
      description: "Urban planning, traffic management, and citizen service platforms",
      icon: "🏙️",
      projects: 180,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Defense",
      description: "Security solutions, surveillance systems, and strategic applications",
      icon: "🛡️",
      projects: 90,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Environment",
      description: "Climate monitoring, waste management, and sustainability solutions",
      icon: "🌍",
      projects: 110,
      color: "from-teal-500 to-cyan-500"
    }
  ]

  const benefits = [
    {
      category: "Learning & Growth",
      items: [
        "Hands-on experience with real-world problems",
        "Mentorship from industry experts",
        "Exposure to cutting-edge technologies",
        "Team collaboration and leadership skills"
      ],
      icon: "📈",
      color: "bg-blue-500"
    },
    {
      category: "Career Opportunities",
      items: [
        "Direct recruitment opportunities",
        "Startup funding and incubation",
        "Industry connections and networking",
        "Portfolio enhancement with real projects"
      ],
      icon: "💼",
      color: "bg-green-500"
    },
    {
      category: "Recognition & Rewards",
      items: [
        "Cash prizes up to ₹1 Lakh per team",
        "Certificates from Government of India",
        "Media coverage and public recognition",
        "Patent filing support for innovations"
      ],
      icon: "🏆",
      color: "bg-orange-500"
    },
    {
      category: "Social Impact",
      items: [
        "Contribute to national development",
        "Solve real societal challenges",
        "Create scalable solutions",
        "Make a difference in millions of lives"
      ],
      icon: "🌟",
      color: "bg-purple-500"
    }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6 sm:space-y-8">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="px-2 sm:px-0">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">What is Smart India Hackathon?</h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  Smart India Hackathon is a nationwide initiative by the Government of India to harness the creative and innovative spirit of students to solve pressing problems faced by our society, government, and industries.
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  It's not just a competition—it's a platform where ideas meet implementation, where students become solution creators, and where innovation drives national development.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-2 gap-3 sm:gap-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">7th</div>
                    <div className="text-gray-600 text-sm sm:text-base">Edition</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">36</div>
                    <div className="text-gray-600 text-sm sm:text-base">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">50+</div>
                    <div className="text-gray-600 text-sm sm:text-base">Ministries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">1000+</div>
                    <div className="text-gray-600 text-sm sm:text-base">Colleges</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'history':
        return (
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 px-2 sm:px-0">Journey Through the Years</h3>
            <div className="space-y-4 sm:space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base flex-shrink-0">
                        {achievement.year.slice(-2)}
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-gray-800">SIH {achievement.year}</h4>
                        <p className="text-gray-600 text-sm sm:text-base">Another milestone in innovation</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                      <div>
                        <div className="text-lg sm:text-2xl font-bold text-blue-600">{achievement.teams}</div>
                        <div className="text-xs sm:text-sm text-gray-600">Teams</div>
                      </div>
                      <div>
                        <div className="text-lg sm:text-2xl font-bold text-green-600">{achievement.solutions}</div>
                        <div className="text-xs sm:text-sm text-gray-600">Solutions</div>
                      </div>
                      <div>
                        <div className="text-lg sm:text-2xl font-bold text-orange-600">{achievement.states}</div>
                        <div className="text-xs sm:text-sm text-gray-600">States</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'impact':
        return (
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 px-2 sm:px-0">Areas of Impact</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {impactAreas.map((area, index) => (
                <div key={index} className="group bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center text-xl sm:text-2xl text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {area.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{area.title}</h4>
                  <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{area.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-gray-500">{area.projects}+ Projects</span>
                    <div className={`w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r ${area.color} rounded-full`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'benefits':
        return (
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 px-2 sm:px-0">Why Participate?</h3>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${benefit.color} rounded-xl flex items-center justify-center text-white text-lg sm:text-xl mr-3 sm:mr-4 flex-shrink-0`}>
                      {benefit.icon}
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800 break-words">{benefit.category}</h4>
                  </div>
                  <ul className="space-y-2 sm:space-y-3">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm sm:text-base break-words">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">About Smart India Hackathon</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover the journey, impact, and opportunities that make SIH India's premier innovation platform
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 sm:mb-12 px-4">
          <div className="bg-white rounded-xl shadow-lg p-2 flex flex-wrap gap-1 sm:gap-2 w-full sm:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base flex-1 sm:flex-none ${activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                <span className="text-base sm:text-lg">{tab.icon}</span>
                <span className="hidden xs:inline sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8">
          {renderTabContent()}
        </div>

        {/* Call to Action */}
        <div className="mt-8 sm:mt-12 lg:mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-4">Ready to Be Part of the Innovation?</h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join thousands of students across India in solving real-world problems and making a difference
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            {/* <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Register Your Team
            </button> */}
            <a
              href="https://www.sih.gov.in/sih2025PS"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg transition-all duration-200 inline-flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <span>View Problem Statements</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
