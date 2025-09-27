'use client'

import { useState, useEffect } from 'react'
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

// Country data with flag SVGs for auto-fill functionality
const countryData: { [key: string]: Omit<Country, 'id' | 'name'> } = {
  'Kenya': {
    flagSvg: '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="3" height="2" fill="#000"/><rect width="3" height="0.33" y="0.33" fill="#fff"/><rect width="3" height="0.67" y="0.67" fill="#DC143C"/><rect width="3" height="0.33" y="1.33" fill="#fff"/><rect width="3" height="0.33" y="1.67" fill="#006600"/><g transform="translate(1.5,1)"><circle r="0.25" fill="#fff" stroke="#000" stroke-width="0.02"/><rect x="-0.02" y="-0.3" width="0.04" height="0.6" fill="#8B4513"/><polygon points="-0.15,-0.1 0.15,-0.1 0,-0.25" fill="#DC143C"/><polygon points="-0.15,0.1 0.15,0.1 0,0.25" fill="#DC143C"/></g></svg>',
    continent: 'Africa',
    telCode: '+254',
    centerLat: -1.2921,
    centerLng: 36.8219
  },
  'United States': {
    flagSvg: '<svg viewBox="0 0 19 10" xmlns="http://www.w3.org/2000/svg"><rect width="19" height="10" fill="#B22234"/><rect width="19" height="0.769" y="0.769" fill="#fff"/><rect width="19" height="0.769" y="2.308" fill="#fff"/><rect width="19" height="0.769" y="3.846" fill="#fff"/><rect width="19" height="0.769" y="5.385" fill="#fff"/><rect width="19" height="0.769" y="6.923" fill="#fff"/><rect width="19" height="0.769" y="8.462" fill="#fff"/><rect width="7.6" height="5.385" fill="#3C3B6E"/><g fill="#fff"><circle cx="1" cy="1" r="0.3"/><circle cx="3" cy="1" r="0.3"/><circle cx="5" cy="1" r="0.3"/><circle cx="2" cy="2.5" r="0.3"/><circle cx="4" cy="2.5" r="0.3"/><circle cx="6" cy="2.5" r="0.3"/></g></svg>',
    continent: 'North America',
    telCode: '+1',
    centerLat: 39.8283,
    centerLng: -98.5795
  },
  'United Kingdom': {
    flagSvg: '<svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="30" fill="#012169"/><path d="M0 0L60 30M60 0L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0L60 30M60 0L0 30" stroke="#C8102E" stroke-width="4"/><path d="M30 0V30M0 15H60" stroke="#fff" stroke-width="10"/><path d="M30 0V30M0 15H60" stroke="#C8102E" stroke-width="6"/></svg>',
    continent: 'Europe',
    telCode: '+44',
    centerLat: 55.3781,
    centerLng: -3.4360
  },
  'Canada': {
    flagSvg: '<svg viewBox="0 0 2 1" xmlns="http://www.w3.org/2000/svg"><rect width="2" height="1" fill="#fff"/><rect width="0.5" height="1" fill="#FF0000"/><rect x="1.5" width="0.5" height="1" fill="#FF0000"/><path d="M1 0.25L1.05 0.4L1.2 0.4L1.075 0.5L1.125 0.65L1 0.575L0.875 0.65L0.925 0.5L0.8 0.4L0.95 0.4Z" fill="#FF0000"/></svg>',
    continent: 'North America',
    telCode: '+1',
    centerLat: 56.1304,
    centerLng: -106.3468
  },
  'Germany': {
    flagSvg: '<svg viewBox="0 0 5 3" xmlns="http://www.w3.org/2000/svg"><rect width="5" height="1" fill="#000"/><rect width="5" height="1" y="1" fill="#DD0000"/><rect width="5" height="1" y="2" fill="#FFCE00"/></svg>',
    continent: 'Europe',
    telCode: '+49',
    centerLat: 51.1657,
    centerLng: 10.4515
  },
  'France': {
    flagSvg: '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="2" fill="#002395"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#ED2939"/></svg>',
    continent: 'Europe',
    telCode: '+33',
    centerLat: 46.2276,
    centerLng: 2.2137
  },
  'Japan': {
    flagSvg: '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="3" height="2" fill="#fff"/><circle cx="1.5" cy="1" r="0.6" fill="#BC002D"/></svg>',
    continent: 'Asia',
    telCode: '+81',
    centerLat: 36.2048,
    centerLng: 138.2529
  },
  'Australia': {
    flagSvg: '<svg viewBox="0 0 2 1" xmlns="http://www.w3.org/2000/svg"><rect width="2" height="1" fill="#012169"/><rect width="1" height="0.5" fill="#012169"/><path d="M0 0L1 0.5M1 0L0 0.5" stroke="#fff" stroke-width="0.1"/><path d="M0 0L1 0.5M1 0L0 0.5" stroke="#C8102E" stroke-width="0.06"/><path d="M0.5 0V0.5M0 0.25H1" stroke="#fff" stroke-width="0.16"/><path d="M0.5 0V0.5M0 0.25H1" stroke="#C8102E" stroke-width="0.1"/><polygon points="1.5,0.3 1.52,0.4 1.6,0.4 1.54,0.46 1.56,0.56 1.5,0.5 1.44,0.56 1.46,0.46 1.4,0.4 1.48,0.4" fill="#fff"/></svg>',
    continent: 'Oceania',
    telCode: '+61',
    centerLat: -25.2744,
    centerLng: 133.7751
  },
  'Brazil': {
    flagSvg: '<svg viewBox="0 0 7 5" xmlns="http://www.w3.org/2000/svg"><rect width="7" height="5" fill="#009739"/><path d="M3.5 0.5L6.5 2.5L3.5 4.5L0.5 2.5Z" fill="#FEDD00"/><circle cx="3.5" cy="2.5" r="0.8" fill="#012169"/><path d="M3 2.2Q3.5 2.1 4 2.2" stroke="#fff" stroke-width="0.1" fill="none"/></svg>',
    continent: 'South America',
    telCode: '+55',
    centerLat: -14.2350,
    centerLng: -51.9253
  },
  'South Africa': {
    flagSvg: '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="3" height="2" fill="#000"/><rect width="3" height="0.33" fill="#FFB612"/><rect width="3" height="0.33" y="1.67" fill="#FFB612"/><rect width="3" height="0.33" y="0.33" fill="#fff"/><rect width="3" height="0.33" y="1.33" fill="#fff"/><rect width="3" height="0.67" y="0.67" fill="#007A4D"/><path d="M0 0L1.2 1L0 2Z" fill="#DE3831"/><path d="M0 0.17L1 1L0 1.83Z" fill="#fff"/><path d="M0 0.33L0.8 1L0 1.67Z" fill="#007A4D"/></svg>',
    continent: 'Africa',
    telCode: '+27',
    centerLat: -30.5595,
    centerLng: 22.9375
  },
  'India': {
    flagSvg: '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="3" height="0.67" fill="#FF9933"/><rect width="3" height="0.67" y="0.67" fill="#fff"/><rect width="3" height="0.67" y="1.33" fill="#138808"/><circle cx="1.5" cy="1" r="0.25" fill="none" stroke="#000080" stroke-width="0.02"/><circle cx="1.5" cy="1" r="0.05" fill="#000080"/></svg>',
    continent: 'Asia',
    telCode: '+91',
    centerLat: 20.5937,
    centerLng: 78.9629
  },
  'China': {
    flagSvg: '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="3" height="2" fill="#DE2910"/><polygon points="0.5,0.5 0.52,0.58 0.6,0.58 0.54,0.62 0.56,0.7 0.5,0.66 0.44,0.7 0.46,0.62 0.4,0.58 0.48,0.58" fill="#FFDE00"/><polygon points="0.8,0.3 0.81,0.35 0.85,0.35 0.82,0.37 0.83,0.42 0.8,0.4 0.77,0.42 0.78,0.37 0.75,0.35 0.79,0.35" fill="#FFDE00"/></svg>',
    continent: 'Asia',
    telCode: '+86',
    centerLat: 35.8617,
    centerLng: 104.1954
  },
  'Russia': {
    flagSvg: '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="3" height="0.67" fill="#fff"/><rect width="3" height="0.67" y="0.67" fill="#0039A6"/><rect width="3" height="0.67" y="1.33" fill="#D52B1E"/></svg>',
    continent: 'Europe',
    telCode: '+7',
    centerLat: 61.5240,
    centerLng: 105.3188
  },
  'Mexico': {
    flagSvg: '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="2" fill="#006847"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#CE1126"/><circle cx="1.5" cy="1" r="0.2" fill="#8B4513"/></svg>',
    continent: 'North America',
    telCode: '+52',
    centerLat: 23.6345,
    centerLng: -102.5528
  },
  'Italy': {
    flagSvg: '<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="2" fill="#009246"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#CE2B37"/></svg>',
    continent: 'Europe',
    telCode: '+39',
    centerLat: 41.8719,
    centerLng: 12.5674
  }
}

