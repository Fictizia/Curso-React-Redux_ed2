import React from "react";
import { Heading, Text } from "spectacle";

export class Principle3 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          III Principio
        </Heading>
        <Text>
          Los cambios del estado se realizan en funciones puras llamadas{" "}
          <i>reducers</i> que toman como entrada el estado anterior y una acción
          y devuelven un nuevo estado.
        </Text>

        <a href="https://jsbin.com/yifufaz/edit?console,output">
          Ejemplo reducer
        </a>

        <div>
          <a href="https://jsbin.com/kawayiq/edit?js,console,output">
            Ejemplo Aplicación
          </a>
        </div>
      </React.Fragment>
    );
  }
}
