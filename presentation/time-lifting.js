import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export class TimeLifting extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Subiendo una vez más el estado.
        </Heading>
        <Text>
          Para que el juego tenga el histórico, sube el estado del tablero del
          componente Board al componente Game. Sube también la gestión de los
          clicks.
        </Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/time-lifting.example")}
          margin="20px auto"
          overflow="overflow"
        />
        <a href="https://codepen.io/gaearon/pen/EmmOqJ?editors=0010">
          Código resuelto
        </a>
      </React.Fragment>
    );
  }
}
