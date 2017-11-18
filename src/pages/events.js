import React, {Component} from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'
import {connectComponent} from '../state/connectComponent'
import PageLayout from '../components/PageLayout'
import PageGrid from '../components/PageGrid'
import EventTile from '../components/EventTile'
import st from './style.module.css'

class EventsPage extends Component {
  itemRenderer = ({node}) => <EventTile
    {...node}
    t={this.t}
    locale={this.state.locale} />

  render() {
    const t = this.props.actions.translate
    const currentLocale = this.props.locale
    const {data} = this.props
    const events = [...data[currentLocale].edges]
      .concat([...data[currentLocale].edges])
      .concat([...data[currentLocale].edges])
      .concat([...data[currentLocale].edges])

    return <PageLayout
      {...this.state}
      {...this.props}>
      <PageGrid
        renderer={this.itemRenderer}
        items={events} />
    </PageLayout>
  }
}

export default connectComponent(EventsPage)

export const pageQuery = graphql`
  query EventsQuery {
    ru: allContentfulEvents(sort: {fields: [date]}, filter: {node_locale: {eq: "ru"}}) {
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
    en: allContentfulEvents(sort: {fields: [date]}, filter: {node_locale: {eq: "en"}}) {
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
