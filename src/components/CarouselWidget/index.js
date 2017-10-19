import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import st from './style.module.css'
import img1 from '../../../assets/carousel/1.jpg'
import img2 from '../../../assets/carousel/2.jpg'
import img3 from '../../../assets/carousel/3.jpg'
import img4 from '../../../assets/carousel/4.jpg'

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
