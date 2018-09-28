import React, { Component } from 'react';

class Coins extends Component {

  constructor() {
    super();
    // init initial state
    this.state = {
      dollars: 0
    }
  }

  // only update UI if dollars are multiples of 10
  shouldComponentUpdate(props, state) {
    return state.dollars % 10 === 0;
  }

  handleOnChange = e => {
    this.setState({
      dollars: Number(e.target.value || 0)
    });
  }

  render() {
    return (
      <div className='Coins'>

        <h1>Buy Crypto Coins Application</h1>

        {/* question  */ }
        <div className='question'>
          <p> How much dollars you would like to exchange for coins?</p>
          <p>
            <input
              placeholder='0'
              onChange={ this.handleOnChange }
              type='text'
            />
          </p>
        </div>

        {/* answer */ }
        <div className='answer'>
          <p>Crypto coin price: $10</p>
          <p>
            You can buy <strong> { this.state.dollars / 10 }</strong> coins
          </p>

        </div>


      </div>
    )
  }
}

export default Coins;