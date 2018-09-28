import React, { Component } from "react";

class Timer extends Component {

  constructor() {
    super()
    // init initial state
    this.state = {
      alert: {
        type: '',
        message: ''
      },
      timer: 0
    }
    // init times for work, short|long break
    this.times = {
      defaultTime: 1500, // 25 min
      shortBreak: 300, // 5 min
      longBreak: 900, // 15 min
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="Pomodoro">
        Timer
      </div>
    )
  }
}

export default Timer; 