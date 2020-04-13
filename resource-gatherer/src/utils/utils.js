import { useRef, useEffect } from 'react';

export const handleMouse = (event, setTarget, setTargetParent) => {
  setTarget(event.target.className);
  setTargetParent(event.target.parent);
};

export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export const checkAdjacency = (currentSquare, lookupObj) => {
  const { column, row } = currentSquare;
  const lookupKeyLeft = `${column + 1}:${row}`;
  const lookupKeyRight = `${column - 1}:${row}`;
  const lookupKeyDown = `${column}:${row + 1}`;
  const lookupKeyUp = `${column}:${row - 1}`;

  if (lookupObj[lookupKeyLeft]) return true;
  if (lookupObj[lookupKeyRight]) return true;
  if (lookupObj[lookupKeyDown]) return true;
  if (lookupObj[lookupKeyUp]) return true;

  return false;
};
