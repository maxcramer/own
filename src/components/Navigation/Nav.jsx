import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import logo from '../../Images/OWN_logo.png';


// import OWN_logo from '../../Images/OWN_logo';


function Nav() {
  return (
    <nav>
      <img id="nav_logo" src={logo} alt="logo" />
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/news">
          <li>News</li>
        </Link>
        <Link to="/news2">
          <li>News 2</li>
        </Link>
        <Link to="/proriders">
          <li>Pro Riders</li>
        </Link>
        <Link to="/boardcare">
          <li>Board Care</li>
        </Link>
        <Link to="/ridingtips">
          <li>Riding Tips</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
