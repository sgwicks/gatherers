import React from "react";
import Header from "./components/Header";
import "./App.css";
import Grid from "./components/Grid";
import Stockpile from "./components/Stockpile";

class App extends React.Component {
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

  render() {
    return (
      <div className="App">
        <Header />
        <Grid
          appleClick={this.appleClick}
          expandTent={this.expandTent}
          gridLayout={this.state.gridLayout}
          handleMouse={this.handleMouse}
        />
        <Stockpile stockpile={this.state.stockpile} />
      </div>
    );
  }

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
}

export default App;
