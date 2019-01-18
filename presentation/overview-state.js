import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class OverviewState extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          El Estado
        </Heading>
        <Text>
          Cambia de nuevo Square para que tenga un estado y este cambie al
          pulsar el botón.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/overview-state.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
