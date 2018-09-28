import React, { Component } from "react";
import Chart from "./Chart";

class ChartContainer extends Component {
  constructor() {
    super();
    this.state = { chartType: "line" };
    this.columns = [
      ["BTC", 3000, 6000, 10000, 15000, 13000, 11000],
      ["ETH", 2000, 3000, 5000, 4000, 3000, 940],
      ["XRP", 100, 200, 300, 500, 400, 300]
    ];
  }

  setBarChart = () => {
    console.log("init setBarChart");
    this.setState({
      chartType: "bar"
    });
  };

  setLineChart = () => {
    console.log("init setLineChart");
    this.setState({
      chartType: "line"
    });
  };

  render() {
    console.log("state", this.state);
    return (
      <div>
        Chart Container
        <Chart columns={this.columns} chartType={this.state.chartType} />
        <p>
          Chart Type
          <button onClick={this.setBarChart}>Bar</button>
          <button onClick={this.setLineChart}>Line</button>
        </p>
      </div>
    );
  }
}

export default ChartContainer;
