import React from "react";
import apple from "../Apple.png";

const Stockpile = () => {
  return (
    <div id="stockpile">
      <p className="stockpile-text">Stockpile:</p>
      <p className="stockpile-text">0</p>
      <img src={apple} alt="Apples in stockpile" />
    </div>
  );
};

export default Stockpile;
