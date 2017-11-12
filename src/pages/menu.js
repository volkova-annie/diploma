import React from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'
import Page, { PageLayout } from '../components/Page'
import PageGrid from '../components/PageGrid'
import MenuTile from '../components/MenuTile'
import st from './style.module.css'

class MenuPage extends Page {
  itemRenderer = ({node}) => <MenuTile
    {...node}
    t={this.t}
    locale={this.state.locale} />

  render() {
    const t = this.t
    const currentLocale = this.state.locale
    const {data} = this.props
    const events = [...data[currentLocale].edges]
      .concat([...data[currentLocale].edges])
      .concat([...data[currentLocale].edges])
      .concat([...data[currentLocale].edges])

    return <PageLayout
      t={t}
      switchLocale={this.switchLocale}
      {...this.state}
      {...this.props}>
      <PageGrid
        renderer={this.itemRenderer}
        items={events} />
    </PageLayout>
  }
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
