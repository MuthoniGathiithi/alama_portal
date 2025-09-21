'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const Sidebar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [openMenus, setOpenMenus] = useState<{[key: string]: boolean}>({
    main: false,
    reference: true, // Open by default since Countries is the main feature
    system: false
  })

  // Helper function to check if a menu item is active
  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + '/')
  }

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }))
  }

  return (
    <div className="w-64 h-screen flex flex-col border-r border-gray-300 font-sans bg-gray-600">
      {/* Logo Section - Positioned at the very top */}
      <div className="flex items-center pt-2 pb-2 px-2 border-b border-gray-300 bg-gray-100">
        <img
          src="/alama_dark_logo_lt_bnjlIcW.png"
          alt="Alama Logo"
          className="w-16 h-16 object-contain"
        />
        <h1 className="text-3xl font-bold text-black tracking-wider -ml-3 font-sans leading-tight" style={{lineHeight: '1.9'}}>
          LAMA
        </h1>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 px-4">
        {/* MAIN Section */}
        <div className="mb-1">
          <button
            onClick={() => toggleMenu('main')}
            className="w-full flex items-center justify-between text-gray-300 hover:text-white hover:bg-gray-500 py-3 -mx-4 px-4 transition-colors"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              <span className="font-medium text-sm">MAIN</span>
            </div>
            <svg
              className={`w-4 h-4 transform transition-transform ${openMenus.main ? 'rotate-180' : ''}`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </button>
          
          {openMenus.main && (
            <div className="ml-6 mt-2 border-l-2 border-gray-400">
              <button 
                onClick={() => router.push('/dashboard')}
                className={`w-full text-left py-2 pl-6 pr-4 transition-colors text-sm font-normal relative ${
                  isActive('/dashboard') 
                    ? 'bg-[#1E90FF] bg-opacity-20 text-white border-r-2 border-[#1E90FF]' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-500'
                }`}
              >
                <span className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 rounded-full ${
                  isActive('/dashboard') ? 'bg-[#1E90FF]' : 'bg-gray-400'
                }`}></span>
                Dashboard
              </button>
            </div>
          )}
        </div>

        {/* REFERENCE Section */}
        <div className="mb-1">
          <button
            onClick={() => toggleMenu('reference')}
            className="w-full flex items-center justify-between text-gray-300 hover:text-white hover:bg-gray-500 py-3 -mx-4 px-4 transition-colors"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              <span className="font-medium text-sm">REFERENCE</span>
            </div>
            <svg
              className={`w-4 h-4 transform transition-transform ${openMenus.reference ? 'rotate-180' : ''}`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </button>
          
          {openMenus.reference && (
            <div className="ml-6 mt-2 border-l-2 border-gray-400">
              <button 
                onClick={() => router.push('/countries')}
                className={`w-full text-left py-2 pl-6 pr-4 transition-colors text-sm font-normal relative ${
                  isActive('/countries') 
                    ? 'bg-[#1E90FF] bg-opacity-20 text-white border-r-2 border-[#1E90FF]' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-500'
                }`}
              >
                <span className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 rounded-full ${
                  isActive('/countries') ? 'bg-[#1E90FF]' : 'bg-gray-400'
                }`}></span>
                Countries
              </button>
            </div>
          )}
        </div>

        {/* SYSTEM Section */}
        <div className="mb-1">
          <button
            onClick={() => toggleMenu('system')}
            className="w-full flex items-center justify-between text-gray-300 hover:text-white hover:bg-gray-500 py-3 -mx-4 px-4 transition-colors"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
              </svg>
              <span className="font-medium text-sm">SYSTEM</span>
            </div>
            <svg
              className={`w-4 h-4 transform transition-transform ${openMenus.system ? 'rotate-180' : ''}`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </button>
          
          {openMenus.system && (
            <div className="ml-6 mt-2 border-l-2 border-gray-400">
              <button 
                className={`w-full text-left py-2 pl-6 pr-4 transition-colors text-sm font-normal relative ${
                  isActive('/settings') 
                    ? 'bg-[#1E90FF] bg-opacity-20 text-white border-r-2 border-[#1E90FF]' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-500'
                }`}
              >
                <span className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 rounded-full ${
                  isActive('/settings') ? 'bg-[#1E90FF]' : 'bg-gray-400'
                }`}></span>
                Settings
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Logout Button */}
      <div className="mt-auto">
        {/* Subtle separator */}
        <div className="mx-4 mb-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>
        
        <div className="px-4 pb-4">
          <button 
            onClick={() => router.push('/')}
            className="w-full flex items-center justify-center bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 py-3 px-4 transition-all duration-200 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-lg group focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
            </svg>
            <span className="font-semibold text-sm tracking-wide">LOGOUT</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
