import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from "axios";
import Home from "./components/pages/Home";
import NavTabs from './components/NavTabs';
import About from "./components/pages/About"
import AddUser from "./components/pages/AddUser"
import Contact from "./components/pages/Contact"


// import { BrowserRouter as Router, Route, Routes, Navlink  } from 'react-router-dom';
// import { Nav } from "./components/Nav";
// import { Navlink } from "./components/Banner";

function App() {
  
  return (
    <Router>
      <div>
      <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="adduser" element={<AddUser />} />
          {/* Define a route that will have descendant routes */}
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
