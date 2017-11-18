import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Sprite, Icon } from '../SVGIcon'
import Header from '../Header'
import Footer from '../Footer'
import { Modals } from '../Modals'

const PageLayout = (props) =>
  <div className='container'>
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
      <link
        href="https://fonts.googleapis.com/css?family=Arimo:400,400i,700,700i|Podkova:400,600&amp;subset=cyrillic,cyrillic-ext,latin-ext"
        rel="stylesheet" />
    </Helmet>
  </div>

export default PageLayout
