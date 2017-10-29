import React, {Component} from 'react'
import * as modals from './modals'
import cn from 'classnames'
import st from './style.module.css'

class Modals extends Component {
  constructor(props) {
    super(props)

    const modalsNames = Object.keys(modals).filter(name => name !== '__esModule')
    const modalsStates = {}

    modalsNames.forEach(name => {modalsStates[name] = false})

    if (typeof window !== 'undefined') {
      window.closeModal = this.closeModal
      window.openModal = this.openModal
    }

    this.state = {
      modalsNames,
      modalsStates,
    }
  }

  openModal = (name) => {
    const currentState = this.state.modalsStates

    currentState[name] = true

    this.setState({currentState})
  }

  closeModal = (name) => {
    const currentState = this.state.modalsStates

    currentState[name] = false

    this.setState({currentState})
  }

  hasOpenedModal = () => {
    const {modalsNames, modalsStates} = this.state
    const currentState = modalsNames
      .filter(modal => modalsStates[modal])

    return currentState.length > 0
  }

  render() {
    return <div className={cn(st.overlay, {[st.shown]: this.hasOpenedModal()})}>
      {this.state.modalsNames.map(name => {
        const Comp = modals[name]

        return <Comp
          closeModal={this.closeModal}
          openModal={this.openModal}
          shown={this.state.modalsStates[name]}
          key={`modal-${name}`} />
      })}
    </div>
  }
}

export {Modals}
