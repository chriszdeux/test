import React from 'react'
import { CardContent } from './CardContent'
import { CardInteraction } from './CardInteraction'

export const FeedbackCard = () => {

  return (
    <article className='main__card'>
      <CardContent />
      <CardInteraction />
    </article>
  )
}
