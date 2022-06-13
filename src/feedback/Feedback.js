import React from 'react'
import './feedback.css'
import star from '../assets/star.png'
const Feedback = (props) => {
  return (
    <div className="feedback">
    <div className="reviewer">
      <img src={props.image} alt="vr1" />
    </div>
      <div className="star">
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </div>
      <div className="reviews">
        <p>My neighbor has one of these. She works as a gardener and she says its really awesome.</p>
      </div>
      <div className="name">
        <p>Charles Boyle</p>
      </div>
      <div className="post">
        <p>Graphic Designer</p>
      </div>
    </div>
  )
}

export default Feedback