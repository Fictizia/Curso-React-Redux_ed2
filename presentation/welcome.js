import React from "react";
import { Heading, Text } from "spectacle";
import { TERTIARY } from "./index";

export class Welcome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading fit caps>
          Curso de React
        </Heading>
        <Heading fit caps textColor="secondary">
          Capítulo I: Construyendo un tres en raya
        </Heading>
        <Text margin="20px 0 0" textColor={TERTIARY}>
          Javier Vidal. 2019. Fictizia
        </Text>
      </React.Fragment>
    );
  }
}
