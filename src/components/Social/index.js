import React from 'react'
import Link from 'gatsby-link'
import st from './style.module.css'
import {Sprite, Icon} from '../SVGIcon'

const Social = () =>
  <ul className={st.social}>
    {/* <li className={st.item}><a href='tel:+79211234567'><Icon className={st.icon} icon='call' /></a></li> */}
    <li className={st.item}><a href='vk.com'><Icon className={st.icon} icon='vk' /></a></li>
    <li className={st.item}><a href='instagram.com'><Icon className={st.icon} icon='instagram' /></a></li>
  </ul>

export default Social
