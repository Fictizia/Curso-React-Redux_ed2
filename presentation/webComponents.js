import React from "react";
import { Heading, Text } from "spectacle";
import List from "spectacle/es/components/list";
import ListItem from "spectacle/es/components/list-item";
import CodePane from "spectacle/es/components/code-pane";

export class WebComponents extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Web Components
        </Heading>
        <Text>
          React y Web Components pueden coexistir. Puedes usar React dentro de
          un Web Component o usar React para renderizar un Web Component.
        </Text>

        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/webcomponents.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
