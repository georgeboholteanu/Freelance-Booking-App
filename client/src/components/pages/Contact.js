import React from "react";
import { NavLink } from 'react-router-dom';

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
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


{/* // return (
  //   <div className="flex flex-col min-h-screen bg-gray-100 flex items-center justify-center">
  //     <h1 className="text-3xl mb-4 font-bold">Contact Us</h1>
  //     <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        
  //       <div className="mb-4">
  //         <label
  //           className="block text-gray-700 text-sm font-bold mb-2"
  //           htmlFor="phone"
  //         >
  //           Our phone
  //         </label>
  //         <p>+44 3069 990128</p>
  //       </div>

  //       <div className="mb-4">
  //         <label
  //           className="block text-gray-700 text-sm font-bold mb-2"
  //           htmlFor="email"
  //         >
  //           Our Email
  //         </label>
  //         <a href="mailto:enquiries@fba.com">enquiries@fba.com</a>
  //       </div>

  //       <div className="mb-4">
  //         <label
  //           className="block text-gray-700 text-sm font-bold mb-2"
  //           htmlFor="github"
  //         >
  //           Our Github links
  //         </label>
  //         <NavLink to={'https://github.com/georgeboholteanu'} className="socialIcons text-yellow-400 text-2xl m-1 hover:text-sky-400">
  //           <i className="fa-brands fa-github"></i>
  //           <p>George</p>
  //         </NavLink>
  //         <NavLink to={'https://github.com/Andzej-S'} className="socialIcons text-yellow-400 text-2xl m-1 hover:text-sky-400">
  //           <i className="fa-brands fa-github"></i>
  //           <p>Andzej</p>
  //         </NavLink>
  //         <NavLink to={'https://github.com/DavidHJolley'} className="socialIcons text-yellow-400 text-2xl m-1 hover:text-sky-400">
  //           <i className="fa-brands fa-github"></i>
  //           <p>David</p>
  //         </NavLink>
  //         <NavLink to={'https://github.com/TahminaHannan'} className="socialIcons text-yellow-400 text-2xl m-1 hover:text-sky-400">
  //           <i className="fa-brands fa-github"></i>
  //           <p>Tahmina</p>
  //         </NavLink>
  //       </div>

  //     </div>
  //   </div>
  // ); */}

export default Contact;
