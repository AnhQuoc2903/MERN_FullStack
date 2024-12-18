import React from 'react';
import './FooterComponent.css'

const FooterComponent = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-column">
        <h4>CompanyName</h4>
        <p>Your trusted partner in delivering quality and innovation.</p>
      </div>

      {/* Cột 2: Quick Links */}
      <div className="footer-column">
        <h4>Quick Links</h4>
        <ul className="footer-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Cột 3: Contact Info */}
      <div className="footer-column">
        <h4>Contact Us</h4>
        <p>123 Business Avenue</p>
        <p>City, State, ZIP</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@company.com</p>
      </div>

      <div className="footer-column">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} CompanyName. All Rights Reserved.</p>
    </div>
  </footer>
  )
}

export default FooterComponent