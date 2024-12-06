import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle } from "react-icons/fa"; // Import the icons
import "./Footer.css"; // Add styles in Footer.css

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-address">
          <p>Dezykode IT Solutions Pvt Ltd
City Vista, A Wing, 08, Second Floor, Fountain Road, Ashoka Nagar, Kharadi, Pune, Maharashtra, India

9730822219, dezykode@gmail.com</p>
        </div>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <FaGoogle />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
