import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import st from './style.module.css'

import Picture from '../Picture'

const CarouselWidget = props => (
  <Carousel
    className={st.carousel}
    showThumbs={false}
    showStatus={false}
    infiniteLoop
    showArrows

    interval={10000}>
    {props.pictures.map(pic => {
      const item = pic[props.locale]
      return <div
        key={item.id}
        className={st.container}>
        <Picture
          className={st.image}
          sizes={{
            default: {w:1190, h:400},
            '(max-width:1023px)': {w:934, h:320},
            '(max-width:767px)': {w:696, h:240},
            '(max-width:479px)': {w:416, h:150},
          }}
          file={item.picture.file} />
        {/*<p className={st.legend}>{pic.node.title}</p>*/}
      </div>
    })}
  </Carousel>
)

export default CarouselWidget
