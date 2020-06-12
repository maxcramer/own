import React from 'react';

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
        <ul id="quick-links-list">
          <li>link</li>
          <li>link</li>
        </ul>
      </div>
      <div id="socials">
        <h4>Social Links</h4>
        <a href="https://www.instagram.com/onewheelnews/?hl=en">
          <img id="ig-logo" src={IG} alt="" />
        </a>
      </div>
    </div>
    <div id="socials-copyright">
      <p>
        Copyright Ⓒ 2020 All Rights Reserved By Onewheel News | No affiliation
        with Future Motion
      </p>
    </div>
  </div>
);

export default Footer;