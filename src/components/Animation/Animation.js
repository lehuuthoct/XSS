import React, { Component } from "react";

class Animation extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  componentWillUpdate(newProps, newState) {
    console.log("newProps", newProps, newState);
    if (!newState.show) {
      document.getElementById("fade").style = "opacity: 1";
    } else {
      document.getElementById("fade").style = "opacity: 0";
    }
  }

  toggleCollapse = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <div className="Animation">
        {/* Toggle Animation */}
        <button onClick={this.toggleCollapse}>
          Toggle {this.state.show ? "Collapse" : "Expand"}
        </button>

        {/* Text */}
        <div
          id="fade"
          className={this.state.show ? "transition show" : "transition"}
        >
          Text will disappear
        </div>
      </div>
    );
  }
}

export default Animation;
