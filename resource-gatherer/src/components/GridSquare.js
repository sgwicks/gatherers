import React, { useState } from 'react';
import Apple from './Apple';
import Tent from './Tent';
import * as utils from '../utils/utils';

const GridSquare = ({
  tentClick,
  tentCollapse,
  apple,
  appleClick,
  className,
  appleRot,
  i
}) => {
  const [coordinate, setCoordinate] = useState(i);
  const [target, setTarget] = useState('');
  const [targetParent, setTargetParent] = useState('');

  return (
    <div
      className={className}
      onClick={() => {
        tentClick(i);
      }}
      onMouseMove={(event) => {
        utils.handleMouse(event, setTarget);
      }}>
      {className === 'grid-tent' && <Tent i={i} tentCollapse={tentCollapse} />}
      {apple === 'apple' && (
        <Apple
          appleClick={appleClick}
          handleMouse={handleMouse}
          i={i}
          appleRot={appleRot}
        />
      )}
    </div>
  );
};

export default GridSquare;
