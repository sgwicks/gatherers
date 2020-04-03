import React from "react";
import GridSquare from "./GridSquare";
import Stockpile from "./Stockpile";

class Grid extends React.Component {
  state = {
    stockpile: 1,
    gridLayout: [
      ["square"],
      ['square'],
      ["square"],
      ["square"],
      ["square"],
      ["square"],
      ['square'],
      ['square'],
      ["square"],
      ["square"],
      ["square"],
      ['square'],
      ['square'],
      ['square'],
      ["square"],
      ["square"],
      ["square"],
      ['square'],
      ['square'],
      ["square"],
      ["square"],
      ["square"],
      ['square'],
      ['square'],
      ['square']
        ],
    target: "",
    targetParent: ""
  };

  componentDidMount() {
    const startSquare = Math.floor(Math.random()*25);

    this.expandTent(startSquare);
    this.appleSpawn(startSquare);

    this.stockpileTimer = setInterval(() => {
      this.updateStockpile(-1)
    }, 10000);

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
            tentCollapse={this.tentCollapse}
          />
          
        );
      })}
    </div>
    <Stockpile stockpile={this.state.stockpile} />
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
    if(this.state.stockpile > 0) {
      this.setState(currentState => {
        return {stockpile: currentState.stockpile + num}
      }, () => {
        this.stockpileEmpty()
      })
    }
  };

  stockpileEmpty = () => {
    if (!this.state.stockpile) this.setState({stockpile: 'YOU LOSE'})
  }

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

  tentCollapse = key => {
    this.setState(currentState => {
      return {
        gridLayout: currentState.gridLayout.map((square, i) => {
          return i === key
          ? square.map(item => item === 'tent' ? 'square' : item)
          : square;
        })
      };
    });
  }

};

export default Grid;