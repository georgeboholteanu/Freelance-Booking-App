import React, { useState } from "react";
import axios from "axios";

function FilterData() {
  const skills = [
    "HTML",
    "CSS",
    "React",
    "Javascript",
    "NodeJS",
    "ExpressJS",
    "Tailwind",
    "Bootstrap",
    "Typescript",
    "Python",
    "C++",
    "CSharp",
    "MongoDB",
    "Django",
    "Flask",
    "ASP.NET",
    "Laravel",
    "Ruby",
    "SQL",
  ];

  const filterByTag = async (tag) => {
    const { data } = await axios.get("/users/:skill");
  };

  return (
    <div className="relative inline-block text-left m-10">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          SKILLS
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
          </svg>
        </button>
      </div>

      <div
        className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div className="py-1" role="none">
          {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
          {skills.map((skill, index) => (
            <button
              key={index}
            //   onClick={filterByTag(skill)}
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id={`menu-item- + ${index}`}
            >
              {skill}
            </button>
          ))}

          {/* <form method="POST" action="#" role="none">
            <button
                type="submit"
                className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-3"
            >
                Sign out
            </button>
            </form> */}
        </div>
      </div>
    </div>
  );
}

export default FilterData;
