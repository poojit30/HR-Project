import React from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {

  const handleBackTop  = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <section>
          <h2>Company</h2>

          <ul>
            <li>
              <Link to='/about' className="footer-link">About Us</Link>
            </li>
            <li>
              <Link to='/Services' className="footer-link">Our Services</Link>
            </li>
            <li>
              <Link className="footer-link">Privacy Policy</Link>
            </li>
            <li>
              <Link className="footer-link">Affiliate Program</Link>
            </li>
          </ul>
          
        </section>

        <section>
          <h2>Get Help</h2>
          <ul>
            <li>
              <Link className="footer-link">FAQ</Link>
            </li>
            <li>
              <Link className="footer-link">Payment Options</Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>Follow Us</h2>
          
          <ul className="socials">
            <li>
              <Link to='https://facebook.com' target="_blank" className="social-link"><FontAwesomeIcon icon={faFacebook} className="icon-footer-hover" /></Link>
            </li>
            <li>
              <Link to='https://twitter.com' target="_blank" className="social-link"><FontAwesomeIcon icon={faTwitter} className="icon-footer-hover" /></Link>
            </li>
            <li>
              <Link to='https://github.com' target="_blank" className="social-link"><FontAwesomeIcon icon={faGithub} className="icon-footer-hover" /></Link>
            </li>
            <li>
              <Link to='https://linkedin.com' target="_blank" className="social-link"><FontAwesomeIcon icon={faLinkedin} className="icon-footer-hover" /></Link>
            </li>
          </ul>
        </section>
      </div>

      <div className="footer-line">
        <hr />
      </div>

      <div className="terms">
        <Link to='' className="terms-link">Terms of Use</Link>
        <hr />       
        <Link to='' className="terms-link">Privacy Policy</Link>
        <hr /> 
        <Link to='' className="terms-link">Refund Policy</Link>
        <hr /> 
        <Link to='' className="terms-link">Copyright Disclaimer</Link>
        <hr /> 
        <Link to='' className="terms-link">Cookies</Link>
        <hr /> 
      </div>

      <div className="footer-copright">
        <p></p>
      </div>

      <div className="back-top">
        <button onClick={handleBackTop}>Back To Top</button>
      </div>
      
    </footer>
  );
};

export default Footer;
