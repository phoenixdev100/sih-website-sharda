import { useState } from 'react'

const Announcements = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const announcements = [
    {
      id: 4,
      title: "📢 Technova Presents: Hackathon 101 Session",
      content: "Hey Innovators! 👋 The Smart India Hackathon (SIH) 2025 Internal Round is here, and this is YOUR chance to shine at the national stage! 🌟 Technova – The Technical Society of SSCSE, Sharda University is organizing an exclusive online session to guide you towards SIH success.",
      category: "events",
      priority: "high",
      date: "2025-09-12",
      details: [
        "Date: Friday, 12th September 2025",
        "Time: 9:30 PM – 10:30 PM",
        "Venue: Microsoft Teams",
        "Special Highlight: Hear from Team Outcast – Winners of SIH 2024",
        "Learn success strategies and journey insights",
        "Tips to excel in SIH 2025 and Q&A with experienced mentors",
        "Use your college email ID to register"
      ],
      link: "https://luma.com/wafljh32",
      linkText: "Register for Session"
    },
    {
      id: 3,
      title: "🎯 Team Registration Now Open!",
      content: "Exciting news! Team registration for Smart India Hackathon 2025 is now officially open. All eligible teams can register from September 8th to September 17th, 2025. Don't miss this opportunity to be part of India's biggest hackathon. Register your team today and showcase your innovative solutions!",
      category: "registration",
      priority: "high",
      date: "2025-09-08",
      details: [
        "Registration period: September 8-17, 2025",
        "Open for all eligible educational institutions",
        "Team size: 6 members (1 Team Lead + 5 Other Team Members)",
        "Each team must include at least one girl/female member",
        "Multiple teams can register from same institution",
        "A participant can be part of only one team"
      ],
      link: "/registration",
      linkText: "Register Your Team"
    },
    {
      id: 2,
      title: "📊 Official Presentation Format Available",
      content: "The official presentation template for SIH 2025 submissions is now available for download. All teams must use this standardized format for their final presentations to ensure consistency and proper evaluation. The template includes guidelines for content structure, design elements, and submission requirements.",
      category: "guidelines",
      priority: "high",
      date: "2025-09-06",
      details: [
        "Standardized PowerPoint template with official SIH branding",
        "Pre-defined slide layouts for problem statement, solution, and demo",
        "Guidelines for content organization and presentation flow",
        "Technical specifications and submission format requirements"
      ],
      link: "./SIH-Presentation-Format.pptx",
      linkText: "Download PPT Template"
    },
    {
      id: 1,
      title: "🚀 SIH 2025 Problem Statements Are Now Live!",
      content: "We're excited to announce that the official Smart India Hackathon 2025 problem statements have been released! Teams can now browse through 18 major themes including MedTech/BioTech/HealthTech, Smart Education, Agriculture/FoodTech & Rural Development, Smart Automation, Fintech, Clean & Green Technology, and many more cutting-edge categories.",
      category: "updates",
      priority: "high",
      date: "2025-08-27",
      details: [
        "Over 2877+ problem statements across 18 major themes",
        "Problems sourced from 100+ government ministries and departments",
        "New themes include Space Technology, Robotics & Drones, Heritage & Culture",
        "Enhanced focus on emerging technologies like Blockchain & Cybersecurity"
      ],
      link: "https://www.sih.gov.in/sih2025PS",
      linkText: "View Problem Statements"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Announcements', icon: '📢' },
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
            Stay updated with the latest news, updates, and important information about SIH 2025
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
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-l-4 border-green-500">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {announcements.filter(a => a.category === 'registration').length}
            </div>
            <div className="text-gray-600">Registration Related</div>
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
                    <a
                      href={announcement.link}
                      target={announcement.link.startsWith('http') ? '_blank' : '_self'}
                      rel={announcement.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {announcement.linkText} →
                    </a>
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
              💬 Join WhatsApp Group
            </a>
            <a
              href="mailto:support@phoenixdev100.tech"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
            >
              📧 Email Notifications
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Announcements
