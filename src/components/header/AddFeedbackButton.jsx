import React from 'react'
import { useNavigate } from 'react-router-dom'
import { icons } from '../../constants/assets'

export const AddFeedbackButton = () => {
  const { plus_icon, sugg } = icons
  const navigate = useNavigate()

  const handleAddFeedback = () => {
    navigate('/test/add-feedback')
  }
  return (
    <button className='btn purple text--3 btn__add__feedback' onClick={handleAddFeedback}>
      <figure className='add'>
        <img src={ plus_icon } alt="plus" />
      </figure>
      Add Feedback
    </button>
  )
}
