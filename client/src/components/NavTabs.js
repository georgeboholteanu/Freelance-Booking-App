import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaUserPlus, FaEnvelope } from 'react-icons/fa';

function NavTabs() {
  return (
    <ul className="flex border-b-2 border-gray-200">
      <li className="mr-1">
        <NavLink
          to="/"
          onClick={() => window.reload()}
          className="inline-block py-2 px-4 text-gray-500 hover:text-gray-800 font-semibold flex items-center"
        >
          <FaHome className="mr-2" />
          Home
        </NavLink>
      </li>
      <li className="mr-1">
        <NavLink
          to="/about"
          className="inline-block py-2 px-4 text-gray-500 hover:text-gray-800 font-semibold flex items-center"
        >
          <FaInfoCircle className="mr-2" />
          About
        </NavLink>
      </li>
      <li className="mr-1">
        <NavLink
          to="/adduser"
          className="inline-block py-2 px-4 text-gray-500 hover:text-gray-800 font-semibold flex items-center"
        >
          <FaUserPlus className="mr-2" />
          Add Freelancer
        </NavLink>
      </li>
      <li className="mr-1">
        <NavLink
          to="/contact"
          className="inline-block py-2 px-4 text-gray-500 hover:text-gray-800 font-semibold flex items-center"
        >
          <FaEnvelope className="mr-2" />
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
