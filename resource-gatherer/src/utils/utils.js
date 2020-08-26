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

export const checkAdjacency = (currentSquare, nextSquare) => {
  const columnSum = currentSquare.column - nextSquare.column;
  const rowSum = currentSquare.row - nextSquare.row;

  if (columnSum + rowSum === 1) return true;
  if (columnSum + rowSum === -1) return true;
  return false

}
