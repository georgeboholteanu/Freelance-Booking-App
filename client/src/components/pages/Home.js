import React from 'react';
import Users from '../Users';
import Banner from '../Banner';
import Dropdown from '../Filter';

function Home () {
  const cities = ["London", "Manchester", "Birmingham", "Newcastle"];
  const skills = ["HTML", "CSS", "Javascript", "React"];
  const availability = ["Full-time", "Part-time", "Contract", "Available"];
  
  return (
    <div>
      <Banner />
      <br />
      <div className="flex justify-center gap-6">
        <Dropdown options={cities} label="Select City" />
        <Dropdown options={skills} label="Select Skills" />
        <Dropdown options={availability} label="Select Availability" />
      </div>
      <Users />        
    </div>
  );
}

export default Home;
