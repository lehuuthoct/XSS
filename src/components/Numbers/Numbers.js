import React, { Component } from "react";
import "./Numbers.css";
import Result from "./Result";

class Numbers extends Component {
  state = {
    numbers: "", // save input value
    results: [] // store results of the sum
  };

  handleNumberChange = e => {
    const { value } = e.target;
    console.log("value", value);
    // convert string value to array "12" => [1,2]
    const numbers = Array.from(value);

    // sum numbers from array [1,2] => 3
    const result = numbers.reduce((a, b) => Number(a) + Number(b), 0);

    // update local state
    this.setState({
      numbers: value,
      results: [...this.state.results, result]
    });
  };

  render() {
    return (
      <div className="Numbers">
        <input
          type="number"
          placeholder="please enter numbers"
          onChange={this.handleNumberChange}
        />
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
