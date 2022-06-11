import React, { useContext } from 'react'
import { CommentHeader } from './CommentHeader'
import { ContextData } from '../../context/context'
import { useForm } from '../../hooks/useForm'
export const ReplyCard = ({ reply }) => {
  const { content, replyingTo, user } = reply
  // debugger
  const { replyTextBox } = useContext( ContextData )
  const { inputValues, handleOnChange, charactersLeft  } = useForm()
  const { reply:replyInput } = inputValues
  return (
    <article className='comment__card reply'>
      <CommentHeader user={ user }/>
      <p className='text--1'>
        <strong>@{replyingTo}</strong>
        { content }
      </p>
      {
        replyTextBox && 
        <textarea className='text-area'
            name="reply"
            value={ replyInput }
            onChange={ handleOnChange }
            placeholder='Type your comment here'
          ></textarea>
      }
    </article>
  )
}
