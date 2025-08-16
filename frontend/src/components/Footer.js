import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2024 MERN Notes App. Built by Chanderbhan</p>
        <div className="footer-links">
          <span>MongoDB • Express.js • React • Node.js</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;