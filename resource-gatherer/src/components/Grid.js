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
            expandTent={this.expandTent}
            key={i}
            apple={square[1]}
            appleClick={this.appleClick}
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



  appleClick = key => {
    if (this.state.targetParent === "grid-tent") {
      this.setState(currentState => {
        return { 
          stockpile: currentState.stockpile + 1,
          gridLayout: currentState.gridLayout.map((square, i) => {
            return i === key
            ? [square[0]]
            : square
          })
         };
      });
    }
  };

  expandTent = key => {
    if (this.state.stockpile > 0 && this.state.target === 'grid-square') {
      this.setState(currentState => {
        return {
          stockpile: currentState.stockpile - 1,
          gridLayout: currentState.gridLayout.map((square, i) => {
            return i === key
            ? square.map(item => item === 'square' ? 'tent' : item)
            : square;
          })
        };
      });
    }
  };
};

export default Grid;