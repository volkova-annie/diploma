import React from 'react'
import Link from 'gatsby-link'
import CarouselWidget from '../components/CarouselWidget'
import Actions from '../components/Actions'
import { transformLocales } from '../modules/locales'
import Collage from '../components/Collage'
import Poster from '../components/Poster'
import st from './style.module.css'

const leftPad = require('left-pad')

const IndexPage = props => {
  const localesData = transformLocales(props.data, props.locales)
  const currentLocale = props.locale
  const { events, menu, gallery, slider } = localesData[currentLocale]

  return (
    <div>
      <CarouselWidget pictures={slider.edges} />
      <Actions />
      <h2 className={st.header}>О Кубе</h2>
      <p className={st.text} />
      <h2 className={st.header}>События</h2>
      <p className={st.subtitle}>Приходите к нам у нас весело и вкусно!</p>
      <Collage items={events.edges} />
      <h2 className={st.header}>Меню</h2>
      <p className={st.subtitle}>Приходите к нам у нас весело и вкусно!</p>
      <Collage items={menu.edges} />
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    ruEvents: allContentfulEvents(limit: 6, filter: { node_locale: { eq: "ru" } }) {
      edges {
        node {
          id
          title
          date
          description {
            description
          }
          type
          image {
            responsiveResolution(width: 200) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
    enEvents: allContentfulEvents(limit: 6, filter: { node_locale: { eq: "en" } }) {
      edges {
        node {
          id
          title
          date
          description {
            description
          }
          type
          image {
            responsiveResolution(width: 200) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
    ruMenu: allContentfulMenu(filter: { node_locale: { eq: "ru" } }) {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          image {
            responsiveResolution(width: 200) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
    enMenu: allContentfulMenu(filter: { node_locale: { eq: "en" } }) {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          image {
            responsiveResolution(width: 200) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
    ruGallery: allContentfulGallery(filter: { node_locale: { eq: "ru" } }) {
      edges {
        node {
          id
          title
          type
          image {
            responsiveResolution(height: 200) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
    enGallery: allContentfulGallery(filter: { node_locale: { eq: "en" } }) {
      edges {
        node {
          id
          title
          type
          image {
            responsiveResolution(height: 200) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
    ruSlider: allContentfulHomePageSlider(filter: { node_locale: { eq: "ru" } }) {
      edges {
        node {
          id
          title
          picture {
            responsiveResolution(width: 1280) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
    enSlider: allContentfulHomePageSlider(filter: { node_locale: { eq: "en" } }) {
      edges {
        node {
          id
          title
          picture {
            responsiveResolution(width: 1280) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
  }
`
