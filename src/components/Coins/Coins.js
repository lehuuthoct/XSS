import React, { Component } from 'react';

class Coins extends Component {
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

        </div>


      </div>
    )
  }
}

export default Coins;