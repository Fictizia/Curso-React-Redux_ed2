import React from "react";
import { Fill, Fit, Heading, Layout, Slide, Text } from "spectacle";
import { PRIMARY, TERTIARY } from "./index";

export class What extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Text textColor={TERTIARY}>
          En este capítulo aprenderemos haciendo. Desarrollaremos un juego.
        </Text>
        <Heading fit caps>
          ¿Qúe vamos a construir?
        </Heading>
        <Text margin="10px 0 0" textColor={TERTIARY} bold>
          <a
            href="https://codepen.io/gaearon/pen/gWWZgR?editors=0010"
            target="_blank"
          >
            Tres en Raya
          </a>
        </Text>
      </React.Fragment>
    );
  }
}
