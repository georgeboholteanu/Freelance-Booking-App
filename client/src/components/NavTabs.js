import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
  return (
    <ul className="flex border-b-2 border-gray-200">
      <li className="mr-1">
        <NavLink
              to="/"
              exact
              className="inline-block py-2 px-4 text-gray-500 hover:text-gray-800 font-semibold"
              activeClassName="border-b-2 font-semibold text-gray-800"
            >
        Home
        </NavLink>
      </li>
      <li className="mr-1">
        <NavLink
              to="/about"
              className="inline-block py-2 px-4 text-gray-500 hover:text-gray-800 font-semibold"
              activeClassName="border-b-2 font-semibold text-gray-800"
            >
        About
        </NavLink>
      </li>
      <li className="mr-1">
        <NavLink
              to="/adduser"
              className="inline-block py-2 px-4 text-gray-500 hover:text-gray-800 font-semibold"
              activeClassName="border-b-2 font-semibold text-gray-800"
            >
        Add User
        </NavLink>
      </li>
      <li className="mr-1">
        <NavLink
              to="/contact"
              className="inline-block py-2 px-4 text-gray-500 hover:text-gray-800 font-semibold"
              activeClassName="border-b-2 font-semibold text-gray-800"
            >
        Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;