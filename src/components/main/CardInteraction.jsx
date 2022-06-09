import React from 'react'
import { icons } from '../../constants/assets'

export const CardInteraction = () => {
  const { up_arrow_icon, comments_icon } = icons

  return (
    <div className='card__interaction'>
      <button className='btn votes default--1'>
        <figure>
          <img src={ up_arrow_icon } alt="" />
        </figure>
        112
      </button>

      <figure className='comments__counter'>
          <img src={ comments_icon } alt="" />
          <figcaption>2</figcaption>
      </figure>
    </div>
  )
}
