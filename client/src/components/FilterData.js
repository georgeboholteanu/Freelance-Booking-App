import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import { technologies, locations, availability } from "./Variables";

function FilterData() {
  const [users, setUsers] = useState([]);

  const [skill, setSkill] = useState("");
  const [location, setLocation] = useState("");
  const [avb, setAvb] = useState("");

  const [isOpenLocation, setIsOpenLocation] = useState(false);
  const [isOpenTechnologies, setIsOpenTechnologies] = useState(false);
  const [isOpenAvailability, setIsOpenAvailability] = useState(false);

  // const dropdownRef = useRef(null);

  // useEffect(() => {
  //   // Close dropdown when user clicks outside
  //   function handleClickOutside(event) {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsOpenLocation(false);
  //       setIsOpenTechnologies(false);
  //       setIsOpenAvailability(false);
  //     }
  //   }

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [dropdownRef]);

  useEffect(() => {
    // Fetch users data from the server
    axios.get("/users").then((response) => {
      setUsers(response.data.users);
    });
  }, []);

  const handleSkillChange = async (event) => {
    const selectedSkill = event.target.value;
    setSkill(selectedSkill);
    // Fetch filtered users data from the server
    await axios.get(`/users?skill=${selectedSkill}`).then((response) => {
      console.log(response.data.users); 
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
    await axios.get(`/users?avb=${selectedAvailability}`).then((response) => {
      setUsers(response.data.users);
    });
  };

  return (
    <div className="relative m-10 justify-center text-center">
      {/* FILTER BUTTONS */}
      <div className="m-5 bg-gray-500 shadow-lg rounded-md">
        <button
          className="mx-5 items-center justify-center px-4 py-2 text-lg font-medium text-white rounded-md hover:text-blue-300 "
          onClick={() => {
            setIsOpenLocation(!isOpenLocation);
            setIsOpenTechnologies(false);
            setIsOpenAvailability(false);
          }}
        >
          <span className="text-lg">Location</span>
        </button>
        <button
          className="mx-5 items-center justify-center px-4 py-2 text-lg font-medium text-white rounded-md hover:text-blue-300 "
          onClick={() => {
            setIsOpenLocation(false);
            setIsOpenTechnologies(!isOpenTechnologies);
            setIsOpenAvailability(false);
          }}
        >
          <span className="text-lg">Skills</span>
        </button>
        <button
          className="mx-5 items-center justify-center px-4 py-2 text-lg font-medium text-white rounded-md hover:text-blue-300 "
          onClick={() => {
            setIsOpenAvailability(!isOpenAvailability);
            setIsOpenLocation(false);
            setIsOpenTechnologies(false);
          }}
        >
          <span className="text-lg">Availability</span>
        </button>
      </div>

      {/* DROPDOWN LISTS */}
      <div
        // ref={dropdownRef}
        className="flex justify-center"
      >
        {isOpenLocation && (
          <div className="w-max z-10 mb-10 bg-gray-100 rounded-md shadow-lg ">
            <ul
              className="py-1 flex mx-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {locations.map((option, idx) => (
                <li key={idx} className="text-center">
                  <button
                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-blue-300"
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

      <div
      className="flex justify-center"
      // ref={dropdownRef}
      >
        {isOpenTechnologies && (
          <div className="w-max z-10 mb-10 bg-gray-100 rounded-md shadow-lg">
            <ul
              className="py-1 flex"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {technologies.map((option, idx) => (
                <li key={idx} className="text-center">
                  <button
                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-blue-300"
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

      <div
      className="flex justify-center"
      // ref={dropdownRef}
      >
        {isOpenAvailability && (
          <div className="w-max z-10 mb-10 bg-gray-100 rounded-md shadow-lg">
            <ul
              className="py-1 flex justify-center"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {availability.map((option, idx) => (
                <li key={idx} className="text-center">
                  <button
                    className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-blue-300"
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

      {/* FREELANCERS */}
      <div
        id="users"
        className="justify-center grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 px-10"
      >
        {users.length === 0 ? (
          <p className="block text-center">Freelancers not found</p>
        ) : (
          users.map((user) => (
            <div
              className="w-full h-[550px] bg-gray-100  rounded shadow-lg border-gray-300 flex flex-col"
              key={user.id}
            >
              <img
                className="w-full object-contain min-h-0"
                src={`http://localhost:5000/static/images/${user.picture}`}
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
                {user.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-4"
                  >
                    {skill}
                  </span>
                ))}

                {/* dynamic buttons with availability */}
                {user.availability === "Available" ? (
                  <NavLink
                    to={`/form/${user.id}`}
                    className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    data-user={user.id}
                  >
                    Book me
                  </NavLink>
                ) : (
                  <a
                    role="button"
                    className="block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
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
