import React from "react";
import Card from "../components/Card";
import { useCardContext } from "../contextProviders/CardProvider";

const CardGame = () => {
  const [state, api] = useCardContext();

  const { randomCards, count } = state;
  const { generateCards, reset } = api;

  return (
    <div className="margin-auto">
      <h2>Card Game</h2>
      <div>Click on Button to generate 5 random cards</div>
      <button onClick={generateCards}>Get cards</button>
      <div className="flex">
        {randomCards &&
          randomCards.map((card) => {
            return <Card src={card?.image} label={card.label} />;
          })}
      </div>
      <button onClick={reset}>Restart</button>
      <div className="">Total Pulled : {count}</div>
    </div>
  );
};

export default CardGame;
