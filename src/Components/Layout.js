import { useState, useRef } from 'react';
import { Outlet, Link } from "react-router-dom";
import './Dropdown.css';
import Arrow from './Arrow';
import { options } from "../options";

function Layout(
  // {selected, setSelected}
  )  {
  const [ selected, setSelected ] = useState('Home');
  const [ isToggled, setIsToggled ] = useState(false);
  const parentRef = useRef();
    
  return(
    <>
      <div className="header" >
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
      </div>
      
      {/* <nav ref={parentRef} style={ isToggled ? 
        {height: parentRef.current.scrollHeight + 'px', transition: '0.5s ease'} : 
        {height: '0px', transition: '0.5s ease'} }>
        {options.map((option, index) => {
          return (
            <div key={index} onClick={
              (e) => { setSelected(option.title); setIsToggled(!isToggled) }}>
              <Link to={ option.path }> { option.title }</Link>
            </div>
          );
          })} 
      </nav> */}
      <Outlet />
    </>

  )}

export default Layout;