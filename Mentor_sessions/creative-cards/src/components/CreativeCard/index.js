import React from "react";
import "./index.css";

function CreativeCard({ cardData }) {
  console.log({ cardData });
  return (
    <div
      className={`creative-card ${cardData.cardType}`}
      style={{ backgroundColor: cardData?.color }}
    >
      <h3>{cardData.title}</h3>
      <p>{cardData.subtitle}</p>
    </div>
  );
}

export default CreativeCard;
