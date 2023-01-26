import './App.css';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Distance from './Components/Distance';
import Temperature from './Components/Temperature';
import Circle from './Components/Circles';
import Pressure from './Components/Pressure';
import Fluid from './Components/Fluid';
import Triangle from './Components/Triangle';
import Rectangle from './Components/Rectangle';
import Speed from './Components/Speed';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
  
  return (
    // <motion.div
    //       initial={{ opacity: 0 }} 
    //       animate={{ opacity: 1 }}
    //       exit={{opacity: 0}}
    //       transition={{ duration: 0.5 }} className='parent' style={{ color: "black"}}
    //     > 
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/distance" element={<Distance />} />
          <Route path="/temperature" element={<Temperature />} />
          <Route path="circle" element={<Circle />} />
          <Route path="pressure" element={<Pressure />} />
          <Route path="fluid" element={<Fluid />} />
          <Route path="triangle" element={<Triangle />} />
          <Route path="rectangle" element={<Rectangle />} />
          <Route path="speed" element={<Speed />} />
        </Route>
      </Routes>
    </Router>
    // </motion.div>
  );
  
}

export default App;
