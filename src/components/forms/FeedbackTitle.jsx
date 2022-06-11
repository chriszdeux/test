import React from 'react'

export const FeedbackTitle = ({ values }) => {
  const { title_feedback, handleOnChange, title } = values
  return (
    <>
     <label for="title" type='text'>Feedback Title <span className='text--2'>Add a short, descriptive headline</span></label>
      <input type="text" name="title_feedback" value={ title_feedback } onChange={ handleOnChange } placeholder={ title }/>
    </>
  )
}
