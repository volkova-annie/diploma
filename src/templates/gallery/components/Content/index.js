import React from 'react'
import st from './style.module.css'

const Content = (props) => {
  const {item, t} = props

  return <div>
    <span>{item.title}</span>
  </div>
}

export default Content
