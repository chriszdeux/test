import React from 'react'
import { CommentCard } from './CommentCard'
export const FeedbackComments = ({ data }) => {
  const { comments } = data
  // debugger
  return (
    
    <div className='comments'>
      <h2 className='comment__count'><span>{ comments ? comments.length : 0 }</span> Comments</h2>
      {
        comments 
        ?  comments.map(comment => (
          <CommentCard comment={ comment }/>
        )) 
        : <h3>No Comments</h3>
      }
    </div>
  )
}
