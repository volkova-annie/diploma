import React from 'react'
import { getTime, getDate } from '../../../../modules/date'
import st from './style.module.css'

const Content = (props) => {
  const {item, t} = props
  const date = new Date(item.date)

  return <div>
    <div className={st.heading}>
      <h3 className={st.title}>{item.title}</h3>
      <span className={st.date}>
        {t({
          ru: `${getDate(date).ru} в ${getTime(date)}`,
          en: `${getDate(date).en} at ${getTime(date)}`,
        })}
      </span>
    </div>
    <div className={st.description}>{item.description.description}</div>
  </div>

}

export default Content
