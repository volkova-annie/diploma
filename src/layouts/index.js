import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Sprite, Icon } from '../components/SVGIcon'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Modals } from '../components/Modals'

import './style.css'

/**
 * Logo: https://ucarecdn.com/f5b33116-7a4d-4864-bc97-6982f20c696b/logo_cuba.svg
 * Flag: https://ucarecdn.com/fc799858-d061-47df-bc8e-0ac6eebb1201/-/preview/-/format/auto/
 * Lines: https://ucarecdn.com/810be95e-2e49-4014-9340-2901bbc64c1a/-/preview/-/format/auto/
 * BG: https://ucarecdn.com/b81554c4-81f6-43bc-9e11-521d89c40427/-/preview/-/format/auto/
 */

class TemplateWrapper extends Component {
  state = { locale: 'ru', locales: ['ru', 'en'] }

  switchLocale = locale => {
    this.setState({ locale })
  }
  t = translates => {
    return translates[this.state.locale]
  }
  render() {
    return (
      <div className='container'>
        <Modals t={this.t} />
        <Header
          {...this.state}
          t={this.t}
          switchLocale={this.switchLocale} />

        {this.props.children({ ...this.props, ...this.state, t: this.t })}

        <Footer t={this.t} />
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
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
