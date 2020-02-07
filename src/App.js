import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 0
  };

  onCounterClick = () => {
    this.setState(({ counter }) => {
      return {
        counter: counter + 1
      };
    });
  };

  render() {
    return (
      <div data-test="app-component">
        <h1 data-test="counter-display">
          The country is correctly{this.state.counter}
        </h1>
        <button data-test="increment-button" onClick={this.onCounterClick}>
          Increment counter
        </button>
      </div>
    );
  }
}

export default App;
