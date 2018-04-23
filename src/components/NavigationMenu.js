import React from "react";
import { NavLink, Link } from 'react-router-dom'

const NavigationMenu = () => (
	<ul>
		<li> <NavLink to="/" exact={true}>Home</NavLink> </li>
		<li> <NavLink to="/voucherlist">Voucher List</NavLink> </li>
		<li> <NavLink to="/addvoucher">Add Voucher</NavLink> </li>
		<li> <NavLink to="/about">About</NavLink> </li>
	</ul>
)

export default NavigationMenu;
