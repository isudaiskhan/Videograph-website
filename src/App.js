import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Portfolio from './Pages/Portfolio/Portfolio';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Servicess from './Pages/Servicess/Servicess';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    
<>

   <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/services" element={<Servicess/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/" element={<Home/>} />
   </Routes>
    
   </>

  );
}

export default App;