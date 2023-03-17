import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
    // const [name, setName] = useState("");
    // const [message, setMessage] = useState("");
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

    const getUserId = () => {
        const urlPath = `${window.location.href}`.split("/");
        const localId = urlPath[urlPath.length-1].split("?")
        return localId[0];
    }
    // write data to server
    const bookUser = async (id) => {
      const { data } = await axios.put(`/users/${getUserId()}`, {
        availability: false    
      })
  
      console.log(data);
      setbackendData((prevState) => {
        const updatedUsers = prevState.users.map((user) =>
          user.id === getUserId() ? { ...user, availability: false } : user
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

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        phone: "",
        availability: false,
        skills: {
          skill1: "",
          skill2: "",
          skill3: "",
        },
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
    
      const handleSkillChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          skills: {
            ...prevState.skills,
            [name]: value,
          },
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const { data } = await axios.put(`/users/adduser`, formData)
    
        console.log(data);
        // setbackendData((prevState) => {
        //   const updatedUsers = prevState.users.push(data)
        
        //   return { users: updatedUsers };
        // });
      };
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const form = { name, message };

    //     console.log(form);
    // }

  

    return (
        <div className="BookingForm">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
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
            <label htmlFor="skill1" className="block mb-2 text-gray-700">
            Best Skill 1
            </label>
            <input
            type="text"
            name="skill1"
            id="skill1"
            value={formData.skills.skill1}
            onChange={handleSkillChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            />
        </div>
        <button
        onClick={bookUser} 
        type="submit" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
            Book
        </button>

        </form>
        </div>
    )
}

export default Form;

