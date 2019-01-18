import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class CompletingImmutability extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Inmutabilidad del estado
        </Heading>
        <Text>
          ¿Cómo podría detectar React los cambios si las referencias no cambian?
        </Text>
        <Text>Código que muta variables</Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/completing-immutability-1.example")}
          margin="20px auto"
          overflow="overflow"
        />
        <Text>Código que no muta variables</Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/completing-immutability-2.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
