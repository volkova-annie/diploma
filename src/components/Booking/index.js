import React from 'react'
import Link from 'gatsby-link'
import st from './style.module.css'
import {Sprite, Icon} from '../SVGIcon'
import Modal from '../Modal'

const ModalInstance = new Modal()
const ModalComponent = Object.observe(ModalInstance, ModalInstance.component)

const Booking = () =>
  <div onClick={ModalInstance.toggle}>
    BOOKING
    <ModalComponent />
  </div>


export default Booking
