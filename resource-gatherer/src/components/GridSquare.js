import React, { useState } from 'react';
import useApple from './Apple';
import Tent from './Tent';

const useGridSquare = (updateStockpile, stockpile) => {
  const startTent = Math.floor(Math.random() * 25);

  const [tentList, updateTentList] = useState([startTent]);

  const tentClick = (i) => {
    if (stockpile > 0 && !tentList.includes(i)) {
      updateStockpile(-1);
      updateTentList([...tentList, i]);
    }
  };

  const { renderApple, appleList } = useApple(updateStockpile, tentList);

  const renderGridSquare = (i) => (
    <div
      key={i}
      className={'grid-square'}
      onClick={() => {
        tentClick(i);
      }}>
      {tentList.includes(i) && <Tent key={i} />}
      {appleList.includes(i) && renderApple(i)}
    </div>
  );

  return { renderGridSquare };
};

export default useGridSquare;
