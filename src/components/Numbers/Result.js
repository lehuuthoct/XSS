import React, { PureComponent } from "react";
/* 
  Pure Component performs a shallow comparison for the props and nextProps objects 
  as well as the state and nextState objects
*/
class Result extends PureComponent {
  render() {
    return <li>{this.props.result}</li>;
  }
}

export default Result;
