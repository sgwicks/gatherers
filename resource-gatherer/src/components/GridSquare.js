import React, { useState, useEffect } from 'react';
import Apple from './Apple';
import Tent from './Tent';
import * as utils from '../utils/utils';

const useGridSquare = (updateStockpile, stockpile) => {
  const [target, setTarget] = useState('');
  const [className, setClassName] = useState('grid-square');
  const [isApple, setIsApple] = useState(false);
  const [isTent, setIsTent] = useState(false);
  const [tentList, updateTentList] = useState([]);

  useEffect(() => {}, []);

  const tentClick = (i) => {
    if (stockpile > 0 && className === 'grid-square') {
      updateStockpile(-1);
      updateTentList([...tentList, i]);
    }
  };

  const renderGridSquare = (i) => (
    <div
      key={i}
      className={className}
      onClick={() => {
        tentClick(i);
      }}
      onMouseMove={(event) => {
        utils.handleMouse(event, setTarget);
      }}>
      {tentList.includes(i) && <Tent i={i} />}
      {/* {isApple && <Apple handleMouse={utils.handleMouse} i={i} />} */}
    </div>
  );

  return { renderGridSquare };
};

export default useGridSquare;
