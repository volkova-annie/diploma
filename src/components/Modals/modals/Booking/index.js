import React from 'react'
import { Modal } from '../../components/Modal'
import st from './style.module.css'

const Booking = (props) => (
  <Modal
    {...props}
    name='Booking'
    className={st.booking}>
    <div style={{clear:'both'}} />
    {props.shown && <iframe
      id="fhesus45647"
      src="https://hesus.ru/hesus/visor/id/5647"
      style={{
        width: '100%',
        height: '630px',
        margin: '0 auto',
        display: 'block',
      }}
      frameBorder="0"
      marginHeight="0"
      marginWidth="0" />}
    <div style={{clear:'both'}} />
  </Modal>
)
export { Booking }
