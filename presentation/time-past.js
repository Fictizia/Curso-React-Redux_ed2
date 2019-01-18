import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class TimePast extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Mostrando el histórico
        </Heading>
        <Text>
          Modifica el método render del componente Game para que muestre enlaces
          a los anteriores movimientos.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/time-past.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
