import React from "react";
import apple from "../Apple.png";

const Apple = ({ appleClick }) => {
  return <img src={apple} alt="apple" onClick={appleClick} />;
};

export default Apple;
