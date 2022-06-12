import React, { lazy, useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { ContextData } from '../../context/context';

export const ReplyHeader = ({ reply }) => {
  const { handleShowReplyBox, handleReply } = useContext(ContextData)
  // debugger
  const { user } = reply !== undefined && reply
  // debugger
  const { image, name, username } = user !== undefined && user;
  // debugger
    const data = useSelector(state => state.feedback_reducer)
  // const handleReply = () => {
  //   postRef.current.focus();
  //   handleReplyTextBox
  // }
  // debugger
  return (
    <div className='comment__header'>
      <div className='comment__user'>
        <figure>
          <img src={ image } />
        </figure>
        <h4>
          { name }
          <span className='text--2'>@{ username }</span>
        </h4>
      </div>

      <button className='btn default--1' onClick={ () => handleShowReplyBox(reply) }>Reply</button>
    </div>
  )
}
