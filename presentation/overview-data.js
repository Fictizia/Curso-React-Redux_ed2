import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class OverviewData extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Pasando datos entre componentes
        </Heading>
        <Text>
          Cambia el componente Board y Square para que se pasen propiedades
          entre ellos.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/overview-data.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
