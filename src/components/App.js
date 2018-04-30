import React from "react";
import { Hero, Container, Title, Field, Control, Input, Button, Tabs } from "reactbulma";
import NavigationMenu from "./NavigationMenu";
import Login from "./Login";
import users from '../db/users.json'
import Subtitle from "reactbulma/lib/components/Title/Subtitle";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			users
		}

    	this.handleLogin = this.handleLogin.bind(this)
  	}
  
	handleLogin(username, password) {
		if (username && password) {
			if (username.includes("user")) alert("User!")
			else if (username.includes("admin")) alert("Admin!")
		}
	}

	render() {
		return (
			<Hero success fullheight>
				<Hero.Body>
					<Container>
						<Title>Welcome to Voucher App</Title>
						<Subtitle>Please login first to get started</Subtitle>
						<Login handleLogin={this.handleLogin} username={this.state.users.map(user => user.username)} password={this.state.users.map(user => user.password)} />
					</Container>
				</Hero.Body>
			</Hero>
		);
	}
}

export default App;
