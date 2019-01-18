import React from "react";
import { Heading, Text } from "spectacle";

export class MaterialUi extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Material UI
        </Heading>
        <Text>
          Un framework de los muchos existentes para ayudarte a construir la UI.
        </Text>

        <a href="https://material-ui.com/">Web Oficial</a>
      </React.Fragment>
    );
  }
}
