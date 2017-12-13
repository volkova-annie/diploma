import React from 'react'
import Link from 'gatsby-link'
import st from './style.module.css'
import Photo from './components/Photo'
const leftPad = require('left-pad')

const PhotoCollage = ({items, t, locale, rootPage}) =>
  <div className={st.collage}>
    {items.map((node, index) => {
      const isEven = index % 2 === 0
      const deg = (Math.random() * 15).toFixed()
      const {price, date, image, title, type, description} = node[locale]
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

      return <Link
        className={st.link}
        to={`/${rootPage}/${node.slug}`}
        key={node[locale].id}>
        <Photo
          className={st.photo}
          isEven={isEven}
          deg={deg}
          image={image}
          title={title}
          date={localeDate}
          time={time}
          type={type}
          description={description}
          price={price}
          t={t} />
      </Link>
    })}
  </div>

export default PhotoCollage
