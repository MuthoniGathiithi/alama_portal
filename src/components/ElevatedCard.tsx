'use client'

import { useState } from 'react'

const ElevatedCard = ({ onLogin }: { onLogin: () => void }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      {/* Login Card */}
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden flex border border-gray-200">
        {/* Left Side - Login Form */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h1 className="text-2xl font-semibold text-gray-800 mb-8">Welcome to Alama Portal</h1>
            
            <div className="space-y-5">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  EMAIL
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E90FF] focus:border-[#1E90FF] transition-all bg-white"
                  placeholder="Enter your email"
                />
              </div>
              
              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  PASSWORD
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2.5 pr-10 text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E90FF] focus:border-[#1E90FF] transition-all bg-white"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                      </svg>
                    ) : (
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              
              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-3.5 w-3.5 text-[#1E90FF] focus:ring-[#1E90FF] border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-xs text-gray-600">
                    Remember me
                  </label>
                </div>
                <div className="text-xs">
                  <a href="#" className="text-[#1E90FF] hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>
              
              {/* Sign In Button */}
              <div className="pt-2">
                <button 
                  onClick={onLogin}
                  className="w-full bg-[#1E90FF] hover:bg-[#1873CC] text-white font-medium py-2.5 text-sm rounded-md transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-[#1E90FF]"
                >
                  Sign in
                </button>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-100 text-center text-xs text-gray-500">
              Don't have an account?{' '}
              <a href="#" className="text-[#1E90FF] hover:underline">
                Contact administrator
              </a>
            </div>
          </div>
        </div>
        
        {/* Right Side - Logo */}
        <div className="w-1/2 bg-[#1E90FF] flex flex-col items-center justify-center p-8">
          <div className="text-center">
            <div className="bg-white p-6 rounded-full inline-flex items-center justify-center mb-4">
              <img
                src="/alama_dark_logo_lt_bnjlIcW.png"
                alt="Alama Logo"
                className="w-20 h-20 object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold text-white">ALAMA</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElevatedCard
