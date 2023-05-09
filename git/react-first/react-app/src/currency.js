import React, { Component } from 'react';

class Currency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 3,
      currency: 'AMD'
    };
  }

  handleCurrencyChange = () => {
    const { price, currency } = this.state;
    if (currency === 'AMD') {
      this.setState({
        price: price * 500,
        currency: 'USD'
      });
    } else {
      this.setState({
        price: price / 500,
        currency: 'AMD'
      });
    }
  }

  render() {
    const { price, currency } = this.state;
    return (
      <div>
        <p>name: banana, price: 3$ {price} {currency}</p>
        <button onClick={this.handleCurrencyChange}>Change Currency</button>
      </div>
    );
  }
}

export default Currency;
