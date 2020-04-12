import React, { useState, useEffect } from 'react';
import useApple from './Apple';
import Tent from './Tent';
import * as utils from '../utils/utils';

const useGridSquare = (updateStockpile, stockpile, startTent, startApple) => {
  const [target, setTarget] = useState('');
  const [appleList, updateAppleList] = useState([startApple]);
  const [tentList, updateTentList] = useState([startTent]);
  const { renderApple } = useApple(
    updateStockpile,
    stockpile,
    updateAppleList,
    tentList
  );

  useEffect(() => {}, []);

  const tentClick = (i) => {
    if (stockpile > 0 && !tentList.includes(i)) {
      updateStockpile(-1);
      updateTentList([...tentList, i]);
    }
  };

  const renderGridSquare = (i) => (
    <div
      key={i}
      className={'grid-square'}
      onClick={() => {
        tentClick(i);
      }}
      onMouseMove={(event) => {
        utils.handleMouse(event, setTarget, setTarget);
      }}>
      {tentList.includes(i) && <Tent i={i} />}
      {appleList.includes(i) && renderApple(i)}
    </div>
  );

  return { renderGridSquare };
};

export default useGridSquare;
