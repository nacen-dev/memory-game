import React from "react";

interface Props {

};

const Header = (props: Props) => {
  return (
    <header className="bg-slate-600 p-4">
      <h1 className="text-3xl text-white">Pokemon Memory Game</h1>
    </header>
  )
};

export { Header };  