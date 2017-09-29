import React from 'react'
import Link from 'gatsby-link'
import Slider from '../components/Slider'
import Actions from '../components/Actions'
import {transformLocales} from '../modules/transform-locales'
import Collage from '../components/Collage'
import Poster from '../components/Poster'

const leftPad = require('left-pad')

const IndexPage = (props) => {
  const localesData = transformLocales(props.data, ['ru', 'en'])
  const currentLocale = 'ru'
  const {events, menu, gallery} = localesData[currentLocale]

  return <div>
    <Slider></Slider>
    <Actions></Actions>
    <Collage items={events.edges}></Collage>
  </div>
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    ruEvents: allContentfulEvents(limit: 6, filter: {node_locale: {eq: "ru"}}) {
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
            responsiveResolution(width: 100) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
    enEvents: allContentfulEvents(limit: 6, filter: {node_locale: {eq: "en"}}) {
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
            responsiveResolution(width: 100) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
    ruMenu: allContentfulMenu(filter: {node_locale: {eq: "ru"}}) {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          image {
            responsiveResolution(width: 100) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
    enMenu: allContentfulMenu(filter: {node_locale: {eq: "en"}}) {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          image {
            responsiveResolution(width: 100) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
    ruGallery: allContentfulGallery(filter: {node_locale: {eq: "ru"}}) {
      edges {
        node {
          id
          title
          type
          image {
            responsiveResolution(width: 100) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
    enGallery: allContentfulGallery(filter: {node_locale: {eq: "en"}}) {
      edges {
        node {
          id
          title
          type
          image {
            responsiveResolution(width: 100) {
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
