import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li><a href="./components/AboutPage.jsx">ABOUT</a></li>
          <li><a href="#teams">TEAMS</a></li>
          <li><a href="#members">MEMBERS</a></li>
          <li><a href="#donate">DONATE</a></li>
          <li><a href="#sponsors">SPONSORS</a></li>
          <li><a href="#apply">APPLY</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
