import React from "react";
import { Heading, Markdown, Text } from "spectacle";
import { PRIMARY } from "./index";

export class OverviewCode extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Markdown>
          {`
  Tómate un tiempo para inspeccionar el [código inicial](https://codepen.io/gaearon/pen/oWWQNa?editors=0010).
  * Nada de css
  * 3 componentes
  * Espacios vacios para rellenar
  * Nada interactivo
            `}
        </Markdown>
      </React.Fragment>
    );
  }
}
