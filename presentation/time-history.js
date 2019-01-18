import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class TimeHistory extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Viajando en el tiempo
        </Heading>
        <Text>
          Vamos a almacenar todos los movimientos para poder movernos hacia
          delante y hacia atrás en el tiempo.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/time-history.example")}
          margin="20px auto"
          overflow="overflow"
        />
      </React.Fragment>
    );
  }
}
