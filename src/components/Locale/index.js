import React from 'react'
import Link from 'gatsby-link'
import st from './style.module.css'

const Locale = () =>
  <div className={st.locale}>
    <select className={st.select}>
      <option>RU</option>
      <option>EN</option>
    </select>
  </div>

export default Locale
