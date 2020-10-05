import React from "react";
import "./App.css";
import Header from "../src/Components/Header";
import Body from "./Components/Profile-body/Body.js";
import Project from "../src/Components/Project";
import Footer from "../src/Components/Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Project />
      <Footer />
    </div>
  );
}

export default App;