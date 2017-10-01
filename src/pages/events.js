import React from 'react'
import Link from 'gatsby-link'

const EventsPage = (props) => {
  const {data: {ru}} = props

  return <div>
    <h1>Events</h1>
    <Link to="/">Go to index</Link>
    {ru.edges.map((edge) => {
      const {node} = edge

      return <div key={node.id}>{node.title}</div>
    })}
  </div>
}

export default EventsPage

export const pageQuery = graphql`
  query EventsQuery {
    ru: allContentfulEvents(filter: {node_locale: {eq: "ru"}}) {
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
    en: allContentfulEvents(filter: {node_locale: {eq: "en"}}) {
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
  }
`
