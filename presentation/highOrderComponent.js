import React from "react";
import { Heading, Text } from "spectacle";
import List from "spectacle/es/components/list";
import ListItem from "spectacle/es/components/list-item";
import CodePane from "spectacle/es/components/code-pane";

export class HighOrderComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading caps size={3} textColor="quaternary">
          Componentes de Alto Nivel
        </Heading>
        <Text>Se utilizan para reutilizar lógica entre componentes.</Text>
        <Text>
          Es una función que toma como argumento un componente y devuelve otro
          componente.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/hoc.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
