import React from "react";
import "./App.css";
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";
import Main from "./pages/Main.js";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route>
          <Main  />
        </Route>
        <Route>
          <Project />
        </Route>
        <Route>
          <Contact />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
