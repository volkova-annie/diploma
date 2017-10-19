import React from 'react'
import Social from '../Social'
import Iconed from '../Iconed'
import Actions from '../Actions'
import Link from 'gatsby-link'
import st from './style.module.css'

const Footer = props => (
  <footer className={st.footer}>
    <Actions {...props} />
    <div className={st.bottom}>
      <h2 className={st.social_title}>{props.t({ ru: 'Социальные сети', en: 'Social networks' })}</h2>
      <Social
        className={st.social}
        {...props} />
    </div>
  </footer>
)

export default Footer
