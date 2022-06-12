import React, { useContext } from 'react'
import { CommentHeader } from './CommentHeader'
import { ContextData } from '../../context/context'
import { useForm } from '../../hooks/useForm'
import { ReplyHeader } from './ReplyHeader'
export const ReplyCard = ({ reply }) => {
  const { content, replyingTo, user } = reply && reply
  // debugger
  // debugger
  return (
    <article className='comment__card reply'>
      <ReplyHeader reply={ reply}/>
      <p className='text--1'>
        <strong>@{replyingTo}</strong>
        { content }
      </p>
     
    </article>
  )
}
