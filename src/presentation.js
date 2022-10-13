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
import {
  FrozenPrimitivesExample,
  FrozenPrimitivesFix,
  ExplicitEndowmentsExample,
  ExplicitEndowmentsFix,
  CompartmentExplainer,
  ConfigExample,
  LavamoatDiagramSlide,
  LavaMoatIntroSlide,
  AmbientAuthorityExample,
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
          <Image src="./lavamoat-logo-new.svg" height="60vh" className="lavamoat-logo" />
          <Heading size={1} fit caps lineHeight={0} textColor="secondary">
            {makeAnimatedText('LavaMoat')}
          </Heading>
          <Text textColor="tertiary" textSize="1.5em">
            javascript supplychain security
          </Text>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Image src="./kumavis-avatar.jpg" height="30vh" className="" />
          <Heading size={4} textColor="tertiary">
            hi i'm @kumavis
          </Heading>
          founder metamask, security research team lead
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} textColor="secondary">
            The Attacker is Inside:
          </Heading>
          Javascript Supplychain Security and LavaMoat
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Image src="./lavamoat-logo-new.svg" height="60vh" className="lavamoat-logo" />
          <Heading size={1} fit caps lineHeight={0} textColor="secondary">
            {makeAnimatedText('LavaMoat')}
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

        <Slide transition={['slide']} bgColor="priamry">
          <Heading size={4} textColor="tertiary">
            software supplychain:
          </Heading>
          <Heading size={5} textColor="secondary">
            everything that touches an application or plays a role in its development
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="tertiary">
          {iframeBrowser({
            src: "https://www.sonatype.com/resources/vulnerability-timeline",
            scale: 0.75,
            fallbackImg: './screenshot-sonatype.png',
          })}
        </Slide>
        {/* 
        <ActionSlide transition={['slide']} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary">
            why is javascript targeted so often?
          </Heading>
          <List className="action-slide-list">
            <ListItem>its popular!</ListItem>
            <ListItem>ambient authority</ListItem>
            <ListItem>everything is mutable</ListItem>
          </List>
        </ActionSlide> */}

        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={6} textColor="primary">
            why? its popular!
          </Heading>
          {iframeBrowser({
            src: 'https://insights.stackoverflow.com/survey/2021#most-popular-technologies-language',
            scale: 0.75,
            fallbackImg: './screenshot-stackoverflow.png',
          })}
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={4} textColor="tertiary">
            javascript supplychain:
          </Heading>
          <List>
            <ListItem>npm dependencies!</ListItem>
            <ListItem>your app's deps</ListItem>
            <ListItem>your dep's deps</ListItem>
            <ListItem>your bundler</ListItem>
            <ListItem>your tools</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <CodePane
            lang="js"
            source={`
  "dependencies": {
    "core-js": "^2.4.1",
    "hammerjs": "^2.0.8",
    "reselect": "^3.0.0",
    "rxjs": "^5.1.0",
    "ts-helpers": "^1.1.1",
    "zone.js": "^0.8.4"
  }
            `}
            textSize={20}
            className="deps-json"
          />
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Image src="./npm-graph.png" height="70vh" className="" />
        </Slide>


        <Slide transition={['slide']} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Copay Wallet Hack
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

        {/* <Slide><Image src="./malicious-anarchy.png"/></Slide> */}

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
            Agoric's Endojs
          </Heading>
          <Heading size={3} textColor="secondary">
            (Hardened Javascript)
          </Heading>
          <Heading size={6} textColor="tertiary">
            tools for running third-party code safely
          </Heading>
        </Slide>
        
        <Slide transition={['slide']} bgColor="primary">
          <Image src="./yarn-install-ses.png" height="30vh" className="" />
        </Slide>

        <FrozenPrimitivesExample/>

        <FrozenPrimitivesFix />

        {/* <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} textColor="secondary">
            Container
          </Heading>
          <Heading size={3} textColor="secondary">
            like require('vm').runInContext() but same Realm
          </Heading>
        </Slide> */}

        {/* <Slide><Image width={1200} src="./lavamoat-diagram.png"/></Slide> */}

        {/* <ExplicitEndowmentsExample/> */}

        <AmbientAuthorityExample />

        <ExplicitEndowmentsFix />
        {/* <CompartmentExplainer/> */}


        {/* <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} textColor="secondary">
            a look at lavamoat
          </Heading>
        </Slide> */}

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

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={4} textColor="tertiary">
            building blocks:
          </Heading>
          <List>
            <ListItem>lockdown()</ListItem>
            <ListItem>Compartment</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading margin={80} size={1} textColor="secondary">
            LavaMoat
          </Heading>
          <Heading margin={80} size={4} textColor="tertiary">
            wraps packages in Compartments
          </Heading>
        </Slide>

        {/* <LavamoatDiagramSlide /> */}

        <LavaMoatIntroSlide />

        {/* <Slide><Image width={1200} src="./lavamoat-diagram.png"/></Slide> */}

        <ConfigExample />

        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={6} textColor="secondary">
            npx lavamoat-viz
          </Heading>
          {iframeBrowser({ src: './dep-graph/index.html' })}
        </Slide>

        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={6} textColor="secondary">
            npx lavamoat-viz
          </Heading>
          {iframeBrowser({
            src: './dep-graph/index.html',
            fallbackImg: './screenshot-lavamoat-viz.png',
          })}
        </Slide>

        <ActionSlide transition={['slide']} bgColor="secondary" textColor="tertiary">
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
          </div>
          <Heading size={6} textColor="secondary">
            to secure the build pipeline:
          </Heading>
          <List className="action-slide-list">
            <ListItem>install: @lavamoat/allow-scripts</ListItem>
            <ListItem>build: lavamoat-node</ListItem>
            <ListItem>runtime: lavamoat-x plugin for your bundler</ListItem>
          </List>
        </ActionSlide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={5} textColor="tertiary">
            now protecting tens of millions of users at metamask
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary">
            we need your help
          </Heading>
          <Heading size={6} textColor="primary">
            github.com/lavamoat/lavamoat
          </Heading>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Image src="./lavamoat-logo-new.svg" height="60vh" className="lavamoat-logo" />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            {makeAnimatedText('LavaMoat')}
          </Heading>
          <Text textColor="tertiary" textSize="1.5em">
            javascript supplychain security
          </Text>
        </Slide>

      </Deck>
    );
  }
}

