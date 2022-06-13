import React from "react";
import "./footer.css";

const Footer = () => {
  return (
      <div className="mfooter">
    <div className="footer">
      <div className="footer-left">
          <div className="heading-footer">
            <h4>Get updates on your favourite games</h4>
          </div>
          <div className="mid-head">
            <p>Ready to explore?</p>
            <button className="footer_button">Get Started</button>
          </div>
          <div className="last-head">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
      </div>
      <div className="footer-right">
        <div className="left-ul">
          <h5>Services</h5>
          <ul>
            <li>Our Stores</li>
            <li>Campaigns</li>
            <li>Tournaments</li>
            <li>Offline</li>
          </ul>
        </div>
        <div className="middle-ul">
          <h5>About</h5>
          <ul>
            <li>Our Stories</li>
            <li>Benefits</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="right-ul">
          <h5>Help</h5>
          <ul>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      </div>
      <div className="copyright">
          <p>Copyright 2021 Medley</p>
      </div>
    </div>
  );
};

export default Footer;
