import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { feedbackEdit } from '../../actions/feedbackSelected'
import { deleteFeedback, storageAdd } from '../../actions/storageData'
import { useForm } from '../../hooks/useForm'
import { ActionForm } from './ActionForm'
import { EditActionForm } from './EditActionForm'
import { EditUpdateStatus } from './EditUpdateStatus'
import { FeedbackDetail } from './FeedbackDetail'
import { FeedbackTitle } from './FeedbackTitle'
import { SelectCategory } from './SelectCategory'
import { SubmitEditFeedbackButtons } from './SubmitEditFeedbackButtons'
import { SubmitFormButtons } from './SubmitFormButtons'

export const EditFeedbackForm = () => {
  
  const data = useSelector(state => state.feedback_reducer)
  const { id, title, category, status, description } = data
  const { inputValues, handleOnChange, charactersLeft } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const refButton = useRef()
  const { title_feedback, post, categories, status:status_input } = inputValues
  const [handleCategory, setHandleCategory] = useState('')
  const [handleStatus, setHandleStatus] = useState('')
  const [editFeedbackTemplate, setEditFeedbackTemplate] = useState({})

  useEffect(() => {
    setEditFeedbackTemplate({
      ...data,
      title: title_feedback,
      category: handleCategory,
      status: handleStatus,
      description: post
    })
  }, [ inputValues, handleCategory, handleStatus ])


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(feedbackEdit(editFeedbackTemplate))
    setTimeout(() => {
      dispatch( storageAdd(editFeedbackTemplate) )
    }, 300);
    setTimeout(() => {
      navigate('/test/feedback')
    }, 600);
  }

  const handleDeleteFeedback = (e) => {
    e.preventDefault()
    dispatch(deleteFeedback(editFeedbackTemplate.id))
    setTimeout(() => {
      navigate('/test')
    }, 1000);
  }

  return (
    <form className='actions__feedback__form'>
      <EditActionForm values={{ title, title_feedback }}/>
      <FeedbackTitle values={{ title_feedback, handleOnChange, title }}/>
      <SelectCategory values={{ setHandleCategory, categories, handleCategory }}/>
      <EditUpdateStatus values={{ status_input, handleStatus, setHandleStatus }}/>
      <FeedbackDetail values={{ post, handleOnChange, description } }/>
      <SubmitEditFeedbackButtons values={{ handleDeleteFeedback,  handleSubmit, refButton }}/>
    </form>
  )
}
