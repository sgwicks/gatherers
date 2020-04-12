import React, { useState, useEffect } from 'react';
import Apple from './Apple';
import Tent from './Tent';

const GridSquare = ({ i, updateStockpile, stockpile, startTent, apple }) => {
  const [isApple, setIsApple] = useState(false);
  const [isTent, setIsTent] = useState(false);

  const tentClick = (i) => {
    if (stockpile > 0 && !isTent) {
      updateStockpile(-1);
      setIsTent(true);
    }
  };

  useEffect(() => {
    if (startTent === i) setIsTent(true);
  }, [startTent, i]);

  useEffect(() => {
    if (apple === i) setIsApple(true);
  }, [apple, i]);

  return (
    <div
      key={i}
      className={'grid-square'}
      onClick={() => {
        tentClick(i);
      }}>
      {isTent && <Tent setIsTent={setIsTent} />}
      {isApple && (
        <Apple
          i={i}
          updateStockpile={updateStockpile}
          setIsApple={setIsApple}
          isTent={isTent}
        />
      )}
    </div>
  );
};

export default GridSquare;
