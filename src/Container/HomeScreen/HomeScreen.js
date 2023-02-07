import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="home-screen-flex-div">
      <div className="home-screen-width-div">
        <div className="home-screen-main-div">
            <Navbar/>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
