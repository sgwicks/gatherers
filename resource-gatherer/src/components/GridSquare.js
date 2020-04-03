import React from "react";
import Apple from "./Apple";

const GridSquare = ({
  expandTent,
  apple,
  appleClick,
  className,
  handleMouse,
  i
}) => {
  return (
    <div
      className={className}
      onClick={() => {
        expandTent(i);
      }}
      onMouseMove={handleMouse}
    >
      {apple === "apple" && (
        <Apple appleClick={appleClick} handleMouse={handleMouse} />
      )}
    </div>
  );
};

export default GridSquare;
