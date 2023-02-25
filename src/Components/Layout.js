import { useState, useRef } from 'react';
import { Outlet, Link } from "react-router-dom";
import './navbar.css';
import Arrow from './Arrow';
import { geoOptions, metOptions } from '../options';

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
                  <div className='arrow'>
                      <Arrow className={isToggled ? 'top_arrow_icon' : 'top_arrow_icon top_rotate'} width={15}/>
                  </div>
              </div>
              <div className='hamburger'>
                <span className={ isToggled ? "line line1-open" : "line line1-closed" }></span>
                <span className={ isToggled ? "line line2-open" : "line line2-closed" }></span>
                <span className={ isToggled ? "line line3-open" : "line line3-closed" }></span>
              </div>
            </div>
            <ul className={isToggled ? "top top-open" : "top top-closed"}>
              <li className="drop" onClick={(e)=> {setSelected('Home'); setIsToggled(!isToggled);setGeometry(false);setMeteorology(false)}}>
                <div className="title">
                  <Link to="/">Home</Link>
                </div>
              </li>
              <li className="drop">
                <div className="title" onClick={(e)=> {setGeometry(!geometry);setMeteorology(false);setShapes(false)}}>
                    <span>Geometry</span>
                    <div className='arrow'>
                        <Arrow className={geometry ? 'arrow_icon' : 'arrow_icon rotate'} width={15}/>
                    </div>
                </div>
                
                <ul ref={parentRef} className="submenu" style={geometry ? 
                  {height: 'auto', opacity: '1', transition: 'all 0.2s ease'} :
                  {height: '0px', opacity: '0', transition: '0.2s ease'}}>
                  { geoOptions.map((option, index) => {
                    if (option.children) {
                      return (
                        <li key={index} className="drop" >
                          <Link to={option.path}></Link>
                          <div className="title" onClick={(e) => { setShapes(!shapes); }}>
                            {option.title}
                            <div className="arrow">
                              <Arrow className={ shapes ? "arrow_icon" : "arrow_icon rotate" } width={15} />
                            </div>
                          </div>

                          <ul
                            ref={childRef}
                            className="childMenu"
                            style={
                              shapes
                                ? {
                                    height: "auto",
                                    opacity: 1,
                                    transition: "all 0.2s ease",
                                  }
                                : {
                                    height: "0px",
                                    opacity: 0,
                                    transition: "0.2s ease",
                                  }
                            }
                          >
                            {option.children.map((child, index) => {
                              return (
                                <li key={index} onClick={
                                (e) => { setSelected(option.title); setIsToggled(!isToggled); setMeteorology(false); setGeometry(false)}}>
                                  <Link to={child.path}>{child.title}</Link>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    } else {
                      return (
                        <li key={index} onClick={
                          (e) => { setSelected(option.title); setIsToggled(!isToggled); setMeteorology(false); setGeometry(false)}}>
                          <Link to={option.path}>{option.title}</Link>
                        </li>
                      );
                    }
                    }
                  )}
                </ul>
              </li>
              <li className="drop">
                <div className="title" onClick={(e)=> {setMeteorology(!meteorology);setGeometry(false);setShapes(false)}}>
                    <span>Meteorology</span>
                    <div className='arrow'>
                        <Arrow className={meteorology ? 'arrow_icon' : 'arrow_icon rotate'} width={15}/>
                    </div>
                </div>
                
                <ul ref={parentRef} className="submenu" style={meteorology ? 
                  {height: 'auto', opacity: '1', transition: '0.2s ease'} :
                  {height: '0px', opacity: '0', transition: '0.2s ease'}}>
                    { metOptions.map((option, index) => {
                      return (
                        <li key={index} onClick={
                          (e) => { setSelected(option.title); setIsToggled(!isToggled); setMeteorology(false); setGeometry(false)}}>
                            <Link to={option.path}>{option.title}</Link>
                        </li>
                      )
                    })
                    }
                </ul>
              </li>
            </ul>
          </nav>

      <Outlet />
    </div> 

  )}

export default Layout;