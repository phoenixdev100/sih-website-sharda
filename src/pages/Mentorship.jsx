const Mentorship = () => {

    const mentorshipProgram = {
        title: "SIH 2026 Comprehensive Mentorship Program",
        description: "Complete guidance from 2x SIH Winners, Hackathon Mentors, and Industry Professionals",
        icon: "🚀",
        startDate: "September 15, 2026",
        duration: "1-2 weeks",
        format: "Online",
        features: [
            "Success strategies from 2x SIH Winners",
            "End-to-end hackathon preparation",
            "Cloud architecture and modern technologies",
            "Technical skill development and code reviews",
            "Innovation and ideation workshops",
            "Team management and leadership training",
            "Presentation and pitching skills",
            "DevOps and deployment strategies",
            "Industry best practices and networking",
            "Real-world project implementation"
        ]
    }

    const mentorProfiles = [
        {
            name: "Deepak Kumar",
            title: "2x SIH Winner & Lead Mentor",
            expertise: ["Full Stack Development", "System Design", "Team Leadership"],
            achievements: ["SIH 2023 Winner", "SIH 2024 Winner", "Cloud Certified"],
            image: "./image.png",
            bio: "Experienced hackathon winner with expertise in building scalable solutions and leading winning teams."
        },
        {
            name: "Cloud Professionals",
            title: "Certified Cloud Architects",
            expertise: ["Cloud Computing", "DevOps", "Microservices", "Serverless"],
            achievements: ["Solutions Architect", "Microsoft Azure Expert", "Google Cloud Professional"],
            image: "./image.png",
            bio: "Industry experts specializing in cloud-native solutions and modern application architecture."
        }
    ]

    const renderOverviewTab = () => (
        <div className="space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 text-center border border-blue-200">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                    🚀 SIH 2026 Mentorship Program
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                    Get expert guidance from 2x SIH Winners, experienced Hackathon Mentors, and Industry Professionals.
                    Transform your ideas into winning solutions with personalized mentorship.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                        🏆 2x SIH Winners
                    </span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                        🎯 Hackathon Experts
                    </span>
                    <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-medium">
                        ☁️ Cloud Professionals
                    </span>
                </div>
                <div className="bg-red-100 border border-red-200 rounded-lg p-4 inline-block">
                    <p className="text-red-800 font-semibold">
                        🗓️ Program starts: {mentorshipProgram.startDate}
                    </p>
                </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
                    <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                    <div className="text-gray-600">Students Mentored</div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
                    <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                    <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
                    <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                    <div className="text-gray-600">Winning Projects</div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
                    <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                    <div className="text-gray-600">Support Available</div>
                </div>
            </div>

            {/* Single Program Card */}
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div className="text-center mb-8">
                        <div className="text-5xl mb-4">{mentorshipProgram.icon}</div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">{mentorshipProgram.title}</h3>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">{mentorshipProgram.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                            <div className="text-sm text-gray-500 mb-1">Start Date</div>
                            <div className="font-bold text-blue-800">{mentorshipProgram.startDate}</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                            <div className="text-sm text-gray-500 mb-1">Duration</div>
                            <div className="font-bold text-green-800">{mentorshipProgram.duration}</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-200">
                            <div className="text-sm text-gray-500 mb-1">Format</div>
                            <div className="font-bold text-purple-800">{mentorshipProgram.format}</div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">What You'll Learn:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {mentorshipProgram.features.map((feature, index) => (
                                <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                                    <span className="text-green-500 mr-3 mt-0.5 text-lg">✓</span>
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mentors Section */}
                    <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">Meet Your Mentors:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Jatin Vishwakarma */}
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 border border-blue-200">
                                <div className="flex items-center mb-4">
                                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                                        JV
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-gray-800">Jatin Vishwakarma</h5>
                                        <p className="text-blue-600 font-medium text-sm">2x SIH Winner, SIH '24 Mentor</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center text-sm text-gray-700">
                                        <span className="text-blue-500 mr-2">🏆</span>
                                        <span>Smart India Hackathon Winner (2x)</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-700">
                                        <span className="text-blue-500 mr-2">👨‍🏫</span>
                                        <span>Official SIH 2024 Mentor</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-700">
                                        <span className="text-blue-500 mr-2">💡</span>
                                        <span>Expert in hackathon strategies & team leadership</span>
                                    </div>
                                </div>
                            </div>

                            {/* Sourav Bera */}
                            <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-xl p-6 border border-orange-200">
                                <div className="flex items-center mb-4">
                                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                                        SB
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-gray-800">Sourav Bera</h5>
                                        <p className="text-orange-600 font-medium text-sm">Solutions Architect, PreSales @ Microsoft</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center text-sm text-gray-700">
                                        <span className="text-orange-500 mr-2">☁️</span>
                                        <span>Solutions Architect Certified</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-700">
                                        <span className="text-orange-500 mr-2">🏢</span>
                                        <span>PreSales Professional at Microsoft</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-700">
                                        <span className="text-orange-500 mr-2">🎯</span>
                                        <span>Cloud architecture & enterprise solutions expert</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <a
                            href="/contact"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-lg"
                        >
                            <span className="mr-2">🚀</span>
                            Join our Mentorship Program
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )


    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                        Mentorship Program
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        <span>Brought to you by Sharda University</span>
                        <span>Learn from 2x SIH Winners, seasoned Hackathon Mentors, and Microsoft Professionals. Turn your ideas into winning solutions with personalized mentorship.</span>
                    </p>
                </div>

                {/* Content */}
                <div className="transition-all duration-300">
                    {renderOverviewTab()}
                </div>
            </div>
        </div>
    )
}

export default Mentorship
