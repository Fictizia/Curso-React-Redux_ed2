import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class Portals extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={3} caps textColor="quaternary">
          Portales
        </Heading>
        <Text>
          Los portales te permiten renderizar un componente en un nodo del DOM
          fuera de la jerarquía.
        </Text>

        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/portals.example")}
          margin="20px auto"
          overflow="overflow"
        />

        <a href="https://codepen.io/gaearon/pen/yzMaBd">Ejemplo</a>
      </React.Fragment>
    );
  }
}
