
import React from "react";
import { useState, useRef, useEffect } from "react";
import Arrow from "./Arrow";
import { Link } from "react-router-dom";

// Menu Items

const Dropdown = ({ items, setMenuOpen, setSelected }) => {

  // State and Reference Variables

  const [isToggled, setIsToggled] = useState(false);
  const ref = useRef();

  // Menu Functions

  const toggleSubMenu = () => {
   setIsToggled(!isToggled);
  };

  const closeSubMenu = () => {
    isToggled && setIsToggled(false);
  };

  const closeSlideMenu = () => {
    setMenuOpen(false);
  };

  const changeTitle = () => {
    items.title === "Home"
      ? setSelected("Conversions Etc")
      : setSelected(items.title);
  };

  // Event Handlers

  const onMouseEnter = (e) => {
    e.preventDefault();
    setIsToggled(true);
  };

  const onMouseLeave = (e) => {
    e.preventDefault();
    setIsToggled(false);
  };

  // Side Effect

  useEffect(() => {
    const itemHandler = (event) => {
      if (isToggled && ref.current && !ref.current.contains(event.target)) {
        setIsToggled(false);
      }
    };

    document.addEventListener("mousedown", itemHandler);
    document.addEventListener('touchend', itemHandler);
    return () => {

      // Cleanup the event listener

      document.removeEventListener("mousedown", itemHandler);
      document.removeEventListener('touchend', itemHandler);
    };
  }, [isToggled]);

  return (
    <li className="item" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>

      {!items.children ? (

  // Items Without Submenus

        <div className="title" onClick={() => { closeSlideMenu(); changeTitle(); closeSubMenu(); }} >
          <Link to={items.path}>{items.title}</Link>
        </div>
      ) 
      
      : 
      
      (

  // Items With Submenus

        <div className="drop">
          <div className="title" onTouchEnd={toggleSubMenu}>
            <span>{items.title}</span>
            <div className="arrow">
              <Arrow className={isToggled ? "arrow" : "arrow up"} width={15} />
            </div>
          </div>
          <ul className={isToggled ? "submenu" : "submenu closed"}>
            {items.children.map((child, index) => (
              <Dropdown items={child} key={index} setMenuOpen={setMenuOpen} setSelected={setSelected} />
            ))}
          </ul>
        </div>
        
      )}
    </li>
  );
}

export default Dropdown;
