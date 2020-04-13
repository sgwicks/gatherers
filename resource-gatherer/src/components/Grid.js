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

  const [tentLookup, setTentLookup] = useState({
    '1:1': false,
    '1:2': false,
    '1:3': false,
    '1:4': false,
    '1:5': false,
    '2:1': false,
    '2:2': false,
    '2:3': false,
    '2:4': false,
    '2:5': false,
    '3:1': false,
    '3:2': false,
    '3:3': false,
    '3:4': false,
    '3:5': false,
    '4:1': false,
    '4:2': false,
    '4:3': false,
    '4:4': false,
    '4:5': false,
    '5:1': false,
    '5:2': false,
    '5:3': false,
    '5:4': false,
    '5:5': false
  });

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
              tentLookup={tentLookup}
              setTentLookup={setTentLookup}
            />
          );
        })}
      </div>
      {renderStockpile()}
    </>
  );
};

export default Grid;
