import { useState } from 'react'

const Privacy = () => {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', title: 'Overview', icon: '📋' },
    { id: 'collection', title: 'Data Collection', icon: '📊' },
    { id: 'usage', title: 'Data Usage', icon: '🔧' },
    { id: 'sharing', title: 'Data Sharing', icon: '🤝' },
    { id: 'security', title: 'Security', icon: '🔒' }
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">🛡️ Privacy Overview</h3>
              <p className="text-blue-700 text-lg leading-relaxed mb-4">
                At Sharda University's Smart India Hackathon 2026, we are committed to protecting your privacy. This website serves as an information portal only. We do not collect any personal data through this website. All registration and data collection occurs exclusively through official Google Forms.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <h4 className="font-semibold text-blue-800 mb-2">🎯 Our Commitment</h4>
                  <p className="text-blue-600 text-sm">This website does not collect any personal information. All data collection happens through Google Forms.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <h4 className="font-semibold text-blue-800 mb-2">🔐 Data Security</h4>
                  <p className="text-blue-600 text-sm">Your data is protected using industry-standard security measures and encryption.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Key Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">This website does not collect any personal information - all registration is done via Google Forms</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Your data is never sold or shared with third parties for commercial purposes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">You have full control over your personal information and can request deletion</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">We comply with all applicable data protection laws and regulations</span>
                </li>
              </ul>
            </div>
          </div>
        )

      case 'collection':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">📊 Information We Collect</h3>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">🌐 Website Data Collection</h4>
                <p className="text-blue-700 mb-4">
                  <strong>This website does NOT collect any personal information.</strong> We do not use cookies, tracking scripts, or any data collection mechanisms on this informational website.
                </p>
              </div>
              
              <div className="grid md:grid-cols-1 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-4">📝 Google Forms Data Collection</h4>
                  <p className="text-green-700 mb-3">All personal information is collected exclusively through official Google Forms for registration purposes:</p>
                  <ul className="space-y-2 text-green-700">
                    <li>• Full name and contact details</li>
                    <li>• Email address and phone number</li>
                    <li>• Educational institution information</li>
                    <li>• Student ID and academic details</li>
                    <li>• Team member information</li>
                    <li>• Problem statement preferences</li>
                  </ul>
                  <p className="text-green-600 text-sm mt-3 italic">
                    This data is collected and managed by Google Forms according to Google's Privacy Policy.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-yellow-800 mb-2">📸 Optional Information</h4>
                <p className="text-yellow-700">
                  Profile photos, social media links, and additional portfolio information are collected only with your explicit consent and can be removed at any time.
                </p>
              </div>
            </div>
          </div>
        )

      case 'usage':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">🔧 How We Use Your Information</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Registration & Participation</h4>
                  <p className="text-gray-700 mb-3">
                    Personal information collected through Google Forms is used to process your registration, verify eligibility, and facilitate your participation in the hackathon.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Team formation and management</li>
                    <li>• Problem statement assignment</li>
                    <li>• Event notifications and updates</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">Communication</h4>
                  <p className="text-gray-700 mb-3">
                    We send important updates, announcements, and support communications related to the hackathon using the contact information provided in your Google Form submission.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Event schedules and changes</li>
                    <li>• Technical support and assistance</li>
                    <li>• Results and winner announcements</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-lg font-semibold text-purple-800 mb-3">Improvement & Analytics</h4>
                  <p className="text-gray-700 mb-3">
                    We analyze registration data to improve our processes and enhance future hackathon experiences. This website does not track or analyze user behavior.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Platform performance optimization</li>
                    <li>• User experience enhancement</li>
                    <li>• Future event planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )

      case 'sharing':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">🤝 Data Sharing Policy</h3>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-red-800 mb-3">🚫 What We DON'T Do</h4>
                <ul className="space-y-2 text-red-700">
                  <li>• We never sell your personal information</li>
                  <li>• We don't share data with advertisers</li>
                  <li>• No unauthorized third-party access</li>
                  <li>• No data mining for commercial purposes</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">🏛️ Government Partners</h4>
                  <p className="text-blue-700">
                    We may share necessary information with official SIH organizers and government ministries for evaluation and recognition purposes.
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-green-800 mb-2">🏫 Educational Institution</h4>
                  <p className="text-green-700">
                    Basic participation information may be shared with your educational institution for academic credit and recognition.
                  </p>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-purple-800 mb-2">⚖️ Legal Requirements</h4>
                  <p className="text-purple-700">
                    We may disclose information when required by law, court order, or to protect our rights and safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case 'security':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">🔒 Security Measures</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">🛡️ Technical Safeguards</h4>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>• SSL/TLS encryption for data transmission</li>
                      <li>• Secure database storage with encryption</li>
                      <li>• Regular security audits and updates</li>
                      <li>• Multi-factor authentication options</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-green-800 mb-2">👥 Access Controls</h4>
                    <ul className="text-green-700 space-y-1 text-sm">
                      <li>• Limited staff access to personal data</li>
                      <li>• Role-based permission systems</li>
                      <li>• Regular access reviews and audits</li>
                      <li>• Secure authentication protocols</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-purple-800 mb-2">📋 Operational Security</h4>
                    <ul className="text-purple-700 space-y-1 text-sm">
                      <li>• Staff training on data protection</li>
                      <li>• Incident response procedures</li>
                      <li>• Regular backup and recovery testing</li>
                      <li>• Vendor security assessments</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-orange-800 mb-2">🚨 Breach Response</h4>
                    <ul className="text-orange-700 space-y-1 text-sm">
                      <li>• Immediate containment procedures</li>
                      <li>• Prompt notification to affected users</li>
                      <li>• Cooperation with authorities</li>
                      <li>• Transparent communication</li>
                    </ul>
                  </div>
                </div>
              </div>
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
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 px-4">🔒 Privacy Policy</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12 px-4">
          <div className="bg-white rounded-xl shadow-lg p-1 sm:p-2 flex flex-wrap sm:flex-nowrap gap-1 sm:gap-2 w-full sm:w-auto max-w-full overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center justify-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm flex-1 sm:flex-none min-w-0 ${activeSection === section.id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                aria-label={`View ${section.title} section`}
                aria-pressed={activeSection === section.id}
              >
                <span className="text-sm sm:text-base flex-shrink-0">{section.icon}</span>
                <span className="hidden xs:inline sm:inline truncate">{section.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8">
          {renderContent()}
        </div>

        {/* Last Updated */}
        <div className="text-center mt-8 text-gray-500">
          <p>Last updated: July 27, 2026</p>
        </div>
      </div>
    </div>
  )
}

export default Privacy
