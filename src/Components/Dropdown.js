import React from "react";
import { useState, useRef, useEffect } from "react";
import Arrow from "./Arrow";
import { Link } from "react-router-dom";
function Dropdown({ items, setMenuOpen, setSelected }) {
  const [isToggled, setIsToggled] = useState(false);
  const ref = useRef();
  console.log(isToggled);

  const toggleSubMenu = () => {
   setIsToggled(!isToggled);
  //  console.log(isToggled);
  };

  const closeSubMenu = () => {
    isToggled && setIsToggled(false);
    // console.log(isToggled);
  };

  const closeSlideMenu = () => {
    setMenuOpen(false);
  };

  const changeTitle = () => {
    items.title === "Home"
      ? setSelected("Conversions Etc")
      : setSelected(items.title);
  };

  const onMouseEnter = (e) => {
    e.preventDefault();
    setIsToggled(true);
    // console.log(isToggled);
  };

  const onMouseLeave = (e) => {
    e.preventDefault();
    setIsToggled(false);
    // console.log(isToggled);
  };

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

//   useEffect(()=> {
//   const menuHandler = (event) => {
//     if (items.children && ref.current && ref.current.contains(event.target)) {
//       setIsToggled(!isToggled);
//     }
//   };
//   document.addEventListener("mousedown", menuHandler);
//     document.addEventListener('touchend', menuHandler);
//     return () => {
//       // Cleanup the event listener
//       document.removeEventListener("mousedown", menuHandler);
//       document.removeEventListener('touchend', menuHandler);
//     };

// }, [isToggled]);

  return (
    <li
      className="item"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {!items.children ? (
        <div
          className="title"
          onClick={() => {
            closeSlideMenu();
            changeTitle();
            closeSubMenu();
            // console.log(isToggled);
          }}
        >
          <Link to={items.path}>{items.title}</Link>
        </div>
      ) : (
        <div className="drop">
          <div className="title" 
          onTouchEnd={toggleSubMenu}
          >
            <span>{items.title}</span>
            <div className="arrow">
              <Arrow className={isToggled ? "arrow" : "arrow up"} width={15} />
            </div>
          </div>
          <ul className={isToggled ? "submenu" : "submenu closed"}>
            {items.children.map((child, index) => (
              <Dropdown
                items={child}
                key={index}
                setMenuOpen={setMenuOpen}
                setSelected={setSelected}
              />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

export default Dropdown;
