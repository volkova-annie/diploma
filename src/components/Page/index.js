import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Sprite, Icon } from '../SVGIcon'
import Header from '../Header'
import Footer from '../Footer'
import { Modals } from '../Modals'

export const PageLayout = (props) =>
  <div className='container'>
    <Modals t={props.t} />

    <Header
      {...props}
      t={props.t}
      switchLocale={props.switchLocale} />

    {props.children}

    <Footer t={props.t} />

    <Sprite />

    <Helmet>
      <title>Cuba Bar</title>
      <meta
        name="description"
        content="Cuba Bar" />
      <meta
        name="keywords"
        content="cuba, bar, gorohovoya" />
      <link
        href="https://fonts.googleapis.com/css?family=Arimo:400,400i,700,700i|Podkova:400,600&amp;subset=cyrillic,cyrillic-ext,latin-ext"
        rel="stylesheet" />
    </Helmet>
  </div>


class Page extends Component {
  state = { locale: 'ru', locales: ['ru', 'en'] }

  switchLocale = locale => {
    this.setState({ locale })
  }

  t = translates => {
    return translates[this.state.locale]
  }
}

export default Page
