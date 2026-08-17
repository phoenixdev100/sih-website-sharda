import { useState } from 'react'
import Modal from '../components/Modal'

const Announcements = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [showModal, setShowModal] = useState(false)

  const announcements = [
    {
      id: 1,
      title: "🚀 Team Registration Has Started!",
      content: "Team registration for Smart India Hackathon 2026 is now open! Form your teams of 6 members and register before the deadline. Don't miss this opportunity to participate in India's biggest hackathon!",
      category: "registration",
      priority: "high",
      date: "2026-08-06",
      details: [
        "Team registration is now live",
        "Teams must have exactly 6 members",
        "At least one female member is mandatory per team"
      ],
      link: "/registration",
      linkText: "Register Your Team"
    },
    {
      id: 2,
      title: "🎯 SIH 2026 Problem Statements Are Now Live!",
      content: "We're excited to announce that the Sharda Internal Smart India Hackathon 2026 problem statements have been released! Teams can now browse through problem statements across Software and Hardware categories. Start exploring the challenges and choose the one that excites your team!",
      category: "updates",
      priority: "high",
      date: "2026-08-06",
      details: [
        "Problem statements now available for Software and Hardware categories",
        "Browse through innovative challenges from various domains",
        "Select problem statements that match your team's expertise",
        "Start preparing your innovative solutions today"
      ],
      link: "/problem-statements",
      linkText: "View Problem Statements"
    },
    {
      id: 3,
      title: "📋 Official Presentation Format Available",
      content: "The official presentation template for SIH 2026 submissions is now available for download. All teams must use this standardized format for their final presentations to ensure consistency and proper evaluation. The template includes guidelines for content structure, design elements, and submission requirements.",
      category: "guidelines",
      priority: "high",
      date: "2026-08-06",
      details: [
        "Standardized PowerPoint template with official SIH branding",
        "Pre-defined slide layouts for problem statement, solution, and demo",
        "Guidelines for content organization and presentation flow",
        "Technical specifications and submission format requirements"
      ],
      link: "./SIH2026-IDEA-Presentation-Format.pptx",
      linkText: "Download PPT Template"
    },
    {
      id: 4,
      title: "✅ SPOC Registration Update",
      content: "The Single Point of Contact (SPOC) for Sharda University has already been registered. Students do not need to take any action regarding SPOC registration. Our SPOC, Mr. Ashish Kumar, will handle all coordination and communication for SIH 2026. Stay tuned for further updates regarding problem statements, team registration, and other important dates.",
      category: "registration",
      priority: "high",
      date: "2026-07-27",
      details: [
        "Sharda University SPOC already registered",
        "SPOC Name: Mr. Ashish Kumar",
        "Students do not need to register as SPOC",
        "More updates coming soon - stay tuned!"
      ]
    }
  ]

  const categories = [
    { id: 'all', name: 'All Announcements', icon: '📢' },
    { id: 'important', name: 'Important', icon: '🚨' },
    { id: 'partnership', name: 'Partnerships', icon: '🤝' },
    { id: 'registration', name: 'Registration', icon: '📝' },
    { id: 'updates', name: 'Updates', icon: '🔄' },
    { id: 'guidelines', name: 'Guidelines', icon: '📋' },
    { id: 'events', name: 'Events', icon: '🎉' }
  ]

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'low': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return '🔴'
      case 'medium': return '🟡'
      case 'low': return '🟢'
      default: return '⚪'
    }
  }

  const filteredAnnouncements = activeFilter === 'all'
    ? announcements
    : announcements.filter(announcement => announcement.category === activeFilter)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">📢 Announcements</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Stay updated with the latest news, updates, and important information about SIH 2026
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-l-4 border-blue-500">
            <div className="text-3xl font-bold text-blue-600 mb-2">{announcements.length}</div>
            <div className="text-gray-600">Total Announcements</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-l-4 border-red-500">
            <div className="text-3xl font-bold text-red-600 mb-2">
              {announcements.filter(a => a.priority === 'high').length}
            </div>
            <div className="text-gray-600">High Priority</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-l-4 border-orange-500">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {announcements.filter(a => a.category === 'important').length}
            </div>
            <div className="text-gray-600">Important Updates</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-l-4 border-purple-500">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {announcements.filter(a => a.category === 'events').length}
            </div>
            <div className="text-gray-600">Events & Workshops</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-12 bg-white rounded-xl shadow-lg p-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 m-1 ${activeFilter === category.id
                ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="hidden sm:inline">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Announcements Grid */}
        <div className="grid gap-8">
          {filteredAnnouncements.map((announcement) => (
            <div key={announcement.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-grow">
                    <div className="flex items-center mb-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getPriorityColor(announcement.priority)} mr-3`}>
                        {getPriorityIcon(announcement.priority)} {announcement.priority.toUpperCase()}
                      </span>
                      <span className="text-sm text-gray-500">{formatDate(announcement.date)}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{announcement.title}</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{announcement.content}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Details:</h3>
                    <ul className="space-y-2">
                      {announcement.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-end justify-end">
                    {announcement.linkText && (
                      <>
                        {announcement.onClick ? (
                          <button
                            onClick={announcement.onClick}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                          >
                            {announcement.linkText} →
                          </button>
                        ) : (
                          <a
                            href={announcement.link}
                            target={announcement.link && announcement.link.startsWith('http') ? '_blank' : '_self'}
                            rel={announcement.link && announcement.link.startsWith('http') ? 'noopener noreferrer' : ''}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                          >
                            {announcement.linkText} →
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredAnnouncements.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No Announcements Found</h3>
            <p className="text-gray-600">No announcements match the selected filter.</p>
          </div>
        )}

        {/* Subscribe Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">📬 Stay Updated</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Don't miss any important announcements! Join our WhatsApp group for instant notifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.whatsapp.com/JPbRnAhHNnRLpfE5MIQ3PO"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              💬 Join WhatsApp Community
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

export default Announcements
