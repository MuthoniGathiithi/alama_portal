import React from 'react';

interface AlamaLogoProps {
  className?: string;
  size?: number;
}

const AlamaLogo: React.FC<AlamaLogoProps> = ({ className = '', size = 60 }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Letter A */}
        <path
          d="M40 160L80 40L120 160M55 120H105"
          stroke="#000000"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Blue checkmark */}
        <path
          d="M110 90L130 110L170 70"
          stroke="#1E90FF"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default AlamaLogo;
