import React from 'react';
// import '../../App.css';
import {Link} from 'react-router-dom';
import logo from '../../Images/OWN_logo.png';
import './menu.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import SearchBar from '../SearchBar/SearchBar';

import SearchIcon from '../../Images/search-icon.png';


const Nav = props => (
  <header className="navbar">
    <nav className="navbar_navigation">
      <div className="navbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="navbar_logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="spacer"></div>
      {/* <img id="search-icon" src={SearchIcon} alt="" /> */}
      <div id="search-bar_mobile">
        <SearchBar />
      </div>
      <div className="navbar_navigation-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/postlist">
            <li>All Articles</li>
          </Link>
          <Link to="/prolist">
            <li>Pro Rider Interviews</li>
          </Link>
          <SearchBar />
        </ul>
      </div>
    </nav>
  </header>
);

export default Nav;
