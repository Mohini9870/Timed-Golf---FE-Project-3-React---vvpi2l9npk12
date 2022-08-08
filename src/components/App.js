import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0 };
     this.handleClick = this.handleClick.bind(this);
    this.clock = this.clock.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
  }
  handleEvent(event) {
    switch (event.keyCode) {
      case 37:
        this.setState({ x: this.state.x - 5 });
        // console.log("case ", this.state.x, this.state.y);
        break;
      case 38:
        this.setState({ y: this.state.y - 5 });
        // console.log("case ", this.state.x, this.state.y);
        break;
      case 39:
        this.setState({ x: this.state.x + 5 });
        // console.log("case ", this.state.x, this.state.y);
        break;
      case 40:
        this.setState({ y: this.state.y + 5 });
        // console.log("case ", this.state.x, this.state.y);
        break;
      default:
        break;
    }
    // console.log("case k bahar ", this.state.x, this.state.y);
  }
  handleClick() {
    if (this.state.time === 0) {
      document.addEventListener("keydown", this.handleEvent);
      this.timer = setInterval(() => {
        this.clock();
      }, 1000);
    }
  }
 
  componentDidMount() {
    
  }
 componentDidUpdate() {
    if (this.state.x === this.state.y && this.state.x === 250) {
      document.removeEventListener("keydown", this.handleEvent);
      clearInterval(this.timer);
    }
  }
  clock() {
    this.setState({ time: this.state.time + 1 });
  }
  componentWillUnmount() {
    
  }



  render() {
    return (
 <>
      <div
          className="ball"
          style={{
            left: this.state.x + "px",
            top: this.state.y + "px",
            position: "absolute",
          }}
        ></div>
        <div className="hole"></div>
        <h1 className="heading-timer">{this.state.time}</h1>
        <button className="start" onClick={this.handleClick}>
          start the game
        </button>
</>
    );
  }
}

export default Timer;
