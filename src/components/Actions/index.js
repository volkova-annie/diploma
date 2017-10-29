import React from 'react'
import Social from '../Social'
import Iconed from '../Iconed'
import Link from 'gatsby-link'
import st from './style.module.css'

const Actions = (props) =>
  <div className={st.actions}>
    <Iconed
      link='https://maps.google.com?q=Cuba+Bar,+Gorohovaya+28'
      icon='place'
      title={props.t({ru:'Адрес', en: 'Address'})}
      subtitle={props.t({ru: 'Санкт-Петербург, Гороховая, 28', en: 'Saint Petersburg, Gorohovaya, 28'})} />
    <Iconed
      link='tel:+79754565585'
      icon='call'
      title={props.t({ru: 'Телефон', en: 'Phone'})}
      subtitle='+7 (123) 456-78-90' />
    <Iconed
      icon='clock'
      title={props.t({ru: 'Время работы', en: 'Working hours'})}
      subtitle='15:00 - 03:00' />
    <Iconed
      className='disabled'
      onClick={typeof window !== 'undefined' ? window.openModal.bind(null, 'Booking') : null}
      icon='dinner'
      title={props.t({ru: 'Забронировать столик', en: 'Reserve a table'})}
      subtitle='' />
  </div>

export default Actions
