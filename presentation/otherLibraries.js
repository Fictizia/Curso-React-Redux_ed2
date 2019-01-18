import React from "react";
import { Heading, Text } from "spectacle";
import List from "spectacle/es/components/list";
import ListItem from "spectacle/es/components/list-item";
import CodePane from "spectacle/es/components/code-pane";

export class OtherLibraries extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={2} fit caps textColor="quaternary">
          Integrando otras librerías
        </Heading>
        <Text>Depende de la librería.</Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/libraries.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
