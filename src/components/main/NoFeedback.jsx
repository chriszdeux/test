import React from 'react'
import { asset_images } from '../../constants/assets'
import { AddFeedbackButton } from '../header/AddFeedbackButton'

export const NoFeedback = () => {
  const { empty_feedback } = asset_images
  return (
    <section className='empty__feedback'>
      <div className='empty__content'>
        <figure className='empty__image'>
          <img src={ empty_feedback } alt="empty feedback" />
        </figure>

        <h2>There is no feedback yet</h2>
        <p className='text--2'>
          Reprehenderit ex laborum amet est do est voluptate ex incididunt ullamco sint aliquip ullamco.
        </p>
        <AddFeedbackButton />
      </div>
    </section>
  )
}
