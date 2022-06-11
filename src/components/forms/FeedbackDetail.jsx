import React from 'react'

export const FeedbackDetail = ({ values }) => {
  const { post, handleOnChange } = values
  return (
    <>
      <label for="post">Feedback Detail <span className='text--2'  >Include any specific, comments on what should be improved, added, etc.</span></label>
      <textarea name="post" value={ post } onChange={ handleOnChange }></textarea>
    </>
  )
}
