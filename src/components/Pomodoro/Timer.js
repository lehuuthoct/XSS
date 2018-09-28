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

  setTimeForWork = () => {
    this.setState({
      alert: {
        type: 'working',
        message: 'Working!'
      }
    });
    return this.setTime(this.times.defaultTime);
  }

  setTimeForShortBreak = () => {
    this.setState({
      alert: {
        type: 'shortBreak',
        message: 'Taking a short break'
      }
    });

    return this.setTime(this.times.shortBreak);
  }

  setTimeForLongBreak = () => {
    this.setState({
      alert: {
        type: 'longBreak',
        message: 'Taking a Long break'
      }
    });

    return this.setTime(this.times.longBreak);
  }

  setTime = newTime => {
    this.restartInterval();

    this.setState({
      time: newTime
    })
  }

  restartInterval = () => {
    // clear interval
    clearInterval(this.interval);

    // execute counting down every 1s
    this.interval = setInterval(this.countDown, 1000);
  }

  countDown = () => {
    // display 'Buzz' when time reaches 0
    console.log(this.state.time);

    if (this.state.time === 0) {
      this.setState({
        alert: {
          type: 'buz',
          message: 'Buzzzzz!'
        }
      });
    } else {
      // decrease time by 1s 
      this.setState({
        time: this.state.time - 1
      });
    }
  }

  displayTimer = seconds => {
    // format time to mm:ss
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 3600 % 60);
    const formattedMsg = ` ${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    return formattedMsg;
  }


  render() {
    const { alert: { message, type }, time } = this.state;

    return (
      <div className="Pomodoro">
        Timer
        {/* init message */ }
        <div className={ `alert ${type}` }>
          { message }
        </div>
        {/* init timer  */ }
        {/* init types */ }
        <div className='types'>
          <button
            className='start'
            onClick={ this.setTimeForWork }
          >
            Start Working
        </button>
          <button
            className='short'
            onClick={ this.setTimeForShortBreak }
          >
            Short Break
        </button>
          <button
            className='long'
            onClick={ this.setTimeForLongBreak }
          >
            Long Break
        </button>
        </div>
      </div>
    )
  }
}

export default Timer; 