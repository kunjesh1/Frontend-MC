import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";
import generateCards from "../utils/generateCards";

const CardContext = createContext();

const DEFAULT_STATE = {
  count: 0,
  randomCards: [],
  cardsArray: generateCards(),
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

export default function CardProvider({ children }) {
  // action
  const reducer = (state, action) => {
    console.log({ state, action });
    switch (action.type) {
      case "GENERATE_CARDS": {
        if (state.count >= 50) {
          window.alert("Game ended");
          return state; // Default state should be returned
        }
        const cards = [...state.cardsArray];
        const randomCards = [...state.randomCards];
        let count = state.count;

        let cardIndex;
        for (let i = 0; i < 5; i++) {
          cardIndex = getRandomIntInclusive(0, cards.length - 1);
          randomCards.push(cards[cardIndex]);
          cards.splice(cardIndex, 1);
        }

        count = count + 5;

        return {
          ...state,
          ...{
            cardsArray: cards,
            randomCards,
            count,
          },
        };
      }

      case "RESET": {
        return {
          ...state,
          ...{
            cardsArray: DEFAULT_STATE.cardsArray,
            randomCards: [],
            count: 0,
          },
        };
      }

      default:
        return state;
    }
  };

  const generateCards = useCallback(() => {
    dispatch({
      type: "GENERATE_CARDS",
    });
  }, []);

  const reset = () => {
    dispatch({
      type: "RESET",
    });
  };

  const api = {
    generateCards,
    reset,
  };

  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  return (
    <CardContext.Provider value={[state, api]}>{children}</CardContext.Provider>
  );
}

export const useCardContext = () => useContext(CardContext);
