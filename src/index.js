import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

const title = 'The Voucher App';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();