// src/components/HamburgerMenu.js
import React from 'react';

const Hamburger = ({ isOpen, toggleMenu }) => {
  return (
    <div  className="md:hidden" onClick={toggleMenu}>
      <svg
        className="w-8 h-8 text-gray-800 cursor-pointer"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        )}
      </svg>
    </div>
  );
};

export default Hamburger;
