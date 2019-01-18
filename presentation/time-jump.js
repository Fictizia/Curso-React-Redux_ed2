import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class TimeJump extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Fijando un momento concreto
        </Heading>
        <Text>
          Inserta en el estado la variable 'stepNumber' para indicar el turno
          actual en el que estamos. Implementa también la función 'jumpTo'.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/time-jump.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
