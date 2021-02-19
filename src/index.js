import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { config } from './constants'

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      stocks: [],

    };
  }

  componentDidMount() {
    fetch(config.url.API_URL + "/yfin/aapl")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            stocks: result
          });
          console.log(result);
        },
      )
  }
  render() {
    const { stocks } = this.state;
    return (
      <div className="code">
        <h3>Current Price of </h3>
        <h4>{stocks}</h4>
      </div>
    );
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Price />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
