import React from "react";
import Apple from "./Apple";

const GridSquare = ({ expandTent, apple }) => {
  return (
    <div className="grid-square" onClick={expandTent}>
      {apple && <Apple />}
    </div>
  );
};

export default GridSquare;
