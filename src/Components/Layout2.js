import DropItems from "./dropItems";
import { useState, useRef } from 'react';
import { Outlet, Link } from "react-router-dom";
import './navbar.css';
import Arrow from './Arrow';
import { options } from '../options2';

function Layout()  {
    const [ selected, setSelected ] = useState('Home');
    const [ isToggled, setIsToggled ] = useState(false);
    const [ geometry, setGeometry ] = useState(false);
    const [ meteorology, setMeteorology ] = useState(false);
    const [shapes, setShapes] = useState(false);
    const parentRef = useRef();
    const childRef = useRef();
      
    return(
        <div className="App">
            <nav className="nav">
              <div className="menu" onClick={(e)=> {setIsToggled(!isToggled)}}>
                <div className='dynamic'>
                  <span>{ selected }</span>
                </div>
                <div className='hamburger'>
                  <span className={ isToggled ? "line line1-open" : "line line1-closed" }></span>
                  <span className={ isToggled ? "line line2-open" : "line line2-closed" }></span>
                  <span className={ isToggled ? "line line3-open" : "line line3-closed" }></span>
                </div>
              </div>
              <div className={isToggled ? 'top top-open' : 'top top-closed'}>
              <div className="drop" onClick={
                (e) => { setIsToggled(!isToggled) }}>
                <Link to="/">Home</Link>
              </div>
              
              {options.map((option, index) => 
                <DropItems option={option} key={index} />
                )
              }
                </div>
            </nav>
  
        <Outlet />
      </div> 
  
    )}
  
  export default Layout;