import React from "react";
import { Heading, Markdown, Text } from "spectacle";

export class Setup extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading>Prerequisitos</Heading>
        <Text>Ninguno. Programaremos sin salir del navegador</Text>
        <a
          href="https://codepen.io/gaearon/pen/oWWQNa?editors=0010"
          target="_blank"
        >
          Enlace al código inicial
        </a>
      </React.Fragment>
    );
  }
}
