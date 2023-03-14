
import React, { useState, useEffect } from "react";
import axios from "axios";

// import { BrowserRouter as Router, Route, Routes, Navlink  } from 'react-router-dom';
// import { Nav } from "./components/Nav";
// import { Navlink } from "./components/Banner";

function User() {
  const [backendData, setbackendData] = useState([{}]);
    
  // WIP
  const bookUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/${backendData.users.id}`, {
        availability: backendData.users.availability,
      });
      console.log(response.backendData.users);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    const { data } = await axios.get("/api");
    console.log(data);
    setbackendData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
    
      id="gallery"
      className="mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-10"
    >
      {backendData.length > 0 ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user) => (
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg"
            key={user.id}
          >
            <img
              className="w-full"
              src={`${window.location.origin}${user.picture}`}
              alt="user avatar"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{`${user.name.title} ${user.name.first} ${user.name.last}`}</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Frontend
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #HTML
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #CSS
              </span>

              {/* dynamic buttons with availability */}
              {user.availability ? (
                <button
                  onClick={bookUser}
                  className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Book Me
                </button>
              ) : (
                <a
                  role="button"
                  className="inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  href={`mailto:${user.email}`}
                >
                  Send Inquiry
                </a>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default User;
