export const handleMouse = (event, updater) => {
  updater(event.target.className);
  console.log(event.target.className);
};

// Handle stockpile events

export const updateStockpile = (num) => {
  if (this.state.stockpile > 0) {
    this.setState(
      (currentState) => {
        return { stockpile: currentState.stockpile + num };
      },
      () => {
        this.stockpileEmpty();
      }
    );
  }
};

export const stockpileEmpty = () => {
  if (!this.state.stockpile) this.setState({ stockpile: 'YOU LOSE' });
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

// Handle tent events

export const tentClick = (key) => {
  if (this.state.stockpile > 0 && this.state.target === 'grid-square') {
    this.updateStockpile(-1);
    this.expandTent(key);
  }
};

export const expandTent = (key) => {
  this.setState((currentState) => {
    return {
      gridLayout: currentState.gridLayout.map((square, i) => {
        return i === key
          ? square.map((item) => (item === 'square' ? 'tent' : item))
          : square;
      })
    };
  });
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
