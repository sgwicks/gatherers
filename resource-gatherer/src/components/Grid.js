import React, { useEffect, useState } from 'react';
import useGridSquare from './GridSquare';
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
  const startTent = Math.floor(Math.random() * 25);
  const startApple = Math.floor(Math.random() * 25);
  const { updateStockpile, renderStockpile, stockpile } = useStockpile();
  const { renderGridSquare } = useGridSquare(
    updateStockpile,
    stockpile,
    startTent,
    startApple
  );

  useEffect(() => {
    //   this.stockpileTimer = setInterval(() => {
    //     this.updateStockpile(-1);
    //   }, 10000);
    //   this.appleTimer = setInterval(() => {
    //     const key = Math.floor(Math.random() * 25);
    //     this.appleSpawn(key);
    //   }, 1000);
  }, []);

  return (
    <>
      <div className='grid'>
        {gridLayout.map((square, i) => {
          return renderGridSquare(i);
        })}
      </div>
      {renderStockpile()}
    </>
  );
};

export default Grid;
