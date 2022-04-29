import React, { useState } from "react";
import { cardsData } from "../cardsData";
import { Card, ICard } from "./Card";
import { IScoreBoard } from "./Scoreboard";

interface Props {}

const MemoryGame = (props: Props) => {
  const [cards, setCards] = useState<ICard[]>(cardsData);

  const [scores, setScores] = useState<IScoreBoard>({
    currentScore: 0,
    bestScore: 0,
  });

  const shuffleCards = () => {
    const tempCards = [...cards];
    for (let i = tempCards.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      [tempCards[i], tempCards[randomIndex]] = [
        tempCards[randomIndex],
        tempCards[i],
      ];
    }

    setCards(tempCards);
  };

  const cardClicked = (selected: boolean) => {
    shuffleCards();
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4 bg-slate-700">
      {cards.map((card) => (
        <Card
          imgURL={card.imgURL}
          text={card.text}
          className="cursor-pointer bg-yellow-300"
          handleClick={() => cardClicked(card.clicked)}
          clicked={card.clicked}
        />
      ))}
    </div>
  );
};

export { MemoryGame };
