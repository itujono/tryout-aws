import React from "react";
import { Hero, Container, Title, Field, Control, Input, Button, Tabs } from "reactbulma";
import NavigationMenu from "./NavigationMenu";
import Login from "./Login";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import users from '../db/users.json'
import Subtitle from "reactbulma/lib/components/Title/Subtitle";

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			users,
			isLoggedIn: false,
			user: false,
			admin: false
		}

    	this.handleLogin = this.handleLogin.bind(this)
  	}

	handleLogin(username, password) {
		const role = this.state.users.map(user => user.role)
		if (username && password) {
			if (username.includes("user")) this.setState(() => ({ isLoggedIn: true, user: true }))
			else if (username.includes("admin")) this.setState(() => ({ isLoggedIn: true, admin: true }))
		} else return "I don't think you are registered. Please double-check everything."
	}

	render() {
		const { from } = this.props.location.state || { from: { pathname: this.state.user ? "/user/voucherlist" : "/voucherlist" } }

		if (this.state.isLoggedIn) return <Redirect to={from} />

		return (
			<Hero success fullheight>
				<Hero.Body>
					<Container>
						<Title>Welcome to Voucher App</Title>
						<Subtitle>Please login first to get started</Subtitle>
						<Login
							handleLogin={this.handleLogin}
							username={this.state.users.map(user => user.username)}
							password={this.state.users.map(user => user.password)}
						/>
					</Container>
				</Hero.Body>
			</Hero>
		);
	}
}

export default App;
