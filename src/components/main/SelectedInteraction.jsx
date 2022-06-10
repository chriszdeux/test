import React from 'react'
import { icons } from '../../constants/assets'

export const SelectedInteraction = ({ data }) => {
  const { upvotes, comments } = data
  const { up_arrow_icon, comments_icon } = icons

  return (
    <div className='card__interaction'>
    <button className='btn votes default--1'>
      <figure>
        <img src={ up_arrow_icon } alt="" />
      </figure>
      { upvotes }
    </button>

    <figure className='comments__counter'>
        <img src={ comments_icon } alt="" />
        <figcaption>{ comments?.length }</figcaption>
    </figure>
  </div>
  )
}
