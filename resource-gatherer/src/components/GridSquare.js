import React, { useState, useEffect } from 'react';
import Apple from './Apple';
import Tent from './Tent';

const GridSquare = ({
  i,
  updateStockpile,
  stockpile,
  startTent,
  apple,
  name,
  tentLookup,
  setTentLookup
}) => {
  const [isApple, setIsApple] = useState(false);
  const [isTent, setIsTent] = useState(false)

  useEffect(() => {
    if (startTent === i) {
      setIsTent(true)
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (apple === i) setIsApple(true);
  }, [apple, i]);

  const tentClick = () => {
    if (
      stockpile > 0 &&
      !isTent
    ) {
      updateStockpile(-1);
      setIsTent(true);
    }
  };

  return (
    <div className={'grid-square'} onClick={tentClick}>
      {isTent && (
        <Tent
          setIsTent={setIsTent}
        />
      )}
      {isApple && (
        <Apple
          updateStockpile={updateStockpile}
          setIsApple={setIsApple}
          isTent={isTent}
        />
      )}
    </div>
  );
};

export default GridSquare;
