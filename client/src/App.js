import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Nav } from "./components/Nav";
// import { Banner } from "./components/Banner";

function App() {
  const [backendData, setbackendData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("/api");
    console.log(JSON.stringify(data.users));
    setbackendData(data.users);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="gallery">
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-10">
        {typeof backendData.users === "undefined" ? (
          <p>Loading...</p>
        ) : (
          (backendData.users).map((user) => <p key={user.id.value}>{user.email}</p>)
        )}
      </div>
    </div>
  );
}

export default App;
