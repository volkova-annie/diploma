import React from 'react'
import ReactDOM from 'react-dom';
import {Carousel} from 'react-responsive-carousel';
import st from './style.module.css'
import img1 from '../../../assets/carousel/1.jpg'
import img2 from '../../../assets/carousel/2.jpg'
import img3 from '../../../assets/carousel/3.jpg'
import img4 from '../../../assets/carousel/4.jpg'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

const Slider = () =>
  // <Carousel showArrows='true' onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
  <Carousel showThumbs={false} infiniteLoop showArrows autoPlay interval={10000}>
  {/* <Carousel> */}
    <div>
        <img src={img1} />
        <p className={st.legend}>Legend 1</p>
    </div>
    <div>
        <img src={img2} />
        <p className={st.legend}>Legend 2</p>
    </div>
    <div>
        <img src={img3} />
        <p className={st.legend}>Legend 3</p>
    </div>
    <div>
        <img src={img4} />
        <p className={st.legend}>Legend 4</p>
    </div>
  </Carousel>

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
export default Slider
