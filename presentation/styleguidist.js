import React from "react";
import { Heading, Text } from "spectacle";
import CodePane from "spectacle/es/components/code-pane";

export class Styleguidist extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Styleguidist
        </Heading>
        <Text>
          Te permite exponer tus componentes al resto de la organización sin
          apenas esfuerzo.
        </Text>

        <a href="https://github.com/styleguidist/react-styleguidist">
          Web Oficial
        </a>
      </React.Fragment>
    );
  }
}
