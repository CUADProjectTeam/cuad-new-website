import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom'

const Header = ({ setPage }) => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><NavLink activeclassname="current" to={'/'}>About</NavLink></li>
          <li><NavLink activeclassname="current" to={'/teams'}>Teams</NavLink></li>
          <li><NavLink activeclassname="current" to={'/drones'}>Drones</NavLink></li>
          {/* <li><NavLink activeclassname="current" to={'/members'}>Members</NavLink></li> */}
          <li><NavLink activeclassname="current" to={'/donate'}>Donate</NavLink></li>
          <li><NavLink activeclassname="current" to={'/sponsors'}>Sponsors</NavLink></li>
          <li><NavLink activeclassname="current" to={'/apply'}>Apply</NavLink></li>
        </ul>
      </nav>
    </header >
  );
};

export default Header;
