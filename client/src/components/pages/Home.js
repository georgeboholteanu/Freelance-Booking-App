import React from "react";
import Users from "../Users";
import Banner from "../Banner";
// import Dropdown from "../Filter";
import FilterData from "../Filter2";

function Home() {

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
    </div>
  );
}

export default Home;
