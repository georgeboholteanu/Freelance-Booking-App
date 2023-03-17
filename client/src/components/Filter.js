import React, { useState } from 'react';
import { BiChevronDown } from "react-icons/bi";

const Filter = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="searchBar">
      <div className="w-72 font-medium h-80 mt-20 z-10">
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
        <a
          role="button"
          className="inline-block bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
          href='home'
        >
          Search
        </a>
    </div>
  );
};

export default Filter;
