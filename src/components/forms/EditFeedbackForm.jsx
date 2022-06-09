import React from 'react'
import { ActionForm } from './ActionForm'
import { EditUpdateStatus } from './EditUpdateStatus'
import { FeedbackDetail } from './FeedbackDetail'
import { FeedbackTitle } from './FeedbackTitle'
import { SelectCategory } from './SelectCategory'
import { SubmitEditFeedbackButtons } from './SubmitEditFeedbackButtons'
import { SubmitFormButtons } from './SubmitFormButtons'

export const EditFeedbackForm = () => {
  return (
    <form className='actions__feedback__form'>
      <ActionForm text="Editing 'Add a dark theme option'"/>
      <FeedbackTitle />
      <SelectCategory />
      <EditUpdateStatus />
      <FeedbackDetail />
      <SubmitEditFeedbackButtons />
    </form>
  )
}
