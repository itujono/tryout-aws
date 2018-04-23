import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import About from '../components/About'
import App from '../components/App'
import VoucherList from '../components/VoucherList'
import AddVoucher from '../components/AddVoucher'
import NavigationMenu from '../components/NavigationMenu'



const AppRouter = () => (

    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={App} exact={true}/>
                <Route path="/voucherlist" component={VoucherList} />
                <Route path="/addvoucher" component={AddVoucher} />
                <Route path="/about" component={About}/>
            </Switch>
            <NavigationMenu />
        </div>
    </BrowserRouter>
)


export default AppRouter