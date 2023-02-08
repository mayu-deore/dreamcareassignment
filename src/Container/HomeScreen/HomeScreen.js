import React from "react";
import IndistryExpertise from "../../Components/IndistryExpertise/IndistryExpertise";
import Navbar from "../../Components/Navbar/Navbar";
import ScreenOne from "../../Components/ScreenOne/ScreenOne";
import Footer from "../../Components/Footer/Footer";
import ScreenThree from "../../Components/ScreenThree/ScreenThree";
import ScreenTwo from "../../Components/ScreenTwo/ScreenTwo";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="home-screen-flex-div" style={{backgroundColor:'pink'}}>
      <div className="home-screen-width-div " style={{backgroundColor:'#fff'}}>
        <div className="home-screen-main-div">
            <Navbar/>
            <ScreenOne/>
            <IndistryExpertise/>
            <ScreenTwo />
          <ScreenThree />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
