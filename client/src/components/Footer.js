import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-100 py-4 mt-100 border border-gray-200">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mb-4">
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
            <NavLink to="https://github.com/georgeboholteanu/Freelance-Booking-App" className="inline-block py-2 px-4 text-gray-800 hover:text-gray-500 font-semibold">
              Resources
            </NavLink>
            </span>
        </div>
        <div className="text-gray-600">
        <div className="flex items-center justify-center mb-4">
      <NavLink to={'https://github.com/georgeboholteanu'} className="socialIcons text-cyan-400 text-2xl m-1 hover:text-red-500">
        <i className="fa-brands fa-github"></i>
        </NavLink>
        <NavLink to={'https://github.com/Andzej-S'} className="socialIcons text-cyan-500 text-2xl m-1 hover:text-red-500">
        <i className="fa-brands fa-github"></i>
        </NavLink>
        <NavLink to={'https://github.com/DavidHJolley'} className="socialIcons text-sky-600 text-2xl m-1 hover:text-red-500">
        <i className="fa-brands fa-github"></i>
        </NavLink>
        <NavLink to={'https://github.com/TahminaHannan'} className="socialIcons text-cyan-700 text-2xl m-1 hover:text-red-500">
        <i className="fa-brands fa-github"></i>
     </NavLink>
  </div>
  <p className="font-semibold text-center">&copy; {new Date().getFullYear()} Copyright. All rights reserved.
  </p>
</div>

      </div>
    </footer>
  );
}

export default Footer;
