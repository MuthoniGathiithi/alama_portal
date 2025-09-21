'use client'

import { useRouter, useParams } from 'next/navigation'
import Sidebar from '../../../../components/Sidebar'
import { useCountries } from '../../../../contexts/CountriesContext'

interface Country {
  id: string
  name: string
  flagSvg: string
  continent: string
  telCode: string
  centerLat: number
  centerLng: number
}

const ViewCountryPage = () => {
  const router = useRouter()
  const params = useParams()
  const countryId = params.id as string
  const { getCountryById } = useCountries()
  
  const country = getCountryById(countryId)
  
  // If country not found, redirect back to countries list
  if (!country) {
    router.push('/countries')
    return null
  }

  // Mock data for statistics
  const stats = {
    curricula: 0,
    institutions: 0,
    resources: 0,
    students: 0
  }

  const handleBack = () => {
    router.push('/countries')
  }

  const handleEdit = () => {
    router.push(`/countries/${countryId}/edit`)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={handleBack}
                className="mr-4 p-2 text-black hover:text-black hover:bg-gray-50 rounded transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>
              <div className="flex items-center">
                <div className="w-10 h-8 border border-gray-300 rounded overflow-hidden bg-gray-50 flex items-center justify-center mr-3">
                  <div dangerouslySetInnerHTML={{ __html: country.flagSvg }} className="w-full h-full" />
                </div>
                <h1 className="text-2xl font-semibold text-gray-900">{country.name}</h1>
              </div>
            </div>
            <button
              onClick={handleEdit}
              className="bg-[#1E90FF] text-white px-3 py-1.5 rounded hover:bg-blue-600 transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="white" viewBox="0 0 24 24">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
              </svg>
              Edit Country
            </button>
          </div>
        </div>

        {/* Statistics Cards - Horizontal Layout */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="grid grid-cols-4 gap-6">
            {/* Curricula Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:bg-[#1E90FF] hover:border-[#1E90FF] hover:shadow-md transition-all duration-200 cursor-pointer group">
              <div className="flex items-center">
                <div className="p-3 bg-gray-100 group-hover:bg-white rounded-lg transition-colors duration-200">
                  <svg className="w-6 h-6 text-gray-600 group-hover:text-[#1E90FF] transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 group-hover:text-white transition-colors duration-200">Curricula</p>
                  <p className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-200">{stats.curricula}</p>
                </div>
              </div>
            </div>

            {/* Institutions Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:bg-[#1E90FF] hover:border-[#1E90FF] hover:shadow-md transition-all duration-200 cursor-pointer group">
              <div className="flex items-center">
                <div className="p-3 bg-gray-100 group-hover:bg-white rounded-lg transition-colors duration-200">
                  <svg className="w-6 h-6 text-gray-600 group-hover:text-[#1E90FF] transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h2v-2h2v-2h2v8z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 group-hover:text-white transition-colors duration-200">Institutions</p>
                  <p className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-200">{stats.institutions}</p>
                </div>
              </div>
            </div>

            {/* Resources Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:bg-[#1E90FF] hover:border-[#1E90FF] hover:shadow-md transition-all duration-200 cursor-pointer group">
              <div className="flex items-center">
                <div className="p-3 bg-gray-100 group-hover:bg-white rounded-lg transition-colors duration-200">
                  <svg className="w-6 h-6 text-gray-600 group-hover:text-[#1E90FF] transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 4H4c-1.11 0-2 .89-2 2v3h2V6h4V4zm6 0v2h4v3h2V6c0-1.11-.89-2-2-2h-4zm-6 15H4v-3H2v3c0 1.11.89 2 2 2h6v-2zm6 0v2h4c1.11 0 2-.89 2-2v-3h-2v3h-4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 group-hover:text-white transition-colors duration-200">Resources</p>
                  <p className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-200">{stats.resources}</p>
                </div>
              </div>
            </div>

            {/* Students Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:bg-[#1E90FF] hover:border-[#1E90FF] hover:shadow-md transition-all duration-200 cursor-pointer group">
              <div className="flex items-center">
                <div className="p-3 bg-gray-100 group-hover:bg-white rounded-lg transition-colors duration-200">
                  <svg className="w-6 h-6 text-gray-600 group-hover:text-[#1E90FF] transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7.5h-1c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5H18v6h2zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9v-2c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2h1.5v7h3zM12 13.5c-1.1 0-2 .9-2 2v6.5h2v7h3v-7h2v-6.5c0-1.1-.9-2-2-2h-3z"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 group-hover:text-white transition-colors duration-200">Students</p>
                  <p className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-200">{stats.students}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Institution Registration and AI Assessments - Horizontal Layout */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Institution Registration - Left Side */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h2v-2h2v-2h2v8z"/>
                </svg>
                <h3 className="text-lg font-semibold text-gray-900">Institution Registration</h3>
              </div>
              <div className="py-4">
                <p className="text-gray-600 mb-4">No institutions registered in {country.name}</p>
                <button className="bg-[#1E90FF] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Register Institution
                </button>
              </div>
            </div>

            {/* AI Assessments - Right Side */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
                </svg>
                <h3 className="text-lg font-semibold text-gray-900">AI Assessments</h3>
              </div>
              <div className="py-4">
                <p className="text-gray-600 mb-4">No AI assessments available for {country.name}</p>
                <button className="bg-[#1E90FF] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Create Assessment
                </button>
              </div>
            </div>
          </div>

          {/* World Map with Institutions */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">World Map - {country.name} Institutions</h3>
            </div>
            
            {/* Real World Map SVG */}
            <div className="bg-blue-50 border border-gray-200 rounded-lg h-96 relative overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Ocean background */}
                <rect width="1000" height="500" fill="#4A90E2"/>
                
                {/* Ocean labels */}
                <text x="100" y="100" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">PACIFIC OCEAN</text>
                <text x="500" y="50" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">ARCTIC OCEAN</text>
                <text x="500" y="400" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">ATLANTIC OCEAN</text>
                <text x="800" y="400" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">INDIAN OCEAN</text>
                
                {/* Continents - More detailed and realistic shapes */}
                {/* North America */}
                <path d="M80 120 Q120 100 180 110 Q240 105 300 120 Q360 115 420 135 Q450 145 470 165 Q480 185 470 205 Q450 225 420 235 Q360 245 300 240 Q240 245 180 230 Q120 235 80 215 Q70 195 75 175 Q80 155 80 120 Z" fill="#228B22" stroke="#1F5F1F" strokeWidth="2"/>
                <text x="275" y="180" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle">NORTH AMERICA</text>
                
                {/* South America */}
                <path d="M250 270 Q280 260 310 275 Q330 290 340 320 Q345 360 340 400 Q335 440 325 470 Q315 485 300 490 Q285 485 275 470 Q265 440 260 400 Q255 360 260 320 Q265 290 250 270 Z" fill="#228B22" stroke="#1F5F1F" strokeWidth="2"/>
                <text x="300" y="380" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle">SOUTH AMERICA</text>
                
                {/* Europe */}
                <path d="M450 110 Q490 100 530 115 Q570 125 590 145 Q595 165 585 180 Q570 195 530 200 Q490 195 450 185 Q440 170 445 155 Q450 140 450 110 Z" fill="#228B22" stroke="#1F5F1F" strokeWidth="2"/>
                <text x="520" y="155" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle">EUROPE</text>
                
                {/* Africa */}
                <path d="M470 190 Q510 180 550 200 Q580 220 590 260 Q600 300 595 340 Q590 380 580 410 Q570 430 550 440 Q530 445 510 440 Q490 430 480 410 Q470 380 475 340 Q480 300 485 260 Q480 220 470 190 Z" fill="#228B22" stroke="#1F5F1F" strokeWidth="2"/>
                <text x="535" y="315" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle">AFRICA</text>
                
                {/* Asia */}
                <path d="M590 110 Q650 95 720 110 Q790 120 860 140 Q900 155 920 175 Q925 195 915 215 Q900 235 860 245 Q790 250 720 245 Q650 240 590 225 Q580 205 585 185 Q590 165 590 110 Z" fill="#228B22" stroke="#1F5F1F" strokeWidth="2"/>
                <text x="755" y="180" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle">ASIA</text>
                
                {/* Australia/Oceania */}
                <path d="M720 340 Q760 330 800 345 Q830 360 835 380 Q830 400 800 410 Q760 415 720 405 Q710 385 715 365 Q720 350 720 340 Z" fill="#228B22" stroke="#1F5F1F" strokeWidth="2"/>
                <text x="775" y="375" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle">OCEANIA</text>
                
                {/* Antarctica */}
                <path d="M150 440 Q350 430 500 435 Q650 440 850 450 Q900 460 920 475 Q900 485 850 490 Q650 495 500 490 Q350 485 150 480 Q100 470 120 455 Q135 445 150 440 Z" fill="#E6F3FF" stroke="#4682B4" strokeWidth="2"/>
                <text x="500" y="465" fill="#1F5F1F" fontSize="14" fontWeight="bold" textAnchor="middle">ANTARCTICA</text>
                
                {/* Grid lines for reference */}
                <defs>
                  <pattern id="worldGrid" width="50" height="25" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 25" fill="none" stroke="#B0C4DE" strokeWidth="0.5" opacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#worldGrid)" />
                
                {/* Country highlight based on selected country */}
                {country.name === 'Kenya' && (
                  <circle cx="580" cy="300" r="8" fill="#FF4444" stroke="#FFFFFF" strokeWidth="2">
                    <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite"/>
                  </circle>
                )}
                {country.name === 'United States' && (
                  <circle cx="250" cy="180" r="8" fill="#FF4444" stroke="#FFFFFF" strokeWidth="2">
                    <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite"/>
                  </circle>
                )}
              </svg>
              
              {/* No institutions overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-black mb-4">
                    <svg className="w-16 h-16 mx-auto text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg font-medium">No institutions to display in {country.name}</p>
                  <p className="text-gray-500 text-sm mt-2">Register institutions to see them plotted on the world map</p>
                </div>
              </div>
              
              {/* Map Controls */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <button className="bg-white border border-gray-300 rounded p-2 shadow-sm hover:bg-gray-50 transition-colors">
                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                </button>
                <button className="bg-white border border-gray-300 rounded p-2 shadow-sm hover:bg-gray-50 transition-colors">
                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 13H5v-2h14v2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewCountryPage
