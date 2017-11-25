import React from 'react'
import st from './style.module.css'

const Content = (props) => {
  const {item, t} = props

  return <div>
    <div className={st.heading}>
      <h3 className={st.title}>{item.title}</h3>
      <span className={st.price}>{t({ ru: `${item.price} руб.`, en: `${item.price} rub` })}</span>
    </div>
    <div className={st.description}>{item.description.description}</div>
  </div>
}

export default Content
