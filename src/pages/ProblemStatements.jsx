import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const ProblemStatements = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'software', name: 'Software' },
    { id: 'hardware', name: 'Hardware' }
  ]

  const problemStatements = [
    { id: 1, problemId: 'SW001', title: 'Development of AI-ML based models for predicting prices of agri-horticultural commodities such as pulses and vegetable (onion, potato, onion)', category: 'software', theme: 'Agriculture, FoodTech & Rural Development' },
    { id: 2, problemId: 'HW001', title: 'Drone-Based Intelligent System for Apple Orchard Management in Himachal Pradesh', category: 'hardware', theme: 'Agriculture, FoodTech & Rural Development' },
    { id: 3, problemId: 'SW002', title: 'Recovery of Deleted Data and Associated Metadata from XFS and Btrfs Filesystems', category: 'software', theme: 'Blockchain & Cybersecurity' },
    { id: 4, problemId: 'SW003', title: 'Improving open source software security using Fuzzing', category: 'software', theme: 'Blockchain & Cybersecurity' },
    { id: 5, problemId: 'SW004', title: 'De-anonymizing of entities on the onion sites operating on TOR Network', category: 'software', theme: 'Blockchain & Cybersecurity' },
    { id: 6, problemId: 'SW005', title: 'Creating a cyber triage tool to streamline digital forensic investigation', category: 'software', theme: 'Blockchain & Cybersecurity' },
    { id: 7, problemId: 'SW006', title: 'Centralized application-context aware firewall', category: 'software', theme: 'Blockchain & Cybersecurity' },
    { id: 8, problemId: 'SW007', title: 'Universal Switch Set with Data Encryption and Decryption for Legacy Applications without Cyber Safety Measures', category: 'software', theme: 'Blockchain & Cybersecurity' },
    { id: 9, problemId: 'SW008', title: 'Agent-less Windows System Vulnerability and Network Scanner', category: 'software', theme: 'Blockchain & Cybersecurity' },
    { id: 10, problemId: 'HW002', title: 'GOBARdhan - Low-cost kits to measure nutrient content of F/L OM', category: 'hardware', theme: 'Clean & Green Technology' },
    { id: 11, problemId: 'HW003', title: 'Grey Water Management (GWM) - Mechanism for treating grey water and black water together in densely populated areas preferably having low land implication.', category: 'hardware', theme: 'Clean & Green Technology' },
    { id: 12, problemId: 'HW004', title: 'Grey Water Management (GWM)- Implementing low cost technical solutions to mitigate water contamination, especially removal of contaminants, before discharge into rivers and lakes.', category: 'hardware', theme: 'Clean & Green Technology' },
    { id: 13, problemId: 'HW005', title: 'Development of co-electrolyzer : which would synthesize organic chemicals like methanol and inorganic chemicals like ammonia in a single stage.', category: 'hardware', theme: 'Clean & Green Technology' },
    { id: 14, problemId: 'HW006', title: 'Reducing the carbon emissions from thermal plants, developing ways of Carbon capture and utilisation through value added products', category: 'hardware', theme: 'Clean & Green Technology' },
    { id: 15, problemId: 'HW007', title: 'Developing innovative solution for efficient management of waste and conversion to valuable products, Waste to Energy- waste recycling', category: 'hardware', theme: 'Clean & Green Technology' },
    { id: 16, problemId: 'HW008', title: 'GOBARdhan - Simple control systems and/or instrumentation for small biogas plants that will allow better process control leading to effective digestion and improved yield of biogas.', category: 'hardware', theme: 'Clean & Green Technology' },
    { id: 17, problemId: 'HW009', title: 'Target detection by optimizing Anomaly Detection in Hyperspectral Image Processing using AI/ML', category: 'hardware', theme: 'Clean & Green Technology' },
    { id: 18, problemId: 'SW009', title: 'A Digital BRSR Platform for India Post Network "The Department of Posts (DoP) in India requires a cutting-edge, digital solution to implement a Business Responsibility & Sustainability Reporting (BRSR) framework. This platform aims to transform DoP into a leader in environmental and social sustainability while fostering transparency and accountability towards stakeholders."', category: 'software', theme: 'Clean & Green Technology' },
    { id: 19, problemId: 'SW010', title: 'Dashboard for Swachhta and LiFE. Develop a dashboard aimed at maintaining cleanliness and LiFE practices, integrating AI-powered image processing technology for effective monitoring of Swachhta and green practices adopted in post offices. The dashboard needs to be accessible from the Divisional Office offering surveillance capabilities and triggering alerts for deviation from prescribed Swachhta and Green Growth standards to prompt on ground intervention to guide the post office concerned to make necessary changes to conform to set expectations.', category: 'software', theme: 'Clean & Green Technology' },
    { id: 20, problemId: 'SW011', title: 'Innovative applications of cloud-optimized geotiffs for INSAT satellite data', category: 'software', theme: 'Clean & Green Technology' },
    { id: 21, problemId: 'SW012', title: 'Downscaling of Satellite based air quality map using AI/ML', category: 'software', theme: 'Clean & Green Technology' },
    { id: 22, problemId: 'SW013', title: 'SolarQuest: Innovate to Capture More Sunlight and Boost Energy', category: 'software', theme: 'Clean & Green Technology' },
    { id: 23, problemId: 'SW014', title: 'Use of Digital Knowledge Sharing Platform like Wikis on sharing of water efficient techniques and methods for minimizing water scarcity.', category: 'software', theme: 'Clean & Green Technology' },
    { id: 24, problemId: 'SW015', title: 'Use of Digital Technology to calculate Water Footprints for different Agricultural Products', category: 'software', theme: 'Clean & Green Technology' },
    { id: 25, problemId: 'SW016', title: 'Real-Time Disaster Information Aggregation Software', category: 'software', theme: 'Disaster Management' },
    { id: 26, problemId: 'HW010', title: 'Enhancing body detection in CSSR Operations Using Advanced Technology', category: 'hardware', theme: 'Disaster Management' },
    { id: 27, problemId: 'SW017', title: 'AR-Based Cultural Heritage Preservation Platform', category: 'software', theme: 'Heritage & Culture' },
    { id: 28, problemId: 'SW018', title: 'A comprehensive AYUSH Startup Registration Portal to streamline the registration process for startups in the AYUSH sector, enhancing efficiency, transparency, and accessibility.', category: 'software', theme: 'MedTech / BioTech / HealthTech' },
    { id: 29, problemId: 'HW011', title: 'Development of cost-effective myoelectric prosthesis.', category: 'hardware', theme: 'MedTech / BioTech / HealthTech' },
    { id: 30, problemId: 'HW012', title: 'Wearable sensor with Artificial Intelligence for prevention of falls in elderly people', category: 'hardware', theme: 'MedTech / BioTech / HealthTech' },
    { id: 31, problemId: 'SW019', title: 'AI based identification of Financial (Banking & Insurance) needs based on demography and economic / farming Cycle "While the Post Office Network serves everyone, everywhere, on all days, the need for various services including financial and insurance services has a seasonal variation to it. There is a need to time communication and support to customers at times they require it most based on their daily routines. A robust system to segment, target and focus on each customer based on their needs from time to time is needed for India Post to direct its service force to make efforts in response to such needs."', category: 'software', theme: 'Miscellaneous' },
    { id: 32, problemId: 'HW013', title: 'Data Insights and Strategic Unit (DISU) at the Divisional Level for DoP "The Divisional Office as the nerve centre of administration, governance and control over the widespread national postal network requires a robust monitoring, analytics, visualisation and feedback mechanism to take advantage of digitisation and data driven governance."', category: 'hardware', theme: 'Miscellaneous' },
    { id: 33, problemId: 'HW014', title: 'Development of Portable EMI/EMC, induction measurement Instruments.', category: 'hardware', theme: 'Miscellaneous' },
    { id: 34, problemId: 'HW015', title: 'Condition-based monitoring and maintenance system.', category: 'hardware', theme: 'Miscellaneous' },
    { id: 35, problemId: 'HW016', title: 'System to check the healthiness of earthing system and alert staff in case of any malfunction;', category: 'hardware', theme: 'Miscellaneous' },
    { id: 36, problemId: 'HW017', title: 'Video call intercom based on analog/IP system with vibration sensor', category: 'hardware', theme: 'Miscellaneous' },
    { id: 37, problemId: 'HW018', title: 'Designing and development of a pressure transducer based equipment with a well cap for measurement of heads in autoflow wells', category: 'hardware', theme: 'Miscellaneous' },
    { id: 38, problemId: 'SW020', title: 'Creating a Comprehensive Web Application Fuzzer', category: 'software', theme: 'Miscellaneous' },
    { id: 39, problemId: 'SW021', title: 'Creating a Framework for Static Analysis of Vulnerabilities in Android Applications', category: 'software', theme: 'Miscellaneous' },
    { id: 40, problemId: 'SW022', title: 'Improving Android security: Application security for mobile app on Android 14 or higher', category: 'software', theme: 'Miscellaneous' },
    { id: 41, problemId: 'SW023', title: 'Parsing of Social Media Feeds', category: 'software', theme: 'Miscellaneous' },
    { id: 42, problemId: 'SW024', title: 'Platform for Inter-departmental cooperation (at city level) in Indian Cities, for sharing data & resources, unified phasing, planning and implementation of projects.', category: 'software', theme: 'Miscellaneous' },
    { id: 43, problemId: 'SW025', title: 'Prediction of Aluminium wire rod physical properties through AI, ML or any modern technique for better productivity and quality control.', category: 'software', theme: 'Miscellaneous' },
    { id: 44, problemId: 'SW026', title: 'Capturing Non-manual features of Indian Sign Language and converting it into text', category: 'software', theme: 'Miscellaneous' },
    { id: 45, problemId: 'SW027', title: 'Indian Version of Nagish App', category: 'software', theme: 'Miscellaneous' },
    { id: 46, problemId: 'SW028', title: 'Indian Sing Language to Text/Speech translation', category: 'software', theme: 'Miscellaneous' },
    { id: 47, problemId: 'SW029', title: 'AI tool/mobile app for Indian Sign language(ISL) generator from audio-visual content in English/Hindi to ISL content and vice-versa', category: 'software', theme: 'Miscellaneous' },
    { id: 48, problemId: 'SW030', title: 'Development of a Geolocation-Based Attendance Tracking Mobile Application.', category: 'software', theme: 'Miscellaneous' },
    { id: 49, problemId: 'SW031', title: 'Intelligent Enterprise Assistant: Enhancing Organizational Efficiency through AI-driven Chatbot Integration', category: 'software', theme: 'Miscellaneous' },
    { id: 50, problemId: 'SW032', title: 'Let\'s Learn Constitution in a Simpler Manner-Institution Perspective', category: 'software', theme: 'Miscellaneous' },
    { id: 51, problemId: 'SW033', title: 'Adaption of \'Existing Command Area in Response to Shifting of Agricultural Practices', category: 'software', theme: 'Miscellaneous' },
    { id: 52, problemId: 'SW034', title: 'Building Integrated Photo-voltaic (BIPV) potential assessment and visualisation using LOD-1 3D City Model', category: 'software', theme: 'Renewable / Sustainable Energy' },
    { id: 53, problemId: 'HW019', title: 'Sustainable Utilization of 100% of Ash from Coal based Thermal Power Plants.', category: 'hardware', theme: 'Renewable / Sustainable Energy' },
    { id: 54, problemId: 'HW020', title: 'Design/Development of an efficient Energy Storage System (ESS) to integrate intermittent Renewable Energy sources and to support/stabilize the grid.', category: 'hardware', theme: 'Renewable / Sustainable Energy' },
    { id: 55, problemId: 'SW035', title: 'Development and Optimization of Al model for Feature identification/ Extraction from drone orthophotos.', category: 'software', theme: 'Robotics and Drones' },
    { id: 56, problemId: 'HW021', title: 'Drone-based Intelligent ET sensing system and irrigation water use accounting system for irrigation commands.', category: 'hardware', theme: 'Robotics and Drones' },
    { id: 57, problemId: 'SW036', title: 'Gamification for Rural Planning using Drone land survey maps and GIS data.', category: 'software', theme: 'Robotics and Drones' },
    { id: 58, problemId: 'HW022', title: 'Personalized testing kits for testing Residual Silver ion level at delivery points', category: 'hardware', theme: 'Smart Automation' },
    { id: 59, problemId: 'HW023', title: 'Personalized testing kits for testing Bacteriological contamination at delivery points', category: 'hardware', theme: 'Smart Automation' },
    { id: 60, problemId: 'SW037', title: 'Measurement and Monitoring of Counter Services "Develop a simple to use application for measurement and monitoring of counter services offered by Post Offices for their customers while providing ease of access to mail, parcel, financial, payment, insurance and citizen centric services from each Post Office. The solution suggested should integrate traditional and modern Industry 4.0 Technology based solution to this fundamental challenge faced by the DoP across its vast network. Integrating AI-powered image processing technology for effective monitoring of smooth, hassle free and efficient counter services based on live feed of customer service areas for a delightful customer experience are expected as a solution. Ease of application of the solution in the practical setting is key to the assessment criteria for this problem. The dashboard needs to be accessible at the Post Office and to its higher offices in the chain upto Divisional and Regional Office".', category: 'software', theme: 'Smart Automation' },
    { id: 61, problemId: 'SW038', title: 'Standardizing Odd School Structures to Improve Educational Policy Implementation and Resource Allocation', category: 'software', theme: 'Smart Automation' },
    { id: 62, problemId: 'SW039', title: 'Development of map-matching algorithm using AI-ML techniques to distinguish vehicular movement on highway and service road', category: 'software', theme: 'Smart Automation' },
    { id: 63, problemId: 'SW040', title: 'AI based frame interpolation, video generation and display system for WMS services', category: 'software', theme: 'Smart Automation' },
    { id: 64, problemId: 'SW041', title: 'On-device semantic segmentation of WMS services with geospatial data export', category: 'software', theme: 'Smart Automation' },
    { id: 65, problemId: 'SW042', title: 'AI driven Inspection of Institutions', category: 'software', theme: 'Smart Automation' },
    { id: 66, problemId: 'SW043', title: 'AI supported AICTE Approval process portal', category: 'software', theme: 'Smart Automation' },
    { id: 67, problemId: 'SW044', title: 'Utilization of aerial/ drone-based images for monitoring of progress of construction activities for building construction projects', category: 'software', theme: 'Smart Automation' },
    { id: 68, problemId: 'SW045', title: 'Utilization of images for monitoring of progress of construction activities for building construction projects.', category: 'software', theme: 'Smart Automation' },
    { id: 69, problemId: 'SW046', title: 'Intelligence and Investigations - Enhancing Anti-Doping Efforts', category: 'software', theme: 'Smart Automation' },
    { id: 70, problemId: 'SW047', title: 'Enhancing Rail Madad with Al-powered Complaint Management', category: 'software', theme: 'Smart Automation' },
    { id: 71, problemId: 'SW048', title: 'Comprehensive Automated Document Verification System for Official Documentation', category: 'software', theme: 'Smart Automation' },
    { id: 72, problemId: 'SW049', title: 'Bail Reckoner', category: 'software', theme: 'Smart Automation' },
    { id: 73, problemId: 'SW050', title: 'AI-Driven Research Engine for Commercial Courts', category: 'software', theme: 'Smart Automation' },
    { id: 74, problemId: 'SW051', title: 'Developing an AI based interactive Chatbot or virtual assistant for the Department of Justice\'s Website.', category: 'software', theme: 'Smart Automation' },
    { id: 75, problemId: 'SW052', title: 'A software application - Ground Water Level Predictor', category: 'software', theme: 'Smart Automation' },
    { id: 76, problemId: 'SW053', title: 'A software application for analysis of DWLR data and raise alarms in respect of anomalous values, faulty DWLRs etc', category: 'software', theme: 'Smart Automation' },
    { id: 77, problemId: 'SW054', title: 'Real-time Ganga river water quality forecasting using AI- enabled DSS, satellite data, IoT, and dynamic models.', category: 'software', theme: 'Smart Automation' },
    { id: 78, problemId: 'SW055', title: 'Developing a Robust Hydraulic Transient Analysis Model for Hydro Power and Pumped Storage Schemes.', category: 'software', theme: 'Smart Automation' },
    { id: 79, problemId: 'SW056', title: 'Development of handheld device/Mobile based Operation & Maintenance tool for asset & consumables inventories and finance management in context of drinking water supply scheme.', category: 'software', theme: 'Smart Automation' },
    { id: 80, problemId: 'SW057', title: 'Tools and techniques for customisation of GPO as per CIS guidelines to deploy on offline / standalone windows.', category: 'software', theme: 'Smart Automation' },
    { id: 81, problemId: 'SW058', title: 'Building Offline Parallel AV Pipeline to cater multiple AVs for CII entities.', category: 'software', theme: 'Smart Automation' },
    { id: 82, problemId: 'SW059', title: 'Gamification of Anti-Doping Information', category: 'software', theme: 'Smart Education' },
    { id: 83, problemId: 'SW060', title: 'Education & Awareness - Effective Use of Technology for Dissemination of Anti-Doping Information', category: 'software', theme: 'Smart Education' },
    { id: 84, problemId: 'SW061', title: 'Interactive Skills Enhancer (ISE): A Virtual Reality-Based Learning Tool for Children with ASD and ID', category: 'software', theme: 'Smart Education' },
    { id: 85, problemId: 'SW062', title: 'Let\'s Learn Constitution in a Simpler Manner-Citizen Perspective', category: 'software', theme: 'Smart Education' },
    { id: 86, problemId: 'SW063', title: 'Development of an educational game (web-based and mobile- based) on groundwater conservation and management', category: 'software', theme: 'Smart Education' },
    { id: 87, problemId: 'SW064', title: 'Innovating for Sustainability: Driving Smart Resource Conservation (Energy & Water) in Home Appliances (Refrigerators, Air Conditioners, Washing Machines and Desert Air Coolers)', category: 'software', theme: 'Smart Resource Conservation' },
    { id: 88, problemId: 'SW065', title: 'Automated Bus Scheduling and Route Management System for Delhi Transport Corporation', category: 'software', theme: 'Smart Vehicles' },
    { id: 89, problemId: 'SW066', title: 'SAR Image Colorization for Comprehensive Insight using Deep Learning Model (h)', category: 'software', theme: 'Space Technology' },
    { id: 90, problemId: 'HW024', title: 'Automatic Road Extraction and alert generation for new roads', category: 'hardware', theme: 'Space Technology' },
    { id: 91, problemId: 'SW067', title: 'Building a National Web Community of Philatelists "This is to overcome challenges faced by philatelists across India and to design a solution that enhances their experience and fills up gaps in access to information, raising demand and ensuring fulfillment as per interest for each Philatelic item and ancillaries released and made anywhere in the country through a web based community and a National Philately Deposit Account.', category: 'software', theme: 'Transportation & Logistics' },
    { id: 92, problemId: 'HW025', title: 'Al based acoustic wave monitoring of rail defects like cracks, fracture and prediction for rail wear, quality along with other parameter.', category: 'hardware', theme: 'Transportation & Logistics' },
    { id: 93, problemId: 'SW068', title: 'AI based Customized time slot Delivery of Articles/Parcels " To align with the needs of the modern lifestyles of customers and their expected time of availability at the home or office address where an item needs to be delivered, the time slot can be decided in consultation with the customer based on an AI Driven correspondence system as per demand/request of the Sender or Receiver"', category: 'software', theme: 'Transportation & Logistics' },
    { id: 94, problemId: 'SW069', title: 'DYNAMIC MAIL TRANSMISSION SOLUTION USING BEST CONNECTIVITY ACROSS MODES "Serving a large country like India with the habitations across states, cities, towns, blocks and villages with geographic diversity as well is a complex task. The availability of multiple modes of transport for secure transmission of mail, parcels, cargo and people is a boon. Postal mail with its volume, value and weight profile has unique requirements for efficient and effective transmission to cover all delivery points around the sorting and transmission hubs that have been created over the years. With a focus on dynamic allocation and use of available transport within the structure of mail operations defined by the Department of Posts, we need a system to help choose the best mode across land, rail, air and water for fastest transmission of mail in each local context. "', category: 'software', theme: 'Transportation & Logistics' },
    { id: 95, problemId: 'SW070', title: 'AI-Powered Delivery Post Office Identification System " The wide, evolving delivery network of the Post Office makes it difficult for customers to write the correct pin code on the postal items for delivery. The Post Office also merges Pincodes together to mechanise and streamline delivery in the emerging volume and mix of mail handled at different stages, including the point of delivery. An intelligent solution, powered by AI is needed to meet the dynamic design of the supply chain both for customers as well as operators within India Post.', category: 'software', theme: 'Transportation & Logistics' },
    { id: 96, problemId: 'SW071', title: 'India Post A Bridge for Indian Diaspora to access things Indian " Building a community of Indian Diaspora for meeting their needs of Indian Products (traditional/ ethnic / handicrafts) through India Post by connecting PIOs with local sellers / MSME / Artisans"', category: 'software', theme: 'Transportation & Logistics' },
    { id: 97, problemId: 'SW072', title: 'Bridging the Measurability Gap - A Digital Solution for validated Citizens Charter norms\' adherence across public interfaces and customer touchpoints of DoP', category: 'software', theme: 'Transportation & Logistics' },
    { id: 98, problemId: 'SW073', title: 'Road Transport Network Telematics Develop a telematics solution to enable efficient trucking operations for the long haul to connect the country through route optimization, live tracking and monitoring, optimal capacity utilization analysis and to enable appropriate response.', category: 'software', theme: 'Transportation & Logistics' },
    { id: 99, problemId: 'SW074', title: 'Enhancing Navigation for Railway Station Facilities and Locations', category: 'software', theme: 'Transportation & Logistics' },
    { id: 100, problemId: 'SW075', title: 'Development of a mobile application to provide recreational suitability information of beach locations across India.', category: 'software', theme: 'Travel & Tourism' }
  ]

  const filteredStatements = problemStatements.filter(statement => {
    const matchesCategory = selectedCategory === 'all' || statement.category === selectedCategory
    const matchesSearch = searchTerm === '' || 
                         statement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         statement.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen])

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Problem Statements
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Browse through 100+ challenging problem statements across 19 categories. Choose the one that excites your team!
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Link
                to="/registration"
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-lg transition-all duration-300"
              >
                Register Your Team
              </Link>
              <Link
                to="/guidelines"
                className="px-6 py-3 border-2 border-white text-white hover:bg-white/20 font-semibold rounded-lg transition-all duration-300"
              >
                View Guidelines
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-4 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            {/* Search Bar */}
            <div className="w-full md:w-1/2">
              <input
                type="text"
                placeholder="Search problem statements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="w-full md:w-1/2 relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white text-left flex items-center justify-between"
              >
                <span>{categories.find(cat => cat.id === selectedCategory)?.name}</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id)
                        setIsDropdownOpen(false)
                      }}
                      className={`w-full px-3 py-2 text-sm text-left hover:bg-indigo-50 transition-colors ${
                        selectedCategory === category.id ? 'bg-indigo-100 text-indigo-700 font-medium' : 'text-gray-700'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statements Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Problem Statements' : selectedCategoryData?.name}
            </h2>
            <p className="text-gray-600 mt-2">
              Showing {filteredStatements.length} problem statement{filteredStatements.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="overflow-x-auto border border-gray-300 rounded-xl">
            <table className="w-full bg-white shadow-md overflow-hidden">
              <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-center text-sm font-semibold border-b border-r border-gray-300">S. No.</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold border-b border-r border-gray-300">Problem ID</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold border-b border-r border-gray-300">Problem Statement Title</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold border-b border-r border-gray-300">Category</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold border-b border-gray-300">Theme</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {filteredStatements.map((statement, index) => (
                  <tr key={statement.id} className="hover:bg-gray-50 transition-colors border-b border-gray-300">
                    <td className="px-4 py-3 text-sm font-medium text-black border-r border-gray-300">{index + 1}</td>
                    <td className="px-4 py-3 border-r border-gray-300 text-sm text-black">{statement.problemId}</td>
                    <td className="px-4 py-3 border-r border-gray-300">
                      <div className="text-sm font-medium text-black max-w-2xl">
                        {statement.title}
                      </div>
                    </td>
                    <td className="px-4 py-3 border-r border-gray-300 text-sm text-black">
                      {categories.find(cat => cat.id === statement.category)?.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-black max-w-[180px]">
                      {statement.theme}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredStatements.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No problem statements found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Solve These Challenges?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Register your team now and start working on innovative solutions
          </p>
          <Link
            to="/registration"
            className="inline-block px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Register Your Team
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ProblemStatements