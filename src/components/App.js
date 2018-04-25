import React from "react";
import { Hero, Container, Title, Tabs } from "reactbulma";
import NavigationMenu from "./NavigationMenu";
import Login from "./Login";
import Subtitle from "reactbulma/lib/components/Title/Subtitle";

class App extends React.Component {
	constructor() {
		super();
		this.state = {}
	}

  render() {
    return (
      <Hero success fullheight>
        <Hero.Body>
          <Container>
            <Title>Welcome to Voucher App</Title>
            <Subtitle>Please login first to get started</Subtitle>
            <Login />
          </Container>
        </Hero.Body>
      </Hero>
    );
  }
}

export default App;
