import React from "react";
import { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  render() {
    return <div className="counter">
      <button onClick={this.increment}>+1</button>
    <span className="count">0</span>
    </div>
  }

  increment() {
    console.log("incerement");
  }
}

export default Counter;
