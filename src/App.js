import React, { Component } from "react";
import Button from "./components/Button";
import "./App.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  state = {
    count: 0
  };

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="app">
        <h1>Counter App</h1>
        <div>
         
          <input
          type="text"
          value={this.state.count}
          onChange={(e) => this.setState({ count: Number(e.target.value) ? Number(e.target.value) : this.state.count })}
          />
          <Button title={"-"} action={this.decrementCount} />
          <Button title={"+"} action={this.incrementCount} />
        </div>
      </div>
    );
  }
}
