import React from "react";
import Header from "./components/Header";
import "./App.css";
import Grid from "./components/Grid";
import Stockpile from "./components/Stockpile";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid />
        <Stockpile />
      </div>
    );
  }

  appleClick = () => {};
}

export default App;
