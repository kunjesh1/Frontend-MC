import React, { useState } from "react";
import ColorSelector from "./components/ColorSelector";
import Drawer from "./components/Drawer";
import ProgressBar from "./components/ProgressBar";
import CreativeCard from "./components/CreativeCard";

function App() {
  const [cards, setCards] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [color, setColor] = useState("");

  const onSelectColor = (color) => {
    setColor(color);
  };

  const addCard = (cardData) => {
    setCards([...cards, cardData]);
    setIsDrawerOpen(false);
  };

  return (
    <div className="container">
      <h1>Creative Card Creator</h1>
      <ColorSelector onSelect={onSelectColor} selectedColor={color} />
      <ProgressBar value={(cards.length / 5) * 100} />
      <button onClick={() => setIsDrawerOpen(true)}>Add</button>
      {cards.map((card, index) => (
        <CreativeCard key={index} cardData={card} />
      ))}
      {<Drawer onAdd={addCard} isOpen={isDrawerOpen} color={color} />}
    </div>
  );
}

export default App;
