import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Nav } from "./components/Nav";
// import { Banner } from "./components/Banner";

function App() {
  const [backendData, setbackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setbackendData(data);
      });
  }, []); //it runs only the first render of the component

  return (
    <div>
      {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  );
}

export default App;
