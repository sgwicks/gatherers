import React from "react";
import apple from "../Apple.png";

const Grid = () => {
  return (
    <div className="grid">
      <div className="grid-square" id="1:1"></div>
      <div className="grid-square" id="1:2"></div>
      <div className="grid-square" id="1:3"></div>
      <div className="grid-square" id="1:4"></div>
      <div className="grid-square" id="1:5"></div>
      <div className="grid-square" id="2:1"></div>
      <div className="grid-square" id="2:2">
        <img src={apple} alt="Apple" />
      </div>
      <div className="grid-square" id="2:3">
        <img src={apple} alt="Apple" />
      </div>
      <div className="grid-square" id="2:4"></div>
      <div className="grid-square" id="2:5"></div>
      <div className="grid-square" id="3:1"></div>
      <div className="grid-square" id="3:2">
        <img src={apple} alt="Apple" />
      </div>
      <div className="grid-square" id="3:4"></div>
      <div className="grid-square" id="3:5"></div>
      <div className="grid-square" id="4:1"></div>
      <div className="grid-square" id="4:2"></div>
      <div className="grid-square" id="4:3">
        <img src={apple} alt="Apple" />
      </div>
      <div className="grid-square" id="4:4">
        <img src={apple} alt="Apple" />
      </div>
      <div className="grid-square" id="4:5"></div>
      <div className="grid-square" id="5:1"></div>
      <div className="grid-square" id="5:2"></div>
      <div className="grid-square" id="5:3">
        <img src={apple} alt="Apple" />
      </div>
      <div className="grid-square" id="5:4">
        <img src={apple} alt="Apple" />
      </div>
      <div className="grid-square" id="5:5">
        <img src={apple} alt="Apple" />
      </div>
      <div className="grid-center"></div>
    </div>
  );
};

export default Grid;
