import React, { Component } from 'react'
import './App.css';
import Search from './Search';
import Ticker from './Ticker';
import Price from './index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state = {
      searchSymbol: ''
    }
  }

  handleSearchChange(sym) {
    this.setState({ searchSymbol: sym })
  }

  render() {
    var displaySearchResults;
    var displayPrice;
    if (this.state.searchSymbol) {
      displaySearchResults = <Ticker symbol={this.state.searchSymbol} />
      displayPrice = <Price stockName={this.props.stockName} />
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            🚀🚀🚀 Stonks 🚀🚀🚀
          </h1>
          <Search searchSymbol={this.state.searchSymbol} onSearchChange={this.handleSearchChange} />
        </header>
        {displaySearchResults}
        {displayPrice}
      </div>
    );
  }
}

export default App;
