import React from 'react'
import cn from 'classnames'
import st from './style.module.css'

const PageGrid = ({items, renderer}) =>
  <ul className={st.list}>
    {items.map((item, index) =>
      <li
        key={`${item.id}${index}`}
        className={cn(st.item, {'firstline': index < 2})}>
        {renderer(item)}
      </li>
    )}
  </ul>

export default PageGrid
