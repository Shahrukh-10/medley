import React from "react";
import "./marketPlace.css";

const MarketPlace = (props) => {
  return (
    <div className="banner" id={props.style}>
      <img src={props.controller} className="controller" alt="controller" />
      <div className="banerImage">
        <img src={props.banner} className="bannerImage" alt="bannerImage" />
      </div>
      <div className="supply">
        <div className="supplier">
          <p>{props.head}</p>
          <div className="tiltMain"></div>
        </div>
        <div className="lastTilt">
        <div className="tilt"></div>
        <div className="tilt"></div>
        <div className="tilt"></div>
        </div>
      </div>
        <div className="bannerText">
          <p>{props.para}</p>
        </div>
    </div>
  );
};

export default MarketPlace;
