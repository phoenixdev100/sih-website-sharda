import { useState } from 'react'

const Timeline = () => {

  const timelineEvents = [
    {
      id: 1,
      date: "August 2025",
      title: "SIH Problem Statement Launch",
      description: "Official problem statements from various ministries and organizations released",
      status: "Live",
      icon: "📋",
      color: "blue",
    },
    {
      id: 2,
      date: "August 2025",
      title: "Registration of SPOCs",
      description: "Single Point of Contact registration for educational institutions",
      status: "Live",
      icon: "👥",
      color: "green",
    },
    {
      id: 3,
      date: "August-September 2025",
      title: "Internal Hackathon",
      description: "Institution-level hackathons to select teams for national finale",
      status: "upcoming",
      icon: "🏫",
      color: "purple",
    },
    {
      id: 4,
      date: "August-September 2025",
      title: "Nomination of Top Teams & Submission",
      description: "Top teams nominated by institutions and idea submissions on portal",
      status: "upcoming",
      icon: "📤",
      color: "orange",
    },
    {
      id: 5,
      date: "August-September 2025",
      title: "Report Compilation & Portal Upload",
      description: "Compilation of reports and uploading on official SIH portal",
      status: "upcoming",
      icon: "📊",
      color: "indigo",
    },
    {
      id: 6,
      date: "September-October 2025",
      title: "Screening of Ideas",
      description: "Expert evaluation and screening of submitted solutions",
      status: "upcoming",
      icon: "🔍",
      color: "cyan",
    },
    {
      id: 7,
      date: "October 2025",
      title: "Result Publication",
      description: "Official announcement of selected teams for Grand Finale",
      status: "upcoming",
      icon: "📢",
      color: "green",
    },
    {
      id: 8,
      date: "October 2025",
      title: "Mentoring & Training Sessions",
      description: "Expert mentoring and training for selected teams",
      status: "upcoming",
      icon: "🎓",
      color: "blue",
    },
    {
      id: 9,
      date: "November 2025",
      title: "Announcement of Shortlist for Grand Finale",
      description: "Final shortlisted teams announced for the national finale",
      status: "upcoming",
      icon: "🎯",
      color: "purple",
    },
    {
      id: 10,
      date: "December 2025",
      title: "SIH Grand Finale & Winner Announcement",
      description: "36-hour national finale and announcement of winners",
      status: "upcoming",
      icon: "🏆",
      color: "red",
    },
    {
      id: 11,
      date: "October 2025",
      title: "Communication of Results to Finalist Teams",
      description: "Official communication and recognition of finalist teams",
      status: "upcoming",
      icon: "📧",
      color: "indigo",
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live':
        return 'bg-green-500'
      case 'current':
        return 'bg-blue-500'
      case 'upcoming':
        return 'bg-gray-400'
      case 'closed':
        return 'bg-red-500'
      default:
        return 'bg-gray-400'
    }
  }

  const getEventColor = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600',
      purple: 'from-purple-500 to-purple-600',
      indigo: 'from-indigo-500 to-indigo-600',
      red: 'from-red-500 to-red-600'
    }
    return colors[color] || 'from-gray-500 to-gray-600'
  }

  const phases = [
    {
      name: "Launch Phase",
      events: [1, 2],
      description: "Problem statements release and SPOC registration",
      color: "bg-blue-100 text-blue-800"
    },
    {
      name: "Institution Phase",
      events: [3, 4, 5],
      description: "Internal hackathons and team nominations",
      color: "bg-purple-100 text-purple-800"
    },
    {
      name: "Evaluation Phase",
      events: [6, 7, 8],
      description: "Screening, results, and mentoring sessions",
      color: "bg-green-100 text-green-800"
    },
    {
      name: "Finale Phase",
      events: [9, 10, 11],
      description: "Grand finale and winner announcements",
      color: "bg-red-100 text-red-800"
    }
  ]

  // Calculate phase progress dynamically
  const calculatePhaseProgress = (phaseEvents) => {
    const phaseEventData = timelineEvents.filter(event => phaseEvents.includes(event.id))
    const completedEvents = phaseEventData.filter(event => event.status === 'Live' || event.status === 'closed').length
    return Math.round((completedEvents / phaseEventData.length) * 100)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 px-4">SIH 2025 Timeline</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 mb-8">
            Your complete roadmap to Smart India Hackathon 2025. Stay on track with all important dates and milestones.
          </p>
          
          {/* Timeline Image */}
          <div className="max-w-5xl mx-auto mb-8 px-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <img 
                src="/sih-timeline-2025.png" 
                alt="Smart India Hackathon 2025 Complete Timeline Flow" 
                className="w-full h-auto"
                style={{ maxHeight: '600px', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>

        {/* Phase Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {phases.map((phase, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${phase.color}`}>
                Phase {index + 1}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{phase.name}</h3>
              <p className="text-gray-600 text-sm">{phase.description}</p>
            </div>
          ))}
        </div>

        {/* Progress Bar Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">📊 SIH 2025 Progress Tracker</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Track the completion status of Smart India Hackathon 2025 phases and milestones
            </p>
          </div>

          {/* Overall Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-lg font-semibold text-gray-800">Overall Progress</span>
              <span className="text-lg font-bold text-blue-600">
                {Math.round((timelineEvents.filter(event => event.status === 'Live' || event.status === 'closed').length / timelineEvents.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: `${(timelineEvents.filter(event => event.status === 'Live' || event.status === 'closed').length / timelineEvents.length) * 100}%` 
                }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>Started: August 2025</span>
              <span>Expected Completion: December 2025</span>
            </div>
          </div>

          {/* Phase-wise Progress */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {phases.map((phase, index) => {
              const progress = calculatePhaseProgress(phase.events)
              const phaseColors = {
                0: { bg: 'from-blue-50 to-blue-100', bar: 'bg-blue-200', fill: 'bg-blue-500', text: 'text-blue-700', circle: 'bg-blue-500', title: 'text-blue-800' },
                1: { bg: 'from-purple-50 to-purple-100', bar: 'bg-purple-200', fill: 'bg-purple-500', text: 'text-purple-700', circle: 'bg-purple-500', title: 'text-purple-800' },
                2: { bg: 'from-orange-50 to-orange-100', bar: 'bg-orange-200', fill: 'bg-orange-500', text: 'text-orange-700', circle: 'bg-orange-500', title: 'text-orange-800' },
                3: { bg: 'from-green-50 to-green-100', bar: 'bg-green-200', fill: 'bg-green-500', text: 'text-green-700', circle: 'bg-green-500', title: 'text-green-800' }
              }
              const colors = phaseColors[index]
              
              return (
                <div key={index} className={`bg-gradient-to-br ${colors.bg} rounded-xl p-4`}>
                  <div className="flex items-center mb-3">
                    <div className={`w-8 h-8 ${colors.circle} rounded-full flex items-center justify-center text-white text-sm font-bold mr-3`}>
                      {index + 1}
                    </div>
                    <span className={`font-semibold ${colors.title}`}>{phase.name.replace(' Phase', '')}</span>
                  </div>
                  <div className={`w-full ${colors.bar} rounded-full h-2 mb-2`}>
                    <div className={`h-full ${colors.fill} rounded-full transition-all duration-1000 ease-out`} style={{ width: `${progress}%` }}></div>
                  </div>
                  <span className={`text-xs ${colors.text}`}>{progress}% Complete</span>
                </div>
              )
            })}
          </div>

          {/* Progress Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {timelineEvents.filter(event => event.status === 'Live' || event.status === 'closed').length}
              </div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {timelineEvents.filter(event => event.status === 'current').length}
              </div>
              <div className="text-sm text-gray-600">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600">
                {timelineEvents.filter(event => event.status === 'upcoming').length}
              </div>
              <div className="text-sm text-gray-600">Upcoming</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{timelineEvents.length}</div>
              <div className="text-sm text-gray-600">Total Events</div>
            </div>
          </div>
        </div>

        {/* Interactive Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 rounded-full"></div>

            {timelineEvents.map((event, index) => (
              <div key={event.id} className="relative flex items-start mb-12 group">
                {/* Timeline dot */}
                <div
                  className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${getEventColor(event.color)} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg z-10 transform hover:scale-110 transition-all duration-300`}
                >
                  {event.icon}
                </div>

                {/* Event content */}
                <div className="ml-8 bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex-grow group-hover:transform group-hover:-translate-y-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">{event.description}</p>
                    </div>
                    <div className="mt-4 lg:mt-0 flex flex-col items-center lg:items-end gap-2">
                      <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${getEventColor(event.color)}`}>
                        {event.date}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <div className={`w-3 h-3 ${getStatusColor(event.status)} rounded-full mr-2`}></div>
                        {event.status === 'upcoming' ? 'Upcoming' : 
                         event.status === 'current' ? 'Current' : 
                         event.status === 'Live' ? 'Live' : 
                         event.status === 'closed' ? 'Closed/Ended' : 'Upcoming'}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Reminders */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-3">⚠️</span>
              Critical Deadlines
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Registration closes: Till September, 2025
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                No extensions will be granted
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Incomplete registrations will be rejected
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-3">💡</span>
              Success Tips
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Start preparing early
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Form a diverse team
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Practice with mock hackathons
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
