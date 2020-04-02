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
        <Grid appleClick={this.appleClick} />
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
}

export default App;
