import React from "react";

export interface ICard {
  imgURL: string;
  text: string;
  clicked: boolean
};

interface Props extends ICard {
  className?: string
  handleClick: () => void;
}

const Card = ({imgURL, text, className, handleClick}: Props) => {
  return (
    <div className={`rounded p-4 flex flex-col gap-4 items-center ${className}`} onClick={handleClick}>
      <img src={imgURL} alt="" />
      <p className="text-2xl">{text}</p>
    </div>
  )
};

export { Card };  