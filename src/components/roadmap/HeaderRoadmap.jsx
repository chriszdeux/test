import React from 'react'
import { AddFeedbackButton } from '../header/AddFeedbackButton'
import { GoBack } from '../main/GoBack'

export const HeaderRoadmap = () => {
  return (
    <div className='header__roadmap'>
      <div className='roadmap__back'>
        <GoBack />
        <h2>Roadmap</h2>
      </div>

      <AddFeedbackButton />
    </div>
  )
}
