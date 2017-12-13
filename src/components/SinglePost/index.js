import React, {Component} from 'react'
import Link from 'gatsby-link'
import st from './style.module.css'

const SinglePost = (props) => {
  return (
    <section className={st.single_post}>
      <aside className={st.presentation}>{props.presentation}</aside>
      <article className={st.content}>{props.content}</article>
    </section>
  )
}

export default SinglePost
