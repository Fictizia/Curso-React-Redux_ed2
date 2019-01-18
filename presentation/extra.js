import React from "react";
import { Heading, List, ListItem, Text } from "spectacle";

export class Extra extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} caps fit textColor="">
          Tarea para completar
        </Heading>
        <Text>
          <List>
            <ListItem>
              Mostrar la localización (columna, fila) de cada movimiento en el
              histórico.
            </ListItem>
            <ListItem>Resaltar en negrita el turno seleccionado.</ListItem>
            <ListItem>Pintar el tablero usando bucles.</ListItem>
            <ListItem>
              Botones para ordenar histórico ascendente/descendentemente.
            </ListItem>
            <ListItem>
              Cuando alguien gana, resaltar las casillas ganadores
            </ListItem>
            <ListItem>Cuando nadie gana, mostrar empate.</ListItem>
          </List>
        </Text>
      </React.Fragment>
    );
  }
}
