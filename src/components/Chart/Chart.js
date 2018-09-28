import c3 from "c3";
import React, { Component } from "react";

class Chart extends Component {
  componentDidMount() {
    // update chart when component is mounted
    this.updateChart();
  }

  updateChart() {
    c3.generate({
      bindto: "#chart",
      data: {
        columns: this.props.columns,
        type: this.props.chartType
      }
    });
  }

  render() {
    return <div id="chart" />;
  }
}

export default Chart;
