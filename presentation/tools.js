import React from "react";
import { Heading, Text } from "spectacle";

export class Tools extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={1} fit caps textColor="quaternary">
          Developers tools
        </Heading>
        <Text>
          Existe una extensión para
          <a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es">
            Chrome
          </a>
          y
          <a href="https://addons.mozilla.org/en-US/firefox/addon/react-devtools/">
            Firefox
          </a>
          que te permite inspeccionar los componentes de una aplicación hecha en
          React.
        </Text>
        <Text>
          No sirve para inspeccionar CodePen, pero lo usaremos más adelante.
        </Text>
      </React.Fragment>
    );
  }
}
