import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav";
import About from "./info/About";
import Skills from "./skills/Skills";
import Projects from "./project/Projects";
import Contact from "./contact/Contact";
import "./css/app.css";
import Background from "./background/Background";
import PlayerInfo from "./playerInfo/PlayerInfo";

const App = () => {
  return (
    // Router or routes navigation
    <Router>
      <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <PlayerInfo />
    </Router>
  );
};

export default App;
