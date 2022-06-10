import React from 'react'
import { CommentHeader } from './CommentHeader'

export const ReplyCard = ({ reply }) => {
  const { content, replyingTo, user } = reply
  // debugger
  return (
    <article className='comment__card reply'>
      <CommentHeader user={ user }/>
      <p className='text--1'>
        <strong>@{replyingTo}</strong>
        { content }
      </p>
    </article>
  )
}
