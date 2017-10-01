import React from 'react'
import Link from 'gatsby-link'
import st from './style.module.css'
import Poster from '../Poster'
const leftPad = require('left-pad')

const Collage = ({items, props}) =>
  <div className={st.collage}>
    {/* <h2>{props.header}</h2>
    <p>{props.subtitle}</p> */}
    {items.map((edge) => {
      const {node} = edge
      const {date} = node
      const ddmmyy = new Date(date).toLocaleDateString()
      const hours = new Date(date).getHours()
      const minutes = leftPad(new Date(date).getUTCMinutes(), 2, '0')
      const time = hours + ':' + minutes

      return <Poster
        image={node.image}
        title={node.title}
        date={ddmmyy}
        time={time}
        type={node.type}
        description={node.description}
        key={node.id} />
    })}
  </div>

export default Collage
