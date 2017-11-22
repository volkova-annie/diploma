import React, {Component} from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'
import {connectComponent} from '../../state/connectComponent'
import PageLayout from '../../components/PageLayout'
import SinglePost from '../../components/SinglePost'
import Content from './components/Content'
import Presentation from './components/Presentation'

class MenuPost extends Component {
  t = this.props.actions.translate

  renderContent = (item) =>
    <Content
      t={this.t}
      item={item} />

  renderPresentation = (item) =>
    <Presentation item={item} />

  render() {
    const t = this.t
    const locale = this.props.locale
    const {data} = this.props.pathContext
    const item = data[locale]

    return <PageLayout
      {...this.state}
      {...this.props}>
      <SinglePost
        content={this.renderContent(item)}
        presentation={this.renderPresentation(item)} />
    </PageLayout>

  }
}

export default connectComponent(MenuPost)
