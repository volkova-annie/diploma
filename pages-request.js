module.exports = `
query {
  events: allContentfulEvents {
    edges {
      node {
        node_locale
        id
        title
        date
        description {
          description
        }
        type
        image {
          file {
            url
            contentType
          }
        }
      }
    }
  }
  menu: allContentfulMenu {
    edges {
      node {
        node_locale
        id
        title
        description {
          description
        }
        price
        image {
          file {
            url
            contentType
          }
        }
      }
    }
  }
  slider: allContentfulHomePageSlider {
    edges {
      node {
        node_locale
        id
        title
        picture {
          file {
            url
            contentType
          }
        }
      }
    }
  }
}
`
