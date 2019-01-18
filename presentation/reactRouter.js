import React from "react";
import { CodePane, Heading, List, ListItem, Text } from "spectacle";

export class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          React Router
        </Heading>
        <Text>Un básico para permitir enrutado.</Text>

        <a href="https://reacttraining.com/react-router/web/guides/philosophy">
          Web Oficial
        </a>
      </React.Fragment>
    );
  }
}
