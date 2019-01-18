import React from "react";
import { Heading, Text } from "spectacle";

export class Forms extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Formularios, controlados o no
        </Heading>
        <Text>
          No debemos hacer nada si queremos símplemente enviar un formulario a
          un servidor.
        </Text>
        <Text>
          Pero si queremos controlar el estado del formulario, usaremos{" "}
          <a href="https://codepen.io/gaearon/pen/VmmPgp?editors=0010">
            <i>formularios controlados</i>
          </a>
          .
        </Text>
      </React.Fragment>
    );
  }
}
