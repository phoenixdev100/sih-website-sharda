import { useState } from "react";

const Terms = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Overview", icon: "📋" },
    { id: "eligibility", title: "Eligibility", icon: "✅" },
    { id: "conduct", title: "Code of Conduct", icon: "🤝" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                📋 Terms & Conditions Overview
              </h3>
              <p className="text-green-700 text-lg leading-relaxed mb-4">
                Welcome to Smart India Hackathon 2026 hosted by Sharda
                University. This website serves as an information portal only.
                By registering through our Google Forms, you agree to comply
                with these terms and conditions.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-green-100">
                  <h4 className="font-semibold text-green-800 mb-2">
                    🎯 Event Purpose
                  </h4>
                  <p className="text-green-600 text-sm">
                    Foster innovation through our information portal.
                    Registration and participation managed via Google Forms.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-green-100">
                  <h4 className="font-semibold text-green-800 mb-2">
                    🏆 Fair Competition
                  </h4>
                  <p className="text-green-600 text-sm">
                    Ensure a fair, transparent, and inclusive competition
                    environment for all participants.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Key Points
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    All participants must maintain professional conduct
                    throughout the event
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Participants must meet eligibility criteria and follow event
                    guidelines
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Fair competition and ethical behavior are mandatory for all
                    participants
                  </span>
                </li>
              </ul>
            </div>
          </div>
        );

      case "eligibility":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                ✅ Eligibility Criteria
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-4">
                    🎓 Student Categories
                  </h4>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Undergraduate students (all years)</li>
                    <li>• Postgraduate students</li>
                    <li>• PhD scholars and research students</li>
                    <li>• Recent graduates (within 2 years)</li>
                    <li>• Students from recognized institutions</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-800 mb-4">
                    👥 Team Requirements
                  </h4>
                  <ul className="space-y-2 text-purple-700">
                    <li>• Team size: 3-6 members</li>
                    <li>• Cross-disciplinary teams encouraged</li>
                    <li>• At least one technical member required</li>
                    <li>• Team leader must be designated</li>
                    <li>• All members must be eligible individually</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-green-800 mb-2">
                    📋 Required Documentation
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-green-700">
                    <ul className="space-y-1">
                      <li>• Valid student ID card</li>
                      <li>• Institution enrollment certificate</li>
                      <li>• Government-issued photo ID</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Academic transcripts (if required)</li>
                      <li>• Team formation agreement</li>
                      <li>• Consent forms and waivers</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-red-800 mb-2">
                    🚫 Ineligibility Conditions
                  </h4>
                  <ul className="space-y-1 text-red-700">
                    <li>• Employees of organizing institutions</li>
                    <li>• Previous SIH winners (in same category)</li>
                    <li>• Individuals with conflicts of interest</li>
                    <li>• Those who violate registration requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case "conduct":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                🤝 Code of Conduct
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-4">
                    ✅ Expected Behavior
                  </h4>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Maintain professional conduct</li>
                    <li>• Respect all participants and organizers</li>
                    <li>• Follow event schedules and guidelines</li>
                    <li>• Collaborate ethically with team members</li>
                    <li>• Use appropriate language and behavior</li>
                    <li>• Report any violations immediately</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-red-800 mb-4">
                    🚫 Prohibited Activities
                  </h4>
                  <ul className="space-y-2 text-red-700">
                    <li>• Harassment or discrimination</li>
                    <li>• Cheating or plagiarism</li>
                    <li>• Sharing solutions with other teams</li>
                    <li>• Using pre-built solutions</li>
                    <li>• Disruptive or offensive behavior</li>
                    <li>• Violation of venue rules</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-purple-800 mb-2">
                    🏆 Fair Competition
                  </h4>
                  <p className="text-purple-700">
                    All participants must compete fairly and honestly. Original
                    work is required, and any use of external resources must be
                    properly documented and within competition guidelines.
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-orange-800 mb-2">
                    ⚖️ Violation Consequences
                  </h4>
                  <ul className="space-y-1 text-orange-700">
                    <li>• Warning for minor violations</li>
                    <li>• Team disqualification for serious breaches</li>
                    <li>• Removal from event premises</li>
                    <li>• Ban from future SIH events</li>
                    <li>• Legal action if applicable</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Section Content
            </h3>
            <p className="text-gray-600">
              Detailed content for{" "}
              {sections.find((s) => s.id === activeSection)?.title} will be
              displayed here.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 px-4">
            📋 Terms & Conditions
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Please read these terms and conditions carefully before
            participating in Smart India Hackathon 2026.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12 px-4">
          <div className="bg-white rounded-xl shadow-lg p-1 sm:p-2 flex flex-wrap sm:flex-nowrap gap-1 sm:gap-2 w-full sm:w-auto max-w-full overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center justify-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm flex-1 sm:flex-none min-w-0 ${
                  activeSection === section.id
                    ? "bg-green-600 text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-green-600 hover:bg-green-50"
                }`}
                aria-label={`View ${section.title} section`}
                aria-pressed={activeSection === section.id}
              >
                <span className="text-sm sm:text-base flex-shrink-0">
                  {section.icon}
                </span>
                <span className="hidden xs:inline sm:inline truncate">
                  {section.title}
                </span>
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
          <p>Last updated: September 5, 2026</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
