import React from 'react'
import { AddFeedbackForm } from '../forms/AddFeedbackForm'
import { GoBack } from './GoBack'

export const NewFeedback = () => {
  return (
    <section className='feedback__section feedback'>
      <div className='feedback__header'>
        <GoBack />
      </div>
      <AddFeedbackForm />
    </section>
  )
}
