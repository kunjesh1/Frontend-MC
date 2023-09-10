import React from "react";
import "./Card.css";

// use react memo
const Card = (props) => {
  const { src, label } = props;

  return (
    <div className="card">
      <img src={src} alt="" />
      <div>{label}</div>
    </div>
  );
};

export default Card;
