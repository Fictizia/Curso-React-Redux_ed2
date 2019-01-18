import React from "react";
import { Heading, Text } from "spectacle";

export class Lifting extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Subiendo el estado
        </Heading>
        <Text>Debe haber un único punto de verdad.</Text>
        <Text>
          Muchas veces tenemos que compartir el estado entre varios componentes.
          Buscamos{" "}
          <a href="https://codepen.io/gaearon/pen/ZXeOBm?editors=0010">
            el padre más cercano
          </a>
          .
        </Text>
        <Text>Psss! Este es el motivo del nacimiento de Redux.</Text>
      </React.Fragment>
    );
  }
}
