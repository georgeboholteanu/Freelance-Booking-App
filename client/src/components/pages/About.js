import React from "react";

function About() {
return (
  <div className="bg-gray-100 min-h-screen">
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 px-10">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg px-6 py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700">
            We are committed to making the lives of freelancers easier by providing a simple and effective booking system. Our app is designed to help freelancers focus on their work by taking care of scheduling and bookings.
            </p>
            </div>
            <div className="bg-white shadow-md rounded-lg px-6 py-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Meet the Team</h2>
              <div className="flex items-center">
            <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="George" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">George</h3>
                <p className="text-gray-700">Front-end Developer</p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <img src="https://randomuser.me/api/portraits/men/80.jpg" alt="David" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">David</h3>
              <p className="text-gray-700">UI/UX Designer</p>
            </div>
              </div>
                <div className="flex items-center mt-4">
                <img src="https://randomuser.me/api/portraits/women/14.jpg" alt="Tahmina" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Tahmina</h3>
                <p className="text-gray-700">Front-end Developer</p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <img src="https://randomuser.me/api/portraits/men/21.jpg" alt="Anzej" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Andzej</h3>
              <p className="text-gray-700">Front-end Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default About;