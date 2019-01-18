import React from "react";
import { Heading, Text } from "spectacle";
import List from "spectacle/es/components/list";
import ListItem from "spectacle/es/components/list-item";

export class Lifecicle extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          El ciclo de vida
        </Heading>
        <Text>
          Cada componente es en sí una máquina de estados. Puedes capturar el
          cambio de estado.
        </Text>
        <List>
          <ListItem>constructor</ListItem>
          <ListItem>componentDidMount</ListItem>
          <ListItem>componentDidUpdate</ListItem>
          <ListItem>componentWillUnmount</ListItem>
        </List>
        <Text>
          <a href="http://codepen.io/gaearon/pen/amqdNA?editors=0010">
            Ejemplo
          </a>
        </Text>
      </React.Fragment>
    );
  }
}
