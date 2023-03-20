import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';

import { technologies, locations, availability } from "./Variables";

function FilterData() {
  const [users, setUsers] = useState([]);

  const [skill, setSkill] = useState("");
  const [location, setLocation] = useState("");
  const [avb, setAvb] = useState("");

  const [isOpenLocation, setIsOpenLocation] = useState(false);
  const [isOpenTechnologies, setIsOpenTechnologies] = useState(false);
  const [isOpenAvailability, setIsOpenAvailability] = useState(false);

  useEffect(() => {
    // Fetch users data from the server
    axios.get("/users").then((response) => {
      setUsers(response.data.users);
    });
  }, []);

  const handleSkillChange = (event) => {
    const selectedSkill = event.target.value;
    setSkill(selectedSkill);
    // Fetch filtered users data from the server
    axios.get(`/users?skill=${selectedSkill}`).then((response) => {
      console.log(response.data.users); // add this line to log the response
      setUsers(response.data.users);
    });
  };

  const handleLocationChange = async (event) => {
    const selectedLocation = event.target.value;
    setLocation(selectedLocation);
    // Fetch filtered users data from the server
    await axios.get(`/users?loc=${selectedLocation}`).then((response) => {
      setUsers(response.data.users);
    });
  };

  const handleAvailabilityChange = async (event) => {
    const selectedAvailability = event.target.value;
    setAvb(selectedAvailability);
    // Fetch filtered users data from the server
    await axios
      .get(`/users?avb=${selectedAvailability}`)
      .then((response) => {
        setUsers(response.data.users);
      });
  };


  return (
    <div className="relative m-10 flex">
      <div>
        <button
          className="mx-5 items-center justify-center  px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          onClick={() => setIsOpenLocation(!isOpenLocation)}
        >
          <span>Location</span>
        </button>
        <button
          className="mx-5 items-center justify-center  px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          onClick={() => setIsOpenTechnologies(!isOpenTechnologies)}
        >
          <span>Skills</span>
        </button>
        <button
          className=" mx-5 items-center justify-center  px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          onClick={() => setIsOpenAvailability(!isOpenAvailability)}
        >
          <span>Availability</span>
        </button>
      </div>

      <div>
        {isOpenLocation && (
          <div className="absolut z-10 mt-10 bg-white rounded-md shadow-lg">
            <ul
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {locations.map((option, idx) => (
                <li key={idx}>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-left"
                    role="menuitem"
                    onClick={handleLocationChange}
                    value={option}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        {isOpenTechnologies && (
          <div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg">
            <ul
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {technologies.map((option, idx) => (
                <li key={idx}>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-left"
                    role="menuitem"
                    onClick={handleSkillChange}
                    value={option}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        {isOpenAvailability && (
          <div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg">
            <ul
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {availability.map((option, idx) => (
                <li key={idx}>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-left"
                    role="menuitem"
                    onClick={handleAvailabilityChange}
                    value={option}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div
      id="users"
      className="mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-10"
    >
      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => (
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg"
            key={user.id}
          >
            <img
              className="w-full"
              src={`./assets/images/${user.picture}`}
              alt="user avatar"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{`${user.name} ${user.surname}`}</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {
                user.skills.map((skill, index) => (
                  <span 
                  key={index} 
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {skill}
                  </span>
                ))
              }     

              {/* dynamic buttons with availability */}
              {user.availability ? (
                <NavLink
                to={`/form/${user.id}`}
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                data-user={user.id}
                >
                  Book me
                </NavLink>
                // <button
                //   onClick={bookUser}
                //   className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                //   data-user={user.id}
                // >
                //   Book Me
                // </button>
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
    </div>
  );
}

export default FilterData;
