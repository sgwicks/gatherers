import React, { useState, useEffect } from 'react';
import GridSquare from './GridSquare';
import useStockpile from './Stockpile';
import Instructions from './Instructions';
import {createSquare} from '../utils/utils'

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

  const [apple, setApple] = useState(createSquare());
  const [startTent] = useState(createSquare());

  const [ renderFood, updateFood, food ] = useStockpile('Food');

  useEffect(() => {
    setInterval(() => {
      setApple(createSquare());
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
              i={i}
              square={square}
              updateFood={updateFood}
              food={food}
              startTent={startTent}
              apple={apple}
            />
          );
        })}
        <Instructions />
      {renderFood()}
      </div>
    </>
  );
};

export default Grid;
