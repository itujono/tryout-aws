import React from "react";
import { NavLink, Link } from 'react-router-dom'
import { Nav, Container } from 'reactbulma'

const NavigationMenu = () => (
	<Container>
		<Nav>
			<Nav.Center>
				<NavLink to="/" activeClassName="is-active" exact={true} className="nav-item">Home</NavLink>
				<NavLink to="/voucherlist" activeClassName="is-active" className="nav-item">Voucher List</NavLink>
				<NavLink to="/addvoucher" activeClassName="is-active" className="nav-item">Add Voucher</NavLink>
				<NavLink to="/about" activeClassName="is-active" className="nav-item">About</NavLink>
			</Nav.Center>
		</Nav>
	</Container>
)

export default NavigationMenu;
