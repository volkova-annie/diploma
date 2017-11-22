import React from 'react'
import { getTime, getDate } from '../../../../modules/date'
import st from './style.module.css'

const Content = (props) => {
  const {item, t} = props
  const date = new Date(item.date)

  return <div>
    <span>{item.title}</span>
    <span>
      {t({
        ru: `${getDate(date).ru} в ${getTime(date)}`,
        en: `${getDate(date).en} at ${getTime(date)}`,
      })}
    </span>
    <div>{item.description.description}</div>
  </div>

}

export default Content
