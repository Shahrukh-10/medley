import React from "react";
import "./distributor.css";
import button from "../assets/button.png";
import play from "../assets/play-button 1.png";

const Distributor = () => {
  return (
    <div className="allCover">
      <div className="distributor">
        <img src={play} alt="play" />
      </div>
      <div className="distributorDesc">
        <h1>We are the Best Game Distributors for all Gamers.</h1>
        <div className="points">
          <div id="img">
            <img src={button} alt="button" />
          </div>
          <div className="pointhead">
            <h3>Title Goes Here</h3>
            <p>
              Find wholesale prices and suppliers of video games, consoles, and
              game accessories.
            </p>
          </div>
        </div>
        <div className="points">
          <div id="img">
            <img src={button} alt="button" />
          </div>
          <div className="pointhead">
            <h3>Title Goes Here</h3>
            <p>
              Find wholesale prices and suppliers of video games, consoles, and
              game accessories.
            </p>
          </div>
        </div>
        <div className="points">
          <div id="img">
            <img src={button} alt="button" />
          </div>
          <div className="pointhead">
            <h3>Title Goes Here</h3>
            <p>
              Find wholesale prices and suppliers of video games, consoles, and
              game accessories.
            </p>
          </div>
        </div>
        <div className="points">
          <div id="img">
            <img src={button} alt="button" />
          </div>
          <div className="pointhead">
            <h3>Title Goes Here</h3>
            <p>
              Find wholesale prices and suppliers of video games, consoles, and
              game accessories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distributor;
