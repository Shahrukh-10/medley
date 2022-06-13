import React from "react";
import Nav from "../navbar/Nav";
import "./header.css";
import car from "../../assets/car.png";

const Header = () => {
  return (
    <div className="header">
      <Nav />
      <div className="headerText">
        <div className="distributors">
          <div></div>
          <p>GAMEWORLD DISTRIBUTORS</p>
          <div></div>
        </div>
        <div className="connecting">
          <p>Connecting Players & Games in an Immersive environment.</p>
        </div>
        <div className="memberButton">
          <button>Become a Member for Free!</button>
        </div>
        <div className="scrollDown">Scroll down <span>&#8595;</span></div>
      </div>
    </div>
  );
};

export default Header;
