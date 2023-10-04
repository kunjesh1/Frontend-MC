import React, { useEffect, useState } from "react";
import "./index.css";

function Drawer({ onAdd, isOpen, color }) {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    color: color,
    cardType: "circle",
  });

  useEffect(() => {
    setFormData({ ...formData, color: color });
  }, [color]);

  const isFormValid = formData.title && formData.subtitle && formData.color;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddClick = () => {
    if (isFormValid) {
      onAdd(formData);
      setFormData({
        title: "",
        subtitle: "",
        color: "",
        cardType: "circle",
      });
    }
  };

  return (
    <div className={`drawer ${isOpen ? "open" : ""}`}>
      <h2>Create a Card</h2>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
      />
      <label>Subtitle:</label>
      <input
        type="text"
        name="subtitle"
        value={formData.subtitle}
        onChange={handleInputChange}
      />
      <label>Color:</label>
      <input
        type="text"
        name="color"
        value={formData.color}
        onChange={handleInputChange}
      />
      <label>Type of Card:</label>
      <select
        name="cardType"
        value={formData.cardType}
        onChange={handleInputChange}
      >
        <option value="Circle">Circle</option>
        <option value="Square">Square</option>
      </select>
      <button onClick={handleAddClick} disabled={!isFormValid}>
        Add to List
      </button>
    </div>
  );
}

export default Drawer;
