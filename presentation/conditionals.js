import React from "react";
import { Heading, Text } from "spectacle";
import List from "spectacle/es/components/list";
import ListItem from "spectacle/es/components/list-item";

export class Conditionals extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Renderizado condicional
        </Heading>
        <Text>Existen 4 formas de renderizado condicional:</Text>

        <List>
          <ListItem>Variables</ListItem>
          <ListItem>Condicionales en linea</ListItem>
          <ListItem>Operador &&</ListItem>
          <ListItem>Componentes que devuelven null</ListItem>
        </List>

        <a href="https://codepen.io/gaearon/pen/Xjoqwm?editors=0010">Ejemplo</a>
      </React.Fragment>
    );
  }
}
