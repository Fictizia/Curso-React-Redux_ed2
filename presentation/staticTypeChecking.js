import React from "react";
import { CodePane, Heading, List, ListItem, Text } from "spectacle";

export class StaticTypeChecking extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Chequeo estático de tipos
        </Heading>
        <Text>
          Te permite identificar ciertos problemas durante el tiempo de
          ejecución. Se recomienda para grandes proyectos el lugar de{" "}
          <i>PropTypes</i>.
        </Text>
        <List>
          <ListItem>Flow para anotar variables y funciones</ListItem>
          <ListItem>
            Typescript para programar con un lenguaje tipado, superset de
            Javascript.
          </ListItem>
        </List>
      </React.Fragment>
    );
  }
}
