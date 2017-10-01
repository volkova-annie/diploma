import React from 'react'
import Link from 'gatsby-link'
import Slider from '../components/Slider'
import Actions from '../components/Actions'
import {transformLocales} from '../modules/transform-locales'
import Collage from '../components/Collage'
import Poster from '../components/Poster'
import st from './style.module.css'

const leftPad = require('left-pad')

const IndexPage = (props) => {
  const localesData = transformLocales(props.data, ['ru', 'en'])
  const currentLocale = 'ru'
  const {events, menu, gallery} = localesData[currentLocale]

  return <div>
    <Slider></Slider>
    <Actions></Actions>
    <h2 className={st.header}>О Кубе</h2>
    <p className={st.text}>Lorem ipsum dolor sit amet, veniam expetenda intellegebat quo et, mel ei nostro volutpat facilisis. Pro eros solet ornatus ea. Mel graecis commune maluisset cu, illum iuvaret principes eam in, an qui nisl justo neglegentur. Cum at mentitum accommodare.
Et tota falli epicurei per, ea tibique ponderum eam. Usu te causae impedit, idque vitae vis ea. Ne mutat putant habemus cum. Duo bonorum laoreet ex. Veri facilisis accusamus vis ex, ad est cetero audiam democritum. Ea vel admodum accusamus, an vim virtute repudiandae, dico dignissim sit te. Mei putent probatus cu.
Simul altera nostrud mel et, ex delenit laoreet quo, mundi facilis vivendum vim ex. Qui id commune consulatu urbanitas. Usu cu vocent impetus aliquando, nonumy petentium consequuntur eu eam. Et his primis sensibus torquatos, audire epicuri id per. Ei ius civibus accusata constituam, est et vivendo consetetur.
Id ius atqui populo, cu saperet suscipit copiosae mei. Vis no debet erant moderatius, augue inermis docendi at mei. Mel autem idque menandri et. Duo dictas alterum at.
Idque molestiae his ut, an mel corrumpit voluptatum. No pri hendrerit inciderint, eu mazim tempor efficiendi ius. Eu case ferri autem mel, mea lucilius incorrupte neglegentur ut. Ne mel nibh semper latine, vero doming eam ad, iudico melius eu sea. Nam graece dolorem mandamus ea.
Usu te evertitur vulputate. Eu quaeque efficiantur eos. Cu dolorem iracundia gloriatur quo. Ad augue virtute vel, ius cu dicam animal, cum tota aeque ne.
Duo ei sale nonumes. Qui ad congue admodum. Utroque laoreet similique ei per, altera scripta admodum qui no, ut aliquam molestie ius. Dolore ubique ei mei. Legere viderer vim et. Eum id voluptatum delicatissimi.
Ne choro nominati vim. An vix omnes feugiat senserit, eos amet patrioque gubergren ei, laboramus conclusionemque nam et. Nec ad veri doming admodum, suas augue movet vix at, in brute reprehendunt mea. Duo ad brute dicit reprimique, malis consetetur an ius.</p>
    <h2 className={st.header}>События</h2>
    <p className={st.subtitle}>Приходите к нам у нас весело и вкусно!</p>
    <Collage items={events.edges}></Collage>
    <h2 className={st.header}>Меню</h2>
    <p className={st.subtitle}>Приходите к нам у нас весело и вкусно!</p>
    <Collage items={menu.edges}></Collage>
  </div>
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    ruEvents: allContentfulEvents(limit: 6, filter: {node_locale: {eq: "ru"}}) {
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
            responsiveResolution(width: 200) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
    enEvents: allContentfulEvents(limit: 6, filter: {node_locale: {eq: "en"}}) {
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
            responsiveResolution(width: 200) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
    ruMenu: allContentfulMenu(filter: {node_locale: {eq: "ru"}}) {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          image {
            responsiveResolution(width: 200) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
    enMenu: allContentfulMenu(filter: {node_locale: {eq: "en"}}) {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          image {
            responsiveResolution(width: 200) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
    ruGallery: allContentfulGallery(filter: {node_locale: {eq: "ru"}}) {
      edges {
        node {
          id
          title
          type
          image {
            responsiveResolution(width: 200) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
    enGallery: allContentfulGallery(filter: {node_locale: {eq: "en"}}) {
      edges {
        node {
          id
          title
          type
          image {
            responsiveResolution(width: 200) {
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
