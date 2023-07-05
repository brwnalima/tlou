import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import './Navbar.css';
import { MdClose } from 'react-icons/md';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="https://www.pngmart.com/files/22/The-Last-Of-Us-Logo-PNG.png" />

      </div>

      <div className={`navbar-center ${isMenuOpen ? 'navbar-menu-open' : ''}`}>
        <a href="#" onClick={closeMenu}>HOME</a>
        <a href="#" onClick={closeMenu}>ABOUT</a>
        <a href="#game" onClick={closeMenu}>GAME</a>
        <a href="#serie" onClick={closeMenu}>SERIES</a>
      </div>

      <div className="navbar-right"><img src="https://www.gran-turismo.com/gtsport/decal/8079479801260311040_1.png" /></div>
      <div className="navbar-toggle" onClick={toggleMenu}>

        { isMenuOpen ? <MdClose className='svg'/> : <FiMenu className='svg'/>}
        
      </div>
    </nav>
  );
};
export default Navbar