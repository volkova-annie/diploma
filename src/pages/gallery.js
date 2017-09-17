import React from 'react'
import Link from 'gatsby-link'

const GalleryPage = (props) => {
  console.log(props);
  const {data: {ru}} = props

  return <div>
    <h1>Gallery</h1>
    <Link to="/">Go to index</Link>
    {ru.edges.map((edge) => {
      const {node} = edge

      return <div key={node.id}>{node.title}</div>
    })}
  </div>
}

export default GalleryPage

export const pageQuery = graphql`
  query GalleryQuery {
    ru: allContentfulGallery(filter: {node_locale: {eq: "ru"}}) {
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
    en: allContentfulGallery(filter: {node_locale: {eq: "en"}}) {
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
