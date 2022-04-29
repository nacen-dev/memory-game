import React, { useState } from "react";
import { cardsData } from "../cardsData";
import { Card, ICard } from "./Card";
import { IScoreBoard } from "./Scoreboard";

interface Props {}

interface MemoryGameState {
  cards: ICard[];
  scores: IScoreBoard;
}

const MemoryGame = (props: Props) => {
  const [memoryState, setMemoryState] = useState<MemoryGameState>({
    cards: cardsData,
    scores: {
      currentScore: 0,
      bestScore: 0,
    },
  });

  const cardSelect = (cardText: string) => {
    
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4 bg-slate-700">
      {memoryState.cards.map((card) => (
        <Card
          imgURL={card.imgURL}
          text={card.text}
          className="cursor-pointer bg-yellow-300"
          handleClick={() => cardSelect(card.text)}
          clicked={card.clicked}
        />
      ))}
    </div>
  );
};

export { MemoryGame };
