import React from 'react'

export const FormPostComment = () => {
  return (
    <form className='comment__form'>
      <h2>Add Comment</h2>
      <textarea placeholder='Type your comment here'></textarea>
      <div>
        <p className='text--2'>250 Characters left</p>
        <button className='btn purple text--3'>Post Comment</button>
      </div>
    </form>
  )
}
