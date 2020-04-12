import React from 'react';
import tent from '../Tent.png';

const Tent = () => {
  // componentDidMount() {
  //     this.timer = setTimeout(() => {
  //        this.props.tentCollapse(this.props.i)
  //     }, 4000);
  // }

  return <img src={tent} alt={tent} className='tent-img' />;
};

export default Tent;
