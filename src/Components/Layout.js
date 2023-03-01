import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.css";
import { options, altOptions } from "../items";
import Dropdown from "./Dropdown";

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState("Conversions Etc");

  const closeSlideMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="App">
      <div className="nav">
        <div
          className="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <div className="dynamic">
            <span>{selected}</span>
          </div>
          <div className="hamburger">
            <span
              className={menuOpen ? "line line1-open" : "line line1-closed"}
            ></span>
            <span
              className={menuOpen ? "line line2-open" : "line line2-closed"}
            ></span>
            <span
              className={menuOpen ? "line line3-open" : "line line3-closed"}
            ></span>
          </div>
        </div>
        <ul className={menuOpen ? "top top-open" : "top top-closed"}>
          {(
          // window.innerWidth < 800 && altOptions ? (
          //   <li className="mobileList">
          //     {altOptions.map((option, index) => (
          //       <div
          //         className="mobile"
          //         style={
          //           option.title === "Home"
          //             ? {
          //                 margin: "1.5em",
          //                 fontSize: "1.25em",
          //                 fontWeight: "bold",
          //               }
          //             : { margin: "1.5em" }
          //         }
          //         key={index}
          //         onClick={closeSlideMenu}
          //       >
          //         <Link to={option.path}>{option.title}</Link>
          //       </div>
          //     ))}
          //   </li>
          // ) : (
          //   !window.innerWidth < 800 &&
            options.map((option, index) => (
              <Dropdown
                items={option}
                key={index}
                setMenuOpen={setMenuOpen}
                setSelected={setSelected}
              />
            ))
          )}
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
