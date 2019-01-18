import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class TimeKey extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Eligiendo una clave
        </Heading>
        <Text>Imagina tener que sustituir este HTML.</Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/time-key-1.example")}
          margin="20px auto"
          overflow="overflow"
        />
        <Text>Por este otro.</Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/time-key-2.example")}
          margin="20px auto"
          overflow="overflow"
        />

        <Text>Modifica entonces tu método render para incluir una clave.</Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/time-key-3.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
