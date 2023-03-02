
import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./navbar.css";
import { options } from "../items";
import Dropdown from "./Dropdown";
import MenuBtn from "./MenuBtn";

const Layout = ()=> {

// State Variables 

  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState("Conversions Etc");

  return (
    
// Top Level Menu 

    <div className="App">
      <div className="nav">
        <MenuBtn selected={selected} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <ul className={menuOpen ? "top top-open" : "top top-closed"}>
          {(
            options.map((option, index) => (
              <Dropdown items={option} key={index} setMenuOpen={setMenuOpen} setSelected={setSelected} />
            ))
          )}
        </ul>
      </div>

{/* Component Body      */}

        <Outlet />
        
    </div>
  );
}

export default Layout;
