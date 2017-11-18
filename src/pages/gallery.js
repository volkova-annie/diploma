import React, {Component} from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'
import {connectComponent} from '../state/connectComponent'
import PageLayout from '../components/PageLayout'
import PageGrid from '../components/PageGrid'
import GalleryTile from '../components/GalleryTile'
import st from './style.module.css'

class GalleryPage extends Component {
  itemRenderer = ({node}) => <GalleryTile
    {...node}
    t={this.props.actions.translate}
    locale={this.props.locale} />

  render() {
    const t = this.props.actions.translate
    const currentLocale = this.props.locale
    const {data} = this.props
    const events = data[currentLocale].edges

    return <PageLayout
      {...this.state}
      {...this.props}>
      <PageGrid
        renderer={this.itemRenderer}
        items={events} />
    </PageLayout>
  }
}

export default connectComponent(GalleryPage)

export const pageQuery = graphql`
  query GalleryQuery {
    ru: allContentfulGallery(filter: {node_locale: {eq: "ru"}}) {
      edges {
        node {
          id
          title
          type
          image {
            responsiveResolution(width: 640) {
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
            responsiveResolution(width: 640) {
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
