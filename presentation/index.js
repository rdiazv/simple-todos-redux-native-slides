import React from "react";
import {
  Deck, Heading, Image, ListItem, List, Slide, Spectacle, CodePane, Appear,
  Text, Layout, Fit, Fill, Link
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  reactHardware: require("../assets/react-hardware.png"),
};

preloader(images);

const theme = createTheme({
  title: "#00d8ff",
  primary: "#222",
  text: "#fff"
});

const listTextSize = '3.5rem';
const codeTextSize = '2rem';

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary" notes="Voy a hablar de React como concepto.">
            <Text textColor="title" textSize="10rem" bold>React</Text>
            <Text textColor="text" textSize="3rem" margin="1.5rem 0 0 0">
              A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES
            </Text>
          </Slide>
          <Slide align="center flex-start" transition={["slide"]} bgColor="primary" notes={
            `
            CONCEPTOS UNIVERSALES, SIRVE PARA CUALQUIER APP

            Declarativo: Tu dices, con este estado la UI se tiene que ver así y con este otro estado la UI se ve de esta manera. React se encarga de llevar tu interfaz del estado A al B con la menor cantidad de cambios posibles.

            Componentes componibles: Dividir UI en componentes pequeños que al juntarse hacen otros cada vez más complejos. Facilidad de testing, encapsulamiento.

            MOSTRAR PLAYGROUND

            Aprende una vez, escribe donde sea: React como concepto es uno, tiene su propia sintaxis, métodos de comunicación entre componentes, etc. La gracia es que se utiliza una capa de render para transformar React en algo tangible.

            `
          }>
            <Heading textColor="text" textFont="primary">
              Thinking in React
            </Heading>
            <List textColor="text">
              <ListItem textSize={listTextSize}>Declarative</ListItem>
              <ListItem textSize={listTextSize}>Composable components</ListItem>
              <ListItem textSize={listTextSize}>Learn once, write anywhere</ListItem>
            </List>
          </Slide>
          <Slide align="center flex-start" transition={["slide"]} bgColor="primary" notes="Me voy a detener un poco en “Aprende una vez, escribe donde sea” porque me parece muy interesante.

Estas son algunas de las capas de React que hay disponibles.
">
            <Heading textColor="text" textFont="primary" fit>
              Learn Once, Write Anywhere
            </Heading>

            <Appear fid="1">
              <List textColor="text">
                <ListItem textSize={listTextSize}>DOM</ListItem>
                <ListItem textSize={listTextSize}>Server</ListItem>
                <ListItem textSize={listTextSize}>Native</ListItem>
              </List>
            </Appear>

            <Appear fid="2">
              <List textColor="text">
                <ListItem textSize={listTextSize}>
                  <Link textColor="title" href="https://github.com/Flipboard/react-canvas">
                    Flipboard/react-canvas
                  </Link>
                </ListItem>
                <ListItem textSize={listTextSize}>
                  <Link textColor="title" href="https://github.com/iamdustan/react-hardware">
                    iamdustan/react-hardware
                  </Link>
                </ListItem>
                <ListItem textSize={listTextSize}>Otros</ListItem>
              </List>
            </Appear>
          </Slide>
          <Slide align="center flex-start" transition={["slide"]} bgColor="primary" notes="React Conf 2016">
            <Heading textColor="text" textFont="primary" fit>
              https://www.youtube.com/watch?v=GnIrNYtmRDg
            </Heading>

            <Image src={images.reactHardware} width="100%" margin="2rem 0 0 0" />
          </Slide>
          <Slide align="center flex-start" transition={["slide"]} bgColor="primary">
            <Heading textColor="text" textFont="primary">
              Demo
            </Heading>

            <List textColor="text">
              <ListItem textSize="2rem"><code>npm i -g react-native-cli</code></ListItem>
              <ListItem textSize="2rem"><code>react-native init SimpleTodosReduxNative</code></ListItem>
              <ListItem textSize="2rem"><code>npm i --save react-redux redux</code></ListItem>
              <ListItem textSize="2rem"><code>npm i --save-dev remote-redux-devtools</code></ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
