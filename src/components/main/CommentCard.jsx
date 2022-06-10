import React from 'react'
import { CommentHeader } from './CommentHeader'
import { CommentReplies } from './CommentReplies'

export const CommentCard = ({ comment }) => {
  const { content, user, replies } = comment 
  // debugger
  return (
    <article className='comment__card'>
      <CommentHeader user={ user }/>
      <p className='text--1'>
        { content }
      </p>
      {
        replies &&
      <CommentReplies replies={ replies }/>
      }
    </article>
  )
}
