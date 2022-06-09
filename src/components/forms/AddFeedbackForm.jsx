import React from 'react'
import { ActionForm } from './ActionForm'
import { FeedbackDetail } from './FeedbackDetail'
import { FeedbackTitle } from './FeedbackTitle'
import { SelectCategory } from './SelectCategory'
import { SubmitFormButtons } from './SubmitFormButtons'

export const AddFeedbackForm = () => {
  return (
    <form className='actions__feedback__form'>
      <ActionForm text="Create new Feedback"/>
      <FeedbackTitle />
      <SelectCategory />
      <FeedbackDetail />
      <SubmitFormButtons />
    </form>
  )
}
      
      
