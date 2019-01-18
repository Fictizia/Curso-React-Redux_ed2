import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class Pure extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Funciones puras
        </Heading>
        <Text>Deterministas, sin efectos secundarios.</Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/pure.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
