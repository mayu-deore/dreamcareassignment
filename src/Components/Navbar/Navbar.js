import React from "react";
import "./Navbar.css";
import Logo from "../../Assets/logo.png"

const Navbar = () => {
  return (
    <div className="nav-bar-flex-div">
      <div className="nav-bar-width-div">
        <div className="nav-bar-main-div">
            <div className="nav-bar-sub-div-one">
                <img src={Logo} className="logo-img-tag"/>
            </div>
            <div className="nav-bar-sub-div-two">
                <h3>About Us</h3>
                <h3>My Passporte</h3>
                <h3>Careers</h3>
                <h3>Investors</h3>
                <h3>Contact</h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
