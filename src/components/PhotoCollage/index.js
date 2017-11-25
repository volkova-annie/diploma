import React from 'react'
import Link from 'gatsby-link'
import st from './style.module.css'
import Photo from './components/Photo'
const leftPad = require('left-pad')

const PhotoCollage = ({items, t, locale}) => {
  const filteredItems = items
    .map(item => item[locale])
    .filter(item => !!item.image.responsiveResolution)

  return <div className={st.collage}>
    {filteredItems.map((node, index) => {
      const isEven = index % 2 === 0
      const deg = (Math.random() * 15).toFixed()
      const {price, date} = node
      const localeDate = date
        ? new Date(date).toLocaleDateString()
        : null
      const hours = date
        ? new Date(date).getHours()
        : null
      const minutes = date
        ? leftPad(new Date(date).getUTCMinutes(), 2, '0')
        : null
      const time = hours && minutes
        ? hours + ':' + minutes
        : null

      return <Photo
        className={st.photo}
        isEven={isEven}
        deg={deg}
        image={node.image}
        title={node.title}
        date={localeDate}
        time={time}
        type={node.type}
        description={node.description}
        key={node.id}
        price={price}
        t={t} />
    })}
  </div>
}

export default PhotoCollage
