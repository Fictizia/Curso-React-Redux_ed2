import React from "react";
import { Heading, Text } from "spectacle";
import List from "spectacle/es/components/list";
import ListItem from "spectacle/es/components/list-item";
import CodePane from "spectacle/es/components/code-pane";

export class Events extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Eventos
        </Heading>
        <Text>Muy similar a HTML, pero con ligeras diferencias:</Text>

        <List>
          <ListItem>Camelcase</ListItem>
          <ListItem>Pasas funciones, no strings</ListItem>
        </List>

        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/events.example")}
          margin="20px auto"
          overflow="overflow"
        />

        <a href="http://codepen.io/gaearon/pen/xEmzGg?editors=0010">Ejemplo</a>
      </React.Fragment>
    );
  }
}
