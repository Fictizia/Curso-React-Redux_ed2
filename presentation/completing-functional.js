import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class CompletingFunctional extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Componentes funcionales
        </Heading>
        <Text>
          Ahora que Square no tiene estado, podemos convertirlo en un componente
          funcional.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/completing-functional.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
