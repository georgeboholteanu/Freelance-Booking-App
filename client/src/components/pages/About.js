import React from "react";

function About() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 px-10">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-red-100 shadow-md rounded-lg px-6 py-8 hover:bg-red-200 transition duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700">
              We are committed to making the lives of freelancers easier by providing a simple and effective booking system. Our app is designed to help freelancers focus on their work by taking care of scheduling and bookings.
            </p>
          </div>
          <div className="bg-blue-100 shadow-md rounded-lg px-6 py-8 hover:bg-blue-200 transition duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Meet the Team</h2>
            <div className="flex items-center">
              <img src="https://randomuser.me/api/portraits/women/15.jpg" alt="George" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">George</h3>
                <p className="text-gray-700">Front-end Developer</p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="David" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">David</h3>
                <p className="text-gray-700">UI/UX Designer</p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <img src="https://randomuser.me/api/portraits/men/80.jpg" alt="Tahmina" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Tahmina</h3>
                <p className="text-gray-700">Front-end Developer</p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <img src="https://randomuser.me/api/portraits/women/21.jpg" alt="Andzej" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Andzej</h3>
                <p className="text-gray-700">Front-end Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-100 shadow-md rounded-lg px-6 py-8 hover:bg-blue-200 transition duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Testimonials</h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="John Smith" className="w-12 h-12 rounded-full mr-4" />
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-lg text-gray-700 mr-2">"I've used this app to book several freelancers for my projects and it has made my life so much easier. The process is smooth and seamless, and the quality of work is outstanding!"</span>
                    <span className="text-green-500 text-2xl">&#10003;</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-2xl">&#9733;</span>
                    <span className="text-yellow-400 text-2xl">&#9733;</span>
                    <span className="text-yellow-400 text-2xl">&#9733;</span>
                    <span className="text-yellow-400 text-2xl">&#9733;</span>
                    <span className="text-gray-400 text-2xl">&#9733;</span>
                  </div>
                  <p className="text-gray-800 font-semibold mt-2">- John Smith, CEO of ABC Company</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="Person Mcperson" className="w-12 h-12 rounded-full mr-4" />
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-lg text-gray-700 mr-2">"I highly recommend this app to anyone looking to hire talented and reliable freelancers. The platform is easy to use and the customer support is excellent."</span>
                    <span className="text-green-500 text-2xl">&#10003;</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-2xl">&#9733;</span>
                    <span className="text-yellow-400 text-2xl">&#9733;</span>
                    <span className="text-yellow-400 text-2xl">&#9733;</span>
                    <span className="text-yellow-400 text-2xl">&#9733;</span>
                    <span className="text-gray-400 text-2xl">&#9733;</span>
                  </div>
                  <p className="text-gray-800 font-semibold mt-2">- Bob Dylan, CEO of DEF Company</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="John Smith" className="w-12 h-12 rounded-full mr-4" />
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-lg text-gray-700 mr-2">"As a freelancer, I've been using this app to find new clients and it has been a game changer. The platform is user"</span>
                    <span className="text-green-500 text-2xl">&#10003;</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-2xl">&#9733;</span>
                    <span className="text-yellow-400 text-2xl">&#9733;</span>
                    <span className="text-yellow-400 text-2xl">&#9733;</span>
                    <span className="text-yellow-400 text-2xl">&#9733;</span>
                    <span className="text-yellow-400 text-2xl">&#9733;</span>
                    <span className="text-gray-400 text-2xl">&#9733;</span>
                  </div>
                  <p className="text-gray-800 font-semibold mt-2">- Jane Bob, Freelancer</p>
                </div>
              </div>
          </div>
        </div>
    </div>
  );
}

export default About;
