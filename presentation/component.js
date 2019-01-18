import React from "react";
import { Heading, Text } from "spectacle";
import CodePane from "spectacle/es/components/code-pane";

export class Component extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Componentes
        </Heading>
        <Text>
          Los componentes te permiten dividir las UI en un conjunto
          independiente de piezas reutilizables.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/component.example")}
          margin="20px auto"
          overflow="overflow"
        />
        <Text>
          <a href="https://reactjs.org/redirect-to-codepen/components-and-props/rendering-a-component">
            Ejemplo
          </a>
        </Text>
      </React.Fragment>
    );
  }
}
