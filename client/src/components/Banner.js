import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  function handleHireNowClick() {
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Support Freelancers
            <strong className="font-extrabold text-red-600 sm:block">
              Increase productivity
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl sm:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              className="block w-full rounded px-12 py-3 text-sm font-medium text-white bg-red-600 shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              onClick={handleHireNowClick}
            >
              Hire now!
            </button>

            <NavLink
              to="./about"
              className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