const EditCountryPage = () => {
  const router = useRouter()
  const params = useParams()
  const countryId = params.id as string
  const { getCountryById, updateCountry } = useCountries()
  
  const existingCountry = getCountryById(countryId)
  
  // If country not found, redirect back to countries list
  if (!existingCountry) {
    router.push('/countries')
    return null
  }

  const [formData, setFormData] = useState({
    name: existingCountry.name,
    flagSvg: existingCountry.flagSvg,
    continent: existingCountry.continent,
    telCode: existingCountry.telCode,
    centerLat: existingCountry.centerLat.toString(),
    centerLng: existingCountry.centerLng.toString()
  })

  // Auto-fill functionality when country name changes (only if it's different from existing)
  useEffect(() => {
    if (formData.name && countryData[formData.name] && formData.name !== existingCountry.name) {
      const data = countryData[formData.name]
      setFormData(prev => ({
        ...prev,
        flagSvg: data.flagSvg,
        continent: data.continent,
        telCode: data.telCode,
        centerLat: data.centerLat.toString(),
        centerLng: data.centerLng.toString()
      }))
    }
  }, [formData.name, existingCountry.name])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Capitalize country name properly (first letter caps, rest lowercase)
    const capitalizedName = formData.name.charAt(0).toUpperCase() + formData.name.slice(1).toLowerCase()
    
    const countryToUpdate = {
      name: capitalizedName,
      flagSvg: formData.flagSvg,
      continent: formData.continent,
      telCode: formData.telCode,
      centerLat: parseFloat(formData.centerLat),
      centerLng: parseFloat(formData.centerLng)
    }
    
    // Update country in the context
    updateCountry(countryId, countryToUpdate)
    console.log('Updating country:', countryToUpdate)
    // Navigate back to view page
    router.push(`/countries/${countryId}/view`)
  }

  const handleBack = () => {
    router.push(`/countries/${countryId}/view`)
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
                <svg className="w-5 h-5" fill="none" stroke="black" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex items-center">
                <div className="w-10 h-8 border border-gray-300 rounded overflow-hidden bg-gray-50 flex items-center justify-center mr-3">
                  <div dangerouslySetInnerHTML={{ __html: formData.flagSvg }} className="w-full h-full" />
                </div>
                <h1 className="text-2xl font-semibold text-gray-900">Edit {existingCountry.name}</h1>
              </div>
            </div>
            <button
              onClick={handleBack}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 p-8 overflow-auto">
          <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 border border-gray-300 rounded-lg p-8 bg-white shadow-sm min-h-[600px]">
              {/* Country Name */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-900">
                  Country Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent text-sm text-black"
                  placeholder="Enter country name"
                />
                {formData.name && countryData[formData.name] && formData.name !== existingCountry.name && (
                  <p className="text-xs text-green-600 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Auto-filled
                  </p>
                )}
              </div>

              {/* Flag Preview & SVG */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-900">
                  Flag <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-3">
                  {formData.flagSvg && (
                    <div className="w-16 h-12 border border-gray-200 rounded-md bg-gray-50 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <div dangerouslySetInnerHTML={{ __html: formData.flagSvg }} className="w-full h-full" />
                    </div>
                  )}
                  <textarea
                    required
                    rows={3}
                    value={formData.flagSvg}
                    onChange={(e) => setFormData({ ...formData, flagSvg: e.target.value })}
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent text-xs font-mono text-black"
                    placeholder="Paste SVG code here"
                  />
                </div>
              </div>

              {/* Continent */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-900">
                  Continent <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.continent}
                  onChange={(e) => setFormData({ ...formData, continent: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent text-sm text-black"
                >
                  <option value="">Select continent</option>
                  <option value="Africa">Africa</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="North America">North America</option>
                  <option value="South America">South America</option>
                  <option value="Oceania">Oceania</option>
                  <option value="Antarctica">Antarctica</option>
                </select>
              </div>

              {/* Tel Code */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-900">
                  Phone Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.telCode}
                  onChange={(e) => setFormData({ ...formData, telCode: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent text-sm text-black"
                  placeholder="+1"
                />
              </div>

              {/* Coordinates */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-900">
                    Latitude <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="any"
                    required
                    value={formData.centerLat}
                    onChange={(e) => setFormData({ ...formData, centerLat: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent text-sm text-black"
                    placeholder="0.0000"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-900">
                    Longitude <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="any"
                    required
                    value={formData.centerLng}
                    onChange={(e) => setFormData({ ...formData, centerLng: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent text-sm text-black"
                    placeholder="0.0000"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 px-4 py-2 border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition-colors text-sm font-medium"
                >
                  Update Country
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditCountryPage
