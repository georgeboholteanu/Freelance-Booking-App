import React from "react";
import { NavLink } from 'react-router-dom';

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <div className="max-w-7xl grid mx-auto lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="bg-white rounded-lg shadow-lg p-4">
          
          <h3 className="text-lg font-medium mb-2">Email us</h3>
          <p className="text-gray-500">
            If you have any questions or feedback, please email us at
            <a href="mailto:enquiries@fba.com" style={{ color: 'red' }}> enquiries@fba.com</a>.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-lg font-medium mb-2">Phone us</h3>
          <p className="text-gray-500">
            +44 3069 990410 
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-lg font-medium mb-2">Address</h3>
          <p className="text-gray-500">
            65 Greyfriars Road, Capstone, ME7 9BN, United Kingdom
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-lg font-medium mb-2">Github</h3>
          <p className="text-gray-500">
          <NavLink to={'https://github.com/georgeboholteanu'} className="socialIcons text-sky-600 text-2xl m-1 hover:text-red-500">
            <i className="fa-brands fa-github"></i>
          </NavLink>
          <NavLink to={'https://github.com/Andzej-S'} className="socialIcons text-sky-600 text-2xl m-1 hover:text-red-500">
            <i className="fa-brands fa-github"></i>
          </NavLink>
          <NavLink to={'https://github.com/DavidHJolley'} className="socialIcons text-sky-600 text-2xl m-1 hover:text-red-500">
            <i className="fa-brands fa-github"></i>
          </NavLink>
          <NavLink to={'https://github.com/TahminaHannan'} className="socialIcons text-sky-600 text-2xl m-1 hover:text-red-500">
            <i className="fa-brands fa-github"></i>
          </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
