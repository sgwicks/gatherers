import React from "react";
import Apple from "./Apple";
import Tent from "./Tent";

const GridSquare = ({
  tentClick,
  tentCollapse,
  apple,
  appleClick,
  className,
  handleMouse,
  appleRot,
  i
}) => {
  return (
    <div
      className={className}
      onClick={() => {
        tentClick(i);
      }}
      onMouseMove={handleMouse}
    >
      {className==='grid-tent' && (
        <Tent i={i} tentCollapse={tentCollapse}/>
      )}
      {apple === "apple" && (
        <Apple appleClick={appleClick} handleMouse={handleMouse} i={i} appleRot={appleRot} />
      )}
    </div>
  );
};

export default GridSquare;
