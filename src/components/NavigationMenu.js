import React from "react";
import { NavLink } from 'react-router-dom'
import { Nav, Container } from 'reactbulma'

const NavigationMenu = () => (
	<Nav>
		<Nav.Center>
			<NavLink to="/" activeClassName="is-active" exact={true} className="nav-item">Home</NavLink>
			<NavLink to="/voucherlist" activeClassName="is-active" className="nav-item">Voucher List</NavLink>
			<NavLink to="/about" activeClassName="is-active" className="nav-item">About</NavLink>
		</Nav.Center>
	</Nav>
)

export default NavigationMenu;
