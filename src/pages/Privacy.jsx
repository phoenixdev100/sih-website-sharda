import { useState } from 'react'

const Privacy = () => {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', title: 'Overview', icon: '📋' },
    { id: 'collection', title: 'Data Collection', icon: '📊' },
    { id: 'usage', title: 'Data Usage', icon: '🔧' },
    { id: 'sharing', title: 'Data Sharing', icon: '🤝' },
    { id: 'security', title: 'Security', icon: '🔒' },
    { id: 'rights', title: 'Your Rights', icon: '⚖️' },
    { id: 'contact', title: 'Contact Us', icon: '📞' }
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">🛡️ Privacy Overview</h3>
              <p className="text-blue-700 text-lg leading-relaxed mb-4">
                At Sharda University's Smart India Hackathon 2025, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <h4 className="font-semibold text-blue-800 mb-2">🎯 Our Commitment</h4>
                  <p className="text-blue-600 text-sm">We collect only necessary information to provide you with the best hackathon experience.</p>
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
                  <span className="text-gray-700">We collect minimal personal information required for registration and participation</span>
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
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-800 mb-4">Personal Information</h4>
                  <ul className="space-y-2 text-purple-700">
                    <li>• Full name and contact details</li>
                    <li>• Email address and phone number</li>
                    <li>• Educational institution information</li>
                    <li>• Student ID and academic details</li>
                    <li>• Team member information</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-4">Technical Information</h4>
                  <ul className="space-y-2 text-green-700">
                    <li>• IP address and device information</li>
                    <li>• Browser type and version</li>
                    <li>• Usage patterns and preferences</li>
                    <li>• Login timestamps and activity</li>
                    <li>• File uploads and submissions</li>
                  </ul>
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
                    We use your personal information to process your registration, verify eligibility, and facilitate your participation in the hackathon.
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
                    We send important updates, announcements, and support communications related to the hackathon.
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
                    We analyze usage patterns to improve our platform and enhance the hackathon experience.
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

      case 'rights':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">⚖️ Your Privacy Rights</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">📋 Access & Review</h4>
                    <p className="text-blue-700 text-sm mb-2">
                      You have the right to access and review all personal information we have collected about you.
                    </p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                      Request Data Access
                    </button>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
                    <h4 className="text-lg font-semibold text-green-800 mb-3">✏️ Correction & Update</h4>
                    <p className="text-green-700 text-sm mb-2">
                      You can request corrections to inaccurate information or update your personal details at any time.
                    </p>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                      Update Information
                    </button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-4 border border-red-200">
                    <h4 className="text-lg font-semibold text-red-800 mb-3">🗑️ Deletion Rights</h4>
                    <p className="text-red-700 text-sm mb-2">
                      You can request deletion of your personal information, subject to legal and operational requirements.
                    </p>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors">
                      Request Deletion
                    </button>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
                    <h4 className="text-lg font-semibold text-purple-800 mb-3">📧 Communication Control</h4>
                    <p className="text-purple-700 text-sm mb-2">
                      You can opt-out of non-essential communications while maintaining access to important updates.
                    </p>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                      Manage Preferences
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">⏱️ Response Timeline</h4>
                <p className="text-gray-700">
                  We will respond to your privacy requests within 30 days. For complex requests, we may extend this period by an additional 60 days with proper notification.
                </p>
              </div>
            </div>
          </div>
        )

      case 'contact':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">📞 Contact Information</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-4">🏛️ Data Protection Officer</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-blue-700">privacy@sharda.ac.in</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-blue-700">+91 120 4571000</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-4">🏫 University Address</h4>
                  <div className="space-y-2 text-green-700">
                    <p>Sharda University</p>
                    <p>Plot No. 32-34, Knowledge Park III</p>
                    <p>Greater Noida, UP 201310</p>
                    <p>India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-yellow-800 mb-2">📝 Privacy Complaints</h4>
                <p className="text-yellow-700">
                  If you have concerns about how we handle your personal information, please contact our Data Protection Officer first. 
                  You also have the right to lodge a complaint with the relevant data protection authority.
                </p>
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
        <div className="flex flex-wrap justify-center mb-8 sm:mb-12 px-4">
          <div className="bg-white rounded-xl shadow-lg p-2 flex flex-wrap gap-1 sm:gap-2 w-full sm:w-auto overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center justify-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm whitespace-nowrap ${activeSection === section.id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                <span className="text-sm sm:text-base">{section.icon}</span>
                <span className="hidden xs:inline sm:inline">{section.title}</span>
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
          <p>Last updated: September 4, 2025</p>
        </div>
      </div>
    </div>
  )
}

export default Privacy
