import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";


const App = () => {
    return (
        <>
        <Navbar/>
        <Hero/>
        <AboutMe/>
        <Projects/>
        <Contact/>
        <Footer/>
        </>
    )
};

export default App;