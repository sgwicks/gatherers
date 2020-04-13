import React, { useEffect } from 'react';
import tent from '../Tent.png';

const Tent = ({ setTentLookup, isTent, tentLookup }) => {
  useEffect(() => {
    setTimeout(() => {
      setTentLookup({ ...tentLookup, [isTent]: false });
    }, 4000);
  });

  return <img src={tent} alt={tent} className='tent-img' />;
};

export default Tent;
