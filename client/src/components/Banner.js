import React from "react";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Banner() {

  function scrollToSection() {
    const section = document.getElementById("gallery");
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    });
  }

  return (
    <section class="bg-gray-50">
  <div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mx-auto max-w-xl text-center">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
        Support Freelancers
        <strong class="font-extrabold text-red-700 sm:block">
          Increase productivity
        </strong>
      </h1>

      <p class="mt-4 sm:text-xl sm:leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
    <a
      class="block w-full rounded px-12 py-3 text-sm font-medium text-white bg-red-600 shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
      href="./"
    >
      Hire now!
      <NavLink
          to="./"
          className=""
          activeClassName="border-b-2 font-semibold text-gray-800"
      > 
      </NavLink>
    </a>
        <a
          class="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="./about"
          
        >About
          <NavLink
              to="./about"
              className=""
              activeClassName="border-b-2 font-semibold text-gray-800"
            > 
              
          </NavLink>

        </a>
      </div>
    </div>
  </div>
</section>

  );
}

export default Banner;
