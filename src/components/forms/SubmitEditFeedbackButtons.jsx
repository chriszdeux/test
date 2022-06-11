import React from 'react'

export const SubmitEditFeedbackButtons = ({values}) => {
  const { handleSubmit, refButton, handleDeleteFeedback } = values
  return (
    <div className='submit__buttons'>
      <button className='btn purple' onClick={ handleSubmit } ref={ refButton }>Add Feedback</button>
      <button className='btn heavy-blue'>Cancel</button>
      <button className='btn red' onClick={ handleDeleteFeedback }>Delete</button>
    </div>
  )
}
