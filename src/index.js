import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { config } from './constants'
import axios from 'axios';
import * as PyApi from './PyApi'

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      priceHistory: [],
      stockName: 'aapl',
      lastPrice: [],

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ stockName: event.target.value });
  }

  handleSubmit(event) {
    alert('A stock was submitted: ' + this.state.stockName);
    event.preventDefault();
    PyApi.getPrices(this.state.stockName)
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            priceHistory: result
          });
          console.log(result);
        },
      )
  }

  componentDidMount() {
    PyApi.getPrices('aapl')
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            priceHistory: result,
            lastPrice: result.slice(-1).pop()
          });
          console.log(result);
        },
      )
  }
  render() {
    return (
      <div className="code">
        <h1>Type in a stock symbol below to get the latest close price</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Stock symbol:
            <input type="text" value={this.state.stockName} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h3>Current Price of {this.state.stockName}</h3>
        <p>&&&still working on this&&&</p>
        <h3>Last 60 days of {this.state.stockName}</h3>
        <ul>
          {this.state.priceHistory.map((stock, index) =>
            <li key={index}>Date: {stock.Date} Close: {stock.Close}</li>
          )}
        </ul>
      </div>
    );
  }
}

// function Import() {
//   const [stocks, setStocks] = React.useState([]);
//   React.useEffect(() => {
//     axios.get(`https://stonks-python-api.herokuapp.com/yfin/aapl`)
//       .then(res => {
//         const newStocks = res.data;
//         setStocks(newStocks);
//         console.log(newStocks);
//       });
//   }, [])
//   return (
//     <div>
//       <h1>Please display the stock info!</h1>
//       <p>stock date and close price</p>
//       <ul>
//         {stocks.map((stock, index) =>
//           <li key={index}>Date: {stock.Date} Close: {stock.Close}</li>
//         )}
//       </ul>
//     </div>
//   );
// }


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
