import React, {Component} from 'react'
import st from './style.module.css'

const End = (props) =>
  <div className={st.end}>
    <p>
      Дорогой <span>Саша</span>!
    </p>
    <p>
    Вы забронировали столик на <span>6</span> человек(а) на <span>19.11.2017</span> на <span>19:00</span>.
    </p>
  </div>

export {End}
