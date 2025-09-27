'use client'

import { useRouter } from 'next/navigation'
import Sidebar from '../../components/Sidebar'
import { useCountries } from '../../contexts/CountriesContext'

interface Country {
  id: string
  name: string
  flagSvg: string
  continent: string
  telCode: string
  centerLat: number
  centerLng: number
}

const CountriesPage = () => {
  const router = useRouter()
  const { countries } = useCountries()

  const handleViewCountry = (countryId: string) => {
    router.push(`/countries/${countryId}/view`)
  }

  const handleEditCountry = (countryId: string) => {
    router.push(`/countries/${countryId}/edit`)
  }

  const handleCreateCountry = () => {
    router.push('/countries/create')
  }

  // Mock data for statistics (since no data exists yet)
  const stats = {
    curricula: 0,
    institutions: 0,
    resources: 0,
    students: 0
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Countries</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto">
          {countries.length === 0 ? (
            /* Empty State */
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">No country added yet</h3>
                <button
                  onClick={handleCreateCountry}
                  className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-500 transition-colors flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="white" viewBox="0 0 24 24">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                  Add First Country
                </button>
              </div>
            </div>
          ) : (
            /* Countries Table */
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr className="border-b-2 border-gray-200">
                      <th className="px-8 py-4 text-left text-sm font-bold text-gray-800 uppercase tracking-wider">
                        #
                      </th>
                      <th className="px-8 py-4 text-left text-sm font-bold text-gray-800 uppercase tracking-wider">
                        Flag
                      </th>
                      <th className="px-8 py-4 text-left text-sm font-bold text-gray-800 uppercase tracking-wider">
                        Country
                      </th>
                      <th className="px-8 py-4 text-left text-sm font-bold text-gray-800 uppercase tracking-wider">
                        Continent
                      </th>
                      <th className="px-8 py-4 text-left text-sm font-bold text-gray-800 uppercase tracking-wider">
                        Tel Code
                      </th>
                      <th className="px-8 py-4 text-right text-sm font-bold text-gray-800 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y-2 divide-gray-100">
                    {countries.map((country, index) => (
                      <tr key={country.id} className="hover:bg-gray-50 transition-colors duration-150 h-16">
                        <td className="px-8 py-4 whitespace-nowrap text-base text-gray-700 font-medium">
                          {index + 1}
                        </td>
                        <td className="px-8 py-4 whitespace-nowrap">
                          <div className="w-12 h-9 border border-gray-200 rounded overflow-hidden bg-white flex items-center justify-center shadow-md">
                            <div 
                              dangerouslySetInnerHTML={{ __html: country.flagSvg }} 
                              className="w-full h-full scale-125 transform"
                            />
                          </div>
                        </td>
                        <td className="px-8 py-4 whitespace-nowrap">
                          <span className="text-base font-medium text-gray-900">
                            {country.name}
                          </span>
                        </td>
                        <td className="px-8 py-4 whitespace-nowrap">
                          <span className="text-base text-gray-700">
                            {country.continent}
                          </span>
                        </td>
                        <td className="px-8 py-4 whitespace-nowrap">
                          <span className="text-base font-medium text-gray-600 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-200">
                            {country.telCode}
                          </span>
                        </td>
                        <td className="px-8 py-4 whitespace-nowrap text-right">
                          <div className="flex items-center justify-end space-x-3">
                            <button
                              onClick={() => handleViewCountry(country.id)}
                              className="text-gray-500 hover:text-white hover:bg-purple-600 p-2.5 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-200"
                              title="View Country"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 4.5C7.305 4.5 3.27 7.26 1.982 11.25c-.055.17-.055.33 0 .5C3.27 15.74 7.305 18.5 12 18.5s8.73-2.76 10.018-6.75c.055-.17.055-.33 0-.5C20.73 7.26 16.695 4.5 12 4.5zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                              </svg>
                            </button>
                            <button
                              onClick={() => handleEditCountry(country.id)}
                              className="text-gray-500 hover:text-white hover:bg-purple-600 p-2.5 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-200"
                              title="Edit Country"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CountriesPage
