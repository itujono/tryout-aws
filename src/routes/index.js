import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import About from '../components/About'
import App from '../components/App'
import VoucherList from '../components/VoucherList'
import AddVoucher from '../components/AddVoucher'



const AppRouter = () => (

    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component=""/>
                <Route path="/" component=""/>
                <Route path="/" component=""/>
                <Route path="/about" component={About}/>
            </Switch>
        </div>
    </BrowserRouter>

)