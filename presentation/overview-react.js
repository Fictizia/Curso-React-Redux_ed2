import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class OverviewReact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Text>Comenzamos</Text>
        <Heading size={1} fit caps textColor="quaternary">
          ¿Qué es React?
        </Heading>
        <CodePane
          lang="javascript"
          source={require("raw-loader!../assets/react-component.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
