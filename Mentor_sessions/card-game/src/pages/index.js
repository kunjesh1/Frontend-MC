import React from "react";
import Card from "../components/Card";
import { useCardContext } from "../contextProviders/CardProvider";

const CardGame = () => {
  const [state, api] = useCardContext();

  const { randomCards, count } = state;
  const { generateCards, reset } = api;

  return (
    <main className="container">
      <h2>Card Game</h2>
      <div>Click on Button to generate 5 random cards</div>
      <button onClick={generateCards}>Get cards</button>
      <section className="flex cards">
        {!!randomCards &&
          randomCards.map((card) => {
            return <Card src={card?.image} label={card.label} />;
          })}
      </section>
      <footer>
        <button onClick={reset}>Restart</button>
      </footer>
      <div className="">Total Pulled : {count}</div>
    </main>
  );
};

export default CardGame;
