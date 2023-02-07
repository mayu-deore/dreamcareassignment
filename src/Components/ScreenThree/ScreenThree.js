import React from "react";
import "./ScreenThree.css";
import ImageOne from "../../Assets/imageone.jpg"


const ScreenThree = () => {
  return (
    <div className="screen-three-flex-div">
      <div className="screen-three-width-div">
        <div className="screen-three-main-div">
          <h3>
            ‘MY PASSPORTE’ , is the first of its kind in the travel <br/> industry
            that provides integrated international travel <br/>plans, connecting
            India to the rest of the world.
          </h3>
        </div>

        <div className="screen-one-main-div" style={{gap:"20px", width:"100%"}}>
        
          <div className="screen-one-sub-div-one-two" style={{width:"50%"}}>
            {/* <img src={ImageOne}/> */}
            <img src="https://wallpaperaccess.com/full/1166628.jpg" className="screen-three-img"/>
                         
          </div>
          <div className="screen-one-sub-div-one" style={{width:"600px"}}>
            
            <p>
            My Passporte is platform that provides Indian
travelers with a planned, hassle free and
comfortable holiday anywhere in the world at value
for money deals. Whether taking off with friends
and family to celebrate, embarking on a journey of
self discovery or immersing yourself in a new place’s
culture and diversity,
            </p>

            <h4>Learn more about My Passporte</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenThree;
