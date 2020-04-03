import React from "react";
import apple from "../Apple.png";

const Stockpile = ({ stockpile }) => {
  return (
    <div id='stockpile'>
      <p className="stockpile-text">Stockpile:</p>
      <p className="stockpile-text">{stockpile}</p>
      <img src={apple} alt="Apples in stockpile" />
    </div>
  );
};

export default Stockpile;
