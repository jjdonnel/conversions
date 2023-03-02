
// Menu Button 

const MenuBtn = ({selected, menuOpen, setMenuOpen}) => {

    return (
        <div className="menu" onClick={() => { setMenuOpen(!menuOpen); }}>

{/* Large Screen Dynamic Title */}

          <div className="dynamic">
            <span>{selected}</span>
          </div>

{/* Small Screen Hamburger Menu Button */}

          <div className="hamburger">
            <span className={menuOpen ? "line line1-open" : "line line1-closed"}></span>
            <span className={menuOpen ? "line line2-open" : "line line2-closed"}></span>
            <span className={menuOpen ? "line line3-open" : "line line3-closed"}></span>
          </div>
        </div>
    );
}

export default MenuBtn;