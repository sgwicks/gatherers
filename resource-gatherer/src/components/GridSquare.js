import React from "react";
import Apple from "./Apple";

const GridSquare = ({ expandTent, apple, appleClick }) => {
  return (
    <div className="grid-square" onClick={expandTent}>
      {apple === "apple" && <Apple appleClick={appleClick} />}
    </div>
  );
};

export default GridSquare;
