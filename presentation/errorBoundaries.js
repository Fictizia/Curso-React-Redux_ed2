import React from "react";
import { Heading, Text } from "spectacle";
import CodePane from "spectacle/es/components/code-pane";

export class ErrorBoundaries extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Error boundaries
        </Heading>
        <Text>
          Una pequeña parte de la UI no debería romper toda la aplicación. Para
          solventar este problema podemos usar los Error Boundaries.
        </Text>
        <Text>
          <a href="https://codepen.io/gaearon/pen/wqvxGa?editors=0010">
            Ejemplo sencillo
          </a>
        </Text>
        <Text>La granularidad depende de tí.</Text>
      </React.Fragment>
    );
  }
}
