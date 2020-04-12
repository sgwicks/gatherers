import React, { useEffect, useState } from 'react';
import apple from '../Apple.png';
import * as utils from '../utils/utils';

const useApple = (updateStockpile, stockpile, tentList) => {
  const startApple = Math.floor(Math.random() * 25);

  const [target, setTarget] = useState('');
  const [targetParent, setTargetParent] = useState('');
  const [appleList, updateAppleList] = useState([startApple]);

  // useEffect(() => {
  //   this.timer = setTimeout(() => {
  //     this.props.appleRot(this.props.i);
  //   }, 5000);
  // }, []);

  const appleClick = (i) => {
    if (tentList.includes(i)) {
      updateStockpile(1);
      removeApple(i);
    }
  };

  const removeApple = (i) => {
    const apples = appleList.filter((apple) => apple !== i);
    updateAppleList(apples);
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

  return { renderApple, appleList };
};

export default useApple;
