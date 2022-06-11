import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GoBack } from './GoBack'

export const FeedbackDetailsHeader = () => {
  const navigate = useNavigate();

  const handleNavigateEdit = () => {
    navigate('/test/edit-feedback')
  }
  return (
    <div className='feedback__header'>
      <GoBack />
      <button className='btn blue' onClick={handleNavigateEdit}>Edit Feedback</button>
    </div>
  )
}
