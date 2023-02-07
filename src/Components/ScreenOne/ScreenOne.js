import React from "react";
import "./ScreenOne.css";
import ImageOne from "../../Assets/imageone.jpg"

const ScreenOne = () => {
  return (
    <div className="screen-one-flex-div">
      <div className="screen-one-width-div">
        <div className="screen-one-main-div">
          <div className="screen-one-sub-div-one">
            <h3>We enrich the lives of our Customers</h3>
            <p>
              Every avid independent filmmaker has dreamed about making that
              special interest documentary, or short film to show off their
              creative prowess...
            </p>
          </div>
          <div className="screen-one-sub-div-one-two">
            <div>
            <img src={ImageOne}/>
            </div>
                <div className="screen-one-sub-div-two">
                    <h3>Need More Help</h3>
                    <p>Click here to Know More</p>
                </div>            
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ScreenOne;
