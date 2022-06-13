import React from "react";
import "./nav.css";
import medley from "../../assets/Medley.png";
import search from "../../assets/Vector.png";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="medley">
        <img src={medley} alt="medley" />
      </div>
      <div className="navlinks">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#policy">Privacy Policy</a>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <div className="searchBar">
              <div className="searchImage">
                <img src={search} alt="search" />
              </div>
              <input type="text" className="searchBar" placeholder="Search" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
