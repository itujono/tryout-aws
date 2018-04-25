import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'
import AppRouter from './routes'
import './styles/style.scss'

const title = 'The Voucher App';

ReactDOM.render( <AppRouter />, document.getElementById('app') );




module.hot.accept();