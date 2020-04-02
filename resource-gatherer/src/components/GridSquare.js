import React from "react";

const GridSquare = ({ expandTent }) => {
  return <div className="grid-square" onClick={expandTent}></div>;
};

export default GridSquare;
