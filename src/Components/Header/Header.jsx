import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        <nav className='navbar'>
          <div className={`burger-menu`} onClick={toggleMenu}>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          </div>
          <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
            <li className='link-1'>
              <Link to="/Configuration" className='links'>Configuration</Link>
            </li>
            <li className='link-2'>
              <Link to="/Email" className='links'>Email</Link>
            </li>
            <li className='link-3'>
              <Link to="/Matrix" className='links'>Matrix</Link>
            </li>
            <li className='link-4'>
              <Link to="/Pacman" className='links'>Pacman</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
