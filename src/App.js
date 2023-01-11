import './App.css';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Length from './Components/Length';
import Temperature from './Components/Temperature';
import Circle from './Components/Circles';
import Pressure from './Components/Pressure';
import Fluid from './Components/Fluid';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
  
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/length" element={<Length />} />
          <Route path="/temperature" element={<Temperature />} />
          <Route path="circle" element={<Circle />} />
          <Route path="pressure" element={<Pressure />} />
          <Route path="fluid" element={<Fluid />} />
        </Route>
      </Routes>
    </Router>
  );
  
}

export default App;
