import React, { Component } from "react";

class Numbers extends Component {
  render() {
    return (
      <div>
        Numbers
        <input placeholder="please enter numbers" />
        {/* result */}
        <ul>
          {this.state.results.map((result, key) => {
            <Result key={key} result={result} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Numbers;
