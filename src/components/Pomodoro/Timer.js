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
      time: 0
    }
    // init times for work, short|long break
    this.times = {
      defaultTime: 1500, // 25 min
      shortBreak: 300, // 5 min
      longBreak: 900, // 15 min
    }
  }

  componentDidMount() {
    // init default time for component
    this.setDefaultTime();
  }

  setDefaultTime() {
    // init default time to 25 min
    this.setState({
      time: this.times.defaultTime
    })
  }

  render() {
    return (
      <div className="Pomodoro">
        Timer
        {/* init message */ }
        {/* init timer  */ }
        {/* init types */ }
        <div className='types'>
          <button
            className='start'
          >
            Start Working
        </button>
          <button
            className='short'
          >
            Short Break
        </button>
          <button
            className='long'
          >
            Long Break
        </button>
        </div>
      </div>
    )
  }
}

export default Timer; 