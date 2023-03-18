import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiGithubFill } from 'react-icons/ri';

function Footer() {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="flex flex-col items-center justify-center">        <div className="flex items-center justify-center mb-4">
          <span className="font-semibold text-gray-500">
            <NavLink to="/" className="inline-block py-2 px-4 text-gray-800 hover:text-gray-500 font-semibold">
              Home
            </NavLink>
            {' | '}
            <NavLink to="/about" className="inline-block py-2 px-4 text-gray-800 hover:text-gray-500 font-semibold">
              About Us
            </NavLink>
            {' | '}
            <NavLink to="/contact" className="inline-block py-2 px-4 text-gray-800 hover:text-gray-500 font-semibold">
              Contact Us
            </NavLink>
            {' | '}
            <NavLink to="/contact" className="inline-block py-2 px-4 text-gray-800 hover:text-gray-500 font-semibold">
              Careers
            </NavLink>
            {' | '}
            <NavLink to="https://github.com/georgeboholteanu/Freelance-Booking-App" className="inline-block py-2 px-4 text-gray-800 hover:text-gray-500 font-semibold">
              Resources
            </NavLink>
            {' | '}
        </span>
        </div>
        <div className="text-gray-600">
        <div className="flex items-center justify-center mb-4">
        <a href="https://github.com/georgeboholteanu" className="mr-4"><RiGithubFill size={24} color="#C53030" /></a>
        <a href="https://github.com/Andzej-S" className="mr-4"><RiGithubFill size={24} color="#C53030" /></a>
        <a href="https://github.com/DavidHJolley" className="mr-4"><RiGithubFill size={24} color="#C53030" /></a>
        <a href="https://github.com/TahminaHannan"><RiGithubFill size={24} color="#C53030" /></a>
        </div>
        <p className="font-semibold">&copy; {new Date().getFullYear()} Copyright. All rights reserved.</p>
        </div>
        </div>
    </footer>
  );
}

export default Footer;
