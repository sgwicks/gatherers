import React, { useEffect } from 'react';
import tent from '../Tent.png';

const Tent = () => {
  // componentDidMount() {
  //     this.timer = setTimeout(() => {
  //        this.props.tentCollapse(this.props.i)
  //     }, 4000);
  // }

  useEffect(() => {
    console.log('Tent updated');
  });

  return <img src={tent} alt={tent} className='tent-img' />;
};

export default Tent;
