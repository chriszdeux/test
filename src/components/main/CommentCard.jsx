import React from 'react'
import { CommentHeader } from './CommentHeader'
import { CommentReplys } from './CommentReplys'

export const CommentCard = () => {
  return (
    <article className='comment__card'>
      <CommentHeader />
      <p className='text--1'>
        Reprehenderit ullamco irure laborum non anim ullamco sunt tempor amet.re laborum non anim ullamco sunt tempor amet.re laborum non anim ullamco sunt tempor amet.re laborum non anim ullamco sunt tempor amet.re laborum non anim ullamco sunt tempor amet.
      </p>
      <CommentReplys />
    </article>
  )
}
