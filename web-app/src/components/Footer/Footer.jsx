import React from 'react';
import {Link} from 'react-router-dom';

import IG from '../../Images/Instagram-Icon.png';
import './Footer.css';

const Footer = props => (
  <div id="footer-container">
    <div id="about-quick-links">
      <div id="about-container">
        <h4>About</h4>
        <p id="about-content">
          Onewheel News is all about bringing you the latest news from the
          Onewheel Community, from Pro Rider interviews, the latest & greatest
          releases from the amazing third party vendors, who's throwing the big
          tricks and whats going on in the community. We are in no way
          affiliated with future motion the makers of onewheel, though we think
          they make one of the best products ever!
        </p>
      </div>
      <div id="quick-links">
        <h4>Quick Links</h4>
        <ul id="quick-links-list">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/postlist">
            <li>Articles</li>
          </Link>
          <Link to="/prolist">
            <li>Interviews</li>
          </Link>
        </ul>
      </div>
    </div>
    <div id="socials-copyright">
      <p id="copyright">
        Copyright Ⓒ 2020 All Rights Reserved By Onewheel News | No affiliation
        with Future Motion
      </p>
      <div id="socials">
        {/* <h4>Social Links</h4> */}
        <a href="https://www.instagram.com/onewheelnews/?hl=en">
          <img id="ig-logo" src={IG} alt="" />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;