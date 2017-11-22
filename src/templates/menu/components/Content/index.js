import React from 'react'
import st from './style.module.css'

const Content = (props) => {
  const {item, t} = props

  return <div>
    <span>{item.title}</span>
    <span className={st.price}>{t({ ru: `${item.price} руб.`, en: `${item.price} rub` })}</span>
    <div>{item.description.description}</div>
  </div>
}

export default Content
