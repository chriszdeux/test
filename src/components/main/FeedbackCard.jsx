import React from 'react'
import { CardContent } from './CardContent'
import { CardInteraction } from './CardInteraction'

export const FeedbackCard = ({ post }) => {
  return (
    <article className='main__card'>
      <CardContent post={ post }/>
      <CardInteraction post={ post }/>
    </article>
  )
}
