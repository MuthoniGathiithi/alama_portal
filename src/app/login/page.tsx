'use client';

import React, { useState } from 'react';
import AlamaLogo from '../../components/AlamaLogo';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-blue-400 opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-blue-300 opacity-15"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-blue-200 opacity-10"></div>
      </div>

      {/* Login Card */}
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md relative z-10">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <AlamaLogo size={60} className="mb-4" />
          <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
            ALAMA AI
          </h1>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            LOGIN
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="text-center mt-6">
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium transition duration-200"
          >
            Forgot password?
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white text-sm opacity-75">
        <p>© ALAMA AI 2024</p>
        <p className="mt-1">
          Alama AI and our parent company, Together, create platforms that
        </p>
        <p>help organizations and brands scale their social impact.</p>
        <p className="mt-2 text-xs">Build LOCAL_DEV</p>
      </div>
    </div>
  );
};

export default LoginPage;
