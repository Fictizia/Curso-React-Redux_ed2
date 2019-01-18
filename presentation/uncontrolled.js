import React from "react";
import { Heading, Text } from "spectacle";

export class Uncontrolled extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Uncontrolled components
        </Heading>
        <Text>
          Formularios cuyo estado reside en el DOM. Sólo reciben la prop de{" "}
          <i>defaultValue</i> en lugar de <i>value</i>
        </Text>
        <Text>
          En el caso del <i>input type="file"</i> no queda otra opción.
        </Text>
        <Text>
          <a href="https://reactjs.org/redirect-to-codepen/uncontrolled-components/input-type-file">
            Ejemplo
          </a>
        </Text>
      </React.Fragment>
    );
  }
}
