import React, { useState } from "react";
import "./index.css";

const predefinedColors = ["red", "blue", "green", "yellow", "purple"];

function ColorSelector({ onSelect, selectedColor }) {
  const handleColorClick = (color) => {
    onSelect(color);
  };

  console.log({ selectedColor });
  return (
    <div className="color-selector">
      <h2>Select a Color:</h2>
      <div className="color-options">
        {predefinedColors.map((color, index) => (
          <div
            key={index}
            className={`color-option ${
              color === selectedColor ? "selected" : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ColorSelector;
