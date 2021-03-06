import React, { lazy, useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { ContextData } from '../../context/context';

export const CommentHeader = ({ user }) => {
  const { handleShowReplyBox, handleReply } = useContext(ContextData)

  const { image, name, username } = user 
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

      <button className='btn default--1' onClick={ () => handleShowReplyBox(user) }>Reply</button>
    </div>
  )
}
