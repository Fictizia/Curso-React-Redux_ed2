import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class CompletingWinner extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Determinando el ganador
        </Heading>
        <Text>
          Podemos usar la función 'calculateWinner' para determinar si hay un
          vencedor y modificar así la lógica de juego.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/completing-winner.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
