import { useState } from 'react'

const Guidelines = () => {
  const [activeSection, setActiveSection] = useState('general')

  const guidelinesSections = [
    {
      id: 'general',
      title: 'General Guidelines',
      icon: '📋',
      content: [
        {
          title: 'Participation Rules',
          items: [
            'Teams must consist of exactly 6 members',
            'All team members must be from the same institution',
            'At least one female member is mandatory per team',
            'All participants must be currently enrolled students',
            'Valid student ID required for all team members'
          ]
        },
        {
          title: 'Eligibility Criteria',
          items: [
            'Open to undergraduate and postgraduate students',
            'Students with work experience can participate if currently enrolled',
            'All team members must have valid college enrollment',
            'Institution must be registered with SIH 2025'
          ]
        },
        {
          title: 'Code of Conduct',
          items: [
            'Maintain professional behavior throughout the competition',
            'Respect fellow participants, mentors, and organizers',
            'No plagiarism or copying of existing solutions',
            'Original work and innovative thinking is expected',
            'Follow all venue rules and regulations'
          ]
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Guidelines',
      icon: '💻',
      content: [
        {
          title: 'Development Standards',
          items: [
            'Use any programming language or technology stack',
            'Ensure your solution is scalable and maintainable',
            'Follow industry best practices for coding',
            'Document your code and architecture properly',
            'Include proper error handling and validation'
          ]
        },
        {
          title: 'Submission Requirements',
          items: [
            'Working prototype/demo is mandatory',
            'Source code must be submitted via GitHub/GitLab',
            'Include comprehensive README file',
            'Provide installation and setup instructions',
            'Submit presentation slides (PPT/PDF format)'
          ]
        },
        {
          title: 'Hardware & Software',
          items: [
            'Teams must bring their own laptops/devices',
            'Internet connectivity will be provided at venue',
            'Power outlets available at all workstations',
            'External hardware components allowed if relevant',
            'Cloud services and APIs can be utilized'
          ]
        }
      ]
    },
    {
      id: 'evaluation',
      title: 'Evaluation Criteria',
      icon: '⭐',
      content: [
        {
          title: 'Judging Parameters',
          items: [
            'Innovation and creativity (25%)',
            'Technical implementation (25%)',
            'Problem-solving approach (20%)',
            'Feasibility and scalability (15%)',
            'Presentation and communication (15%)'
          ]
        },
        {
          title: 'Presentation Guidelines',
          items: [
            'Maximum 10 minutes for presentation',
            '5 minutes for Q&A session with judges',
            'All team members should participate',
            'Focus on problem statement and solution',
            'Demonstrate working prototype/demo'
          ]
        },
        {
          title: 'Documentation Standards',
          items: [
            'Clear problem statement understanding',
            'Detailed solution architecture',
            'Technology stack justification',
            'Future scope and improvements',
            'Social impact and benefits'
          ]
        }
      ]
    },
    {
      id: 'timeline',
      title: 'Timeline & Process',
      icon: '⏰',
      content: [
        {
          title: 'Registration Phase',
          items: [
            'Team formation and registration',
            'Problem statement selection',
            'Document submission and verification',
            'Institution-level internal hackathon',
            'Top teams nomination for national finale'
          ]
        },
        {
          title: 'Finale Event',
          items: [
            '36-hour continuous hackathon',
            'Mentoring sessions with industry experts',
            'Regular check-ins and progress reviews',
            'Final presentation to jury panel',
            'Winner announcement and prize distribution'
          ]
        },
        {
          title: 'Important Deadlines',
          items: [
            'Registration deadline: September 2025',
            'Internal hackathon: August-September 2025',
            'Nomination submission: September 2025',
            'Grand finale: December 2025',
            'Result announcement: Post finale'
          ]
        }
      ]
    },
    {
      id: 'resources',
      title: 'Resources & Support',
      icon: '🛠️',
      content: [
        {
          title: 'Available Resources',
          items: [
            'Mentoring sessions with industry experts',
            'Technical workshops and training',
            'Access to cloud platforms and tools',
            'Networking opportunities with professionals',
            'Career guidance and internship opportunities'
          ]
        },
        {
          title: 'Support Channels',
          items: [
            'Dedicated helpdesk for technical queries',
            'WhatsApp groups for real-time updates',
            'Email support for official communications',
            'On-site support during finale event',
            'FAQ section on official website'
          ]
        },
        {
          title: 'Learning Materials',
          items: [
            'Problem statement analysis guides',
            'Technology stack recommendations',
            'Best practices documentation',
            'Sample project repositories',
            'Video tutorials and webinars'
          ]
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">SIH 2025 Guidelines</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guidelines to help you navigate through Smart India Hackathon 2025
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-12 bg-white rounded-xl shadow-lg p-2">
          {guidelinesSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 m-1 ${
                activeSection === section.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="text-lg">{section.icon}</span>
              <span className="hidden sm:inline">{section.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {guidelinesSections
            .filter(section => section.id === activeSection)
            .map(section => (
              <div key={section.id}>
                <div className="flex items-center mb-8">
                  <span className="text-3xl mr-4">{section.icon}</span>
                  <h2 className="text-3xl font-bold text-gray-800">{section.title}</h2>
                </div>

                <div className="grid gap-8">
                  {section.content.map((subsection, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">{subsection.title}</h3>
                      <ul className="space-y-3">
                        {subsection.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Important Notice */}
        <div className="mt-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">⚠️ Important Notice</h3>
          <p className="text-lg mb-4">
            These guidelines are subject to updates. Please check the official SIH website regularly for the latest information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.sih.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              🌐 Visit Official Website
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
            >
              📞 Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guidelines
