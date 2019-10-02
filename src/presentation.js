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
    secondary: '#b0391e',
    tertiary: 'white',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);


const KeyCodes = {
  Down: 40,
  Up: 38,
}

class ActionSlide extends Slide {

  static defaultProps = {
    slideActionMax: Math.Infinity,
  }

  constructor(props) {
    super(props)
    this.handleKeypress = this.handleKeypress.bind(this)
    this.state.slideActionIndex = 0
  }

  handleKeypress ({ keyCode }) {
    const { slideActionMax } = this.props
    // arrow up/down button should select next/previous list element
    if (keyCode === KeyCodes.Up) {
      this.setState(({ slideActionIndex }) => ({
        slideActionIndex: Math.min(slideActionIndex + 1, slideActionMax)
      }))
    } else if (keyCode === KeyCodes.Down) {
      this.setState(({ slideActionIndex }) => ({
        slideActionIndex: Math.max(slideActionIndex - 1, 0)
      }))
    }
  }

  componentDidMount () {
    window.addEventListener('keydown', this.handleKeypress)
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.handleKeypress)
  }

  render() {
    const { slideActionIndex } = this.state
    return <Slide {...this.props} className={`slide-action-${slideActionIndex}`}/>
  }
}

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
          {makeAnimatedText('LavaMoat')}
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            whats between the bad guys and your keys?
          </Text>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading margin={80} size={1} textColor="secondary">
            tools for security
          </Heading>
          <Heading margin={80} size={4} textColor="secondary">
            for any javascript app
          </Heading>
          <Heading size={6} textColor="tertiary">
            but especially dapp UIs + wallets
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary">
          <Heading size={1} textColor="tertiary">
            event-stream
          </Heading>
          <Heading size={6} textColor="primary">
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
          <Heading size={4} textColor="secondary">
            how to fix?
          </Heading>
          <List>
            <ListItem>never use dependencies?</ListItem>
            <ListItem>audit all dependencies always?</ListItem>
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

        <Slide transition={['slide']} bgColor="secondary">
          <Heading size={1} textColor="tertiary">
            Frozen Intrinsics
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary">
          <Heading size={6} textColor="tertiary">
            ( problem, solution )
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary">
          <Heading size={1} textColor="tertiary">
            Explicit Endowments
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary">
          <Heading size={6} textColor="tertiary">
            ( problem, solution )
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="secondary">
            how does this relate to
          </Heading>
          <Heading size={6} textColor="tertiary">
            the event-stream incident
          </Heading>
        </Slide>

        <ActionSlide slideActionMax={3} transition={['slide']} bgColor="secondary">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div>
              <Image src="./svg icons/tree.svg" height="150px"></Image>
              <Heading size={6} textColor="tertiary">
              deps install
              </Heading>
            </div>
            <Image src="./svg icons/arrow-right2.svg" height="150px"></Image>
            <div>
              <Image src="./svg icons/cogs.svg" height="150px"></Image>
              <Heading size={6} textColor="tertiary">
              build
              </Heading>
            </div>
            <Image src="./svg icons/arrow-right2.svg" height="150px"></Image>
            <div>
              <Image src="./svg icons/users.svg" height="150px"></Image>
              <Heading size={6} textColor="tertiary">
              runtime
              </Heading>
            </div>
            <Image className="evil-icon" src="./svg icons/evil.svg" height="150px"></Image>

          </div>
        </ActionSlide>

        <Slide transition={['slide']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">
            allows runtime protections
          </Heading>
          <List>
            <ListItem>prevent packages from corruption</ListItem>
            <ListItem>per-package platform API access control</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">
            tools for your bundler and environment
          </Heading>
          <List>
            <ListItem>lavamoat-browserify</ListItem>
            <ListItem>lavamoat-viz</ListItem>
            <br/>
            coming soon
            <br/>
            <br/>
            <ListItem>lavamoat-webpack</ListItem>
            <ListItem>lavamoat-rollup</ListItem>
            <ListItem>lavamoat-node</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="tertiary">
          <iframe title="dep-graph viz" src="./dep-graph/index.html" style={{ width: '100%', height: '70vh', border: 0 }}></iframe>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary">
          <Heading fit textColor="primary">
            2019: LavaMoat is innovative.
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary">
          <Heading fit textColor="tertiary">
          2020: not using LavaMoat is negligent.
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Image src="./lavamoat-logo.png" height="40vh"></Image>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          {makeAnimatedText('LavaMoat')}
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            whats between the bad guys and your keys?
          </Text>
        </Slide>

      </Deck>
    );
  }
}

function makeAnimatedText (text) {
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
        <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#wave)"  fill-opacity="0.6">{text}</text>
        <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#gradient)" fill-opacity="0.2">{text}</text>
      </svg>
    // </div>
  )
}
