import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/pages/Home";
import NavTabs from './components/NavTabs';
import About from "./components/pages/About";
import AddUser from "./components/pages/AddUser";
import Contact from "./components/pages/Contact";
import BookUser from "./components/pages/BookUser";
import Footer from "./components/Footer";

function App() {
  
  return (
    <Router>
      <div>
        <NavTabs />

        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home /> } />
          <Route path="about" element={<About />} />
          <Route path="adduser" element={<AddUser />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/form/:userId" element={<BookUser />} />
          <Route path="contact/*" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
