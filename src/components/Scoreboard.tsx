import React from "react";

export interface IScoreBoard {
  currentScore: number;
  bestScore: number;
}

const Scoreboard = ({ currentScore, bestScore }: IScoreBoard) => {
  return (
    <div>
      <p>Score: {currentScore}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
};

export { Scoreboard };
