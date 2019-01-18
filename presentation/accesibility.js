import React from "react";
import { CodePane, Heading, List, ListItem, Text } from "spectacle";

export class Accesibility extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Accesibilidad
        </Heading>
        <Text>
          React soporta construir sitios web accesibles, habitualmente usando
          técnicas estandard HTML.
        </Text>

        <Text>aria-* es soportado.</Text>
      </React.Fragment>
    );
  }
}
