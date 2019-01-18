import React from "react";
import { BlockQuote, Cite, Heading, Quote, Text } from "spectacle";
import List from "spectacle/es/components/list";
import ListItem from "spectacle/es/components/list-item";

export class Optimizing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading size={4} fit caps textColor="quaternary">
          Optimizando la actualización del árbol
        </Heading>
        <Text>
          Puedes implementar <i>shouldComponentUpdate</i> para decidir si debe o
          no renderizarse el elemento.
        </Text>
        <Text>
          En general, mejor usar <i>PureComponent</i>.
        </Text>
      </React.Fragment>
    );
  }
}
