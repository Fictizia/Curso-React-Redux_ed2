import React from "react";
import { Heading, Text } from "spectacle";
import List from "spectacle/es/components/list";
import ListItem from "spectacle/es/components/list-item";
import CodePane from "spectacle/es/components/code-pane";

export class Refs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={4} caps textColor="quaternary">
          Ref y el DOM
        </Heading>
        <Text>
          Refs te permiten acceder directamente el elemento DOM que se creó
          durante la fase de render.
        </Text>

        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/refs.example")}
          margin="20px auto"
          overflow="overflow"
        />

        <Text>Casos en los que te puede venir bien:</Text>
        <List>
          <ListItem>
            Focus, selección de texto, reproductores audio/video
          </ListItem>
          <ListItem>Lanzar animaciones</ListItem>
          <ListItem>Integrar librerías de terceros</ListItem>
        </List>
      </React.Fragment>
    );
  }
}
