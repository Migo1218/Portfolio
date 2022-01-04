import React from "react";
import Aboutme from "./components/Aboutme";
import Contactme from "./components/Contactme";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Prueba from "./components/Prueba";
import Skills from "./components/Skills";
import "./index.css";

const App = () => {
  return (
   <>
   <Navbar/>
   <Prueba/>
   {/* <Aboutme/> */}
   <Skills/>
   <Projects/>
   <Contactme/>
   <Footer/>
   </>
  );
};

export default App;
