import React, { useState, useEffect } from 'react';
import GridSquare from './GridSquare';
import useStockpile from './Stockpile';

const Grid = () => {
  const [gridLayout] = useState([
    ['square'],
    ['square'],
    ['square'],
    ['square'],
    ['square'],
    ['square'],
    ['square'],
    ['square'],
    ['square'],
    ['square'],
    ['square'],
    ['square'],
    ['square'],
    ['square'],
    ['square'],
    ['square'],
    ['square'],
    ['square'],
    ['square'],
    ['square'],
    ['square'],
    ['square'],
    ['square'],
    ['square'],
    ['square']
  ]);

  const [apple, setApple] = useState(Math.floor(Math.random() * 25));
  const [startTent] = useState(Math.floor(Math.random() * 25));

  const { updateStockpile, renderStockpile, stockpile } = useStockpile();

  useEffect(() => {
    setInterval(() => {
      setApple(Math.floor(Math.random() * 25));
    }, 1000);
  }, []);

  return (
    <>
      <div className='grid'>
        {gridLayout.map((square, i) => {
          return (
            <GridSquare
              key={i}
              i={i}
              updateStockpile={updateStockpile}
              stockpile={stockpile}
              startTent={startTent}
              apple={apple}
            />
          );
        })}
      </div>
      {renderStockpile()}
    </>
  );
};

export default Grid;
