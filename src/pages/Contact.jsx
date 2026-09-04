import { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        category: '',
        message: '',
        priority: 'normal'
    })

    const [activeTab, setActiveTab] = useState('contact')
    const [copied, setCopied] = useState(null)
    const [copyMessage, setCopyMessage] = useState('')

    const copyToClipboard = (text, id, type) => {
        navigator.clipboard.writeText(text)
        const message = type === 'email' ? 'Email copied!' : 'Phone number copied!'
        setCopyMessage(message)
        setCopied(id)
        setTimeout(() => {
            setCopied(null)
            setCopyMessage('')
        }, 2000)
    }

    const contactInfo = [
        {
            title: "SIH (SPOC) Sharda University",
            name: "Mr Ashish Kumar",
            email: "ashish.kumar@sharda.ac.in",
            phone: "+91 8410707739",
            office: "Basement, Block 2, Cabin 19",
            icon: "🏛️",
            color: "from-blue-500 to-blue-600"
        },
        {
            title: "Institutional Advisor",
            name: "Dr. Mohit Sahni",
            email: "N/A",
            icon: "👔",
            color: "from-purple-500 to-purple-600"
        },
        {
            title: "SIH Internal Coordinator",
            name: "Dr. Sandeep Kumar",
            email: "sandeep.kumar16@sharda.ac.in",
            phone: "+91 8527026776",
            office: "Block 1, 3rd Floor, Room No 317, Cabin 3",
            icon: "🎯",
            color: "from-green-500 to-green-600"
        },
        {
            title: "Convener - IIC",
            name: "Dr. Shelja Sharma",
            email: "N/A",
            icon: "🏛️",
            color: "from-indigo-500 to-indigo-600"
        },
        {
            title: "Faculty Coordinator",
            name: "Dr. Rani Astya",
            email: "rani.astya@sharda.ac.in",
            icon: "👤",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Faculty Coordinator",
            name: "Dr. Laxmi Kant",
            email: "laxmi.sagar1@sharda.ac.in",
            icon: "👤",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Faculty Coordinator",
            name: "Prof.(Dr). Shajee Mohan",
            email: "shajee.mohan@sharda.ac.in",
            icon: "👤",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Faculty Coordinator",
            name: "Prof Tarun Varshney",
            email: "tarun.varshney@sharda.ac.in",
            icon: "👤",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Faculty Coordinator",
            name: "Prof PK Singh",
            email: "pramodkumar.singh@sharda.ac.in",
            icon: "👤",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Faculty Coordinator",
            name: "Dr. Manmohan Singh",
            email: "manmohan.yadav@sharda.ac.in",
            icon: "👤",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Faculty Coordinator",
            name: "Dr. Nikhil Sharma",
            email: "nikhil.sharma2@sharda.ac.in",
            icon: "👤",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Faculty Coordinator",
            name: "Mr. Durgesh",
            email: "durgesh.kumar1@sharda.ac.in",
            icon: "👤",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Faculty Coordinator",
            name: "Dr. Shikha Verma",
            email: "shikha.verma@sharda.ac.in",
            icon: "👤",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Faculty Coordinator",
            name: "Dr. Rosey Jadon",
            email: "rosey.jadon@sharda.ac.in",
            icon: "👤",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Faculty Coordinator",
            name: "Dr. Ramneet",
            email: "ramneet@sharda.ac.in",
            icon: "👤",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Faculty Coordinator",
            name: "Ms. Sphurty",
            email: "sphurty.raman@sharda.ac.in",
            icon: "👤",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Faculty Coordinator",
            name: "Mr. Ashish Jain",
            email: "ashish.jain4@sharda.ac.in",
            icon: "👤",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Faculty Coordinator",
            name: "Mr. Ashutosh Shankhdhar",
            email: "ashutosh.shankhdhar@sharda.ac.in",
            icon: "👤",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Faculty Coordinator",
            name: "Dr. Nidhi Gupta",
            email: "nidhi.gupta1@sharda.ac.in",
            icon: "👤",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Faculty Coordinator",
            name: "Ms. Kamini",
            email: "kamini.2@sharda.ac.in",
            icon: "👤",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Faculty Coordinator",
            name: "Dr Himanshu Payal",
            email: "himanshu.payal@sharda.ac.in",
            icon: "👤",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Faculty Coordinator",
            name: "Ms. Mekhala",
            email: "mekhala.1@sharda.ac.in",
            icon: "👤",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Faculty Coordinator",
            name: "Dr. Satya Prakash Mishra",
            email: "satya.prakash@sharda.ac.in",
            icon: "👤",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Faculty Coordinator",
            name: "Mr. Jitendra Singh",
            email: "jitendra.singh6@sharda.ac.in",
            icon: "👤",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Faculty Coordinator",
            name: "Dr. Kavita",
            email: "kavita.bhati@sharda.ac.in",
            icon: "👤",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Faculty Coordinator",
            name: "Dr. Chaitenya Verma",
            email: "chaitenya.verma@sharda.ac.in",
            icon: "👤",
            color: "from-orange-500 to-orange-600"
        },
    ]

    const faqData = [
        {
            category: "Registration & Timeline",
            questions: [
                {
                    q: "When does the Sharda Smart India Hackathon take place?",
                    a: "The 1st Screening Round is on 5 September 2026 (Online Google Meet), and the Final Round is on 10-11 September 2026."
                },
                {
                    q: "What is the complete timeline for SIH 2026?",
                    a: "Key dates: Team Registration (closes Sept 4), 1st Screening Round (Sept 5 - Online), Final Round (Sept 10-11), Results Publication (Sept 2026), Grand Finale (Dec 2026)."
                },
                {
                    q: "When do registrations close?",
                    a: "Registration for the Sharda Smart India Hackathon closes on September 4, 2026. No extensions will be granted, and incomplete registrations will be rejected."
                },
                {
                    q: "Can I change my team members after registration?",
                    a: "Team changes are allowed until the registration deadline on September 4, 2026. After this date, no changes will be permitted except in exceptional circumstances."
                },
                {
                    q: "Is there a registration fee?",
                    a: "No, participation in Smart India Hackathon is completely free. There are no registration or participation fees."
                },
                {
                    q: "Can team members be from different colleges?",
                    a: "No, all team members must be from the same institution (Sharda University) as per SIH guidelines."
                }
            ]
        },
        {
            category: "Eligibility & Team Formation",
            questions: [
                {
                    q: "What is the team size requirement?",
                    a: "Each team must consist of 6 members, including 1 team leader. It is mandatory to have at least one girl in the team. All team members must be currently enrolled students at Sharda University."
                },
                {
                    q: "Can postgraduate students participate?",
                    a: "Yes, both undergraduate and postgraduate students can participate. Mixed teams with students from different academic levels are allowed."
                },
                {
                    q: "Is work experience allowed?",
                    a: "Students with work experience can participate, but they must be currently enrolled in an academic program at Sharda University."
                },
                {
                    q: "How do I form a diverse team?",
                    a: "It's recommended to form teams with members from different departments (CSE, ECE, Mechanical, etc.) to bring diverse skills and perspectives to your solution."
                }
            ]
        },
        {
            category: "Technical & Process",
            questions: [
                {
                    q: "What technologies can we use?",
                    a: "You can use any programming language, framework, or technology stack. There are no restrictions on technology choices for developing your solution."
                },
                {
                    q: "Can we use pre-built components or libraries?",
                    a: "Yes, you can use existing libraries, APIs, and frameworks, but the core solution must be developed during the hackathon period."
                },
                {
                    q: "What happens after the Sharda Smart India Hackathon?",
                    a: "Top teams will be nominated for the national SIH 2026, undergo screening (Sep-Oct), receive mentoring (Oct), and potentially qualify for the Grand Finale (Dec 2026)."
                }
            ]
        }
    ]

    const quickActions = [
        {
            title: "View Problem Statements",
            description: "Browse all available problem categories for Sharda Smart India Hackathon",
            icon: "🎯",
            color: "bg-green-500",
            action: "external"
        },
        {
            title: "Join WhatsApp Community",
            description: "Get instant updates and connect with Sharda Smart India Hackathon participants",
            icon: "💬",
            color: "bg-green-600",
            action: "join"
        }
    ]

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const subject = formData.subject || 'SIH 2026 Query'
        const body = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCategory: ${formData.category}\nPriority: ${formData.priority}\n\nMessage:\n${formData.message}`
        window.location.href = `mailto:sih.sharda@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }

    const renderContactTab = () => (
        <div className="space-y-8">
            {/* General Query Email Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 sm:p-8 text-white text-center">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">General Queries</h2>
                <p className="text-blue-100 text-sm sm:text-base mb-4">For any questions related to Sharda Smart India Hackathon 2026, reach out to us at:</p>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                    <a href="mailto:sih.sharda@gmail.com" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        sih.sharda@gmail.com
                    </a>
                    <button
                        onClick={() => copyToClipboard('sih.sharda@gmail.com', 'general-email', 'email')}
                        className="bg-white/20 hover:bg-white/30 text-white font-medium px-4 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2"
                    >
                        {copied === 'general-email' ? (
                            <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        )}
                        Copy
                    </button>
                </div>
            </div>

            {/* SIH Coordinators Section */}
            <div>
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 px-4">Sharda Smart India Hackathon Student Coordinators</h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                        Need help with anything related to Sharda Smart India Hackathon? Contact our dedicated Student Coordinators for assistance
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
                    {/* Coordinator 1 */}
                    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-blue-300">
                        <div className="text-center mb-4 sm:mb-6">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full mx-auto mb-3 sm:mb-4 shadow-lg overflow-hidden bg-gray-200">
                                <img
                                    src="./image.png"
                                    alt="Deepak - Coordinator"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Deepak</h3>
                            <p className="text-blue-600 font-medium mb-3 sm:mb-4 text-sm sm:text-base">Coordinator</p>
                        </div>

                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center bg-gray-50 rounded-lg p-2 sm:p-3 w-full">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-gray-700 text-xs sm:text-sm flex-grow break-all">deepakkumar312005@gmail.com</span>
                                    <button
                                        onClick={() => copyToClipboard('deepakkumar312005@gmail.com', 'deepak-email', 'email')}
                                        className="ml-2 p-1 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                                        title="Copy email"
                                    >
                                        {copied === 'deepak-email' ? (
                                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="flex items-center bg-gray-50 rounded-lg p-2 sm:p-3 w-full">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="text-gray-700 text-xs sm:text-sm flex-grow">+91 9773850767</span>
                                    <button
                                        onClick={() => copyToClipboard('+91 9773850767', 'deepak-phone', 'phone')}
                                        className="ml-2 p-1 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                                        title="Copy phone"
                                    >
                                        {copied === 'deepak-phone' ? (
                                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coordinator 2 */}
                    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-purple-300">
                        <div className="text-center mb-4 sm:mb-6">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full mx-auto mb-3 sm:mb-4 shadow-lg overflow-hidden bg-gray-200">
                                <img
                                    src="./image.png"
                                    alt="Pawan Upadhyay - Coordinator"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Pawan Upadhyay</h3>
                            <p className="text-purple-600 font-medium mb-3 sm:mb-4 text-sm sm:text-base">Coordinator</p>
                        </div>

                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center bg-gray-50 rounded-lg p-2 sm:p-3 w-full">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-gray-700 text-xs sm:text-sm flex-grow break-all">upawan680@gmail.com</span>
                                    <button
                                        onClick={() => copyToClipboard('upawan680@gmail.com', 'pawan-email', 'email')}
                                        className="ml-2 p-1 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                                        title="Copy email"
                                    >
                                        {copied === 'pawan-email' ? (
                                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="flex items-center bg-gray-50 rounded-lg p-2 sm:p-3 w-full">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="text-gray-700 text-xs sm:text-sm flex-grow">+91 8756066256</span>
                                    <button
                                        onClick={() => copyToClipboard('+91 8756066256', 'pawan-phone', 'phone')}
                                        className="ml-2 p-1 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                                        title="Copy phone"
                                    >
                                        {copied === 'pawan-phone' ? (
                                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coordinator 3 */}
                    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-green-300">
                        <div className="text-center mb-4 sm:mb-6">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full mx-auto mb-3 sm:mb-4 shadow-lg overflow-hidden bg-gray-200">
                                <img
                                    src="./image.png"
                                    alt="Yashaswini Uddavolu - Coordinator"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Yashaswini Uddavolu</h3>
                            <p className="text-green-600 font-medium mb-3 sm:mb-4 text-sm sm:text-base">Coordinator</p>
                        </div>

                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center bg-gray-50 rounded-lg p-2 sm:p-3 w-full">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-gray-700 text-xs sm:text-sm flex-grow break-all">yashaswiniuddavolu@gmail.com</span>
                                    <button
                                        onClick={() => copyToClipboard('yashaswiniuddavolu@gmail.com', 'yashaswini-email', 'email')}
                                        className="ml-2 p-1 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                                        title="Copy email"
                                    >
                                        {copied === 'yashaswini-email' ? (
                                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="flex items-center bg-gray-50 rounded-lg p-2 sm:p-3 w-full">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="text-gray-700 text-xs sm:text-sm flex-grow">+91 7095651833</span>
                                    <button
                                        onClick={() => copyToClipboard('+91 7095651833', 'yashaswini-phone', 'phone')}
                                        className="ml-2 p-1 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                                        title="Copy phone"
                                    >
                                        {copied === 'yashaswini-phone' ? (
                                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coordinator 4 */}
                    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-yellow-300">
                        <div className="text-center mb-4 sm:mb-6">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full mx-auto mb-3 sm:mb-4 shadow-lg overflow-hidden bg-gray-200">
                                <img
                                    src="./image.png"
                                    alt="Saurav Suman - Coordinator"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Saurav Suman</h3>
                            <p className="text-yellow-600 font-medium mb-3 sm:mb-4 text-sm sm:text-base">Coordinator</p>
                        </div>

                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center bg-gray-50 rounded-lg p-2 sm:p-3 w-full">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-gray-700 text-xs sm:text-sm flex-grow break-all">sauravs95088@gmail.com</span>
                                    <button
                                        onClick={() => copyToClipboard('sauravs95088@gmail.com', 'saurav-email', 'email')}
                                        className="ml-2 p-1 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                                        title="Copy email"
                                    >
                                        {copied === 'saurav-email' ? (
                                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <div className="flex items-center bg-gray-50 rounded-lg p-2 sm:p-3 w-full">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="text-gray-700 text-xs sm:text-sm flex-grow">+91 9508899651</span>
                                    <button
                                        onClick={() => copyToClipboard('+91 9508899651', 'saurav-phone', 'phone')}
                                        className="ml-2 p-1 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                                        title="Copy phone"
                                    >
                                        {copied === 'saurav-phone' ? (
                                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Cards - Faculty Coordinators */}
            <div className="mt-12 sm:mt-16">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 px-4">Faculty Coordinators</h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                        Contact our faculty coordinators for academic guidance and support
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {contactInfo.map((contact, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-start space-x-3 sm:space-x-4">
                                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center text-xl sm:text-2xl text-white flex-shrink-0`}>
                                    {contact.icon}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{contact.title}</h3>
                                    <p className="text-base sm:text-lg font-semibold text-gray-700 mb-1">{contact.name}</p>
                                    <p className="text-xs sm:text-sm text-gray-600 mb-3">{contact.designation}</p>

                                    <div className="space-y-2">
                                        {contact.email && (
                                        <div className="flex items-center text-xs sm:text-sm text-gray-600">
                                            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <a href={`mailto:${contact.email}`} className="hover:text-blue-600 transition-colors flex-grow break-all">
                                                {contact.email}
                                            </a>
                                            <button
                                                onClick={() => copyToClipboard(contact.email, `faculty-${index}-email`, 'email')}
                                                className="ml-2 p-1 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                                                title="Copy email"
                                            >
                                                {copied === `faculty-${index}-email` ? (
                                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                        )}
                                        {contact.phone && (
                                        <div className="flex items-center text-xs sm:text-sm text-gray-600">
                                            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            <a href={`tel:${contact.phone}`} className="hover:text-green-600 transition-colors flex-grow">
                                                {contact.phone}
                                            </a>
                                            <button
                                                onClick={() => copyToClipboard(contact.phone, `faculty-${index}-phone`, 'phone')}
                                                className="ml-2 p-1 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                                                title="Copy phone"
                                            >
                                                {copied === `faculty-${index}-phone` ? (
                                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                        )}
                                        {contact.office && (
                                            <div className="flex items-center text-xs sm:text-sm text-gray-600">
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="break-words">{contact.office}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )

    const renderFAQTab = () => (
        <div className="space-y-6 sm:space-y-8">
            {faqData.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                        <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                            {categoryIndex + 1}
                        </span>
                        {category.category}
                    </h3>
                    <div className="space-y-4">
                        {category.questions.map((faq, faqIndex) => (
                            <details key={faqIndex} className="group border border-gray-200 rounded-lg">
                                <summary className="flex items-center justify-between p-3 sm:p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                                    <span className="font-medium text-gray-800 text-sm sm:text-base pr-2">{faq.q}</span>
                                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )

    const renderLocationTab = () => (
        <div className="space-y-6 sm:space-y-8">
            {/* Campus Information */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Campus Location</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                        <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Address</h4>
                        <div className="space-y-3">
                            <p className="text-gray-700 text-sm sm:text-base">
                                <strong>Sharda University</strong><br />
                                Plot No. 32-34, Knowledge Park III<br />
                                Greater Noida, Uttar Pradesh - 201310<br />
                                India
                            </p>
                            <div className="flex items-center text-gray-600 text-sm sm:text-base">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+91 120 4571000</span>
                            </div>
                            <div className="flex items-center text-gray-600 text-sm sm:text-base">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="break-all">info@sharda.ac.in</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">How to Reach</h4>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">🚇</span>
                                <div>
                                    <p className="font-medium text-gray-800">By Metro</p>
                                    <p className="text-sm text-gray-600">Take Aqua Line to Knowledge Park II, then auto/cab</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">🚗</span>
                                <div>
                                    <p className="font-medium text-gray-800">By Car</p>
                                    <p className="text-sm text-gray-600">Take FNG Expressway, exit at Knowledge Park III</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">🚌</span>
                                <div>
                                    <p className="font-medium text-gray-800">By Bus</p>
                                    <p className="text-sm text-gray-600">Regular buses from Delhi, Noida, and Ghaziabad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Interactive Campus Map */}
            <div className="bg-white rounded-xl shadow-lg p-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Campus Map</h4>
                <div className="rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2151437973093!2d77.48033507536371!3d28.473066775752194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea0f7b91511b%3A0x486f13bd49e5e7ae!2sSharda%20University!5e0!3m2!1sen!2sin!4v1757065393001!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Sharda University Campus Map"
                        className="w-full h-96 rounded-lg"
                    ></iframe>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row gap-4">
                    <a
                        href="https://maps.google.com/?q=Sharda+University+Greater+Noida"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center flex items-center justify-center"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        View on Google Maps
                    </a>
                    <a
                        href="https://maps.google.com/maps/dir//Sharda+University+Greater+Noida"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center flex items-center justify-center"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        Get Directions
                    </a>
                </div>
            </div>
        </div>
    )

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">Contact & Support</h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        Get in touch with our team for any questions, support, or assistance with Sharda Smart India Hackathon 2026
                    </p>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    {quickActions.map((action, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6">
                                <div className="flex items-center mb-4 sm:mb-0">
                                    <div className={`w-12 h-12 sm:w-16 sm:h-16 ${action.color} rounded-xl flex items-center justify-center text-white text-xl sm:text-2xl mr-4 sm:mr-6 flex-shrink-0`}>
                                        {action.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{action.title}</h3>
                                        <p className="text-sm sm:text-base text-gray-600">{action.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center sm:justify-end">
                                {action.action === 'external' ? (
                                    <a
                                        href="https://www.sih.gov.in/sih2026PS"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 flex items-center text-sm sm:text-base"
                                    >
                                        <span className="mr-2">🎯</span>
                                        View Statements
                                    </a>
                                ) : (
                                    <a
                                        href="https://chat.whatsapp.com/JPbRnAhHNnRLpfE5MIQ3PO?mode=ems_wa_c"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 flex items-center text-sm sm:text-base"
                                    >
                                        <span className="mr-2">💬</span>
                                        Join WhatsApp Community
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-8 sm:mb-12 px-4">
                    <div className="bg-white rounded-xl shadow-lg p-1 sm:p-2 flex flex-wrap sm:flex-nowrap gap-1 sm:gap-2 w-full sm:w-auto">
                        {[
                            { id: 'contact', label: 'Contact Info', icon: '📞' },
                            { id: 'faq', label: 'FAQ', icon: '❓' },
                            { id: 'location', label: 'Location', icon: '📍' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base flex-1 sm:flex-none ${activeTab === tab.id
                                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                    }`}
                                aria-label={`View ${tab.label} tab`}
                                aria-pressed={activeTab === tab.id}
                            >
                                <span className="text-base sm:text-lg">{tab.icon}</span>
                                <span className="hidden xs:inline sm:inline">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="mb-16">
                    {activeTab === 'contact' && renderContactTab()}
                    {activeTab === 'faq' && renderFAQTab()}
                    {activeTab === 'location' && renderLocationTab()}
                </div>

            </div>

            {/* Toast Notification */}
            {copied && (
                <div className="fixed bottom-4 right-4 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg z-50 flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    {copyMessage}
                </div>
            )}
        </div>
    )
}

export default Contact
