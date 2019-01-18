import React from "react";
import { Heading, Text } from "spectacle";
import CodePane from "spectacle/es/components/code-pane";

export class Context extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Contexto
        </Heading>
        <Text>
          Diseñado para compartir el estado entre todo el arbol de componentes.
        </Text>
        <Text>Peligroso. Preferible usar composición o Redux.</Text>

        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/context.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
