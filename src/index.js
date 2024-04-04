import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { Navbar, Navbutton } from './components/Navbarsection';
import App from './App'

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <>
      <BrowserRouter>
         <App />
         
         <Routes>
            
            {/* <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route> */}
         </Routes>
      </BrowserRouter>

   </>

);


