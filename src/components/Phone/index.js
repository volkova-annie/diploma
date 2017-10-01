import React from 'react'
import Social from '../Social'
import Iconed from '../Iconed'
import Link from 'gatsby-link'
import st from './style.module.css'

const Phone = () =>
  <a
    className={st.phone}
    href='tel:+79211233456'>
    <Iconed
      className={st.call}
      icon='call'
      title=''
      subtitle='' />
    <span className={st.number}>+7 (921) 123-34-56</span>
  </a>

export default Phone
