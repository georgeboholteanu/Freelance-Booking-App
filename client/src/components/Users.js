import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import axios from "axios";

function Users() {
  const [backendData, setbackendData] = useState({ users: [] });

  // get data from the server
  const fetchData = async () => {
    const { data } = await axios.get("/users");
    console.log(data);
    setbackendData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // write data to server
  // const bookUser = async (id) => {
  //   const { data } = await axios.put(`/users/${id}`, {
  //     availability: false    
  //   })

  //   console.log(data);
  //   setbackendData((prevState) => {
  //     const updatedUsers = prevState.users.map((user) =>
  //       user.id === id ? { ...user, availability: false } : user
  //     );
  //     return { users: updatedUsers };
  //   });
  // };

  return (
    <div
      id="gallery"
      className="mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-10"
    >
      {backendData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user) => (
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
  );
}

export default Users;