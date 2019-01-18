import React from "react";
import { Heading, Text } from "spectacle";

export class Lists extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Listas y claves
        </Heading>
        <Text>Siempre se reduce a la función map (es6) sobre un array.</Text>
        <a href="https://codepen.io/gaearon/pen/BLvYrB?editors=0010">Ejemplo</a>
        <Text>A tener en cuenta: usa siempre una Key única</Text>
      </React.Fragment>
    );
  }
}
