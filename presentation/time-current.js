import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class TimeCurrent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Mostrando el turno concreto
        </Heading>
        <Text>
          Por último, haz algunos cambios para mostrar y modificar el turno
          seleccionado, y no el último turno como hasta ahora.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/time-current.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
