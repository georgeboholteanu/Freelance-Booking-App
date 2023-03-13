import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import path from 'path';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Nav } from "./components/Nav";
// import { Banner } from "./components/Banner";

function App() {
  // const imagePath = path.join('/', 'images', 'example.jpg');

  const [backendData, setbackendData] = useState([{}]);

  const fetchData = async () => {
    const { data } = await axios.get("/api");
    console.log(data);
    setbackendData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="gallery">
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-10">
        <div>
          {backendData.length > 0 ? (
            <p>Loading...</p>
          ) : (
            backendData.users.map((user) => (
              <div key={user.id}>
                <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
                <p>{`Email: ${user.email}`}</p>
                <p>{`Phone: ${user.phone}`}</p>
                <img src={`${window.location.origin}${user.picture}`} alt="user avatar" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
