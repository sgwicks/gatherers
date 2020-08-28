import React, { useState, useEffect } from 'react';
import Apple from './Apple';
import Tent from './Tent';
import {checkSame} from '../utils/utils'

const GridSquare = ({
  updateFood,
  food,
  startTent,
  apple,
  square
}) => {
  const [isApple, setIsApple] = useState(false);
  const [isTent, setIsTent] = useState(false)

  useEffect(() => {
    if (checkSame(startTent, square)) {
      setIsTent(true)
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (checkSame(apple, square)) setIsApple(true);
  }, [apple, square]);

  const tentClick = () => {
    if (food > 0 && !isTent) {
      updateFood(-1);
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
          updateFood={updateFood}
          setIsApple={setIsApple}
          isTent={isTent}
        />
      )}
    </div>
  );
};

export default GridSquare;
