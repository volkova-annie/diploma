import React from 'react'
import st from './style.module.css'

const PageGrid = ({items, renderer}) =>
  <ul className={st.list}>
    {items.map((item, index) =>
      <li
        key={`${item.id}${index}`}
        className={st.item}>
        {renderer(item)}
      </li>
    )}
  </ul>

export default PageGrid
