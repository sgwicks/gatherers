import React, { useState, useEffect } from 'react';
import GridSquare from './GridSquare';
import useStockpile from './Stockpile';

const Grid = () => {
  const [gridLayout] = useState([
    { row: 1, column: 1 },
    { row: 1, column: 2 },
    { row: 1, column: 3 },
    { row: 1, column: 4 },
    { row: 1, column: 5 },
    { row: 2, column: 1 },
    { row: 2, column: 2 },
    { row: 2, column: 3 },
    { row: 2, column: 4 },
    { row: 2, column: 5 },
    { row: 3, column: 1 },
    { row: 3, column: 2 },
    { row: 3, column: 3 },
    { row: 3, column: 4 },
    { row: 3, column: 5 },
    { row: 4, column: 1 },
    { row: 4, column: 2 },
    { row: 4, column: 3 },
    { row: 4, column: 4 },
    { row: 4, column: 5 },
    { row: 5, column: 1 },
    { row: 5, column: 2 },
    { row: 5, column: 3 },
    { row: 5, column: 4 },
    { row: 5, column: 5 }
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
          const { column, row } = square;
          return (
            <GridSquare
              key={`Grid ${column}:${row}`}
              name={square}
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
