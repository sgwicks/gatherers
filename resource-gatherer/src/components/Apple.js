import React from "react";
import apple from "../Apple.png";

class Apple extends React.Component  {
  state = { }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.appleRot(this.props.i);
    }, 5000)
  }

  render() {
    return (
      <img
        src={apple}
        alt="apple"
        onClick={() => {this.props.appleClick(this.props.i)}}
        onMouseMove={this.props.handleMouse}
      />
    );
  }
};

export default Apple;
