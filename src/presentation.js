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
  CodePane,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import ActionSlide from './action-slide'
import { FrozenPrimitivesExample,
  FrozenPrimitivesFix,
  ExplicitEndowmentsExample,
  ExplicitEndowmentsFix,
  CompartmentExplainer,
  ConfigExample,
  LavamoatDiagramSlide,
  LavaMoatIntroSlide,
} from './code-examples'

// Require CSS
require('normalize.css');
require('./app.css')

const theme = createTheme(
  {
    primary: '#1F2022',
    secondary: '#ec273a',
    tertiary: '#8fe0f8',
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
          <Image src="./lavamoat-logo-new.svg" height="60vh" className="lavamoat-logo"/>
          <Heading size={1} fit caps lineHeight={0} textColor="secondary">
            {makeAnimatedText('LavaMoat')}
          </Heading>
          <Text textColor="tertiary" textSize="1.5em">
            javascript supplychain security
          </Text>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <h1>
          The Attacker is Inside:
          </h1>
          Javascript Supplychain Security and LavaMoat 
        </Slide>

        <Slide transition={['slide']} bgColor="priamry">
          <Heading size={1} textColor="tertiary">
            the javascript commons are our home
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="priamry">
          <Heading size={1} textColor="tertiary">
            and i want to protect them
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary">
          <Heading size={1} textColor="primary">
            from what?
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

        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote size={4}>
              BitPay essentially trusted all the up-stream developers to never inject malicious code into their wallet.
            </Quote>
            <Cite>Jackson Palmer (dogecoin)</Cite>
          </BlockQuote>
        </Slide>

        <Slide><Image src="./malicious-anarchy.png"/></Slide>

        <ActionSlide transition={['slide']} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary">
            how to fix?
          </Heading>
          <List className="action-slide-list">
            <ListItem>never use dependencies?</ListItem>
            <ListItem>audit all dependencies always?</ListItem>
            <ListItem>...a third way?</ListItem>
          </List>
        </ActionSlide>

        {/* <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} textColor="secondary">
            so what can we do about it?
          </Heading>
        </Slide> */}

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

        <FrozenPrimitivesExample/>

        <FrozenPrimitivesFix/>

        {/* <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} textColor="secondary">
            Container
          </Heading>
          <Heading size={3} textColor="secondary">
            like require('vm').runInContext() but same Realm
          </Heading>
        </Slide> */}

        {/* <Slide><Image width={1200} src="./lavamoat-diagram.png"/></Slide> */}

        <ExplicitEndowmentsExample/>

        <ExplicitEndowmentsFix/>
        {/* <CompartmentExplainer/> */}


        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} textColor="secondary">
            a look at lavamoat
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading margin={80} size={1} textColor="secondary">
          security tools
          </Heading>
          <Heading margin={80} size={4} textColor="secondary">
            for any javascript app
          </Heading>
          <Heading size={6} textColor="tertiary">
            to mitigate software supplychain risks
          </Heading>
        </Slide>

        <LavaMoatIntroSlide/>

        <LavamoatDiagramSlide/>
        {/* <Slide><Image width={1200} src="./lavamoat-diagram.png"/></Slide> */}

        <ConfigExample/>

        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={6} textColor="secondary">
            npx lavamoat-viz
          </Heading>

          <div class="browser-container">
            <div class="browser-top">
              <div class="browser-left">
                <span class="browser-dot"></span>
                { " " }
                <span class="browser-dot"></span>
                { " " }
                <span class="browser-dot"></span>
                { " " }
              </div>
              <div class="browser-right">
                <span class="browser-bar"></span>
                <span class="browser-bar"></span>
                <span class="browser-bar"></span>
              </div>
            </div>

            <div class="browser-content">
              <iframe title="dep-graph viz" src="./dep-graph/index.html" style={{ width: '100%', height: '70vh', border: 0 }}></iframe>
            </div>
          </div>
        </Slide>

        {/* <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={6} textColor="secondary">
            yarn install @lavamoat/allow-scripts
          </Heading>
        </Slide> */}

        <ActionSlide transition={['slide']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">
            to secure the build pipeline:
          </Heading>
          <List className="action-slide-list">
            <ListItem>deps: @lavamoat/allow-scripts</ListItem>
            <ListItem>build: lavamoat-node</ListItem>
            <ListItem>runtime: lavamoat-x plugin for your bundler</ListItem>
          </List>
        </ActionSlide>

        <Slide transition={['slide']} bgColor="secondary">
          <Heading size={1} textColor="primary">
            future work
          </Heading>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Image src="./lavamoat-logo-new.svg" height="60vh" className="lavamoat-logo"/>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          {makeAnimatedText('LavaMoat')}
          </Heading>
          <Text textColor="tertiary" textSize="1.5em">
            javascript supplychain security
          </Text>
        </Slide>

        {/* <Slide transition={['slide']} bgColor="primary">
          <Heading margin={80} size={1} textColor="secondary">
          security tools
          </Heading>
          <Heading margin={80} size={4} textColor="secondary">
            for any javascript app
          </Heading>
          <Heading size={6} textColor="tertiary">
            to mitigate software supplychain risks
          </Heading>
        </Slide> */}


        {/*
        <Slide transition={['slide']} bgColor="primary">
          <Heading margin={80} size={1} textColor="secondary">
          security tools
          </Heading>
          <Heading margin={80} size={4} textColor="secondary">
            for any javascript app
          </Heading>
          <Heading size={6} textColor="tertiary">
            to mitigate software supplychain risks
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

        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote size={4}>
              BitPay essentially trusted all the up-stream developers to never inject malicious code into their wallet.
            </Quote>
            <Cite>Jackson Palmer (dogecoin)</Cite>
          </BlockQuote>
        </Slide>

        <ActionSlide transition={['slide']} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary">
            how to fix?
          </Heading>
          <List className="action-slide-list">
            <ListItem>never use dependencies?</ListItem>
            <ListItem>audit all dependencies always?</ListItem>
            <ListItem>...a third way?</ListItem>
          </List>
        </ActionSlide>

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

        <FrozenPrimitivesExample/>
        <FrozenPrimitivesFix/>

        <Slide transition={['slide']} bgColor="secondary">
          <Heading size={1} textColor="tertiary">
            Explicit Endowments
          </Heading>
        </Slide>

        <ExplicitEndowmentsFix/>

        <ActionSlide transition={['slide']} bgColor="primary" textColor="tertiary">
          {makeAnimatedText('LavaMoat')}
          <Heading size={6} textColor="secondary">
            provides runtime protections
          </Heading>
          <List className="action-slide-list">
            <ListItem>basic sanity for instrinsics</ListItem>
            <ListItem>per-package platform API access control</ListItem>
            <ListItem>protect modules from corruption</ListItem>
          </List>
        </ActionSlide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="secondary">
            how would this prevent the
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

        <ActionSlide transition={['slide']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">
            to secure the build pipeline:
          </Heading>
          <List className="action-slide-list">
            <ListItem>deps: yarn install --ignore-scripts</ListItem>
            <ListItem>build: lavamoat-node</ListItem>
            <ListItem>runtime: lavamoat-x plugin for your bundler</ListItem>
          </List>
        </ActionSlide>

        <Slide transition={['slide']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">
            tools for your bundler and environment
          </Heading>
          <List>
            <ListItem>lavamoat-browserify</ListItem>
            <br/>
            coming soon
            <br/>
            <br/>
            <ListItem>lavamoat-webpack</ListItem>
            <ListItem>lavamoat-rollup</ListItem>
            <ListItem>lavamoat-node</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary" textColor="tertiary">
          {makeAnimatedText('LavaMoat')}
          <Heading size={6} textColor="secondary">
            provides configuration tooling
          </Heading>
          <List>
            <ListItem>automatic config generation</ListItem>
            <ListItem>config insight tools</ListItem>
          </List>
        </Slide>

        <ConfigExample/>

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
          <Image width={400} src="./form-qr.svg"/>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          {makeAnimatedText('LavaMoat')}
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            whats between the bad guys and your keys?
          </Text>
        </Slide>
        */}

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
            {/* <stop offset="5%" stop-color="red"/>
            <stop offset="95%" stop-color="orange"/> */}
            <stop offset="5%" stop-color="#e10a44"/>
            <stop offset="95%" stop-color="#ef9232"/>
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
        <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#gradient)" fill-opacity="0.5">{text}</text>
        <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#wave)"  fill-opacity="1">{text}</text>
      </svg>
    // </div>
  )
}
