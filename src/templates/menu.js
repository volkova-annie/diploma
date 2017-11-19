import React, {Component} from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'
import {connectComponent} from '../state/connectComponent'
import PageLayout from '../components/PageLayout'
import PageGrid from '../components/PageGrid'
import MenuTile from '../components/MenuTile'

class MenuPage extends Component {
  itemRenderer = (node) => <MenuTile
    {...node}
    t={this.props.actions.translate}
    locale={this.props.locale} />

  render() {
    const t = this.props.actions.translate
    const currentLocale = this.props.locale
    const {data: {items}} = this.props.pathContext

    return <PageLayout
      {...this.state}
      {...this.props}>
      <PageGrid
        renderer={this.itemRenderer}
        items={items} />
    </PageLayout>
  }
}

export default connectComponent(MenuPage)
