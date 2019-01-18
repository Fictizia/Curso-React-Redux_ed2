import React from "react";
import { Heading, Text } from "spectacle";
import CodePane from "spectacle/es/components/code-pane";

export class RenderProps extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Render props
        </Heading>
        <Text>
          Un componente con una <i>render prop</i> recibe una función que
          devuelve un componente de React, e invoca a esa función en lugar de
          implementar su propia lógica de renderizado.
        </Text>
        <Text>Ejemplo muy usado: React Router.</Text>

        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/renderprops.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
