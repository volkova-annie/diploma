import React, {Component} from 'react'
import {TimePicker} from '../components'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import './input-range.css'
import st from './style.module.css'


class Start extends Component {
  state = {value: 1}

  sendForm = (event) => {
    event.preventDefault()
    const data = {}
    const whiteList = [
      'date',
      'time',
      'name',
      'phone',
      'guests',
      'comments',
    ]

    const form = event.target
    const elements = form.elements

    whiteList.forEach(name => {
      data[name] = elements[name].value
    })
  }

  render() {
    const t = this.props.actions.translate

    return <div className={st.start}>

      <form
        onSubmit={this.sendForm}
        className={st.form}>
        <div className={st.date}>
          <label className={st.label}>{t({ru:'Дата и время', en:'Date and time'})}
            <input
              name='date'
              className={st.date_input}
              type='date' />
          </label>
          <TimePicker {...this.props} />
        </div>
        <div className={st.slider}>
          <label className={st.label}>{t({ru:'Количество гостей', en:'Number of guests'})}
            <InputRange
              name='guests'
              maxValue={6}
              minValue={1}
              value={this.state.value}
              onChange={value => this.setState({value})} />
          </label>
        </div>
        <div className={st.guests}>
          <label className={st.label}>{t({ru:'Информация о гостях', en:'Information about guests'})}
            <div className={st.contact_input}>
              <input
                name='name'
                className={st.name}
                type='text'
                placeholder={t({ru:'Как вас зовут', en:'Your name'})} />
              <input
                name='phone'
                className={st.phone}
                type='tel'
                placeholder={t({ru:'Телефон', en:'Phone number'})} />
            </div>
          </label>

          <textarea
            name='comments'
            className={st.textarea}
            placeholder={t({ru:'Пожелания (необязательно)', en:'Comments (optional)'})}>
          </textarea>
        </div>
        <button
          className={st.button}
          type='submit'>{t({ru:'Забронировать', en:'Reserve'})}
        </button>
      </form>
    </div>
  }
}

export {Start}
