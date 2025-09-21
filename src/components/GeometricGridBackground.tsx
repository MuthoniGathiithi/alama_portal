const GeometricGridBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      {/* Grey background */}
      <div className="absolute inset-0 bg-gray-200"></div>

      {/* Simple square grid pattern - faded more */}
      <div className="absolute inset-0 opacity-15">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="square-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#6b7280" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#square-grid)" />
        </svg>
      </div>
    </div>
  )
}

export default GeometricGridBackground
