import React from "react";
import Distributor from "../../distributors/Distributor";
import Feedback from "../../feedback/Feedback";
import Review from "../reviews/Review";
import "./testimonial.css";
import vr1 from '../../assets/vr1.png'
import vr2 from '../../assets/vr2.png'
import medley from '../../assets/Medley.png'
import to from '../../assets/20.png'
const Testimonial = () => {
  return (
    <div className="testimonial">
      <Distributor />
      <Review />
      <div className="feedback_review">
        <Feedback  image = {vr1}/>
        <Feedback  image = {vr2}/>
      </div>
      <div className="company">
        <img src={medley} alt="medley" />
        <div className="search">
        <input type="text" placeholder="Email Address" id="inp" />
        <img src={to} alt="" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Testimonial;
