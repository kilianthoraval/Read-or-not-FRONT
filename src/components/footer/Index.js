import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
          <Link to="/Mentionslegales" className="footer-content">
            Mentions Légales
          </Link>
          <Link to="/Contact" className="footer-content">
            Contact
          </Link>
          <Link to="/About" className="footer-content">
            A propos
          </Link>
      </div>
    </div>
  );
}

export default Footer;
