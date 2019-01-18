import React from "react";
import { Heading, Text } from "spectacle";

export class Sideeffects extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} caps textColor="quaternary">
          Efectos secundarios
        </Heading>
        <Text>
          No corresponde ni a React ni a Redux lidiar con los efectos
          secundarios.
        </Text>
        <Text>
          Existen librerías que nos van a ayudar, como la más popular
          <a href="https://github.com/reduxjs/redux-thunk">Redux Thunk</a> o la
          más compleja
          <a href="https://github.com/redux-observable/redux-observable">
            Redux Observable
          </a>
          .
        </Text>
      </React.Fragment>
    );
  }
}
