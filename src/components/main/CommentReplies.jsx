import React from 'react'
import { ReplyCard } from './ReplyCard'

export const CommentReplies= ({ replies }) => {
  // debugger
  return (
    <div className='comment__replies'>
      {
        replies.length > 0 &&
        replies.map(reply => (
          <ReplyCard reply={ reply }/>      
        ))
      }

      
    </div>
  )
}
