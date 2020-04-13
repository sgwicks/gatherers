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
  const isTent = `${name.column}:${name.row}`;

  useEffect(() => {
    if (startTent === i) {
      setTentLookup({ ...tentLookup, [isTent]: true });
    }
  }, [startTent]);

  useEffect(() => {
    if (apple === i) setIsApple(true);
  }, [apple, i]);

  const tentClick = () => {
    if (
      stockpile > 0 &&
      !tentLookup[isTent] &&
      checkAdjacency(name, tentLookup)
    ) {
      updateStockpile(-1);
      setTentLookup({ ...tentLookup, [isTent]: true });
    }
  };

  return (
    <div className={'grid-square'} onClick={tentClick}>
      {tentLookup[isTent] && (
        <Tent
          setTentLookup={setTentLookup}
          isTent={isTent}
          tentLookup={tentLookup}
        />
      )}
      {isApple && (
        <Apple
          updateStockpile={updateStockpile}
          setIsApple={setIsApple}
          isTent={tentLookup[isTent]}
        />
      )}
    </div>
  );
};

export default GridSquare;
