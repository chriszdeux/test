import React from 'react'
import { icons } from '../../constants/assets'

export const AddFeedbackButton = () => {
  const { plus_icon, sugg } = icons
  return (
    <button className='btn purple text--3 btn__add__feedback'>
      <figure className='add'>
        <img src={ plus_icon } alt="plus" />
      </figure>
      Add Feedback
    </button>
  )
}
