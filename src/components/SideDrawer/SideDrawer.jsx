import React from 'react';
import { Link } from 'react-router-dom';

import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open';
    }

  return (
  <nav className={drawerClasses}>
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
    </ul>
  </nav>
  )
};

export default sideDrawer;