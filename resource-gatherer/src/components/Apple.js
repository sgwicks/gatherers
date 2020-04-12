import React, { useEffect, useState } from 'react';
import apple from '../Apple.png';
import * as utils from '../utils/utils';

const useApple = (updateStockpile, stockpile, updateAppleList) => {
  const [target, setTarget] = useState('');
  const [targetParent, setTargetParent] = useState('');

  // useEffect(() => {
  //   this.timer = setTimeout(() => {
  //     this.props.appleRot(this.props.i);
  //   }, 5000);
  // }, []);

  const appleClick = () => {
    updateStockpile(1);
  };

  const renderApple = (i) => (
    <img
      className='apple-img'
      src={apple}
      alt='apple'
      onClick={() => {
        appleClick(i);
      }}
      onMouseMove={(event) =>
        utils.handleMouse(event, setTarget, setTargetParent)
      }
    />
  );

  return { renderApple };
};

export default useApple;
