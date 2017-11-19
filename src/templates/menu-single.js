import React, {Component} from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'
import {connectComponent} from '../state/connectComponent'
import PageLayout from '../components/PageLayout'

class MenuPost extends Component {
  render() {
    const t = this.props.actions.translate
    const locale = this.props.locale
    const {data} = this.props.pathContext
    const item = data[locale]

    return <PageLayout
      {...this.state}
      {...this.props}>
      <div>{item.title}</div>
    </PageLayout>
  }
}

export default connectComponent(MenuPost)
