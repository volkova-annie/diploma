import React from 'react'
import Link from 'gatsby-link'
import st from './style.module.css'

const Poster = (props) => {
  if (props.date == 'Invalid Date') {
    return<div className={st.poster}>
      <img
        className={st.img}
        {...props.image.responsiveResolution} />
      <p className={st.title}>{props.title}</p>
    </div>
  }
  else {
    return<div className={st.poster}>
      <img
        className={st.img}
        {...props.image.responsiveResolution} />
      <p className={st.time}>{props.date} в {props.time}</p>
      <p className={st.title}>{props.title}</p>
    </div>
  }
}

export default Poster
