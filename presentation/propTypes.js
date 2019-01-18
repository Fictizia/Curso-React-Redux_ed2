import React from "react";
import { Heading, Text } from "spectacle";
import CodePane from "spectacle/es/components/code-pane";

export class PropTypes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={2} caps textColor="quaternary">
          Proptypes
        </Heading>
        <Text>
          Te permiten documentar tus componentes y asegurarte de que reciben las props que esperan.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/proptypes.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
