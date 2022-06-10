import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ContentSelected } from './ContentSelected'
import { SelectedInteraction } from './SelectedInteraction'

export const FeedbackCardSelected = ({data}) => {
// debugger
  return (
    <article className='main__card'>
      <ContentSelected data={ data }/>
      <SelectedInteraction data={ data }/>
    </article>
  )
}
