import React from "react";
import { CodePane, Heading, List, ListItem, Text } from "spectacle";

export class Jsx extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          ¿Qué es JSX?
        </Heading>
        <Text>Extensión de JS para describir la UI.</Text>
        <CodePane
          fit
          lang="jsx"
          source={require("raw-loader!../assets/jsx.example")}
          margin="20px auto"
          overflow="overflow"
        />
        <Text>
          <List>
            <ListItem>Acepta atributos</ListItem>
            <ListItem>Acepta hijos</ListItem>
            <ListItem>Evita inyecciones peligrosas de código</ListItem>
            <ListItem>
              Representa objetos:
              <a href="https://babeljs.io/repl/#?presets=react&code_lz=DwEwlgbgBAxgNgQwM5IHIILYFMC8AiJACwHsAHUsAOwHMBaOMJAFzwD4AoKKYQgRlYDKJclWpQAMoyZQAZsQBOUAN6l5ZJADpKmLAF9gAej4cuwAK5wTXbg1YBJSswTV5mQ7c7XgtgOqEETEgAguTuYFamtgDyMBZmSGFWhhYchuAQrADc7EA">
                ejemplo
              </a>
            </ListItem>
          </List>
        </Text>
      </React.Fragment>
    );
  }
}
