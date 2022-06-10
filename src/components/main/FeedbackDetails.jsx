import React, { useEffect, useState } from 'react'
import { FeedbackCard } from './FeedbackCard'
import { FeedbackComments } from './FeedbackComments'
import { FeedbackDetailsHeader } from './FeedbackDetailsHeader'
import { FormPostComment } from '../forms/FormPostComment'
import { FeedbackCardSelected } from './FeedbackCardSelected'
import { useSelector } from 'react-redux'

export const FeedbackDetails = () => {
  const data = useSelector(state => state.feedback_reducer)
  
  return (
    <section className='feedback__details'>
      <FeedbackDetailsHeader />
      <FeedbackCardSelected data={ data }/>
      <FeedbackComments data={ data }/>
      <FormPostComment />
    </section>
  )
}
