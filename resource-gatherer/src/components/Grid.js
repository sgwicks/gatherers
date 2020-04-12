import React, { useEffect, useState } from 'react';
import useGridSquare from './GridSquare';
import useStockpile from './Stockpile';
import * as utils from '../utils/utils';

const Grid = () => {
  const [gridLayout, setGridLayout] = useState([
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
  const [target, setTarget] = useState('');
  const [targetParent, setTargetParent] = useState('');
  const { updateStockpile, renderStockpile, stockpile } = useStockpile();
  const { renderGridSquare } = useGridSquare(updateStockpile, stockpile);

  useEffect(() => {
    const startSquare = Math.floor(Math.random() * 25);

    //   this.expandTent(startSquare);
    //   this.appleSpawn(startSquare);

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
