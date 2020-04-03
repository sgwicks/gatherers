import React from "react";
import apple from "../Apple.png";

class Apple extends React.Component  {

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.appleRot(this.props.i);
    }, 5000)
  }

  render() {
    return (
      <img
        className="apple-img"
        src={apple}
        alt="apple"
        onClick={() => {this.props.appleClick(this.props.i)}}
        onMouseMove={this.props.handleMouse}
      />
    );
  }
};

export default Apple;
