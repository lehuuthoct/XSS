import React, { Component } from "react";
import Result from "./Result";

class Numbers extends Component {
  state = {
    numbers: "", // save input value
    results: [] // store results of the sum
  };

  render() {
    return (
      <div>
        Numbers
        <input placeholder="please enter numbers" />
        {/* result */}
        <ul>
          {this.state.results.map((result, key) => (
            <Result key={key} result={result} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Numbers;
