import React from "react";
import { Heading, Text } from "spectacle";
import List from "spectacle/es/components/list";
import ListItem from "spectacle/es/components/list-item";

export class State extends React.Component {
  render() {
	  return (
	  <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Estado
        </Heading>
		  <Text>Cada componente (de tipo clase) puede tener su propio estado.</Text>

		  <List>
			  <ListItem>No debe modificarse con this.state = ...</ListItem>
			  <ListItem>Es independiente de padres e hijos</ListItem>
		  </List>
        <Text><a href="https://codepen.io/gaearon/pen/KgQpJd?editors=0010">Ejemplo</a></Text>
      </React.Fragment>
    );
  }
}