function makeAnimatedText(text) {
  return (
    // <div className="lavamoat-title-wrapper">
    <svg className="lavamoat-title" viewBox="0 0 100 20">
      <defs>
        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
          {/* <stop offset="5%" stop-color="red"/>
            <stop offset="95%" stop-color="orange"/> */}
          <stop offset="5%" stop-color="#e10a44" />
          <stop offset="95%" stop-color="#ef9232" />
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
      <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#wave)" fill-opacity="1">{text}</text>
    </svg>
    // </div>
  )
}

function iframeBrowser({ src, scale = 1, fallbackImg, }) {
  if (fallbackImg) {
    return (
      <Image src={fallbackImg}/>
    )
  }
  return (
    <div class="browser-container">
      <div class="browser-top">
        <div class="browser-left">
          <span class="browser-dot"></span>
          {" "}
          <span class="browser-dot"></span>
          {" "}
          <span class="browser-dot"></span>
          {" "}
        </div>
        <div class="browser-right">
          <span class="browser-bar"></span>
          <span class="browser-bar"></span>
          <span class="browser-bar"></span>
        </div>
      </div>

      <div class="browser-content"
        style={{
          height: '70vh',
        }}>
        <iframe
          src={src}
          style={{
            width: `${100 / scale}%`,
            height: `${100 / scale}%`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            border: 0,
          }}
          frameBorder="0"
        />
      </div>
    </div>
  )
}