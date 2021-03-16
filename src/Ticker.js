import React, { Component } from 'react'

class Ticker extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <h3>
          Searching for: {this.props.symbol}
      </h3>
    );
  }
}

  export default Ticker;
