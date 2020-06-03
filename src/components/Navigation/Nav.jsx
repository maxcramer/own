import React from 'react';
// import '../../App.css';
import {Link} from 'react-router-dom';
import logo from '../../Images/OWN_logo.png';
import './menu.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

// import OWN_logo from '../../Images/OWN_logo';


// function Nav() {
//   return (
//     <nav>
//       <Link className="nav_logo_link" to="/">
//         <img id="nav_logo" src={logo} alt="logo" />
//       </Link>
//       <ul className="nav-links">
//         <Link to="/">
//           <li>Home</li>
//         </Link>
//         <Link to="/postlist">
//           <li>All Articles</li>
//         </Link>
//         <Link to="/prolist">
//           <li>Pro Rider Interviews</li>
//         </Link>
//         <Link to="/boardcare">
//           <li>Board Care</li>
//         </Link>
//         <Link to="/ridingtips">
//           <li>Riding Tips</li>
//         </Link>
//       </ul>
//     </nav>
//   );
// }

const Nav = props => (
  <header className="navbar">
    <nav className="navbar_navigation">
      <div className="navbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="navbar_logo"><a href="/">The Logo</a></div>
      <div className="spacer"></div>
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
        </ul>
      </div>
    </nav>
  </header>
);

export default Nav;
