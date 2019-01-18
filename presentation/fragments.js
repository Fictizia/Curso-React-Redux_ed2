import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class Fragments extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={4} textColor="quaternary">
          React.Fragment
        </Heading>
        <Text>
          Un patrón común de React es devolver una lista de elementos. Los
          fragmentos te permiten agrupar elementos sin introducir elementos
          extra en el DOM.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/fragments.example")}
          margin="20px auto"
          overflow="overflow"
        />
        <Text>
          <a href="https://codepen.io/reactjs/pen/VrEbjE?editors=1000">
            Ejemplo
          </a>
        </Text>
      </React.Fragment>
    );
  }
}
