import React, { useState } from "react";
import axios from "axios";
import { technologies } from "../Variables";

function AddUser() {
  const [formCompleted, setFormCompleted] = useState(false);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    availability: false,
    skills: [],
    id: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSectionChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData((prevData) => ({
      ...prevData,
      skills: selectedOptions,
    }));
  };

  const generateNewId = async (data) => {
    const newId = data.length + 1;
    return newId;
  };


  const handleUpload = async () => {
    const formDataImg = new FormData();
    formDataImg.append("user", image);
    await axios
      .post("/upload", formDataImg)
      .then((response) => {
        console.log("File uploaded successfully!");
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormCompleted(true);
    const { data } = await axios.get("/users");

    const newId = await generateNewId(data.users);

    //get existing formData into an object
    const newUserData = {
      ...formData,
      id: newId,
      availability: (formData.availability) ? "Available" : "Busy",
      // picture: image.name, // screenshot.png
      picture: `user${newId}.jpg` // WIP
    };

    // upload user image to server
    if (image) {
      handleUpload();
    } 

    // merge the new data with the existing
    const mergedData = data.users;
    mergedData.push(newUserData);

    axios
      .post("/adduser", { users: mergedData })
      .then((response) => {
        // User was added successfully
        console.log("User added successfully!");
      })
      .catch((error) => {
        // Handle the error
        console.error("Error adding user:", error);
      });
  };

  const isFormValid = () => {
    return (
      formData.name !== "" &&
      formData.surname !== "" &&
      formData.phone !== ""
    );
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-4 justify-center min-h-screen"
      >
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
          <label htmlFor="email" className="block mb-2 text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
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
          <label htmlFor="Location" className="block mb-2 text-gray-700">
            City
          </label>
          <input
            type="location"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="availability" className="block mb-2 text-gray-700">
            Availability Status
          </label>
          <input
            type="checkbox"
            name="availability"
            id="availability"
            checked={formData.availability}
            onChange={handleCheckboxChange}
            className="mr-2 border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="availability">Available</label>
        </div>
        <div className="mb-4">
          <label htmlFor="skill" className="block mb-2 text-gray-700">
            Skills (Use Ctrl for multiple selection)
          </label>
          <select
            type="text"
            name="skill"
            id="skill"
            multiple={true}
            onChange={handleSectionChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            {technologies.map((tech, idx) => (
              <option key={idx} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>
        {/* <div className="mb-4">
          <label htmlFor="About" className="block mb-2 text-gray-700">
            About
          </label>
          <input
            type="about"
            name="about"
            id="about"
            value={formData.about}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div> */}
        <div className="mb-4">
          <label htmlFor="picture" className="block mb-2 text-gray-700">
            Profile Picture
          </label>
            <input
              type="file"
              name="user"
              accept=".jpg,.jpeg"
              required
              onChange={(e) => setImage(e.target.files[0])}
            />
        </div>

        {formCompleted ? (
        <button 
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >User Added</button>
      ) : (
        <button 
        type="submit"
        disabled={!isFormValid()}
        onChange={handleInputChange}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add User
        </button>
      )}
    </form>
    </div>
  );
}

export default AddUser;
