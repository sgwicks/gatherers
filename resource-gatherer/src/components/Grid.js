import React from "react";
import GridSquare from "./GridSquare";

const Grid = ({ appleClick, expandTent, gridLayout, handleMouse }) => {
  return (
    <div className="grid">
      <div className="grid-center"></div>
      {gridLayout.map((square, i) => {
        return (
          <GridSquare
            i={i}
            handleMouse={handleMouse}
            className={`grid-${square[0]}`}
            expandTent={expandTent}
            key={i}
            apple={square[1]}
            appleClick={appleClick}
          />
        );
      })}
    </div>
  );
};

export default Grid;

/* 
<GridSquare expandTent={expandTent} />
      <div className="grid-square" id="1:2"></div>
      <div className="grid-square" id="1:3"></div>
      <div className="grid-square" id="1:4"></div>
      <div className="grid-square" id="1:5"></div>
      <div className="grid-square" id="2:1"></div>
      <div className="grid-square" id="2:2">
        <Apple appleClick={appleClick} />
      </div>
      <div className="grid-square" id="2:3">
        <Apple appleClick={appleClick} />
      </div>
      <div className="grid-square" id="2:4"></div>
      <div className="grid-square" id="2:5"></div>
      <div className="grid-square" id="3:1"></div>
      <div className="grid-square" id="3:2">
        <Apple appleClick={appleClick} />
      </div>
      <div className="grid-square" id="3:4"></div>
      <div className="grid-square" id="3:5"></div>
      <div className="grid-square" id="4:1"></div>
      <div className="grid-square" id="4:2"></div>
      <div className="grid-square" id="4:3">
        <Apple appleClick={appleClick} />
      </div>
      <div className="grid-square" id="4:4">
        <Apple appleClick={appleClick} />
      </div>
      <div className="grid-square" id="4:5"></div>
      <div className="grid-square" id="5:1"></div>
      <div className="grid-square" id="5:2"></div>
      <div className="grid-square" id="5:3">
        <Apple appleClick={appleClick} />
      </div>
      <div className="grid-square" id="5:4">
        <Apple appleClick={appleClick} />
      </div>
      <div className="grid-square" id="5:5">
        <Apple appleClick={appleClick} />
      </div>
      */
