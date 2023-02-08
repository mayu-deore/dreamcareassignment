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
          <div className="nav-bar-sub-div-two" style={{ color: "white",}}>
            <p>About Us</p>
            <p>My Passporte</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Contact</p>
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
