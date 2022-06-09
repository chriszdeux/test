import React from 'react'
import { CommentHeader } from './CommentHeader'

export const ReplyCard = () => {
  return (
    <article className='comment__card reply'>
      <CommentHeader />
      <p className='text--1'>
        <strong>@replyto_has</strong>
        Reprehenderit ullamco irure laborum non anim ullamco sunt tempor amet.re laborum non anim ullamco sunt tempor amet.re laborum non anim ullamco sunt tempor amet.re laborum non anim ullamco sunt tempor amet.re laborum non anim ullamco sunt tempor amet.
      </p>
    </article>
  )
}
