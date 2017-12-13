import React from 'react'
import Iconed from '../Iconed'
import st from './style.module.css'

export const Logo = () => {
  return(
    <div className={st.first}>
      <div className={st.second}>
        <div className={st.third}>
          <Iconed
            className={st.logo}
            icon="logo" />
        </div>
      </div>
    </div>
  )
}

export default Logo
