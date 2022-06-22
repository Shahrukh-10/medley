import React from "react";
import Game from "../game/Game";
import "./newgames.css";
import cod from '../../assets/callofduty.png';
import fifa from '../../assets/fifa22.png';
import gog from '../../assets/guardianofthegalaxy.png';
import alan from '../../assets/alanWake.png';
import fc from '../../assets/farcry6.png';
import pop from '../../assets/princeofpersia.png';
import dead from '../../assets/dead2.png';
import sr from '../../assets/saintsrow.png';

const Newgames = () => {
  return (

    <div className="newgames">
      <div className="heading">Newly Released Games</div>
      <div className="gameBox">
       <div><a href="../">All</a></div>
       <div><a href="../">PS4</a></div>
       <div><a href="../">PS5</a></div>
       <div><a href="../img">X-Box</a></div>
      </div>
      <div className="allgames">
      <Game img = {cod} heading={"Call of Duty: Vanguard"} id={"img1"}/>
      <Game img = {fifa} heading={"FIFA 22"} id={"img2"}/>
      <Game img = {gog} heading={"GOFTG"} id={"img3"}/>
      <Game img = {alan} heading={"Alan Awake"} id={"img4"}/>
      <Game img = {fc} heading={"Far Cry 6"} id={"img5"}/>
      <Game img = {pop} heading={"Price Of Persia"} id={"img6"}/>
      <Game img = {dead} heading={"Dead Island 2"} id={"img7"}/>
      <Game img = {sr} heading={"Saint Row"} id={"img8"}/>
      </div>
    </div>
  );
};

export default Newgames;
