import React from "react";
import Users from "../Users";
import Banner from "../Banner";
// import Dropdown from "../Filter";
import FilterData from "../Filter2";

function Home() {
  // const cities = ["London", "Manchester", "Birmingham", "Newcastle"];
  // const skills = [
  //   "HTML",
  //   "CSS",
  //   "React",
  //   "Javascript",
  //   "NodeJS",
  //   "ExpressJS",
  //   "Tailwind",
  //   "Bootstrap",
  //   "Typescript",
  //   "Python",
  //   "C++",
  //   "CSharp",
  //   "MongoDB",
  //   "Django",
  //   "Flask",
  //   "ASP.NET",
  //   "Laravel",
  //   "Ruby",
  //   "SQL",
  // ];
  // const availability = ["Full-time", "Part-time", "Contract", "Available"];

  return (
    <div>
      <br />
      <Banner />
      <br />
      {/* <div className="flex justify-center gap-6">
        <Dropdown options={cities} label="Select City" />
        <Dropdown options={skills} label="Select Skills" />
        <Dropdown options={availability} label="Select Availability" />
      </div> */}
      <FilterData />
      <Users />
    </div>
  );
}

export default Home;
