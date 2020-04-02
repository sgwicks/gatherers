import React from "react";
import tent from "../Tent.jpg";
import apple from "../Apple.png";

const Grid = () => {
  return (
    <div className="grid">
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square">
        <img src={apple} alt="Apple" />
      </div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-square"></div>
      <div className="grid-center">
        <img src={tent} alt="Tent"></img>
      </div>
    </div>
  );
};

export default Grid;
