import React from "react";
import Header from "./components/Header";
import "./App.css";
import Grid from "./components/Grid";
import Stockpile from "./components/Stockpile";

class App extends React.Component {
  state = {
    stockpile: 1,
    gridLayout: [
      [1, 1],
      [1, 2, "apple"],
      [1, 3],
      [1, 4],
      [1, 5],
      [2, 1],
      [2, 2, "apple"],
      [2, 3, "apple"],
      [2, 4],
      [2, 5],
      [3, 1],
      [3, 2, "apple"],
      [3, 4, "apple"],
      [3, 5],
      [4, 1],
      [4, 2],
      [4, 3, "apple"],
      [4, 4, "apple"],
      [4, 5],
      [5, 1],
      [5, 2],
      [5, 3, "apple"],
      [5, 4, "apple"],
      [5, 5, "apple"]
    ]
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Grid
          appleClick={this.appleClick}
          expandTent={this.expandTent}
          gridLayout={this.state.gridLayout}
        />
        <Stockpile stockpile={this.state.stockpile} />
      </div>
    );
  }

  appleClick = event => {
    if (event.target.parentNode.className === "grid-tent") {
      this.setState(currentState => {
        return { stockpile: currentState.stockpile + 1 };
      });
      event.target.parentNode.innerHTML = "";
    }
  };

  expandTent = event => {
    if (this.state.stockpile > 0 && event.target.className === "grid-square") {
      this.setState(currentState => {
        return { stockpile: currentState.stockpile - 1 };
      });
      event.target.className = "grid-tent";
    }
  };
}

export default App;
