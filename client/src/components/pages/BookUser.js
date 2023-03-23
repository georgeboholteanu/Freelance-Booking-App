import React, { useState, useEffect } from "react";
import axios from "axios";

const BookUser = () => {
  const [backendData, setbackendData] = useState({ users: [] });
  const [formCompleted, setFormCompleted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    description: ""
  });

  // get data from the server
  const fetchData = async () => {
    const { data } = await axios.get("/users");
    console.log(data);
    setbackendData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const getUserId = () => {
      const urlPath = `${window.location.href}`.split("/");
      const localId = urlPath[urlPath.length-1].split("?")
      return localId[0];
  };

  // write data to server
  const bookUser = async (id) => {
    const { data } = await axios.put(`/users/${getUserId()}`, {
      availability: false    
    })

    console.log(data);
    setbackendData((prevState) => {
      const updatedUsers = prevState.users.map((user) =>
        user.id === getUserId() ? { ...user, availability: "Busy" } : user
      );
      return { users: updatedUsers };
    });
  };

  backendData.length > 0 ? (
      <p>Loading...</p>
    ) : (
      backendData.users.map((user) => (
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg"
          key={user.id}
        >
        </div>
  )))
    
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormCompleted(true);
    bookUser();
  };

  const isFormValid = () => {
    return (
      formData.name !== "" &&
      formData.surname !== "" &&
      formData.phone !== ""
    );
  };

  return (
    <form onSubmit={handleSubmit} className="min-h-screen max-w-md mx-auto mt-4 BookingForm">
      <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-gray-700">
          Name
          </label>
          <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          />
      </div>
      <div className="mb-4">
          <label htmlFor="surname" className="block mb-2 text-gray-700">
          Surname
          </label>
          <input
          type="text"
          name="surname"
          id="surname"
          value={formData.surname}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          />
      </div>
      <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 text-gray-700">
          Phone
          </label>
          <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          />
      </div>
      <div className="mb-4">
          <label htmlFor="description" className="block mb-2 text-gray-700">
          Brief description of the project
          </label>
          <textarea
          type="text"
          name="description"
          id="description"
          rows="4"
          style={{ resize: "vertical" }}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
      </div>

      {formCompleted ? (
        <button 
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >Freelancer booked</button>
      ) : (
        <button 
        type="submit"
        disabled={!isFormValid()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Book
        </button>
      )}
    </form>
  )
}

export default BookUser;