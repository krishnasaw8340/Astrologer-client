// src/components/CrossButton.js
import React from 'react';

const CrossButton = ({ toggleMenu }) => {
  return (
    <div className="md:hidden absolute top-4 right-4" onClick={toggleMenu}>
      <svg
        className="w-8 h-8 text-gray-800 cursor-pointer"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default CrossButton;
