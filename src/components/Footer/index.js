import React from 'react'
import Social from '../Social'
import Iconed from '../Iconed'
import Link from 'gatsby-link'
import st from './style.module.css'

const Footer = () =>
  <footer className={st.footer}>
    <div className={st.top}>
      <Iconed link='https://maps.google.com?q=Cuba+Bar,+Gorohovaya+28' icon='place' title='АДРЕС' subtitle='Санкт-Петербург, Гороховая, 28'/>
      <Iconed link='tel:+79754565585' icon='call' title='КОНТАКТНЫЙ ТЕЛЕФОН' subtitle='+7 (123) 456-78-90'/>
      <Iconed icon='clock' title='ВРЕМЯ РАБОТЫ' subtitle='15:00 - 03:00'/>
      <Iconed icon='dinner' title='ЗАБРОНИРОВАТЬ СТОЛИК' subtitle='Онлайн бронирование'/>

    </div>
    <div className={st.bottom}>
      <p className={st.social_title}>СОЦИАЛЬНЫЕ СЕТИ</p>
      <Social></Social>
    </div>
  </footer>

export default Footer
