import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";

const Reasons = () => {
  const images = [image1, image2, image3, image4];
  const reasonsData = [
    "Over 140 experts and coachs",
    "Over 140 experts and coachs",
    "Over 140 experts and coachs",
    "Over 140 experts and coachs",
  ];
  const partnersBrands = [brand1, brand2, brand3];

  return (
    <div className="reasons" id="why me">
      <div className="reasons-left">
        {images.map((image, index) => {
          return <img key={index} src={image} alt="" />;
        })}
      </div>
      <div className="reasons-right">
        <div>
          <span className="stroke-text">Why </span>
          <span>choose me?</span>
        </div>

        <div className="reasons-details">
          {reasonsData.map((data) => {
            return (
              <div>
                <img src={tick} alt=""></img>
                <span>{data}</span>
              </div>
            );
          })}
        </div>

        <span className="partners-title">Our partners</span>
        <div className="partners">
          {partnersBrands.map((brands) => {
            return <img src={brands} alt="" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Reasons;
