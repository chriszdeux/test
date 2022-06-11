import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addNewFeedback } from '../../actions/storageData'
import { useForm } from '../../hooks/useForm'
import { ActionForm } from './ActionForm'
import { FeedbackDetail } from './FeedbackDetail'
import { FeedbackTitle } from './FeedbackTitle'
import { SelectCategory } from './SelectCategory'
import { SubmitFormButtons } from './SubmitFormButtons'

export const AddFeedbackForm = () => {
  const { inputValues, handleOnChange, charactersLeft } = useForm()
  const { title_feedback, post, categories, status } = inputValues
  const [handleCategory, setHandleCategory] = useState('')

  const [addFeedbackTemplate, setAddFeedbackTemplate] = useState({
      title: '',
      category: '',
      upvotes: 0,
      status: status[0],
      description: ''
    })
    // debugger
  const dispatch = useDispatch();
  const refButton = useRef(null)
  const navigate = useNavigate()



  useEffect(() => {
      setAddFeedbackTemplate({
        ...addFeedbackTemplate,
        title: title_feedback,
        category: handleCategory,
        description: post
      })

      
    }, [ inputValues, handleCategory ])

  
  useEffect(() => {
    if(title_feedback.length < 10 || post.length < 10 || handleCategory.length < 1) {
      refButton.current.disabled = true
    } else { 
      refButton.current.disabled = false
    }
}, [ title_feedback.length, post.length, handleCategory.length ])
  const handleSubmit = (e) => {
    // debugger
    e.preventDefault();
    dispatch(addNewFeedback(addFeedbackTemplate))
    setTimeout(() => {
      navigate('/test')
    }, 1000);
    // if( title_feedback.length > 10 && post.length > 20 && handleCategory.length > 0 ) {
    // }
  }
  console.log(refButton?.current?.disabled)
  console.log(`title: ${title_feedback.length}`);
  console.log(`post: ${post.length}`);
  console.log(`category: ${handleCategory.length}`);
  // debugger
  return (
    <form className='actions__feedback__form'>
      <ActionForm text="Create new Feedback"/>
      <FeedbackTitle values={{ title_feedback, handleOnChange }}/>
      <SelectCategory values={{ categories, setHandleCategory, handleCategory }}/>
      <FeedbackDetail values={{ post, handleOnChange }}/>
      <p className='text--2' style={{
          color: `${ charactersLeft < 30 && 'red' }`
        }}>{ charactersLeft } Characters left</p>
      <div className='submit__buttons'>
        <button className='btn purple' ref={ refButton }onClick={ handleSubmit }>Add Feedback</button>
        <button className='btn heavy-blue'>Cancel</button>
      </div>
    </form>
  )
}
      
      
