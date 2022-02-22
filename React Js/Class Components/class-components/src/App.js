import React, { Component, PureComponent } from "react";

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  render() {
    console.warn("checking Re-rending");
    return (
      <div>
        Pure Component in Class Components {this.state.count}
        <br />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update Count
        </button>
      </div>
    );
  }
}
