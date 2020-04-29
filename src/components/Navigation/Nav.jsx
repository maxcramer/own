import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h2>Logo</h2>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/proriders">
          <li>Pro Riders</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
