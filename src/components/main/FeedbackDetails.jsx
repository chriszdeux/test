import React from 'react'
import { FeedbackCard } from './FeedbackCard'
import { FeedbackComments } from './FeedbackComments'
import { FeedbackDetailsHeader } from './FeedbackDetailsHeader'
import { FormPostComment } from '../forms/FormPostComment'

export const FeedbackDetails = () => {
  return (
    <section className='feedback__details'>
      <FeedbackDetailsHeader />
      <FeedbackCard />
      <FeedbackComments />
      <FormPostComment />
    </section>
  )
}
