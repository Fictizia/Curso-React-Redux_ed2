import React from "react";
import { Heading, Text } from "spectacle";

export class Principle1 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          I Principio
        </Heading>
        <Text>
          El estado de una aplicación está representado por un único objeto
          plano Javascript.
        </Text>

        <div>
          <a href="https://jsbin.com/bugares/edit?console,output">Ejemplo 1</a>
        </div>
        <div>
          <a href="https://jsbin.com/gamaxeb/edit?console,output">Ejemplo 2</a>
        </div>
      </React.Fragment>
    );
  }
}
