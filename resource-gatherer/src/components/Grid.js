import React from "react";
import GridSquare from "./GridSquare";

const Grid = ({ appleClick, expandTent, gridLayout, handleMouse }) => {
  return (
    <div className="grid">
      {/* <div className="grid-center"></div> */}
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