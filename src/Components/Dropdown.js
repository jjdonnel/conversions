import React from "react";
import { useState, useRef, useEffect } from "react";
import Arrow from "./Arrow";
// import "./Navbar.css";
import { Link } from "react-router-dom";
// import { options } from "../items";

function Dropdown({items, setMenuOpen, setSelected}) {
  const [isToggled, setIsToggled] = useState(false);
  const ref = useRef();
  const test = ()=> {
    console.log(isToggled);
  }

  const toggleSubMenu = () => {
    setIsToggled(!isToggled);
    // console.log(isToggled);
  };

  const closeSubMenu = () => {
    isToggled && setIsToggled(false);
    console.log(isToggled);
  };

  const closeSlideMenu = () => {
    setMenuOpen(false);
  }

  const changeTitle = () => {
    items.title == 'Home' ? setSelected('Conversions Etc') : setSelected(items.title);
  }
  // useEffect( () => { setHeight(document.documentElement.clientHeight) });
  // useEffect(()=> {
  //   const setClick = (event) => {
  //     if (
  //       isToggled &&
  //       titleRef.current &&
  //       titleRef.current.contains(event.target)
  //     ) {
  //       setIsToggled(false);
  //     };
      
  //   }
  //   document.addEventListener('mouseup', setClick);
  //   return ()=> {
  //     document.removeEventListener('mouseup', setClick);
  //   }
  // },[isToggled]);
  
  // const setClick = (event) => {
  //     if (
  //       isToggled &&
  //       titleRef.current &&
  //       titleRef.current.contains(event.target)
  //     ) {
  //       setIsToggled(false);
  //     };
  //   };

  const onMouseEnter = () => {
    setIsToggled(true);
  };

  const onMouseLeave = () => {
    setIsToggled(false);
  };

    useEffect(() => {
    const itemHandler = (event) => {
      if (
        isToggled &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setIsToggled(false);
      }
    };

    document.addEventListener('mousedown', itemHandler);
    // document.addEventListener('touchstart', itemHandler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', itemHandler);
      // document.removeEventListener('touchstart', itemHandler);
    };

  }, [isToggled]);

  return (


          // !items.children  ? 
          //   <li>
          //     <div>
          //       <Link to={items.path}>{items.title}</Link>
          //     </div>
          //   </li>
          // :


<li className="item" ref={ref} 
onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
>
    {!items.children ? 
    (
      <div className="title"  onClick={()=>{closeSlideMenu(); changeTitle(); closeSubMenu()}} >
        <Link to={items.path} >{items.title}</Link>
      </div>
    ) :
    (
      <div className="drop">
        <div className="title"
         onClick={toggleSubMenu} 
         >
          <span>{items.title}</span>
          <div className="arrow">
            <Arrow className={isToggled ? "arrow" : "arrow up"} width={15} />
          </div>
        </div>
        <ul className={isToggled ? "submenu" : "submenu closed"}>
          {items.children.map((child, index) => (
            <Dropdown items={child} key={index} setMenuOpen={setMenuOpen} setSelected={setSelected} setIsToggled={setIsToggled} />
          ))}
        </ul>
      </div>
    )}
  </li>
  );
}

export default Dropdown;