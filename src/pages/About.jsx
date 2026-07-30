import { useState } from 'react'
import Modal from '../components/Modal'

const About = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [showModal, setShowModal] = useState(false)

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📖' },
    { id: 'history', label: 'History', icon: '📚' },
    { id: 'impact', label: 'Impact', icon: '🌟' },
    { id: 'benefits', label: 'Benefits', icon: '🎁' }
  ]

  const achievements = [
    { year: '2025', teams: '1360', solutions: '72,165', states: '60' },
    { year: '2024', teams: '1300+', solutions: '86,000+', states: '51' },
    { year: '2023', teams: '1200+', solutions: '51,000+', states: '48' },
    { year: '2022', teams: '2033', solutions: '20,000+', states: '75' }
  ]

  const impactAreas = [
    { icon: "🤖", title: "Smart Automation", description: "AI-driven automation and intelligent resource utilization" },
    { icon: "🌿", title: "Heritage & Culture", description: "Preserving and promoting cultural heritage through technology" },
    { icon: "🌱", title: "Agriculture/FoodTech", description: "Smart farming and food security solutions" },
    { icon: "🚗", title: "Smart Vehicles", description: "Innovative automotive and mobility solutions" },
    { icon: "📦", title: "Transportation & Logistics", description: "Efficient transportation and supply chain solutions" },
    { icon: "🛸", title: "Robotics & Drones", description: "Robotics and unmanned aerial vehicle technologies" },
    { icon: "🌍", title: "Clean & Green Tech", description: "Climate change and sustainability solutions" },
    { icon: "✈️", title: "Tourism", description: "Technology-driven tourism and travel solutions" },
    { icon: "⚡", title: "Renewable Energy", description: "Sustainable and renewable energy solutions" },
    { icon: "🔒", title: "Blockchain & Cybersecurity", description: "Decentralized ledger and security solutions" },
    { icon: "🎓", title: "Smart Education", description: "EdTech and learning management systems" },
    { icon: "🚨", title: "Disaster Management", description: "Risk mitigation and disaster response technologies" },
    { icon: "🎮", title: "Games & Toys", description: "Innovative gaming and educational toy solutions" },
    { icon: "📦", title: "Miscellaneous", description: "Technology solutions across various sectors" },
    { icon: "💰", title: "Fintech", description: "Financial technology and digital payment solutions" },
    { icon: "🚀", title: "Space Technology", description: "Space exploration and satellite technologies" },
    { icon: "⚽", title: "Fitness & Sports", description: "Sports technology and fitness solutions" },
    { icon: "🏥", title: "MedTech/HealthTech", description: "Digital health solutions and medical innovations" }
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
                  It's not just a competition - it's a platform where ideas meet implementation, where students become solution creators, and where innovation drives national development.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 mb-1 sm:mb-2 break-words">8th</div>
                    <div className="text-gray-600 text-xs sm:text-xs md:text-sm break-words">Edition</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 mb-1 sm:mb-2 break-words">72,165</div>
                    <div className="text-gray-600 text-xs sm:text-xs md:text-sm break-words">Idea Submissions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 mb-1 sm:mb-2 break-words">2587</div>
                    <div className="text-gray-600 text-xs sm:text-xs md:text-sm break-words">Institutions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 mb-1 sm:mb-2 break-words">8,26,635+</div>
                    <div className="text-gray-600 text-xs sm:text-xs md:text-sm break-words">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 mb-1 sm:mb-2 break-words">60</div>
                    <div className="text-gray-600 text-xs sm:text-xs md:text-sm break-words">Nodal Centers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 mb-1 sm:mb-2 break-words">1360</div>
                    <div className="text-gray-600 text-xs sm:text-xs md:text-sm break-words">Finale Teams</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 mb-1 sm:mb-2 break-words">8160+</div>
                    <div className="text-gray-600 text-xs sm:text-xs md:text-sm break-words">Youngsters</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 mb-1 sm:mb-2 break-words">1.8:1</div>
                    <div className="text-gray-600 text-xs sm:text-xs md:text-sm break-words">Male:Female Ratio</div>
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
                        <div className="text-xs sm:text-sm text-gray-600">{achievement.year === '2025' ? 'Finale Teams' : 'Teams'}</div>
                      </div>
                      <div>
                        <div className="text-lg sm:text-2xl font-bold text-green-600">{achievement.solutions}</div>
                        <div className="text-xs sm:text-sm text-gray-600">{achievement.year === '2025' ? 'Ideas' : 'Solutions'}</div>
                      </div>
                      <div>
                        <div className="text-lg sm:text-2xl font-bold text-orange-600">{achievement.states}</div>
                        <div className="text-xs sm:text-sm text-gray-600">{achievement.year === '2025' ? 'Nodal Centers' : 'States'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SIH 2025 Winners Section */}
            <div className="mt-8 sm:mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 border-2 border-yellow-200">
              <div className="flex items-center mb-6">
                <div className="text-4xl sm:text-5xl mr-4">🏆</div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">SIH 2025 Winners Announced</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Software Edition - December 12, 2025</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 sm:p-6 mb-6 shadow-md">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                  The Grand Finale of Smart India Hackathon 2025 concluded with five exceptional student teams emerging as winners after an intense 36-hour coding marathon. Organised by MIC and AICTE, the event brought together innovators from 12 states across 60 nodal centres nationwide.
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Finalists developed AI-driven solutions for Jammu & Kashmir's problem statements, focusing on educational and technological needs including AI-driven timetable generation, digital mental health ecosystems, and personalised career advisory systems.
                </p>
              </div>

              <div className="mb-6">
                <img 
                  src="/sih-2025-winners.jpeg" 
                  alt="SIH 2025 Winners" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">🥇 Winning Teams (₹1,50,000 each)</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🎯</span>
                    <h5 className="font-bold text-gray-800">Eklavya</h5>
                  </div>
                  <p className="text-gray-600 text-sm">MIT Academy of Engineering, Pune, Maharashtra</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🌉</span>
                    <h5 className="font-bold text-gray-800">Gap Bridgers</h5>
                  </div>
                  <p className="text-gray-600 text-sm">IIIT Nagpur, Maharashtra</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🐕</span>
                    <h5 className="font-bold text-gray-800">Hack Hounds</h5>
                  </div>
                  <p className="text-gray-600 text-sm">Dr. Mahalingam College of Engineering, Coimbatore, Tamil Nadu</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🚀</span>
                    <h5 className="font-bold text-gray-800">Team Pioneers</h5>
                  </div>
                  <p className="text-gray-600 text-sm">Kalasalingam Academy of Research and Education, Tamil Nadu</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🦸</span>
                    <h5 className="font-bold text-gray-800">Teen Titans</h5>
                  </div>
                  <p className="text-gray-600 text-sm">Bharatiya Vidya Bhavan's Sardar Patel Institute of Technology, Mumbai, Maharashtra</p>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                <p className="text-gray-700 text-sm sm:text-base italic">
                  "SIH pushed us to refine our idea, respond to real-time feedback, and validate the real impact of our solution." - Winner Team Member
                </p>
              </div>
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
                  <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{area.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{area.description}</p>
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
            <button
              onClick={() => setShowModal(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg transition-colors duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Register Your Team
            </button>
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
      </div>
    </div>
  )
}

export default About
