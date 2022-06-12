import React, { useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { feedbackReply } from '../../actions/feedbackSelected'
import { ContextData } from '../../context/context'
import { useForm } from '../../hooks/useForm'
import { ReplyCard } from './ReplyCard'

export const CommentReplies= ({ replies }) => {
  // debugger
  const { showReplyBox, handleShowReplyBox, handleReply } = useContext( ContextData )
  const { inputValues, handleOnChange, charactersLeft  } = useForm()
  const { reply_comment } = inputValues
  const dispatch = useDispatch()
  // useEffect(() => {
  //   setHandleReply(replyInput)
  // }, [[ replyInput ]])

  // debugger
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(feedbackReply({handleReply, reply_comment}))
  }
  // debugger
  return (
    <div className='comment__replies'>
      {
        replies.length > 0 &&
        replies.map(reply => (
          <ReplyCard reply={ reply }/>      
        ))
      }

{
        showReplyBox && 
        <>
         
          <textarea className='text-area'
          name="reply_comment"
          value={ reply_comment }
          onChange={ handleOnChange }
          placeholder='Type your comment here'
          >{}</textarea>
           <div>
            <p className='text--2' style={{
              color: `${ charactersLeft < 30 && 'red' }`
            }}>{ charactersLeft } Characters left</p>
            <button className='btn purple text--3' onClick={ handleSubmit }>Post Comment</button>
            <button className='btn red text--3' onClick={ handleShowReplyBox }>Cancel</button>
          </div>
        </>
      }
    </div>
  )
}
