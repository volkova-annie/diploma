import React, {Component} from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'
import {connectComponent} from '../state/connectComponent'
import PageLayout from '../components/PageLayout'
import PageGrid from '../components/PageGrid'
import MenuTile from '../components/MenuTile'
import st from './style.module.css'

class MenuPage extends Component {
  itemRenderer = ({node}) => <MenuTile
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

export default connectComponent(MenuPage)


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
