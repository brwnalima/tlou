import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import './Navbar.css';
import { Slide } from "react-awesome-reveal";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let screenWidth = window.innerWidth;
  let direction;

  if (screenWidth < 768) {
    direction = "right";
  } else {
    direction = "up";
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="https://www.pngmart.com/files/22/The-Last-Of-Us-Logo-PNG.png" />

      </div>
      <Slide direction={direction}>
        <div className={`navbar-center ${isMenuOpen ? 'navbar-menu-open' : ''}`}>
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#game">GAME</a>
          <a href="#serie">SERIES</a>
        </div>
      </Slide>
      <div className="navbar-right"><img src="https://www.gran-turismo.com/gtsport/decal/8079479801260311040_1.png" /></div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <FiMenu />
      </div>
    </nav>
  );
};
export default Navbar