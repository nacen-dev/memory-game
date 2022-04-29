import React, { useEffect, useState } from "react";
import { cardsData } from "../cardsData";
import { Card, ICard } from "./Card";
import { IScoreBoard, Scoreboard } from "./Scoreboard";

interface Props {}

const MemoryGame = (props: Props) => {
  const [cards, setCards] = useState<ICard[]>(cardsData);

  const [scores, setScores] = useState<IScoreBoard>({
    currentScore: 0,
    bestScore: 0,
  });

  useEffect(() => {
    let localStorageScoresData: IScoreBoard | string | null =
      localStorage.getItem("memory-game-scores");
    if (localStorageScoresData) {
      localStorageScoresData = JSON.parse(
        localStorageScoresData
      ) as IScoreBoard;

      setScores({
        currentScore: 0,
        bestScore: localStorageScoresData.bestScore,
      });
    }
  }, []);

  useEffect(() => {
    if (scores.bestScore !== 0) {
      localStorage.setItem("memory-game-scores", JSON.stringify(scores));
    }
  }, [scores]);

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

  const resetScores = () => {
    setScores((prevScore) => ({
      bestScore: prevScore.bestScore,
      currentScore: 0,
    }));
  };

  const incrementScores = () => {
    setScores((prevScores) => ({
      currentScore: prevScores.currentScore + 1,
      bestScore:
        prevScores.currentScore + 1 > prevScores.bestScore
          ? prevScores.currentScore + 1
          : prevScores.bestScore,
    }));
  };

  const cardClicked = (text: string, selected: boolean) => {
    shuffleCards();

    if (selected) {
      resetScores();
      setCards(cardsData);
    } else {
      incrementScores();
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.text === text ? { ...card, clicked: true } : card
        )
      );
    }
  };

  return (
    <div className="bg-slate-500">
      <Scoreboard
        bestScore={scores.bestScore}
        currentScore={scores.currentScore}
        className="text-white"
      />
      <div className="p-2">
        <p className="text-white text-center">
          Test your memory and get a score by clicking on the poke that you have
          not clicked before
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 p-4 bg-slate-700">
        {cards.map((card) => (
          <Card
            imgURL={card.imgURL}
            text={card.text}
            className="cursor-pointer bg-yellow-300 hover:scale-110 transition-transform duration-300"
            handleClick={() => cardClicked(card.text, card.clicked)}
            clicked={card.clicked}
            key={card.text}
          />
        ))}
      </div>
    </div>
  );
};

export { MemoryGame };
