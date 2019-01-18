import React from "react";
import { Heading, Text } from "spectacle";
import CodePane from "spectacle/es/components/code-pane";
import List from "spectacle/es/components/list";
import ListItem from "spectacle/es/components/list-item";

export class StrictMode extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Modo stricto
        </Heading>
        <Text>
          Con la etiqueta <i>React.StrictMode</i> podemos resaltar ciertos
          problemas de la aplicación. Sólo funciona en desarrollo y no tiene
          efecto sobre la visualización. Avisa de:
        </Text>
        <List>
          <ListItem>
            Ciclos incorrectos: <i>componentWillMount</i>
          </ListItem>
          <ListItem>APIs obsoletas.</ListItem>
          <ListItem>Detectando efectos secundarios inesperados.</ListItem>
        </List>
      </React.Fragment>
    );
  }
}
