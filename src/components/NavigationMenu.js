import React from "react";
import { BrowserRoute, Route, Switch, NavLink } from 'react-router-dom'

const NavigationMenu = () => (
	<ul>
		<li className="active">
			<a>Voucher List</a>
		</li>
		<li>
			<a>My Voucher</a>
		</li>
		<li>
			<a>Add Voucher</a>
		</li>
		<li>
			<a>About</a>
		</li>
	</ul>
)

export default NavigationMenu;
