import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class CompletingTurns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Turnos
        </Heading>
        <Text>
          Añadimos turnos al juego insertando una variable en el estado que
          indica a quién le toca poner ficha.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/completing-turns.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
