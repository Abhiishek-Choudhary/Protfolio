import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          </div>
          <p>123 Housing Society.</p>
          <p>Chhattisgarh.</p>
        </div>
        <div className="phone">
          <h4>
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            91-7024-811-947
          </h4>
        </div>
        <div className="email">
          <h4>
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            akc64016@gmail.com
          </h4>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>
            This is Abhishek Choudhary,CEO & Founder of Tech-e-nova. I enjoy
            discussing new projects and design challenges.
          </p>
          <div className="social">
          <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
