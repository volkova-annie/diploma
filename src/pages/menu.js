import React from 'react'
import Link from 'gatsby-link'

const MenuPage = (props) => {
  const {data: {ru}} = props

  return <div>
    <h1>Menu</h1>
    <Link to="/">Go to index</Link>
    {ru.edges.map((edge) => {
      const {node} = edge

      return <div key={node.id}>{node.title}</div>
    })}
  </div>
}

export default MenuPage


export const pageQuery = graphql`
  query MenuQuery {
    ru: allContentfulMenu(filter: {node_locale: {eq: "ru"}}) {
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
    en: allContentfulMenu(filter: {node_locale: {eq: "en"}}) {
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
  }
`
