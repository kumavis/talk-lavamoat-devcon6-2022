import React from 'react';
import { CodePane } from 'spectacle';
import ActionSlide from './action-slide'

// ignore this - to please the linter
function getRandomNumber () {}

const codeExamples = [
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

export default class FrozenPrimitivesExample extends React.Component {
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
        bgColor="secondary"
        onSlideActionIndexChange={(slideActionIndex) => this.setState(() => ({ slideActionIndex }))}
        slideActionMax={codeExamples.length-1}
        >
        <CodePane
          lang="js"
          source={codeExamples[slideActionIndex]}
          textSize={20}
        />
      </ActionSlide>
    )
  }
}