'use client'

import { useRouter } from 'next/navigation'
import Sidebar from "@/components/Sidebar"

export default function Dashboard() {
  const router = useRouter()

  const handleManageCountries = () => {
    router.push('/countries')
  }

  const handleAddCountry = () => {
    router.push('/countries/create')
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Manage Country Data Card */}
            <div 
              onClick={handleManageCountries}
              className="bg-gray-600 rounded-lg p-6 cursor-pointer hover:bg-gray-500 transition-all duration-200 group relative w-full"
            >
              {/* Icon at top left */}
              <div className="mb-4">
                <svg 
                  className="w-8 h-8 text-gray-300 group-hover:text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              
              {/* Title */}
              <h2 className="text-lg font-medium text-gray-300 group-hover:text-white mb-6">
                Manage Country Data
              </h2>
              
              {/* Arrow at bottom right */}
              <div className="absolute bottom-4 right-4">
                <svg 
                  className="w-6 h-6 text-gray-300 group-hover:text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </div>
            </div>

            {/* Add Country Card */}
            <div 
              onClick={handleAddCountry}
              className="bg-gray-600 rounded-lg p-6 cursor-pointer hover:bg-gray-500 transition-all duration-200 group relative w-full"
            >
              {/* Icon at top left */}
              <div className="mb-4">
                <svg 
                  className="w-8 h-8 text-gray-300 group-hover:text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </div>
              
              {/* Title */}
              <h2 className="text-lg font-medium text-gray-300 group-hover:text-white mb-6">
                Add Country
              </h2>
              
              {/* Arrow at bottom right */}
              <div className="absolute bottom-4 right-4">
                <svg 
                  className="w-6 h-6 text-gray-300 group-hover:text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
