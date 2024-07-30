// src/components/Header.jsx
//import React from 'react';

const Header = ({ setPage }) => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><button onClick={() => setPage('about')}>About</button></li>
          <li><button onClick={() => setPage('teams')}>Teams</button></li>
          <li><button onClick={() => setPage('members')}>Members</button></li>
          <li><button onClick={() => setPage('donate')}>Donate</button></li>
          <li><button onClick={() => setPage('sponsors')}>Sponsors</button></li>
          <li><button onClick={() => setPage('apply')}>Apply</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
