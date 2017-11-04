import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import st from './style.module.css'

const CarouselWidget = props => (
  // <Carousel showArrows='true' onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
  <Carousel
    className={st.carousel}
    showThumbs={false}
    showStatus={false}
    infiniteLoop
    showArrows
    autoPlay
    interval={10000}>
    {props.pictures.map(pic => (
      <div
        key={pic.node.id}
        className={st.container}>
        <img
          className={st.image}
          {...pic.node.picture.responsiveResolution} />
        {/*<p className={st.legend}>{pic.node.title}</p>*/}
      </div>
    ))}
  </Carousel>
)

export default CarouselWidget
