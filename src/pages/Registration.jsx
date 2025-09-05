import { useState } from 'react'

const Registration = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    teamName: '',
    teamLeader: '',
    members: ['', '', '', '', ''],
    problemStatement: '',
    college: '',
    contact: '',
    selectedCategory: ''
  })

  const steps = [
    { id: 1, title: "Team Information", icon: "👥" },
    { id: 2, title: "Problem Selection", icon: "📋" },
    { id: 3, title: "Documentation", icon: "📄" },
    { id: 4, title: "Review & Submit", icon: "✅" }
  ]

  const requirements = [
    {
      title: "Team Composition",
      items: [
        "Exactly 6 members per team",
        "At least one female member required",
        "All members from same institution",
        "Valid student ID for all members"
      ],
      icon: "👥",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Eligibility Criteria",
      items: [
        "All members must be current students",
        "Valid college/university enrollment",
        "No professional experience restriction"
      ],
      icon: "🎓",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Technical Requirements",
      items: [
        "Basic programming knowledge",
        "Problem-solving aptitude",
        "Team collaboration skills",
        "Presentation abilities"
      ],
      icon: "💻",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Documentation",
      items: [
        "Student ID cards (all members)",
        "Team members contact details",
        "Formal or smart casual dress code during presentations and evaluations"
      ],
      icon: "📋",
      color: "from-orange-500 to-orange-600"
    }
  ]

  const problemCategories = [
    {
      category: "MedTech/BioTech/HealthTech",
      count: 85,
      description: "Cutting-edge healthcare technology, medical devices, biotechnology solutions",
      icon: "🏥",
      difficulty: "Hard",
      examples: ["AI Diagnostic Tools", "Telemedicine Platforms", "Medical Device Innovation"]
    },
    {
      category: "Smart Education",
      count: 92,
      description: "Digital learning solutions, educational technology, skill development platforms",
      icon: "📚",
      difficulty: "Medium",
      examples: ["Adaptive Learning Systems", "Virtual Classrooms", "Assessment Tools"]
    },
    {
      category: "Agriculture, FoodTech & Rural Development",
      count: 78,
      description: "Smart farming, food processing, rural technology solutions",
      icon: "🌾",
      difficulty: "Medium",
      examples: ["Precision Agriculture", "Food Supply Chain", "Rural Banking Solutions"]
    },
    {
      category: "Smart Automation",
      count: 65,
      description: "AI-powered automation, intelligent systems, resource optimization",
      icon: "🤖",
      difficulty: "Hard",
      examples: ["Industrial Automation", "Smart Manufacturing", "Process Optimization"]
    },
    {
      category: "Fintech",
      count: 58,
      description: "Financial technology, digital payments, blockchain solutions",
      icon: "💰",
      difficulty: "Medium",
      examples: ["Digital Payment Systems", "Cryptocurrency Solutions", "Financial Analytics"]
    },
    {
      category: "Clean & Green Technology",
      count: 72,
      description: "Environmental solutions, waste management, sustainability technology",
      icon: "🌱",
      difficulty: "Medium",
      examples: ["Waste Segregation Systems", "Pollution Monitoring", "Green Energy Solutions"]
    },
    {
      category: "Transportation & Logistics",
      count: 54,
      description: "Smart transportation, logistics optimization, urban mobility solutions",
      icon: "🚛",
      difficulty: "Medium",
      examples: ["Route Optimization", "Fleet Management", "Public Transport Systems"]
    },
    {
      category: "Blockchain & Cybersecurity",
      count: 48,
      description: "Decentralized systems, cybersecurity solutions, data protection",
      icon: "🔐",
      difficulty: "Hard",
      examples: ["Secure Communication", "Identity Management", "Fraud Detection"]
    },
    {
      category: "Robotics and Drones",
      count: 42,
      description: "Autonomous systems, drone technology, robotic solutions",
      icon: "🤖",
      difficulty: "Hard",
      examples: ["Search & Rescue Drones", "Medical Robots", "Agricultural Drones"]
    },
    {
      category: "Smart Vehicles",
      count: 36,
      description: "Autonomous vehicles, intelligent transportation, vehicle technology",
      icon: "🚗",
      difficulty: "Hard",
      examples: ["Self-Driving Cars", "Vehicle Safety Systems", "Traffic Management"]
    },
    {
      category: "Renewable/Sustainable Energy",
      count: 45,
      description: "Clean energy solutions, energy management, sustainability systems",
      icon: "⚡",
      difficulty: "Medium",
      examples: ["Solar Energy Systems", "Energy Storage", "Grid Management"]
    },
    {
      category: "Disaster Management",
      count: 38,
      description: "Emergency response, risk mitigation, disaster preparedness solutions",
      icon: "🚨",
      difficulty: "Medium",
      examples: ["Early Warning Systems", "Emergency Response", "Risk Assessment Tools"]
    },
    {
      category: "Tourism",
      count: 28,
      description: "Travel technology, hospitality solutions, cultural promotion",
      icon: "🏖️",
      difficulty: "Easy",
      examples: ["Travel Planning Apps", "Virtual Tours", "Hospitality Management"]
    },
    {
      category: "Heritage & Culture",
      count: 32,
      description: "Cultural preservation, digital heritage, traditional knowledge systems",
      icon: "🏛️",
      difficulty: "Medium",
      examples: ["Digital Museums", "Cultural Apps", "Heritage Conservation"]
    },
    {
      category: "Games & Toys",
      count: 25,
      description: "Educational games, interactive toys, entertainment technology",
      icon: "🎮",
      difficulty: "Easy",
      examples: ["Educational Games", "AR/VR Toys", "Interactive Learning"]
    },
    {
      category: "Space Technology",
      count: 22,
      description: "Aerospace solutions, satellite technology, space exploration",
      icon: "🚀",
      difficulty: "Hard",
      examples: ["Satellite Applications", "Space Communication", "Navigation Systems"]
    },
    {
      category: "Fitness & Sports",
      count: 18,
      description: "Health monitoring, sports technology, fitness applications",
      icon: "⚽",
      difficulty: "Easy",
      examples: ["Fitness Trackers", "Sports Analytics", "Health Monitoring"]
    },
    {
      category: "Miscellaneous",
      count: 95,
      description: "Cross-domain solutions, innovative applications, emerging technologies",
      icon: "🔧",
      difficulty: "Medium",
      examples: ["IoT Solutions", "Data Analytics", "Emerging Tech Applications"]
    }
  ]

  const registrationProcess = [
    {
      step: 1,
      title: "Team Formation",
      description: "Assemble your dream team with diverse skills",
      details: [
        "Find 6 passionate teammates",
        "Ensure gender diversity (min 1 female)",
        "Mix technical and non-technical skills",
        "Designate a team leader"
      ],
      timeEstimate: "1-2 weeks"
    },
    {
      step: 2,
      title: "Problem Selection",
      description: "Choose a problem statement that excites your team",
      details: [
        "Browse all available categories",
        "Assess team's technical capabilities",
        "Consider real-world impact potential",
        "Select primary and backup options"
      ],
      timeEstimate: "3-5 days"
    },
    {
      step: 3,
      title: "Online Registration",
      description: "Complete the official registration process",
      details: [
        "Fill team and member details",
        "Upload required documents",
        "Confirm problem statement selection",
        "Fill the google form given below"
      ],
      timeEstimate: "2-3 hours"
    },
    {
      step: 4,
      title: "Preparation",
      description: "Get ready for the internal hackathon",
      details: [
        "Research your chosen problem deeply",
        "Plan your solution approach",
        "Prepare presentation materials",
        "Practice team coordination"
      ],
      timeEstimate: "2-3 weeks"
    }
  ]

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800'
      case 'Medium': return 'bg-yellow-100 text-yellow-800'
      case 'Hard': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleMemberChange = (index, value) => {
    const newMembers = [...formData.members]
    newMembers[index] = value
    setFormData(prev => ({ ...prev, members: newMembers }))
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Team Name</label>
              <input
                type="text"
                value={formData.teamName}
                onChange={(e) => handleInputChange('teamName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your team name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Team Leader</label>
              <input
                type="text"
                value={formData.teamLeader}
                onChange={(e) => handleInputChange('teamLeader', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Team leader's full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Team Members (5 additional members)</label>
              {formData.members.map((member, index) => (
                <input
                  key={index}
                  type="text"
                  value={member}
                  onChange={(e) => handleMemberChange(index, e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
                  placeholder={`Member ${index + 2} full name`}
                />
              ))}
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Select Problem Category</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the category that best matches your team's interests and expertise. You'll be able to view specific problem statements within your selected category.
              </p>
              {formData.selectedCategory && (
                <div className="mt-4 inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Selected: {formData.selectedCategory}
                </div>
              )}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problemCategories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => setFormData(prev => ({ ...prev, selectedCategory: category.category }))}
                  className={`bg-white border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer ${formData.selectedCategory === category.category
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-gray-200 hover:border-blue-500'
                    }`}
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <h3 className="text-lg font-bold text-gray-800">{category.category}</h3>
                    <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-600">{category.count} Problems</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(category.difficulty)}`}>
                        {category.difficulty}
                      </span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Example Problems:</h4>
                    <ul className="space-y-1">
                      {category.examples.map((example, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center">
                          <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {formData.selectedCategory === category.category && (
                    <div className="mt-4 flex items-center justify-center">
                      <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Selected
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-4">📋 Required Documents</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-yellow-800 mb-2">For All Team Members:</h4>
                  <ul className="space-y-1 text-sm text-yellow-700">
                    <li>• Valid Student ID Card</li>
                    <li>• College Enrollment Certificate</li>
                    <li>• Government Photo ID</li>
                    <li>• Passport Size Photograph</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-yellow-800 mb-2">Team Documents:</h4>
                  <ul className="space-y-1 text-sm text-yellow-700">
                    <li>• Team Formation Letter</li>
                    <li>• Faculty Mentor Approval</li>
                    <li>• Signed Participation Agreement</li>
                    <li>• Emergency Contact Details</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Team Documents</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors duration-300">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-gray-600">Drop files here or click to upload</p>
                  <p className="text-sm text-gray-500 mt-2">PDF, DOC, or JPG (Max 10MB each)</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Any additional information about your team or special requirements..."
                ></textarea>
              </div>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">✅ Registration Summary</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-green-800 mb-2">Team Information</h4>
                  <p className="text-sm text-green-700"><strong>Team Name:</strong> {formData.teamName || 'Not provided'}</p>
                  <p className="text-sm text-green-700"><strong>Team Leader:</strong> {formData.teamLeader || 'Not provided'}</p>
                  <p className="text-sm text-green-700"><strong>Total Members:</strong> 6</p>
                </div>
                <div>
                  <h4 className="font-medium text-green-800 mb-2">Registration Details</h4>
                  <p className="text-sm text-green-700"><strong>Problem Category:</strong> Selected</p>
                  <p className="text-sm text-green-700"><strong>Documents:</strong> Uploaded</p>
                  <p className="text-sm text-green-700"><strong>Status:</strong> Ready to Submit</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">📋 Terms and Conditions</h3>
              <div className="space-y-3 text-sm text-blue-700">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>I confirm that all team members are eligible and meet the requirements for SIH 2025</span>
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>I agree to the terms and conditions of Smart India Hackathon 2025</span>
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>I understand that incomplete or false information may lead to disqualification</span>
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>I consent to the use of team information for SIH 2025 related communications</span>
                </label>
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
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Registration Portal</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to join SIH 2025? Follow our comprehensive registration process to secure your team's spot.
          </p>
        </div>

        {/* Requirements Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Eligibility Requirements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((req, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${req.color} rounded-xl flex items-center justify-center text-2xl text-white mb-4 mx-auto`}>
                  {req.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 text-center mb-4">{req.title}</h3>
                <ul className="space-y-2">
                  {req.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Registration Process</h2>
          <div className="relative">
            {/* Process Flow Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {registrationProcess.map((process, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-blue-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto shadow-lg">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-3">{process.title}</h3>
                  <p className="text-gray-600 text-center mb-6">{process.description}</p>
                  <div className="space-y-3">
                    {process.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-sm text-gray-600">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Registration Form Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8 text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Register?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Complete your SIH 2025 registration through our official Google Form. Make sure you have all the required documents and team information ready before starting.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">📋 Before You Start</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Have Ready:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Team name and leader details</li>
                    <li>• All 6 team members' information</li>
                    <li>• Student ID cards (scanned copies)</li>
                    <li>• Problem statement preference</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Important Notes:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Form can be saved and resumed later</li>
                    <li>• All fields are mandatory</li>
                    <li>• Double-check information before submitting</li>
                    <li>• You'll receive confirmation email</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="https://forms.gle/CnqcDwV7DUrGxTD36"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                🚀 Start Registration Form
              </a>
              <p className="text-sm text-gray-500">
                Registration will open in a new tab. Keep this page open for reference.
              </p>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>⚠️ Important:</strong> Registration deadline is approaching. Complete your registration as soon as possible to secure your team's spot in SIH 2025.
              </p>
            </div>
          </div>
        </div>

        {/* Student Coordinators Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">SIH Coordinators</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Need help with registration? Contact our dedicated SIH Coordinators for assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Coordinator 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-blue-300">
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg overflow-hidden bg-gray-200">
                  <img
                    src="/image.png"
                    alt="Deepak - Coordinator"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Deepak</h3>
                <p className="text-blue-600 font-medium mb-4">Coordinator</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <div className="flex items-center bg-gray-50 rounded-lg p-3 w-full">
                    <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700 text-sm">support@phoenixdev100.tech</span>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex items-center bg-gray-50 rounded-lg p-3 w-full">
                    <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700 text-sm">+91 9773850767</span>
                  </div>
                </div>
              </div>

              {/* <div className="mt-6 flex gap-3">
                <a href="mailto:[coordinator1@email.com]" className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                  📧 Email
                </a>
                <a href="tel:[+91XXXXXXXXXX]" className="flex-1 bg-green-600 text-white text-center py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium">
                  📞 Call
                </a>
              </div> */}
            </div>

            {/* Coordinator 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-purple-300">
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg overflow-hidden bg-gray-200">
                  <img
                    src="/image.png"
                    alt="Pawan Upadhyay - Coordinator"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Pawan Upadhyay</h3>
                <p className="text-purple-600 font-medium mb-4">Coordinator</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <div className="flex items-center bg-gray-50 rounded-lg p-3 w-full">
                    <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700 text-sm">upawan680@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex items-center bg-gray-50 rounded-lg p-3 w-full">
                    <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700 text-sm">+91 8756066256</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coordinator 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-green-300">
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg overflow-hidden bg-gray-200">
                  <img
                    src="/image.png"
                    alt="Coordinator 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Yashaswini Uddavolu</h3>
                <p className="text-green-600 font-medium mb-4">Coordinator</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <div className="flex items-center bg-gray-50 rounded-lg p-3 w-full">
                    <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700 text-sm">yashaswiniuddavolu@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex items-center bg-gray-50 rounded-lg p-3 w-full">
                    <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700 text-sm">+91 7095651833</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coordinator 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-yellow-300">
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg overflow-hidden bg-gray-200">
                  <img
                    src="/image.png"
                    alt="Pawan Upadhyay - Coordinator"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Saurav Suman</h3>
                <p className="text-yellow-600 font-medium mb-4">Coordinator</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <div className="flex items-center bg-gray-50 rounded-lg p-3 w-full">
                    <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700 text-sm">sauravs95088@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex items-center bg-gray-50 rounded-lg p-3 w-full">
                    <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700 text-sm">+91 9508899651</span>
                  </div>
                </div>
              </div>

              {/* <div className="mt-6 flex gap-3">
                <a href="mailto:[coordinator2@email.com]" className="flex-1 bg-purple-600 text-white text-center py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm font-medium">
                  📧 Email
                </a>
                <a href="tel:[+91XXXXXXXXXX]" className="flex-1 bg-green-600 text-white text-center py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium">
                  📞 Call
                </a>
              </div> */}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
