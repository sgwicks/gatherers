import React from "react";
import Header from "./components/Header";
import "./App.css";
import Grid from "./components/Grid";
import Stockpile from "./components/Stockpile";

class App extends React.Component {
  state = {
    stockpile: 1
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Grid appleClick={this.appleClick} expandTent={this.expandTent} />
        <Stockpile stockpile={this.state.stockpile} />
      </div>
    );
  }

  appleClick = event => {
    this.setState(currentState => {
      return { stockpile: currentState.stockpile + 1 };
    });
    event.target.parentNode.innerHTML = "";
  };

  expandTent = event => {
    if (this.state.stockpile > 0 && event.target.className !== "grid-tent") {
      this.setState(currentState => {
        return { stockpile: currentState.stockpile - 1 };
      });
      event.target.className = "grid-tent";
    }
  };
}

export default App;
