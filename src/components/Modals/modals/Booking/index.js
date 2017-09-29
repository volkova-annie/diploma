import React from 'react'
import {Modal} from '../../components/Modal'
import st from './style.module.css'

const Booking = (props) =>
  <Modal
    {...props}
    name='Booking'
    className={st.booking}>
    Booking
  </Modal>

export {Booking}
