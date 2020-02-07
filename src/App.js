import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 0,
    errorMessage: false
  };

  onIncrement = () => {
    this.setState(({ counter }) => {
      return {
        counter: counter + 1,
        errorMessage: false
      };
    });
  };

  onDecrement = () => {
    this.setState(({ counter }) => {
      if (counter === 0) {
        return {
          counter,
          errorMessage: true
        };
      }
      return {
        counter: counter - 1
      };
    });
  };

  render() {
    const displayText = !this.state.errorMessage ? (
      <>The country is correctly {this.state.counter}</>
    ) : (
      <> the country can't go bellow zero </>
    );

    return (
      <div data-test="app-component">
        <h1 data-test="counter-display">{displayText}</h1>
        <button data-test="increment-button" onClick={this.onIncrement}>
          Increment counter
        </button>

        <button data-test="decrement-button" onClick={this.onDecrement}>
          Dencrement counter
        </button>
      </div>
    );
  }
}

export default App;
