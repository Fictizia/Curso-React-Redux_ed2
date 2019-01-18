import React from "react";
import { Heading, Text } from "spectacle";
import ListItem from "spectacle/es/components/list-item";
import List from "spectacle/es/components/list";

export class Reconciliation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Reconciliación
        </Heading>
        <Text>
          Como programador, no tienes que preocuparte de la actualización del
          árbol. Pero es bueno conocer cómo funciona el algoritmo.
        </Text>
        <Text>Entre dos nodos....</Text>
        <List>
          <ListItem>
            Si son diferentes, repintará todos los hijos.
            ComponentWillUnmount...
          </ListItem>
          <ListItem>Si son iguales, solo actualizará propiedades.</ListItem>
        </List>
      </React.Fragment>
    );
  }
}
