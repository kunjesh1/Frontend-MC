import React from "react";
import "./Card.css";

const Card = (props) => {
  const { src, label } = props;

  return (
    <div className="card">
      <img src={src} />
      <div>{label}</div>
    </div>
  );
};

export default Card;
