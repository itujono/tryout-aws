import React from "react";
import { Hero, Container, Title, Tabs } from "reactbulma";
import NavigationMenu from "./NavigationMenu";

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	
	render() {
		return (
			<Hero success fullheight>
				<Hero.Body>
					<Container>
						<Title>Sempardak Sungguh</Title>
					</Container>
				</Hero.Body>
				<Hero.Foot>
					<Tabs>
						<Container>
							<NavigationMenu />
						</Container>
					</Tabs>
				</Hero.Foot>
			</Hero>
		);
	}
}

export default App;
