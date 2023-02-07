import React from "react";
import "./Footer.css";
import Logo from "../../Assets/logo.png";
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-flex-div">
      <div className="footer-width-div">
        <div className="footer-main-div">
          <div>
            <img src={Logo} className="logo-img-tag" />
          </div>
          <div className="nav-bar-sub-div-two" style={{ color: "white" }}>
            <h3>About Us</h3>
            <h3>My Passporte</h3>
            <h3>Careers</h3>
            <h3>Investors</h3>
            <h3>Contact</h3>
          </div>

          <div className="nav-bar-sub-div-two" style={{ color: "white", justifyContent:"center" }}>
            <FaFacebookF/>

            <FaTwitter/>
            <FaInstagram/>
            <FaLinkedinIn/>
            
          </div>

          <div className="footer-last-div">
            <p>GSPACE INCORPORATED. ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
