import React from "react";
import { Heading, Text } from "spectacle";
import CodePane from "spectacle/es/components/code-pane";

export class ForwardingRefs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Forwarding ref
        </Heading>
        <Text>
          Técnica avanzada para que los hijos ofrezcan referencias a sus padres.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/forwarding.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
