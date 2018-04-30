import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import { Section } from 'reactbulma'
import About from '../components/About'
import App from '../components/App'
import VoucherList from '../components/VoucherList'
import AddVoucher from '../components/AddVoucher'
import VoucherListUser from '../components/VoucherListUser'
import NavigationMenu from '../components/NavigationMenu'



const AppRouter = () => (
    <BrowserRouter>
        <Section>
            <NavigationMenu />
            <Switch>
                <Route path="/" component={App} exact={true}/>
                <Route path="/voucherlist" component={VoucherList} />
                <Route path="/addvoucher" component={AddVoucher} />
                <Route path="/user/voucherlist" component={VoucherListUser}/>
                <Route path="/about" component={About}/>
            </Switch>
        </Section>
    </BrowserRouter>
)


export default AppRouter