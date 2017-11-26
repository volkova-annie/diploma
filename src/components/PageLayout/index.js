import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Sprite, Icon } from '../SVGIcon'
import Header from '../Header'
import Footer from '../Footer'
import { Modals } from '../Modals'

const PageLayout = (props) =>
  <main className='container'>
    <Modals {...props} />

    <Header {...props} />

    {props.children}

    <Footer {...props} />

    <Sprite />

    <Helmet>
      <title>Cuba Bar</title>
      <meta
        name="description"
        content="Cuba Bar" />
      <meta
        name="keywords"
        content="cuba, bar, gorohovoya" />
    </Helmet>
  </main>

export default PageLayout
