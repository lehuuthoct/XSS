import React, { Component } from "react";

class Animation extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }
  toggleCollapse = () => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <div>
        Animation
        <button onClick={this.toggleCollapse}>
          Toggle {this.state.show ? "Collapse" : "Expand"}
        </button>
      </div>
    );
  }
}

export default Animation;
