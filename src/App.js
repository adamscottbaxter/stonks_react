import React, { Component } from 'react'
import './App.css';
import Search from './Search';
import Ticker from './Ticker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state = {
      searchSymbol: ''
    }
  }

  handleSearchChange(sym) {
    this.setState({searchSymbol: sym})
  }

  render() {
    var displaySearchResults;
    if (this.state.searchSymbol) {
      displaySearchResults = <Ticker symbol={this.state.searchSymbol} />
    } else {
      displaySearchResults = <h3>no search</h3>
    }
    return (
      <div className="App">
        <header className="App-header">
          <p>
            🚀🚀🚀🚀🚀 stonks 🚀🚀🚀🚀🚀
          </p>
          <Search searchSymbol={this.state.searchSymbol} onSearchChange={this.handleSearchChange} />
        </header>
        {displaySearchResults}
      </div>
    );
  }
}

export default App;
