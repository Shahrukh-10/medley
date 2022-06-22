import React, { useState } from "react";
import "./nav.css";
import medley from "../../assets/Medley.png";
import search from "../../assets/Vector.png";
import { BiAlignRight } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";

const Nav = () => {
  const [toggle, settoggle] = useState(false);
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
          <li className="searchBarDiv">
            <div className="searchBar">
              <div className="searchImage">
                <img src={search} alt="search" />
              </div>
              <input type="text" className="searchBar" placeholder="Search" />
            </div>
          </li>
          <li className="icon">
            {toggle ? (
              <RiCloseLine
                color="white"
                size="24"
                onClick={() => settoggle(false)}
              />
            ) : (
              <BiAlignRight
                color="white"
                size="24"
                onClick={() => settoggle(true)}
              />
            )}
          </li>
        </ul>
        {toggle && (
          <div className="toggle">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
