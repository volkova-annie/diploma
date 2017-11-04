import React from 'react'
import Link from 'gatsby-link'
import CarouselWidget from '../components/CarouselWidget'
import Page, {PageLayout} from '../components/Page'
import Actions from '../components/Actions'
import { transformLocales } from '../modules/locales'
import Collage from '../components/Collage'
import Poster from '../components/Poster'
import st from './style.module.css'

const leftPad = require('left-pad')

class IndexPage extends Page {
  render() {
    const localesData = transformLocales(this.props.data, this.state.locales)
    const currentLocale = this.state.locale
    const { events, menu, gallery, slider } = localesData[currentLocale]
    const t = this.t

    return (
      <PageLayout
        t={t}
        switchLocale={this.switchLocale}
        {...this.state}
        {...this.props} >
        <CarouselWidget pictures={slider.edges} />
        <Actions
          switchLocale={this.switchLocale}
          {...this.props}
          t={t} />
        <h2 className={st.header}>{t({ ru: 'О Кубе', en: 'About Cuba' })}</h2>
        <p
          className={st.text}
          dangerouslySetInnerHTML={{
            __html: t({
              ru: `Russian Lorem ipsum dolor sit amet, veniam expetenda intellegebat quo&nbsp;et, mel ei&nbsp;nostro volutpat facilisis. Pro eros solet ornatus&nbsp;ea. Mel graecis commune maluisset&nbsp;cu, illum iuvaret principes eam&nbsp;in, an&nbsp;qui nisl justo neglegentur. Cum at&nbsp;mentitum accommodare.
Et&nbsp;tota falli epicurei per, ea&nbsp;tibique ponderum eam. Usu te&nbsp;causae impedit, idque vitae vis&nbsp;ea. Ne&nbsp;mutat putant habemus cum. Duo bonorum laoreet&nbsp;ex. Veri facilisis accusamus vis&nbsp;ex, ad&nbsp;est cetero audiam democritum. Ea&nbsp;vel admodum accusamus, an&nbsp;vim virtute repudiandae, dico dignissim sit&nbsp;te. Mei putent probatus&nbsp;cu.
Simul altera nostrud mel&nbsp;et, ex&nbsp;delenit laoreet quo, mundi facilis vivendum vim&nbsp;ex. Qui id&nbsp;commune consulatu urbanitas. Usu cu&nbsp;vocent impetus aliquando, nonumy petentium consequuntur eu&nbsp;eam. Et&nbsp;his primis sensibus torquatos, audire epicuri id&nbsp;per. Ei&nbsp;ius civibus accusata constituam, est et&nbsp;vivendo consetetur.
Id&nbsp;ius atqui populo, cu&nbsp;saperet suscipit copiosae mei. Vis no&nbsp;debet erant moderatius, augue inermis docendi at&nbsp;mei. Mel autem idque menandri&nbsp;et. Duo dictas alterum&nbsp;at.
Idque molestiae his&nbsp;ut, an&nbsp;mel corrumpit voluptatum. No&nbsp;pri hendrerit inciderint, eu&nbsp;mazim tempor efficiendi ius. Eu&nbsp;case ferri autem mel, mea lucilius incorrupte neglegentur&nbsp;ut. Ne&nbsp;mel nibh semper latine, vero doming eam&nbsp;ad, iudico melius eu&nbsp;sea. Nam graece dolorem mandamus&nbsp;ea.
Usu te&nbsp;evertitur vulputate. Eu&nbsp;quaeque efficiantur eos. Cu&nbsp;dolorem iracundia gloriatur quo. Ad&nbsp;augue virtute vel, ius cu&nbsp;dicam animal, cum tota aeque&nbsp;ne.
Duo ei&nbsp;sale nonumes. Qui ad&nbsp;congue admodum. Utroque laoreet similique ei&nbsp;per, altera scripta admodum qui&nbsp;no, ut&nbsp;aliquam molestie ius. Dolore ubique ei&nbsp;mei. Legere viderer vim&nbsp;et. Eum id&nbsp;voluptatum delicatissimi.
Ne&nbsp;choro nominati vim. An&nbsp;vix omnes feugiat senserit, eos amet patrioque gubergren&nbsp;ei, laboramus conclusionemque nam&nbsp;et. Nec ad&nbsp;veri doming admodum, suas augue movet vix&nbsp;at, in&nbsp;brute reprehendunt mea. Duo ad&nbsp;brute dicit reprimique, malis consetetur an&nbsp;ius.`,
              en: `English Lorem ipsum dolor sit amet, veniam expetenda intellegebat quo&nbsp;et, mel ei&nbsp;nostro volutpat facilisis.
Pro eros solet ornatus&nbsp;ea. Mel graecis commune maluisset&nbsp;cu, illum iuvaret principes eam&nbsp;in, an&nbsp;qui nisl justo neglegentur.
Cum at&nbsp;mentitum accommodare. Et&nbsp;tota falli epicurei per, ea&nbsp;tibique ponderum eam.
Usu te&nbsp;causae impedit, idque vitae vis&nbsp;ea. Ne&nbsp;mutat putant habemus cum. Duo bonorum laoreet&nbsp;ex.
Veri facilisis accusamus vis&nbsp;ex, ad&nbsp;est cetero audiam democritum. Ea&nbsp;vel admodum accusamus, an&nbsp;vim virtute repudiandae, dico dignissim sit&nbsp;te.
Mei putent probatus&nbsp;cu. Simul altera nostrud mel&nbsp;et, ex&nbsp;delenit laoreet quo, mundi facilis vivendum vim&nbsp;ex.
Qui id&nbsp;commune consulatu urbanitas. Usu cu&nbsp;vocent impetus aliquando, nonumy petentium consequuntur eu&nbsp;eam.
Et&nbsp;his primis sensibus torquatos, audire epicuri id&nbsp;per. Ei&nbsp;ius civibus accusata constituam, est et&nbsp;vivendo consetetur.
Id&nbsp;ius atqui populo, cu&nbsp;saperet suscipit copiosae mei. Vis no&nbsp;debet erant moderatius, augue inermis docendi at&nbsp;mei.
Mel autem idque menandri&nbsp;et. Duo dictas alterum&nbsp;at. Idque molestiae his&nbsp;ut, an&nbsp;mel corrumpit voluptatum.
No&nbsp;pri hendrerit inciderint, eu&nbsp;mazim tempor efficiendi ius. Eu&nbsp;case ferri autem mel, mea lucilius incorrupte neglegentur&nbsp;ut.
Ne&nbsp;mel nibh semper latine, vero doming eam&nbsp;ad, iudico melius eu&nbsp;sea. Nam graece dolorem mandamus&nbsp;ea.
Usu te&nbsp;evertitur vulputate. Eu&nbsp;quaeque efficiantur eos. Cu&nbsp;dolorem iracundia gloriatur quo. Ad&nbsp;augue virtute vel, ius cu&nbsp;dicam animal, cum tota aeque&nbsp;ne. Duo ei&nbsp;sale nonumes. Qui ad&nbsp;congue admodum.
Utroque laoreet similique ei&nbsp;per, altera scripta admodum qui&nbsp;no, ut&nbsp;aliquam molestie ius. Dolore ubique ei&nbsp;mei. Legere viderer vim&nbsp;et. Eum id&nbsp;voluptatum delicatissimi. Ne&nbsp;choro nominati vim. An&nbsp;vix omnes feugiat senserit, eos amet patrioque gubergren&nbsp;ei, laboramus conclusionemque nam&nbsp;et.
Nec ad&nbsp;veri doming admodum, suas augue movet vix&nbsp;at, in&nbsp;brute reprehendunt mea. Duo ad&nbsp;brute dicit reprimique, malis consetetur an&nbsp;ius.`,
            }),
          }} />
        <h2 className={st.header}>{t({ ru: 'События', en: 'Events' })}</h2>
        <p className={st.subtitle}>
          {t({ ru: 'Приходите к нам у нас весело и вкусно!', en: 'Come to us we have fun and delicious!' })}
        </p>
        <Collage items={events.edges} />
        <h2 className={st.header}>{t({ ru: 'Меню', en: 'Menu' })}</h2>
        <p className={st.subtitle}>
          {t({ ru: 'Приходите к нам у нас весело и вкусно!', en: 'Come to us we have fun and delicious!' })}
        </p>
        <Collage items={menu.edges} />
      </PageLayout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    ruEvents: allContentfulEvents(limit: 6, filter: { node_locale: { eq: "ru" } }) {
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
    enEvents: allContentfulEvents(limit: 6, filter: { node_locale: { eq: "en" } }) {
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
    ruMenu: allContentfulMenu(filter: { node_locale: { eq: "ru" } }) {
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
    enMenu: allContentfulMenu(filter: { node_locale: { eq: "en" } }) {
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
    ruGallery: allContentfulGallery(filter: { node_locale: { eq: "ru" } }) {
      edges {
        node {
          id
          title
          type
          image {
            responsiveResolution(height: 200) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
    enGallery: allContentfulGallery(filter: { node_locale: { eq: "en" } }) {
      edges {
        node {
          id
          title
          type
          image {
            responsiveResolution(height: 200) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
    ruSlider: allContentfulHomePageSlider(filter: { node_locale: { eq: "ru" } }) {
      edges {
        node {
          id
          title
          picture {
            responsiveResolution(width: 1280) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
    enSlider: allContentfulHomePageSlider(filter: { node_locale: { eq: "en" } }) {
      edges {
        node {
          id
          title
          picture {
            responsiveResolution(width: 1280) {
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
