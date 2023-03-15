import React, { useState } from 'react';
import { BiChevronDown } from "react-icons/bi";

const Filter = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-72 font-medium h-80">
      <div
        className="bg-white w-full p-2 flex items-center justify-between rounded border"
        onClick={toggleDropdown}
      >
        {label}
        <BiChevronDown size={20} />
      </div>
      {isOpen && (
        <ul className="bg-white mt-2 border">
          {options.map((option) => (
            <li className="p-2 text-sm hover:bg-sky-600 hover:text-white">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const App = () => {
    const cities = ["London", "Manchester", "Birmingham", "Newcastle"];
    const skills = ["HTML", "CSS", "Javascript", "React"];
    const availability = ["Full-time", "Part-time", "Contract", "Available", ];
  
    return (
      <div className="flex justify-center gap-6">
        <Filter options={cities} label="Select City" />
        <Filter options={skills} label="Select Skills" />
        <Filter options={availability} label="Select Availability" />
      </div>
    );
  };

export default App;
