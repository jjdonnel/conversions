import { useState, useRef } from 'react';
import { Outlet, Link } from "react-router-dom";
import './navbar.css';
import Arrow from './Arrow';
// import { options } from "../options";
import { geoOptions, metOptions } from '../options';

function Layout(
  // {selected, setSelected}
  )  {
  const [ selected, setSelected ] = useState('Home');
  const [ isToggled, setIsToggled ] = useState(false);
  const [ geometry, setGeometry ] = useState(false);
  const [ meteorology, setMeteorology ] = useState(false);
  const parentRef = useRef();
    
  return(
    <>
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
                <div className="title" onClick={(e)=> {setGeometry(!geometry)}}>
                    <span>Geometry</span>
                    <div className='arrow'>
                        <Arrow className={geometry ? 'arrow_icon' : 'arrow_icon rotate'} width={15}/>
                    </div>
                </div>
                
                <ul ref={parentRef} className="submenu" style={geometry ? 
                    {height: parentRef.current.scrollHeight + 'px', opacity: '1', transition: 'all 0.5s ease'} :
                    {height: '0px', opacity: '0', transition: '0.5s ease'}}>
                        { geoOptions.map((option, index) => {
                            return (
                                <li key={index} onClick={
                                  (e) => { setSelected(option.title); setIsToggled(!isToggled); setGeometry(false);setMeteorology(false)}}>
                                    <Link to={option.path}>{option.title}</Link>
                                </li>
                            )
                        })}
                </ul>
              </li>
              <li className="drop">
                <div className="title" onClick={(e)=> {setMeteorology(!meteorology)}}>
                    <span>Meteorology</span>
                    <div className='arrow'>
                        <Arrow className={meteorology ? 'arrow_icon' : 'arrow_icon rotate'} width={15}/>
                    </div>
                </div>
                
                <ul ref={parentRef} className="submenu" style={meteorology ? 
                    {height: parentRef.current.scrollHeight + 'px', transition: '0.5s ease'} :
                    {height: '0px', transition: '0.5s ease'}}>
                      { metOptions.map((option, index) => {
                            return (
                                <li key={index} onClick={
                                  (e) => { setSelected(option.title); setIsToggled(!isToggled); setMeteorology(false); setGeometry(false)}}>
                                    <Link to={option.path}>{option.title}</Link>
                                </li>
                            )
                        })}
                </ul>
              </li>
            </ul>
          </nav>
      </div>
      {/* <div className="header" >
          <div className='parent'>
            <h2 className='name'>Converters</h2>
            <h3> {selected} </h3>
            <div className='arrow' onClick={(e) => setIsToggled(!isToggled)}>
              <Arrow className={isToggled ? 'arrow_icon' : 'arrow_icon rotate'} width={15} />
            </div>

            <nav ref={parentRef} style={ isToggled ? 
              {height: parentRef.current.scrollHeight + 'px', transition: '0.5s ease'} : 
              {height: '0px', transition: '0.5s ease'} }>
              {options.map((option, index) => {
                return (
                  <div className='dropdown-item' key={index} onClick={
                    (e) => { setSelected(option.title); setIsToggled(!isToggled) }}>
                    <Link to={ option.path }> { option.title }</Link>
                  </div>
                );
                })} 
            </nav>
            
          </div>
      </div> */}
      
      <Outlet />
    </>

  )}

export default Layout;