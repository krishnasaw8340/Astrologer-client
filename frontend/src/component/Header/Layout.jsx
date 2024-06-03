// src/components/Layout.js
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import CrossButton from './CrossButton';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="bg-gray-50 p-4 text-gray-800 flex items-center justify-between h-10vh relative shadow-sm rounded-sm">
        <div className="text-2xl font-bold">Praveer Hathyogi</div>
        {!isOpen && <Hamburger toggleMenu={toggleMenu} />}
        {isOpen && <CrossButton toggleMenu={toggleMenu} />}
        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <Link
            to="/"
            className="block md:inline-block md:mr-4 mt-4 md:mt-0 text-center font-medium"
            onClick={closeMenu}
          >
            Home
          </Link>
         
          <Link
            to="/products"
            className="block md:inline-block md:mr-4 mt-4 md:mt-0 text-center font-medium"
            onClick={closeMenu}
          >
            Product
          </Link>
          <Link
            to="/course"
            className="block md:inline-block md:mr-4 mt-4 md:mt-0 text-center font-medium"
            onClick={closeMenu}
          >
            Courses
          </Link>
          <Link
            to="/services"
            className="block md:inline-block md:mr-4 mt-4 md:mt-0 text-center font-medium"
            onClick={closeMenu}
          >
            Services
          </Link>
         
          <Link
            to="/about"
            className="block md:inline-block md:mr-4 mt-4 md:mt-0 text-center font-medium"
            onClick={closeMenu}
          >
            About
          </Link>
          <button className='bg-orange-400 text-white px-4 py-2 focus:outline-none rounded-md font-semibold'>Get Consultancy</button>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-800 p-4 text-white text-center">
        &copy; 2024 Your Company
      </footer>
    </div>
  );
};

export default Layout;
