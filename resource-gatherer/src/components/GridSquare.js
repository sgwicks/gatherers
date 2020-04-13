import React, { useState, useEffect } from 'react';
import Apple from './Apple';
import Tent from './Tent';
import { checkAdjacency } from '../utils/utils';

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
  const [isTent, setIsTent] = useState(false);
  const { column, row } = name;

  useEffect(() => {
    if (startTent === i) {
      setIsTent(true);
      setTentLookup({ ...tentLookup, [`${column}:${row}`]: true });
    }
  }, [startTent, i]);

  useEffect(() => {
    if (apple === i) setIsApple(true);
  }, [apple, i]);

  const tentClick = () => {
    if (stockpile > 0 && !isTent && checkAdjacency(name, tentLookup)) {
      updateStockpile(-1);
      setIsTent(true);
      setTentLookup({ ...tentLookup, [`${column}:${row}`]: true });
    }
  };

  return (
    <div className={'grid-square'} onClick={tentClick}>
      {isTent && <Tent setIsTent={setIsTent} />}
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
