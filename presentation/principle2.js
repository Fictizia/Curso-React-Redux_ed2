import React from "react";
import { Heading, Text } from "spectacle";

export class Principle2 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          II Principio
        </Heading>
        <Text>
          Para cambiar el estado debemos lanzar acciones, que son objetos planos
          Javascript.
        </Text>

        <div>
          <a href="https://jsbin.com/paruwi/edit?console,output">Ejemplo 1</a>
        </div>
        <div>
          <a href="https://jsbin.com/jurexir/edit?console,output">Ejemplo 2</a>
        </div>
      </React.Fragment>
    );
  }
}
