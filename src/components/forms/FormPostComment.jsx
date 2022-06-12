import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { feedbackPost } from '../../actions/feedbackSelected'
import { cleanDataFeedback, storageAdd } from '../../actions/storageData'
import { ContextData } from '../../context/context'
import { useForm } from '../../hooks/useForm'

export const FormPostComment = () => {

  const data = useSelector(state => state.feedback_reducer)

  const { inputValues, handleOnChange, charactersLeft } = useForm()
  const { post } = inputValues
  const { comments } = data && data
  const dispatch = useDispatch()
  
  const SubmitComment = (e) => {
    e.preventDefault()
    dispatch(feedbackPost(post))
    // debugger
  }
  
  useEffect(() => {
    dispatch( storageAdd(data) )
  }, [ comments?.length ])
  // debugger
  // useEffect(() => {
  //   // debugger

  // }, [ comments?.length ])
  // debugger
  return (
    <form className='comment__form'>
      <h2>Add Comment</h2>
      <textarea className='text-area'
      // ref={ postRef }
        name="post"
        value={ post }
        onChange={ handleOnChange }
        placeholder='Type your comment here'
      ></textarea>
      <div>
        <p className='text--2' style={{
          color: `${ charactersLeft < 30 && 'red' }`
        }}>{ charactersLeft } Characters left</p>
        <button className='btn purple text--3' onClick={SubmitComment}>Post Comment</button>
      </div>
    </form>
  )
}
