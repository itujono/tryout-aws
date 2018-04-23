import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'
import AppRouter from './routes' 

const title = 'The Voucher App';

ReactDOM.render( <AppRouter />, document.getElementById('app') );




module.hot.accept();