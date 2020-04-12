import React, { useEffect, useState } from 'react';
import apple from '../Apple.png';
import * as utils from '../utils/utils';

const Apple = () => {
  const [target, setTarget] = useState('');
  const [targetParent, setTargetParent] = useState('');

  useEffect(() => {
    this.timer = setTimeout(() => {
      this.props.appleRot(this.props.i);
    }, 5000);
  }, []);

  const { handleMouse, i, appleClick } = this.props;
  return (
    <img
      className='apple-img'
      src={apple}
      alt='apple'
      onClick={() => {
        appleClick(i);
      }}
      onMouseMove={(event) => utils.handleMouse(event, setTarget)}
    />
  );
};

export default Apple;
