import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './component/About';
import Work from './component/Work';
import Gallery from './component/Gallery';
import Reviews from './component/Reviews';
import Contact from './component/Contacts';
import NavBar from "./component/NavBar";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<About/>}></Route>
        <Route path="/work" element={<Work/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/reviews" element={<Reviews/>}></Route>
      </Routes>
      </BrowserRouter>
     <Contact/>
    </div>
  );
}

export default App;
