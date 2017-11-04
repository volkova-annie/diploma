import React from 'react'
import Social from '../Social'
import Iconed from '../Iconed'
import Link from 'gatsby-link'
import st from './style.module.css'
import cn from 'classnames'

const Actions = (props) =>
  <div className={st.actions}>
    <Iconed
      className={st.action}
      link='https://maps.google.com?q=Cuba+Bar,+Gorohovaya+28'
      icon='place'
      title={props.t({ru:'Адрес', en: 'Address'})}
      subtitle={props.t({ru: 'Санкт-Петербург, Гороховая, 28', en: 'Saint Petersburg, Gorohovaya, 28'})} />
    <Iconed
      className={st.action}
      link='tel:+79754565585'
      icon='call'
      title={props.t({ru: 'Телефон', en: 'Phone'})}
      subtitle='+7 (123) 456-78-90' />
    <Iconed
      className={st.action}
      icon='clock'
      title={props.t({ru: 'Время работы', en: 'Working hours'})}
      subtitle='15:00 - 03:00' />
    <Iconed
      className={cn(st.action, st.disabled)}
      onClick={typeof window !== 'undefined' ? window.openModal.bind(null, 'Booking') : null}
      icon='dinner'
      title={props.t({ru: 'Забронировать столик', en: 'Reserve a table'})}
      subtitle={props.t({ru: 'Скоро заработает', en: 'Coming soon'})} />
  </div>

export default Actions
