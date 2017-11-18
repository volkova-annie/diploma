import React, {Component} from 'react'
import {Modal} from '../../components/Modal'
import * as steps from './Steps'
import st from './style.module.css'

class Booking extends Component {
  state = {
    step: 'Start',
    steps,
  }

  render(){
    const {step, steps} = this.state
    const Current = steps[step]
    const t = this.props.actions.translate

    return <Modal
      {...this.props}
      name='Booking'
      className={st.booking}>
      <h2 className={st.title}>{t({ru: 'Бронирование столика', en: 'Reserve a table'})}</h2>
      <Current
        {...this.props}
        {...this.state} />
    </Modal>
  }
}
export {Booking}
