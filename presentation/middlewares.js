import React from "react";
import { Heading, Text } from "spectacle";

export class Middlewares extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Middlewares
        </Heading>
        <Text>
          Capturan el flujo de acciones antes y después de llegar a los
          reducers.
        </Text>

        <div>
          <a href="https://jsbin.com/runuya/edit?js,console,output">Ejemplo </a>
        </div>
      </React.Fragment>
    );
  }
}
