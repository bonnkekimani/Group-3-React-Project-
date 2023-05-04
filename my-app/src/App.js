import './App.css';
import Services from './component/Services';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './component/About';
import Work from './component/Work';
import Reviews from './component/Reviews';
import Contacts from './component/Contacts';
import NavBar from "./component/NavBar";
import SignUpform from './component/SignUp';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <NavBar/>
    
      <Routes>
        <Route path="/" element={<About/>}></Route>
        <Route path="/work" element={<Work/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/reviews" element={<Reviews/>}></Route>
        <Route path="/contacts" element={<Contacts/>}></Route>
        <Route path="/signupform" element={<SignUpform/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
