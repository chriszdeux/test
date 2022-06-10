import React from 'react'
import { ReplyCard } from './ReplyCard'

export const CommentReplys = ({ replies }) => {
  // debugger
  return (
    <div className='comment__replys'>
      {
        replies.length > 0 &&
        replies.map(reply => (
          <ReplyCard reply={ reply }/>      
        ))
      }
    </div>
  )
}
