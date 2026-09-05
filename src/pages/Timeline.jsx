import { useState } from 'react'

const Timeline = () => {

  const timelineEvents = [
    {
      id: 1,
      date: "14 August 2026",
      title: "Registration of SPOCs",
      description: "Single Point of Contact registration for educational institutions",
      status: "completed",
      icon: "👥",
      color: "green",
    },
    {
      id: 3,
      date: "August 06 2026",
      title: "Registration of Teams",
      description: "Team registration opens for participating in Smart India Hackathon 2026",
      status: "Live",
      icon: "📝",
      color: "cyan",
    },
    {
      id: 2,
      date: "21 August 2026",
      title: "SIH Problem Statement Launch",
      description: "Official problem statements from various ministries and organizations",
      status: "Live",
      icon: "📋",
      color: "blue",
    },
    {
      id: 4,
      date: "7 Sept 2026",
      title: "Screening Round",
      description: "Online screening via Google Meet to evaluate team presentations and select finalists",
      status: "upcoming",
      icon: "🎥",
      color: "purple",
    },
    {
      id: 6,
      date: "To be announced",
      title: "Final Results Announcement",
      description: "Top teams nominated by institutions and idea submissions on portal",
      status: "upcoming",
      icon: "📢",
      color: "indigo",
    },
    {
      id: 7,
      date: "To be announced",
      title: "Report Compilation & Portal Upload",
      description: "Compilation of reports and uploading on official SIH portal",
      status: "upcoming",
      icon: "📊",
      color: "orange",
    },
    {
      id: 8,
      date: "To be announced",
      title: "Grand Finale",
      description: "National-level hackathon finale at nodal centers across India",
      status: "upcoming",
      icon: "🏆",
      color: "red"
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
      case 'completed':
        return 'bg-blue-600'
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
      events: [1, 3],
      description: "SPOC registration and team registration",
      color: "bg-blue-100 text-blue-800"
    },
    {
      name: "Institution Phase",
      events: [2, 4, 6],
      description: "Problem statements, screening rounds and team nominations",
      color: "bg-purple-100 text-purple-800"
    },
    {
      name: "Finale Phase",
      events: [7],
      description: "National-level grand finale",
      color: "bg-red-100 text-red-800"
    }
  ]

  // Calculate phase progress dynamically
  const calculatePhaseProgress = (phaseEvents) => {
    const phaseEventData = timelineEvents.filter(event => phaseEvents.includes(event.id))
    const completedEvents = phaseEventData.filter(event => event.status === 'completed' || event.status === 'Live').length
    return Math.round((completedEvents / phaseEventData.length) * 100)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 px-4">SIH 2026 Timeline</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 mb-8">
            Your complete roadmap to Smart India Hackathon 2026 (9th Edition). Stay on track with all important dates and milestones.
          </p>

          {/* Timeline Image */}
          <div className="max-w-5xl mx-auto mb-8 px-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <img
                src="./sih-timeline-2026.png"
                alt="Smart India Hackathon 2026 Complete Timeline Flow"
                className="w-full h-auto"
                style={{ maxHeight: '600px', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>

        {/* Progress Bar Section */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-12 sm:mb-16 mx-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">📊 SIH 2026 Progress Tracker</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Track the completion status of Smart India Hackathon 2026 phases and milestones
            </p>
          </div>

          {/* Overall Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-lg font-semibold text-gray-800">Overall Progress</span>
              <span className="text-lg font-bold text-blue-600">
                {Math.round((timelineEvents.filter(event => event.status === 'completed' || event.status === 'Live').length / timelineEvents.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${(timelineEvents.filter(event => event.status === 'completed' || event.status === 'Live').length / timelineEvents.length) * 100}%`
                }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>SPOC Registration: 14 August 2026</span>
              <span>Team Registration: August 08 2026</span>
            </div>
          </div>

          {/* Phase-wise Progress */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {phases.map((phase, index) => {
              const progress = calculatePhaseProgress(phase.events)
              const phaseColors = {
                0: { bg: 'from-blue-50 to-blue-100', bar: 'bg-blue-200', fill: 'bg-blue-500', text: 'text-blue-700', circle: 'bg-blue-500', title: 'text-blue-800' },
                1: { bg: 'from-purple-50 to-purple-100', bar: 'bg-purple-200', fill: 'bg-purple-500', text: 'text-purple-700', circle: 'bg-purple-500', title: 'text-purple-800' },
                2: { bg: 'from-red-50 to-red-100', bar: 'bg-red-200', fill: 'bg-red-500', text: 'text-red-700', circle: 'bg-red-500', title: 'text-red-800' }
              }
              const colors = phaseColors[index]

              return (
                <div key={index} className={`bg-gradient-to-br ${colors.bg} rounded-xl p-3 sm:p-4`}>
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {timelineEvents.filter(event => event.status === 'completed' || event.status === 'Live').length}
              </div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {timelineEvents.filter(event => event.status === 'current' || event.status === 'Live').length}
              </div>
              <div className="text-sm text-gray-600">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600">
                {timelineEvents.filter(event => event.status === 'upcoming' && event.status !== 'Live').length}
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
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 rounded-full"></div>

            {timelineEvents.map((event, index) => (
              <div key={event.id} className="relative flex items-start mb-8 sm:mb-12 group">
                {/* Timeline dot */}
                <div
                  className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${getEventColor(event.color)} rounded-full flex items-center justify-center text-white text-lg sm:text-2xl font-bold shadow-lg z-10 transform hover:scale-110 transition-all duration-300`}
                >
                  {event.icon}
                </div>

                {/* Event content */}
                <div className="ml-4 sm:ml-8 bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex-grow group-hover:transform group-hover:-translate-y-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
                      <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{event.description}</p>
                    </div>
                    <div className="mt-3 lg:mt-0 flex flex-col items-start lg:items-end gap-2">
                      <span className={`inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-white bg-gradient-to-r ${getEventColor(event.color)}`}>
                        {event.date}
                      </span>
                      <div className="flex items-center text-xs sm:text-sm text-gray-500">
                        <div className={`w-3 h-3 ${getStatusColor(event.status)} rounded-full mr-2`}></div>
                        {event.status === 'upcoming' ? 'Upcoming' :
                          event.status === 'current' ? 'Current' :
                            event.status === 'Live' ? 'Live' :
                              event.status === 'completed' ? 'Completed' :
                                event.status === 'closed' ? 'Closed/Ended' : 'Upcoming'}
                      </div>
                    </div>
                  </div>

                  {/* Sub-cards for Registration of Teams */}
                  {event.id === 3 && (
                    <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center">
                        <span className="text-cyan-500 mr-2">📅</span>
                        Registration Details
                      </h4>

                      {/* Registration Deadline Sub-card */}
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3 sm:p-4 border-l-4 border-blue-500">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <h5 className="font-semibold text-blue-800 mb-1 text-sm sm:text-base">Team Registration Deadline</h5>
                            <p className="text-blue-700 text-xs sm:text-sm">Final date for team registrations</p>
                          </div>
                          <div className="text-left sm:text-right">
                            <div className="bg-blue-500 text-white px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-medium">
                              Sept 5, 2026 11:59 PM
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Sub-cards for Sharda Smart India Hackathon */}
                  {event.id === 4 && (
                    <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center">
                        <span className="text-purple-500 mr-2">📅</span>
                        Evaluation Rounds
                      </h4>

                      {/* First Evaluation Sub-card */}
                      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-3 sm:p-4 border-l-4 border-green-500">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <h5 className="font-semibold text-green-800 mb-1 text-sm sm:text-base">First Evaluation Round</h5>
                            <p className="text-green-700 text-xs sm:text-sm">Initial assessment of submitted ideas</p>
                          </div>
                          <div className="text-left sm:text-right">
                            <div className="bg-green-500 text-white px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-medium">
                              10 September 2026
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Second Evaluation Sub-card */}
                      <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-3 sm:p-4 border-l-4 border-purple-500">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <h5 className="font-semibold text-purple-800 mb-1 text-sm sm:text-base">Second Evaluation Round</h5>
                            <p className="text-purple-700 text-xs sm:text-sm">Final evaluation and team selection</p>
                          </div>
                          <div className="text-left sm:text-right">
                            <div className="bg-purple-500 text-white px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-medium">
                              11 September 2026
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            ))}

            {/* Timeline End Card */}
            <div className="relative flex items-start mb-8 sm:mb-12">
              {/* End dot */}
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white text-lg sm:text-2xl font-bold shadow-lg z-10">
                🏁
              </div>

              {/* End card content */}
              <div className="ml-4 sm:ml-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg flex-grow border-2 border-green-300">
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">✅ Timeline Completed</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Reminders */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl p-6 sm:p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">⚠️</span>
              Critical Deadlines
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                SPOC Registration: Completed
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Team Registration Deadline: September 5, 2026 11:59 PM
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Problem Statements: August 21 2026
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

          <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 sm:p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">💡</span>
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
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Register before the deadline
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Stay updated on announcements
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
