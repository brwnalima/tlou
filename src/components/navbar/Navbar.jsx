import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="https://www.pngmart.com/files/22/The-Last-Of-Us-Logo-PNG.png"/>

      </div>
      <div className={`navbar-center ${isMenuOpen ? 'navbar-menu-open' : ''}`}>
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">GAME</a>
        <a href="#">SERIES</a>
      </div>
      <div className="navbar-right"><img src="https://www.gran-turismo.com/gtsport/decal/8079479801260311040_1.png" /></div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <FiMenu />
      </div>
    </nav>
  );
};
export default Navbar