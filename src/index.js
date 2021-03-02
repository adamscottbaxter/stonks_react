import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { config } from './constants'
import axios from 'axios';

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      stocks: [],
      stockName: 'aapl',

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
    fetch(`https://stonks-python-api.herokuapp.com/yfin/${this.state.stockName}`)
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

  componentDidMount() {
    fetch('https://stonks-python-api.herokuapp.com/yfin/aapl')
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
    return (
      <div className="code">
        <form onSubmit={this.handleSubmit}>
          <label>
            Stock symbol:
            <input type="text" value={this.state.stockName} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h3>Current Price of {this.state.stockName}</h3>
        <ul>
          {this.state.stocks.map((stock, index) =>
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
