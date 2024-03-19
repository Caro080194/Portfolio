import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";

//components
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Footer from "./Footer";

//helps

const App = () => {

    return (
        <>
        <Navbar/>
        <Hero id="home" />
      <AboutMe id="about" />
      <Projects id="projects" />
      <Contacts id="contacts" />
      <Footer />
        </>
    )
};

export default App;