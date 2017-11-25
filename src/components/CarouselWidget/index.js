import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import st from './style.module.css'

const CarouselWidget = props => (
  <Carousel
    className={st.carousel}
    showThumbs={false}
    showStatus={false}
    infiniteLoop
    showArrows
    autoPlay
    interval={10000}>
    {props.pictures.map(pic => {
      const item = pic[props.locale]
      return <div
        key={item.id}
        className={st.container}>
        <img
          className={st.image}
          srcSet={item.picture.responsiveResolution.srcSet}
          src={item.picture.responsiveResolution.src} />
        {/*<p className={st.legend}>{pic.node.title}</p>*/}
      </div>
    })}
  </Carousel>
)

export default CarouselWidget
