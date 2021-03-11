import React, { Component } from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchSym: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({searchSym: event.target.value})
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.searchSym);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.searchSym} onChange={this.handleChange} />
      </form>
    )
  }
}

  export default Search;
