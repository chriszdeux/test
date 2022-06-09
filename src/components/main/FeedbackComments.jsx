import React from 'react'
import { CommentCard } from './CommentCard'
export const FeedbackComments = () => {
  return (
    <div className='comments'>
      <h2 className='comment__count'>4 Comments</h2>
      <CommentCard />
    </div>
  )
}
