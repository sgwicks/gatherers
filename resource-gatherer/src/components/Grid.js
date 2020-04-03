import React from "react";
import GridSquare from "./GridSquare";
import Stockpile from "./Stockpile";

class Grid extends React.Component {
  state = {
    stockpile: 1,
    gridLayout: [
      ["square"],
      ['square', "apple"],
      ["square"],
      ["square"],
      ["square"],
      ["square"],
      ['square', "apple"],
      ['square', "apple"],
      ["square"],
      ["square"],
      ["square"],
      ['square', "apple"],
      ['tent'],
      ['square', "apple"],
      ["square"],
      ["square"],
      ["square"],
      ['square', "apple"],
      ['square', "apple"],
      ["square"],
      ["square"],
      ["square"],
      ['square', "apple"],
      ['square', "apple"],
      ['square', "apple"]
        ],
    target: "",
    targetParent: ""
  };

  componentDidMount() {
    this.appleTimer = setInterval(() => {
      const key = Math.floor(Math.random()*25)
      this.appleSpawn(key)
    }, 1000);
  }

  render()
  {
  return (
    <>
    <div className="grid">
      {this.state.gridLayout.map((square, i) => {
        return (
          <GridSquare
            i={i}
            handleMouse={this.handleMouse}
            className={`grid-${square[0]}`}
            tentClick={this.tentClick}
            key={i}
            apple={square[1]}
            appleClick={this.appleClick}
            appleRot={this.appleRot}
          />
          
        );
      })}
    </div>
    <Stockpile stockpile={this.state.stockpile}/>
    </>
  );}

  handleMouse = event => {
    this.setState({
      target: event.target.className,
      targetParent: event.target.parentNode.className
    });
  };

// Handle stockpile events

  updateStockpile = (num) => {
    this.setState(currentState => {
      return {stockpile: currentState.stockpile + num}
    })
  };

// Handle apple events

  appleClick = key => {
    if (this.state.targetParent === "grid-tent") {
      this.updateStockpile(1)
      this.appleRot(key)
    }
  };

  appleRot = (key) => {
    this.setState(currentState => {
      return { 
        gridLayout: currentState.gridLayout.map((square, i) => {
          return i === key
          ? [square[0]]
          : square
        })
       };
    });
  };

  appleSpawn = (key) => {
    this.setState(currentState => {
      return { 
        gridLayout: currentState.gridLayout.map((square, i) => {
          return i === key
          ? [square[0], 'apple']
          : square
        })
       };
    });
  };
  

// Handle tent events

  tentClick = (key) => {
    if (this.state.stockpile > 0 && this.state.target === 'grid-square') {
      this.updateStockpile(-1)
      this.expandTent(key)
    }
  };

  expandTent = key => {
      this.setState(currentState => {
        return {
          gridLayout: currentState.gridLayout.map((square, i) => {
            return i === key
            ? square.map(item => item === 'square' ? 'tent' : item)
            : square;
          })
        };
      });
  };

};

export default Grid;