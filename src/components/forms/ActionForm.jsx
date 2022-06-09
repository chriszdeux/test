import React from 'react'
import { icons } from '../../constants/assets'

export const ActionForm = ({text}) => {
  const { new_feedback_icon } = icons
  return (
    <>
      <figure className='action__image'>
        <img src={ new_feedback_icon } alt="add feedback" />
      </figure>
      <h2>{ text }</h2>
    </>
  )
}
