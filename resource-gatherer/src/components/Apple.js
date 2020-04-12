import React, { useState } from 'react';
import apple from '../Apple.png';

const useApple = (updateStockpile, tentList) => {
  const startApple = Math.floor(Math.random() * 25);

  const [appleList, updateAppleList] = useState([startApple]);

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
      timer={setTimeout(() => {
        removeApple(i);
      }, 5000)}
    />
  );

  return { renderApple, appleList };
};

export default useApple;
