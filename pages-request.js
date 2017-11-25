module.exports = `
query {
  gallery: allContentfulGallery {
    edges {
      node {
        node_locale
        id
        title
        type
        image {
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
  slider: allContentfulHomePageSlider {
    edges {
      node {
        node_locale
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
