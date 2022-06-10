import React from 'react'
import { GoBack } from '../main/GoBack'
import { EditFeedbackForm } from './EditFeedbackForm'

export const EditFeedback = () => {
  return (
    <section className='feedback__section feedback'>
      <div className='feedback__header'>
        <GoBack />
      </div>
      <EditFeedbackForm />
    </section>
  )
}
