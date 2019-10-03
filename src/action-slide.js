import React from 'react';
import { Slide } from 'spectacle';

const KeyCodes = {
  Down: 40,
  Up: 38,
}

export default class ActionSlide extends Slide {

  constructor(props) {
    super(props)
    this.handleKeypress = this.handleKeypress.bind(this)
    this.state.slideActionIndex = 0
  }

  handleKeypress ({ keyCode }) {
    const { slideActionMax } = this.props
    // arrow up/down button should select next/previous list element
    if (keyCode === KeyCodes.Up) {
      this.setSlideActionIndex(slideActionIndex => (
        // Math.min(1, Math.Infinity) => NaN
        ((slideActionIndex + 1) > slideActionMax) ? slideActionMax : slideActionIndex + 1
      ))
    } else if (keyCode === KeyCodes.Down) {
      this.setSlideActionIndex(slideActionIndex => (
        Math.max(slideActionIndex - 1, 0)
      ))
    }
  }

  setSlideActionIndex (fn) {
    let newIndex
    this.setState(({ slideActionIndex }) => {
      newIndex = fn(slideActionIndex)
      return {
        slideActionIndex: newIndex
      }
    })
    const { onSlideActionIndexChange } = this.props
    if (!onSlideActionIndexChange) return
    onSlideActionIndexChange(newIndex)
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
