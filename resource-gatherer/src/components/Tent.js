import React, { useEffect } from 'react';
import tent from '../Tent.png';

const Tent = ({ setIsTent }) => {
  useEffect(() => {
    setTimeout(() => {
      setIsTent(false);
    }, 4000);
  });

  return <img src={tent} alt={tent} className='tent-img' />;
};

export default Tent;
