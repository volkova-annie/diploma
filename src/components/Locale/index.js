import React, { Component } from 'react'
import Link from 'gatsby-link'
import st from './style.module.css'

class Locale extends Component {
  change = event => {
    const { target: { value } } = event

    this.props.switchLocale(value)
  }
  render() {
    return (
      <div className={st.locale}>
        <select
          value={this.props.locale}
          onChange={this.change}
          className={st.select}>
          {this.props.locales.map(locale => (
            <option
              key={locale}
              value={locale}>
              {locale.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    )
  }
}

export default Locale
