const CARD_TYPES = ["Club", "Diamond", "Heart", "Spade"];

const generateCards = () => {
  const hashMap = {};
  CARD_TYPES.forEach((card) => {
    for (let i = 0; i < 13; i++) {
      if (i == 0) {
        hashMap[card] = [
          {
            id: `${card}-${i}`,
            label: "Ace",
            image: `/images/${card}.png`,
          },
        ];
      } else if (i > 0 && i <= 9) {
        hashMap[card].push({
          id: `${card}-${i}`,
          label: i + 1,
          image: `/images/${card}.png`,
        });
      } else if (i == 10) {
        hashMap[card].push({
          id: `${card}-${i}`,
          label: "Jack",
          image: `/images/${card}.png`,
        });
      } else if (i == 11) {
        hashMap[card].push({
          id: `${card}-${i}`,
          label: "Queen",
          image: `/images/${card}.png`,
        });
      } else if (i == 12) {
        hashMap[card].push({
          id: `${card}-${i}`,
          label: "King",
          image: `/images/${card}.png`,
        });
      }
    }
  });

  console.log({ hashMap });

  let deckOfCards = [];
  for (let card of Object.entries(hashMap)) {
    deckOfCards = [...deckOfCards, ...card[1]];
  }

  return deckOfCards;
};

export default generateCards;
