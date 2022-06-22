import React from "react";
import "./brand.css";
import steam from "../../assets/steam.png";
import microsoft from "../../assets/microsoft.png";
import xbox from "../../assets/xbox.png";
import play from "../../assets/play28.png";
import ps from "../../assets/playstation.png";
import MarketPlace from "../marketPlace/MarketPlace";
import calendar from '../../assets/calender.png'
import marketplace from '../../assets/marketplace.png'
import supplier from '../../assets/suppliers.png'
import controller from '../../assets/controller.png'
import controller1 from '../../assets/controller1.png'
import controller2 from '../../assets/controller2.png'

const Brands = () => {
  return (
    <div className="brands">
      <div className="companyTag">
        <img src={steam} alt="steam" />
        <img src={microsoft} alt="microsoft" />
        <img src={play} alt="play" />
        <img src={xbox} alt="xbox" />
        <img src={ps} alt="ps" />
        
      </div>
      <div className="do">
        <div></div>
        <p>What we do</p>
        <div></div>
      </div>
      <div className="meeting">
        <p>Meeting the needs of players across the world</p>
      </div>

      <div className="banners">
          <MarketPlace style={"one"} para={"List of carefully selected, verified, high quality suppliers in different regions worldwide."} head={"Video Game Suppliers"} banner={supplier} controller={controller}/>
          <MarketPlace style={"two"} para={"Find wholesale prices and suppliers of video games, consoles, and game accessories."} head={"Wholesale Marketplace"} banner={marketplace} controller={controller1}/>
          <MarketPlace style={"three"} para={"Release dates and information on upcoming or recently released video games."} head={"Future Releases"} banner={calendar} controller={controller2}/>
      </div>
    </div>
  );
};

export default Brands;
