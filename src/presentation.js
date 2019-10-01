// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('./app.css')

const theme = createTheme(
  {
    primary: '#1F2022',
    secondary: '#03A9FC',
    tertiary: 'white',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Image src="./lavamoat-logo.png" height="40vh"></Image>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            LavaMoat
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            whats between the bad guys and your keys?
          </Text>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <Image style={{ display: 'inline-flex' }} className="anim-rotate-left" src="./npm-event-stream.png" height="40vh"></Image>
          <Image style={{ display: 'inline-flex' }} className="anim-rotate-left" src="./event-stream-article-0.png" height="40vh"></Image>
          <Image style={{ display: 'inline-flex' }} className="anim-rotate-left" src="./event-stream-article-1.png" height="40vh"></Image>
          <Image style={{ display: 'inline-flex' }} className="anim-rotate-left" src="./event-stream-article-2.png" height="40vh"></Image>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Don't add security, remove insecurity</Quote>
            <Cite>Mark S. Miller</Cite>
          </BlockQuote>
        </Slide>


        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>

      </Deck>
    );
  }
}
