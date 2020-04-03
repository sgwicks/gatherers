import React from "react";
import Header from "./components/Header";
import "./App.css";
import Grid from "./components/Grid";

class App extends React.Component {
  

  render() {
    return (
      <div className="App">
        <Header />
        <Grid />
      </div>
    );
    }
}

export default App;
