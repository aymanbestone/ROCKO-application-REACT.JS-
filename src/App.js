import React from "react";
import Nav from "./component/nav";
import "./App.css";
import Contact from "./component/contact";
import Suppliers from "./component/suppliers";
import Home from "./component/home";
import Careers from "./component/careers";
import Kitcommunication from "./component/kitCommunication";
import GrandeEntreprise from "./component/grande-entreprise";
import Press from "./component/press";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <Contact />
            </div>
          }
        />
        <Route path="/suppliers" element={ <div>
              <Suppliers />
              <Contact />
            </div>} />
        <Route path="/grande-entreprise" element={ <div>
              <GrandeEntreprise />
              <Contact />
            </div>} />
        <Route path="/kitcommunication" element={ <div>
              <Kitcommunication />
              <Contact />
            </div>} />
        <Route path="/press" element={ <div>
              <Press />
              <Contact />
            </div>} />
        <Route path="/careers" element={ <div>
              <Careers />
              <Contact />
            </div>} />
      </Routes>
    </Router>
  );
};

export default App;
