import React from "react";
import { Heading, Text } from "spectacle";
import CodePane from "spectacle/es/components/code-pane";

export class Element extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Renderizando elementos
        </Heading>
        <Text>El Elemento es la unidad mínima de React.</Text>
        <Text>
          Es inmutable. Si queremos actualizar un elemento debemos crear uno
          nuevo.
        </Text>

        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/element.example")}
          margin="20px auto"
          overflow="overflow"
        />
        <Text>
          <a href="https://reactjs.org/redirect-to-codepen/rendering-elements/update-rendered-element">
            Ejemplo práctico
          </a>
        </Text>
      </React.Fragment>
    );
  }
}
