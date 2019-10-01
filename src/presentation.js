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
          {makeAnimatedText()}
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            whats between the bad guys and your keys?
          </Text>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} textColor="secondary">
            security
          </Heading>
          <Heading size={3} textColor="secondary">
            for any javascript app
          </Heading>
          <Heading size={6} textColor="tertiary">
            but especially dapp UIs + wallets
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={1} textColor="primary">
            event-stream
          </Heading>
          <Heading size={6} textColor="secondary">
            a case study
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <div className="news-tabs-container">
            <div className="news-tab-wrapper">
              <Image className="news-tab" src="./event-stream-article-2.png"></Image>
            </div>
            <div className="news-tab-wrapper">
              <Image className="news-tab" src="./event-stream-article-0.png"></Image>
            </div>
            <div className="news-tab-wrapper">
              <Image className="news-tab" src="./event-stream-article-1.png"></Image>
            </div>
            <div className="news-tab-wrapper">
              <Image className="news-tab" src="./npm-event-stream.png"></Image>
            </div>
          </div>
        </Slide>

        <Slide transition={['slide']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            what are our options
          </Heading>
          <List>
            <ListItem>no dependencies</ListItem>
            <ListItem>audit all deps</ListItem>
            <ListItem>...a third way?</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>don't add security, remove insecurity</Quote>
            <Cite>Mark S. Miller</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} textColor="secondary">
            Agoric/SES
          </Heading>
          <Heading size={3} textColor="secondary">
            (Secure EcmaScript)
          </Heading>
          <Heading size={6} textColor="tertiary">
            a secure runtime for running third-party code safely
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Frozen Intrinsics
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={6} textColor="secondary">
            ( problem, solution )
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary">
          <Heading size={1} textColor="tertiary">
            Explicit Endowments
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={6} textColor="secondary">
            ( problem, solution )
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={6} textColor="secondary">
            so how can we apply this to the event-stream incident?
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Runtime protections
          </Heading>
          <List>
            <ListItem>prevent packages from corrupting each other</ListItem>
            <ListItem>per-package control of platform APIs access</ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Image src="./lavamoat-logo.png" height="40vh"></Image>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            LavaMoat
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="tertiary">
          <iframe src="./dep-graph/index.html" style={{ width: '100%', height: '70vh', border: 0 }}></iframe>
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

function makeAnimatedText () {
  return (
    // <div className="lavamoat-title-wrapper">
      <svg className="lavamoat-title" viewBox="0 0 100 20">
        <defs>
          <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="5%" stop-color="red"/>
            <stop offset="95%" stop-color="orange"/>
          </linearGradient>
          <pattern id="wave" x="0" y="0" width="120" height="20" patternUnits="userSpaceOnUse">
            <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)">
              <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="6s"
                  type="translate"
                  from="0,0"
                  to="40,0"
                  repeatCount="indefinite" />
            </path>
          </pattern>
        </defs>
        <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#wave)"  fill-opacity="0.6">LavaMoat</text>
        <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#gradient)" fill-opacity="0.2">LavaMoat</text>
      </svg>
    // </div>
  )
}