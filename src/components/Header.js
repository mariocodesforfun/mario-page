import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-fixed-top navbar-inverse">
      <div className="menu-container">
        <div className="menu-button" onClick={toggleMenu}>
          <span>&#9776;</span>
        </div>
        <ul className={`header-nav ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>01 : Home</Link></li>
          <li className="nav-separator">|</li>
          <li><Link to="/resume" onClick={closeMenu}>02 : Resume</Link></li>
          <li className="nav-separator">|</li>
          <li><Link to="/blog" onClick={closeMenu}>03 : Blog</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
