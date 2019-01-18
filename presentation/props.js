import React from "react";
import { Heading, Text } from "spectacle";
import CodePane from "spectacle/es/components/code-pane";

export class Props extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Propiedades
        </Heading>
        <Text>
          Cualquier atributo propio que usamos en el JSX es accesible mediante
          "props".
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/props.example")}
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
