import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Price extends React.Component {
  render() {
    return (
      <div className="code">
        <h3>Current Price of </h3>
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
