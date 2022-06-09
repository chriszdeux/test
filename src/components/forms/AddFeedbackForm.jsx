import React from 'react'
import { icons } from '../../constants/assets'
import { useOpen } from '../../hooks/useOpen'

export const AddFeedbackForm = () => {
  const { isOpen, handleIsOpen } = useOpen()
  const { new_feedback_icon, down_arrow_icon, up_arrow_icon } = icons
  return (
    <form className='add__feedback__form'>
      <figure>
        <img src={ new_feedback_icon } alt="add feedback" />
      </figure>
      <h2>Create New Feedback</h2>

      <label for="description" type='text'>Feedback Title <span className='text--2'>Add a shot, descriptive headline</span></label>
      <input type="text" name="description"  />
      
      <label for="description">Category <span className='text--2'>Chose a category for your feedback</span></label>

      <div className='select' onClick={handleIsOpen}>
        <h4>Feature</h4>
        <figure >
          <img src={ isOpen ? up_arrow_icon : down_arrow_icon } alt="dropdown" />
        </figure>
        {
          isOpen &&
          <ul class="category__select">
            <li>Feature</li>
            <li>Feature</li>
            <li>Feature</li>
          </ul>
        }
      </div>
      
      <label for="">Feedback Detail <span className='text--2'>Include any specific, comments on what should be improved, added, etc.</span></label>
      <textarea ></textarea>

      <div className='submit__buttons'>
        <button className='btn purple'>Add Feedback</button>
        <button className='btn heavy-blue'>Cancel</button>
      </div>
    </form>
  )
}
