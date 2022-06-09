import React from 'react'
import { icons } from '../../constants/assets'

export const FeedbackDetailsHeader = () => {
  const { left_arrow_icon } = icons
  return (
    <div className='feedback__header'>
      <button className='btn default--1'>
        <figure>
          <img src={ left_arrow_icon } alt="back" />
        </figure>
        Go Back
      </button>

      <button className='btn blue'>Edit Feedback</button>
    </div>
  )
}
