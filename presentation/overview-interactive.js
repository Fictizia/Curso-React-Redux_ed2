import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class OverviewInteractive extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Interactuando
        </Heading>
        <Text>
          Cambia el componente Square para reaccionar al evento click.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/overview-interactive.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
