import React from "react";
import apple from "../Apple.png";

const Apple = ({ appleClick, handleMouse }) => {
  return (
    <img
      src={apple}
      alt="apple"
      onClick={appleClick}
      onMouseMove={handleMouse}
    />
  );
};

export default Apple;
