import React from "react";
import IndistryExpertise from "../../Components/IndistryExpertise/IndistryExpertise";
import Navbar from "../../Components/Navbar/Navbar";
import ScreenOne from "../../Components/ScreenOne/ScreenOne";
import ScreenTwo from "../../Components/ScreenTwo/ScreenTwo";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="home-screen-flex-div">
      <div className="home-screen-width-div">
        <div className="home-screen-main-div">
            <Navbar/>
            <ScreenOne/>
            <IndistryExpertise/>
            <ScreenTwo/>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
