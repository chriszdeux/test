import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SubmitEditFeedbackButtons = ({values}) => {
  const { handleSubmit, refButton, handleDeleteFeedback } = values
  const navigate = useNavigate()

  const handleCancel = () => {
    navigate('/test/feedback')
  }
  return (
    <div className='submit__buttons'>
      <button className='btn purple' onClick={ handleSubmit } ref={ refButton }>Add Feedback</button>
      <button className='btn heavy-blue' onClick={ handleCancel }>Cancel</button>
      <button className='btn red' onClick={ handleDeleteFeedback }>Delete</button>
    </div>
  )
}
