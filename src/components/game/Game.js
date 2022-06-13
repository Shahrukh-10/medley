import React from "react";
import "./game.css";
import cod from "../../assets/callofduty.png";
import star from "../../assets/star.png";

const Game = (props) => {
  return (
    <div className="game">
      <img src={props.img} alt="cod" />
      <div className="desc">
        <h4 className="desch">{props.head}</h4>
        <p className="descp">Activision <br /> PS4, PS5, Xbox One, Xbox Series X</p>
      <div className="rating">
        <img src={star} alt="star" />
        <p className="rate">4.5</p>
        <p className="orders">175 Orders</p>
        <button>Order Now</button>
      </div>
      </div>
    </div>
  );
};

export default Game;
