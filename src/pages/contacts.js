import React, {Component} from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'
import {connectComponent} from '../state/connectComponent'
import PageLayout from '../components/PageLayout'
import GoogleMap from '../components/GoogleMap'
import st from './style.module.css'



class ContactsPage extends Component {
  render() {
    const t = this.props.actions.translate

    return (
      <PageLayout
        t={t}
        switchLocale={this.switchLocale}
        {...this.state}
        {...this.props}>
        <div>
          <section className={cn(st.section, st.is_centered)}>
            <ul>
              <li>
                <strong>{t({ ru: 'Адрес:', en: 'Address:' })}</strong>{' '}
                <a href='https://maps.google.com?q=Cuba+Bar,+Gorohovaya+28'>{
                  t({
                    ru: 'Санкт-Петербург, Гороховая, 28',
                    en: 'St. Petersburg, Gorohovaya str. 28',
                  })
                }</a>
              </li>
              <li>
                <strong>{t({ ru: 'Метро:', en: 'Metro:' })}</strong> {
                  t({
                    ru: 'Сенная площадь, Садовая, Спасская',
                    en: 'Sennaya ploschad\', Sadovaya, Spasskaya',
                  })
                }
              </li>
              <li>
                <strong>{t({ ru: 'Телефон:', en: 'Phone:' })}</strong>{' '}
                <a href='tel:+1234567890'>
                  +7 (123) 456-78-90
                </a>
              </li>
              <li>
                <strong>{t({ ru: 'Время работы:', en: 'Working hours:' })}</strong>{' '}
                15:00 - 03:00
              </li>
            </ul>
          </section>
          <section className={st.section}>
            <GoogleMap
              isMarkerShown
              googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
              loadingElement={<div style={{ height: '100%', width: '100%' }} />}
              containerElement={<div style={{ height: '400px', width: '100%' }} />}
              mapElement={<div style={{ height: '100%', width: '100%' }} />}  />
          </section>
        </div>

      </PageLayout>
    )
  }
}

export default connectComponent(ContactsPage)
