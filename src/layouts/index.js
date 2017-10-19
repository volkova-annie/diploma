import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Sprite, Icon } from '../components/SVGIcon'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Modals } from '../components/Modals'

import './style.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Modals />
    <Header />
    <div>{children()}</div>

    <Footer />
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

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
