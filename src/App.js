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
import Weight from './Components/Weight';
import Time from './Components/Time';
import CloudBase from './Components/CloudBase';
import React from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="distance" element={<Distance />} />
          <Route path="temperature" element={<Temperature />} />
          <Route path="circle" element={<Circle />} />
          <Route path="pressure" element={<Pressure />} />
          <Route path="fluid" element={<Fluid />} />
          <Route path="triangle" element={<Triangle />} />
          <Route path="rectangle" element={<Rectangle />} />
          <Route path="speed" element={<Speed />} />
          <Route path="weight" element={<Weight />} />
          <Route path="time" element={<Time />} />
          <Route path="cloudBase" element={<CloudBase />} />
        </Route>
      </Routes>
    </Router>
  );
  
}

export default App;
