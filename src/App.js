import logo from './logo.svg';
import './App.css';
import React from "react";
import About from "./components/About";
import Aboutcopy from './components/Aboutcopy';
import Contact from "./components/Contact";
import { Navbar } from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Navbar2 } from './components/Navbar2';
import Particles from "./components/Particles";
import { ModalProvider } from "react-modal-hook";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <ModalProvider>
      <div className="bg-gray-50">
        {/* <Navbar/> */}
        <Navbar2 />
        <About />
        {/* <div className='bg-gray-900 h-36'></div> */}
        <Projects />

        <Skills />

      </div>
    </ModalProvider>
  );
}

export default App;
