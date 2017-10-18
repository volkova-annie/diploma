import React, {Component} from 'react'
import {TimePicker} from '../components'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import './input-range.css'
import st from './style.module.css'


class Start extends Component {
  state = {value: 1}

  render() {
    return <div className={st.start}>
      <form>
        <h3>Дата и время</h3>
        <input
          type='date' />
        <TimePicker />
        <h3>Количество гостей</h3>
        <InputRange
          maxValue={6}
          minValue={1}
          value={this.state.value}
          onChange={value => this.setState({value})} />

        <h3>Информацмя о гостях</h3>
        <input
          type='text'
          placeholder='Как вас зовут' />

        <input
          type='tel'
          placeholder='Телефон' />

        <textarea placeholder='Пожелания (необязательно)'></textarea>
        <button type='submit'>Забронировать</button>
      </form>
    </div>
  }
}

export {Start}
