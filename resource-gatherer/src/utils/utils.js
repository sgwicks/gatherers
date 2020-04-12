export const handleMouse = (event, setTarget, setTargetParent) => {
  setTarget(event.target.className);
  setTargetParent(event.target.parent);
};

export const tentCollapse = (key) => {
  this.setState((currentState) => {
    return {
      gridLayout: currentState.gridLayout.map((square, i) => {
        return i === key
          ? square.map((item) => (item === 'tent' ? 'square' : item))
          : square;
      })
    };
  });
};

// Handle apple events

export const appleClick = (key) => {
  if (this.state.targetParent === 'grid-tent') {
    this.updateStockpile(1);
    this.appleRot(key);
  }
};

export const appleRot = (key) => {
  this.setState((currentState) => {
    return {
      gridLayout: currentState.gridLayout.map((square, i) => {
        return i === key ? [square[0]] : square;
      })
    };
  });
};

export const appleSpawn = (key) => {
  this.setState((currentState) => {
    return {
      gridLayout: currentState.gridLayout.map((square, i) => {
        return i === key ? [square[0], 'apple'] : square;
      })
    };
  });
};
