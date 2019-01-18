import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class CompletingLifting extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Llevando el estado hacia arriba
        </Heading>
        <Text>
          Modifica Board para que tenga el estado de los cuadrados y borra el
          estado del componente Square.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/completing-lifting.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
