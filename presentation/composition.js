import React from "react";
import { Heading, Text } from "spectacle";

export class Composition extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Composición vs Herencia
        </Heading>
        <Text>
          En programación orientada a objetos, la reutilización se realiza con
          composición frente a la herencia.
        </Text>
        <Text>
          Utilizamos propiedades y la propiedad <i>children</i>.{" "}
          <a href="https://codepen.io/gaearon/pen/ozqNOV?editors=0010">
            Ejemplo
          </a>
          .
        </Text>
      </React.Fragment>
    );
  }
}
