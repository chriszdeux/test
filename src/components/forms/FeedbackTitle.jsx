import React from 'react'

export const FeedbackTitle = () => {
  return (
    <>
     <label for="description" type='text'>Feedback Title <span className='text--2'>Add a shot, descriptive headline</span></label>
      <input type="text" name="description"  />
    </>
  )
}
