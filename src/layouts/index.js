import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import {Sprite, Icon} from '../components/SVGIcon'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Modals} from '../components/Modals'

import './style.css'

const TemplateWrapper = ({ children }) =>
  <div>
    <Modals />
    <Header></Header>
    <div>
      {children()}
    </div>

    <Footer></Footer>
    <Sprite />
    <Helmet
      title="Cuba"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]} />
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
