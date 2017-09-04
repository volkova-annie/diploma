import React from 'react'
import icons from './icons'
import cn from 'classnames'
import st from './style.module.css'

/**
 * <Icon className='iconclass' icon='iconname' />
 */

const Icon = props =>
  <svg className={cn(st.icon, props.className)} dangerouslySetInnerHTML={{__html: `
    <use xlink:href="#${props.icon}" />
  `}} />

const Sprite = () =>
  <svg className={st.sprite}>
    {icons.map(icon =>
      <symbol
        id={icon.id}
        viewBox={icon.viewBox}
        dangerouslySetInnerHTML={{__html: icon.markup}}/>
    )}
  </svg>

export {Icon, Sprite}
