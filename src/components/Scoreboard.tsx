import React from "react";

export interface IScoreBoard {
  currentScore: number;
  bestScore: number;
}

interface Props extends IScoreBoard {
  className?: string;
}

const Scoreboard = ({ currentScore, bestScore, className }: Props) => {
  return (
    <div className={`flex gap-4 justify-center p-2 ${className}`}>
      <p className="text-white text-xl">Score: {currentScore}</p>
      <p className="text-white text-xl">Best Score: {bestScore}</p>
    </div>
  );
};

export { Scoreboard };
