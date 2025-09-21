const CleanGeometricBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/20 to-indigo-50/30"></div>

      {/* Subtle grid overlay - consistent throughout */}
      <div className="absolute inset-0 opacity-6">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="clean-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#6b7280" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#clean-grid)" />
        </svg>
      </div>

      {/* Full height vertical lines - Left side */}
      <div className="absolute inset-y-0 left-8 w-24">
        <svg width="96" height="100%" viewBox="0 0 96 100%" className="opacity-15">
          <g stroke="#6b7280" strokeWidth="2" fill="none">
            <line x1="20" y1="0" x2="20" y2="100%" strokeDasharray="8,12" />
            <line x1="40" y1="0" x2="40" y2="100%" strokeDasharray="6,10" />
            <line x1="60" y1="0" x2="60" y2="100%" strokeDasharray="10,15" />
            <line x1="80" y1="0" x2="80" y2="100%" strokeDasharray="4,8" />
          </g>
        </svg>
      </div>

      {/* Full height vertical lines - Right side */}
      <div className="absolute inset-y-0 right-8 w-24">
        <svg width="96" height="100%" viewBox="0 0 96 100%" className="opacity-15">
          <g stroke="#6b7280" strokeWidth="2" fill="none">
            <line x1="16" y1="0" x2="16" y2="100%" strokeDasharray="8,12" />
            <line x1="36" y1="0" x2="36" y2="100%" strokeDasharray="6,10" />
            <line x1="56" y1="0" x2="56" y2="100%" strokeDasharray="10,15" />
            <line x1="76" y1="0" x2="76" y2="100%" strokeDasharray="4,8" />
          </g>
        </svg>
      </div>

      {/* Center vertical lines - Full height */}
      <div className="absolute inset-y-0 left-1/2 w-32 transform -translate-x-1/2">
        <svg width="128" height="100%" viewBox="0 0 128 100%" className="opacity-12">
          <g stroke="#6b7280" strokeWidth="2" fill="none">
            <line x1="32" y1="0" x2="32" y2="100%" strokeDasharray="12,18" />
            <line x1="64" y1="0" x2="64" y2="100%" strokeDasharray="8,12" />
            <line x1="96" y1="0" x2="96" y2="100%" strokeDasharray="12,18" />
          </g>
        </svg>
      </div>

      {/* Diagonal lines flowing downward - Left */}
      <div className="absolute inset-0 left-16">
        <svg width="200" height="100%" viewBox="0 0 200 100%" className="opacity-10">
          <g stroke="#6b7280" strokeWidth="2.5" fill="none">
            <line x1="0" y1="0" x2="100" y2="100%" strokeDasharray="6,10" />
            <line x1="50" y1="0" x2="150" y2="100%" strokeDasharray="8,12" />
            <line x1="100" y1="0" x2="200" y2="100%" strokeDasharray="6,10" />
          </g>
        </svg>
      </div>

      {/* Diagonal lines flowing downward - Right */}
      <div className="absolute inset-0 right-16">
        <svg width="200" height="100%" viewBox="0 0 200 100%" className="opacity-10">
          <g stroke="#6b7280" strokeWidth="2.5" fill="none">
            <line x1="200" y1="0" x2="100" y2="100%" strokeDasharray="6,10" />
            <line x1="150" y1="0" x2="50" y2="100%" strokeDasharray="8,12" />
            <line x1="100" y1="0" x2="0" y2="100%" strokeDasharray="6,10" />
          </g>
        </svg>
      </div>

      {/* Additional vertical lines - Quarter positions */}
      <div className="absolute inset-y-0 left-1/4 w-16">
        <svg width="64" height="100%" viewBox="0 0 64 100%" className="opacity-12">
          <g stroke="#6b7280" strokeWidth="1.5" fill="none">
            <line x1="20" y1="0" x2="20" y2="100%" strokeDasharray="5,8" />
            <line x1="44" y1="0" x2="44" y2="100%" strokeDasharray="7,11" />
          </g>
        </svg>
      </div>

      <div className="absolute inset-y-0 right-1/4 w-16">
        <svg width="64" height="100%" viewBox="0 0 64 100%" className="opacity-12">
          <g stroke="#6b7280" strokeWidth="1.5" fill="none">
            <line x1="20" y1="0" x2="20" y2="100%" strokeDasharray="5,8" />
            <line x1="44" y1="0" x2="44" y2="100%" strokeDasharray="7,11" />
          </g>
        </svg>
      </div>

      {/* Top horizontal accent lines */}
      <div className="absolute top-8 left-1/2 w-96 h-16 transform -translate-x-1/2">
        <svg width="384" height="64" viewBox="0 0 384 64" className="opacity-12">
          <g stroke="#6b7280" strokeWidth="2" fill="none">
            <line x1="0" y1="20" x2="384" y2="20" strokeDasharray="10,20" />
            <line x1="40" y1="44" x2="344" y2="44" strokeDasharray="8,16" />
          </g>
        </svg>
      </div>

      {/* Bottom horizontal accent lines */}
      <div className="absolute bottom-8 left-1/2 w-96 h-16 transform -translate-x-1/2">
        <svg width="384" height="64" viewBox="0 0 384 64" className="opacity-12">
          <g stroke="#6b7280" strokeWidth="2" fill="none">
            <line x1="0" y1="20" x2="384" y2="20" strokeDasharray="10,20" />
            <line x1="40" y1="44" x2="344" y2="44" strokeDasharray="8,16" />
          </g>
        </svg>
      </div>

      {/* Center focal point - Simple geometric shape */}
      <div className="absolute top-1/2 left-1/2 w-32 h-32 transform -translate-x-1/2 -translate-y-1/2">
        <svg width="128" height="128" viewBox="0 0 128 128" className="opacity-8">
          <g stroke="#6b7280" strokeWidth="2" fill="none">
            <circle cx="64" cy="64" r="40" strokeDasharray="8,8" />
            <circle cx="64" cy="64" r="25" strokeDasharray="6,6" />
            <line x1="64" y1="24" x2="64" y2="104" strokeDasharray="4,6" />
            <line x1="24" y1="64" x2="104" y2="64" strokeDasharray="4,6" />
          </g>
        </svg>
      </div>

      {/* Subtle accent dots - grayish */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8">
        <svg width="32" height="32" viewBox="0 0 32 32" className="opacity-20">
          <circle cx="16" cy="16" r="3" fill="#6b7280" />
        </svg>
      </div>

      <div className="absolute top-3/4 right-1/4 w-8 h-8">
        <svg width="32" height="32" viewBox="0 0 32 32" className="opacity-20">
          <circle cx="16" cy="16" r="3" fill="#6b7280" />
        </svg>
      </div>

      <div className="absolute top-1/3 right-1/3 w-8 h-8">
        <svg width="32" height="32" viewBox="0 0 32 32" className="opacity-15">
          <circle cx="16" cy="16" r="3" fill="#6b7280" />
        </svg>
      </div>

      <div className="absolute bottom-1/3 left-1/3 w-8 h-8">
        <svg width="32" height="32" viewBox="0 0 32 32" className="opacity-15">
          <circle cx="16" cy="16" r="3" fill="#6b7280" />
        </svg>
      </div>
    </div>
  )
}

export default CleanGeometricBackground
