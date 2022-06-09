import React from 'react'
import { GoBack } from './GoBack'

export const FeedbackDetailsHeader = () => {
  return (
    <div className='feedback__header'>
      <GoBack />
      <button className='btn blue'>Edit Feedback</button>
    </div>
  )
}
