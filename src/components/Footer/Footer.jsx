import React from 'react';
import {Link} from 'react-router-dom';

import IG from '../../Images/Instagram-Icon.png';
import './Footer.css';

const Footer = props => (
  <div id="footer-container">
    <div id="about-quick-links">
      <div id="about-container">
        <h4>About</h4>
      </div>
      <div id="quick-links">
        <h4>Quick Links</h4>
        <ul>
          <li>link</li>
          <li>link</li>
        </ul>
      </div>
    </div>
    <div id="socials-copyright">
      <p>Copyright Ⓒ All Rights Reserved By Onewheel News</p>
      <div id="socials">
        <a href="https://www.instagram.com/onewheelnews/?hl=en">
          <img id="ig-logo" src={IG} alt="" />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;