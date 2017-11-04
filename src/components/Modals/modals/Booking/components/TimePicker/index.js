import React, {Component} from 'react'
import leftPad from 'left-pad'
import st from './style.module.css'

function parseTime(str) {
  const arr = str.split(':')
    .map(str => parseInt(str))

  fillArr(arr)

  function fillArr(arr) {
    if (arr.length < 4) {
      arr.push(0)
      fillArr(arr)
    }
    else {
      return arr
    }
  }

  return arr
}

function generateTimes(opts) {
  const date = new Date()
  const start = date.setHours.apply(date, parseTime(opts.start))
  const duration = new Date('01.01.1970 ' + opts.duration + ' +00').valueOf()
  const end = start + duration
  const step = new Date('01.01.1970 ' + opts.step + ' +00').valueOf()
  const arr = []

  for (let i = start; i <= end; i += step) {
    const date = new Date(i)
    const h = leftPad(date.getHours(), 2, 0)
    const m = leftPad(date.getMinutes(), 2, 0)
    arr.push(h + ':' + m)
  }

  return arr
}

class TimePicker extends Component {
  state = {
    time: '18:00',
    times: generateTimes({start: '15:00', duration: '10:00', step: '00:30'})
  }
  render() {
    const {time, times} = this.state

    return <div className={st.timepicker}>{times.map(time =>
      <label
        key={time}
        htmlFor={`time-input-${time}`}
        className={st.label}>
        <input
          id={`time-input-${time}`}
          type='radio'
          className={st.time}
          name='time'
          value={time} />
        <span className={st.time_visual}>{time}</span>
      </label>
    )}
    </div>
  }
}


export {TimePicker}
