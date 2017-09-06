import React from 'react'
import Link from 'gatsby-link'
import st from './style.module.css'
import cn from 'classnames'
import {Sprite, Icon} from '../SVGIcon'
// import Modal from '../Modal'

class Modal {
  state = {
    shown: false
  }

  getState = () => this.state

  toggle = () => {
    this.state.shown = !this.state.shown
  }

  open = () => {
    this.state.shown = true
  }

  close = () => {
    this.state.shown = false
  }

  component = (props) =>
    <div className={cn(st.modal, {
      [st.shown]: props.shown
    })}>
      MODAL
    </div>
}


export default Modal
