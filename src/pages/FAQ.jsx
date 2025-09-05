import { useState } from 'react'

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general')
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqCategories = [
    {
      id: 'general',
      title: 'General Information',
      icon: '❓',
      questions: [
        {
          q: "What is Smart India Hackathon (SIH) 2025?",
          a: "Smart India Hackathon is a nationwide initiative by the Government of India to provide students with a platform to solve real-world problems through innovative technology solutions. SIH 2025 is the latest edition of this prestigious competition."
        },
        {
          q: "Who can participate in SIH 2025?",
          a: "All undergraduate and postgraduate students currently enrolled in recognized educational institutions in India can participate. Teams must consist of exactly 6 members from the same institution, including at least one female member."
        },
        {
          q: "Is there any registration fee for SIH 2025?",
          a: "No, participation in Smart India Hackathon 2025 is completely free. There are no registration fees or hidden charges."
        },
        {
          q: "What are the prizes for SIH 2025?",
          a: "Winners receive cash prizes, certificates, and recognition from the Government of India. Additionally, there are opportunities for internships, job offers, and funding for promising solutions."
        }
      ]
    },
    {
      id: 'registration',
      title: 'Registration Process',
      icon: '📝',
      questions: [
        {
          q: "How do I register for SIH 2025?",
          a: "Registration is done through your institution's internal hackathon. First, form a team of 6 members, participate in your college's internal SIH event, and get selected to represent your institution at the national level."
        },
        {
          q: "When does registration open and close?",
          a: "Registration for Internal Hackathon opens in August 2025 and closes by September 2025. No extensions will be granted, and incomplete registrations will be rejected. Check with Sharda University coordinators for exact dates."
        },
        {
          q: "Can team members be from different colleges?",
          a: "No, all team members must be from the same institution as per SIH guidelines. This ensures proper coordination and institutional support."
        },
        {
          q: "Can I change my team after registration?",
          a: "Team changes are generally not allowed after the registration deadline. However, in exceptional circumstances, contact your institution's SIH coordinator for guidance."
        }
      ]
    },
    {
      id: 'team',
      title: 'Team Formation',
      icon: '👥',
      questions: [
        {
          q: "How many members should be in a team?",
          a: "Each team must have exactly 6 members, including 1 team leader. It is mandatory to have at least one female member in the team. Teams with fewer or more members will not be accepted."
        },
        {
          q: "Is it mandatory to have a female team member?",
          a: "Yes, each team must have at least one female member. This is a mandatory requirement for SIH 2025."
        },
        {
          q: "What roles should team members have?",
          a: "While there are no fixed roles, it's recommended to have a mix of skills including programming, design, project management, and domain expertise relevant to your chosen problem statement."
        },
        {
          q: "Can postgraduate and undergraduate students be in the same team?",
          a: "Yes, teams can have a mix of undergraduate and postgraduate students as long as all members are from the same institution."
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Requirements',
      icon: '💻',
      questions: [
        {
          q: "What programming languages can we use?",
          a: "You can use any programming language or technology stack of your choice. There are no restrictions on the technologies you can use to build your solution."
        },
        {
          q: "Do we need to bring our own laptops?",
          a: "Yes, teams must bring their own laptops and any other hardware they need. Internet connectivity and power outlets will be provided at the venue."
        },
        {
          q: "Can we use external APIs and cloud services?",
          a: "Yes, you can use external APIs, cloud services, and third-party libraries. However, ensure you have proper access and credentials during the hackathon."
        },
        {
          q: "What should we submit at the end?",
          a: "You need to submit a working prototype/demo, source code (via GitHub/GitLab), documentation, and a presentation. Detailed submission guidelines will be provided during the event."
        }
      ]
    },
    {
      id: 'event',
      title: 'Event Details',
      icon: '🏆',
      questions: [
        {
          q: "How long is the hackathon?",
          a: "The grand finale is a 36-hour continuous hackathon where teams work on their solutions with mentoring support and regular check-ins."
        },
        {
          q: "Where will the finale be held?",
          a: "The finale locations are announced closer to the event date. Multiple venues across India host the finale simultaneously."
        },
        {
          q: "Will food and accommodation be provided?",
          a: "Food is typically provided during the hackathon. Accommodation arrangements vary by venue - check with organizers for specific details."
        },
        {
          q: "Can we get mentoring during the hackathon?",
          a: "Yes, industry experts and mentors will be available throughout the hackathon to guide teams and provide technical assistance."
        }
      ]
    },
    {
      id: 'problems',
      title: 'Problem Statements',
      icon: '🎯',
      questions: [
        {
          q: "How many problem statements can we choose?",
          a: "Each team can select one primary problem statement. You may also indicate backup choices during registration."
        },
        {
          q: "When are problem statements released?",
          a: "Problem statements are released in August 2025 as part of the SIH Problem Statement Launch phase. They cover 18 major themes including MedTech/BioTech/HealthTech, Smart Education, Agriculture/FoodTech & Rural Development, Smart Automation, Fintech, Clean & Green Technology, Transportation & Logistics, Blockchain & Cybersecurity, Robotics and Drones, Smart Vehicles, Renewable/Sustainable Energy, Disaster Management, Tourism, Heritage & Culture, Games & Toys, Space Technology, Fitness & Sports, and Miscellaneous."
        },
        {
          q: "Can we suggest our own problem statement?",
          a: "No, teams must choose from the officially provided problem statements. These are curated by various government ministries and organizations."
        },
        {
          q: "How do we select the right problem statement?",
          a: "Consider your team's expertise, interest, and the potential impact of the solution. Choose problems that align with your technical skills and passion."
        }
      ]
    }
  ]

  const toggleFAQ = (categoryId, questionIndex) => {
    const faqId = `${categoryId}-${questionIndex}`
    setOpenFAQ(openFAQ === faqId ? null : faqId)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Smart India Hackathon 2025
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center mb-12 bg-white rounded-xl shadow-lg p-2">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 m-1 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* FAQ Content */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {faqCategories
            .filter(category => category.id === activeCategory)
            .map(category => (
              <div key={category.id}>
                <div className="flex items-center mb-8">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <h2 className="text-3xl font-bold text-gray-800">{category.title}</h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const faqId = `${category.id}-${index}`
                    const isOpen = openFAQ === faqId

                    return (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleFAQ(category.id, index)}
                          className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                        >
                          <span className="font-semibold text-gray-800">{faq.q}</span>
                          <svg
                            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="px-6 py-4 bg-white border-t border-gray-200">
                            <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-lg mb-6">
            Can't find what you're looking for? Our support team is here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              📞 Contact Support
            </a>
            <a
              href="https://www.sih.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
            >
              🌐 Official Website
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">2877+</div>
            <div className="text-gray-600">Problem Statements</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">13,91,884</div>
            <div className="text-gray-600">Participants</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">36</div>
            <div className="text-gray-600">Hours Hackathon</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">₹15L+</div>
            <div className="text-gray-600">Prize Money</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
