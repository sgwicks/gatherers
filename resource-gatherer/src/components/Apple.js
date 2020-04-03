import React from "react";
import apple from "../Apple.png";

const Apple = ({ appleClick, handleMouse, i }) => {
  return (
    <img
      src={apple}
      alt="apple"
      onClick={() => {appleClick(i)}}
      onMouseMove={handleMouse}
    />
  );
};

export default Apple;
