import React from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'
import st from './style.module.css'

const Modal = ({children, shown, name, closeModal, openModal, className}) => {
  return <div className={cn(st.modal, className, {[st.shown]: shown})}>
    {/* eslint-disable react/jsx-no-bind */}
    <button
      onClick={closeModal.bind(null, name)}
      className={st.close} />
    {/* eslint-enable react/jsx-no-bind */}
    {children}
  </div>
}

export {Modal}
